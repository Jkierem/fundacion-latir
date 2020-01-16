# Fundacion Latir

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Has hot reloading

### `yarn test`

Runs tests. Tests are files ending in 'test.js'. Uses jest and runs in watch mode.

### `yarn build`

Builds the app for production to the `build` folder

## Folder Structure

- components: any React component that can work as a stand alone component goes here. For collection like components, the inner components should be exported as sub components (i.e. List -> List.Item). A utility tool is available to keep the component structure consistent: [https://github.com/Jkierem/juan-component](juan-component)
- middleware: anything that is in charge of communicating with external APIs goes here
- views: React components that are a composition of stand alone components and represent a view in the webpage