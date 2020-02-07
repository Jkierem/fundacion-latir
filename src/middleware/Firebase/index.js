import { mapValues, identity, compose } from '@juan-utils/functions';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const FirebaseKeys = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
}
const getEnviromentData = (key) => process.env[`REACT_APP_FB_${key}`]
const getFirebaseConfig = () => mapValues(getEnviromentData,FirebaseKeys)
const safePath = (read,write) => {
    if(write.startsWith(read)){
        console.warn(`Dangerous Read-Write cycle detected: ${read} -> ${write}`);
        return false;
    } else {
        return true;
    }
}

const IO = (database) => (path,call) => {
    const callback = call || identity;
    return {
        map(f){ 
            return IO(database)(path, compose(f , callback) ) 
        },
        unsafeListenCreate(createPath,f){
            if(safePath(path,createPath)){
                return new Promise((resolve,reject) => {
                    database().ref(path).on("value",(data) => {
                        const updates = compose( f , callback )(data);
                        const ref = database().ref(createPath)
                        const key = ref.push().key;
                        ref.child(key).update(updates,(error) => {
                            error ? reject(error) : resolve({
                                key,
                                ...updates
                            })
                        })
                    })
                })
            }else{
                return new Promise((resolve,reject) => {
                    reject("Unsafe Read-Write cycle")
                })
            }
        },
        unsafeListenCreateOnce(createPath,f){
            safePath(path,createPath);
            return new Promise( (resolve,reject) =>
                database().ref(path).once("value",(data) => {
                    const updates = compose( f , callback )(data);
                    const ref = database().ref(createPath)
                    const key = ref.push().key;
                    ref.child(key).update(updates,(error) => {
                        error ? reject(error) : resolve({
                            key,
                            ...updates
                        })
                    })
                })
            )
        },
        unsafeSet(data){
            return database().ref(path).set(data)
        },
        unsafeUpdate(data){
            return database().ref(path).update(data)
        },
        unsafeCreate(data){
            return new Promise((resolve,reject) => {
                const ref = database().ref(path)
                const key = ref.push().key;
                ref.child(key).update(data, (error) => {
                    error ? reject(error) : resolve({
                        key,
                        ...data
                    })
                })
            })
        },
        unsafeListen(){
            const ref = database().ref(path);
            ref.on("value", callback);
            return () => ref.off();
        },
        unsafeListenOnce(){
            const ref = database().ref(path);
            ref.once("value", callback);
            return () => ref.off();
        },
        unsafeDetachListeners(){
            database().ref(path).off();
            return this;
        },
    }
}

const Firebase = (() => {
    let initialized = false;
    const initialize = () => {
        if(!initialized){
            firebase.initializeApp(getFirebaseConfig());
            initialized = true
        }
    }
    const getAuth = () => {
        initialize();
        return firebase.auth();
    }
    const database = () => {
        initialize();
        return firebase.database()
    }
    return {
        auth: getAuth,
        database: IO(database)
    }
})()

export default Firebase;
