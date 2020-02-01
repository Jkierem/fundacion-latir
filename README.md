# Fundacion Latir

## Getting started

```bash
# Clone the repo
git clone https://github.com/Jkierem/fundacion-latir
# Move to the folder containing the repo
cd fundacion-latir
# Install dependencies using yarn *NEVER* use npm
yarn install
```

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Has hot reloading

### `yarn test`

Runs tests. Tests are files ending in 'test.js'. Uses jest and runs in watch mode.

### `yarn build`

Builds the app for production to the `build` folder (which is ignored for the repo)

## Common Design Decisions

- **use yarn**
- Avoid adding new dependencies. Minimal amount of dependencies is preferred. If a new dependency is needed, it must be approved and made a case of why it is needed.
- All new features are added through a PR and need a code review with approval of the dev lead.
- **NEVER** push directly to master.
- Due to time constraints, tests are not required but the developer should make sure that the feature is indeed working.
- We are not using linters but bear in mind that `create-react-app` already has some linting options that will show up as warnings when running `yarn start`. It is preferrable to follow those linting rules.

## Dependencies

- [@juan-utils/functions](https://www.npmjs.com/package/@juan-utils/functions) : utility library
- [@juan-utils/structures](https://www.npmjs.com/package/@juan-utils/structures) : utility structures library
- [JuanForm](https://www.npmjs.com/package/juanform) : library conatining form components

## Git Flow

- `master`: this branch is protected. Merges need to be reviewed by the code owner to be merged
- `development`: all feature branches should branch off of this branch. On release, this is merged to `master`
- `LATIR-XXX`: branch for feature LATIR-XXX(i.e. LATIR-23). When done, a PR for merging to development should be created with a description of what is achieved.
- When updating a branch, use ```git pull --rebase``` to avoid a merge
- All commits made in a branch must be prepended by the branch name. That is to easily identify the branch that the commit belongs to. For convenience, here is a bash command that recieves a comment and creates a commit with the current branch name prepended:

__Note__ : This is written for a unix shell. In a windows shell this command won`t work.

```bash
commit() {
	_msg=$1
	if [ "$_msg" == "-m" ]
	then
		_msg=$2
	fi
	if [ $_msg ]
	then
	 	_branch=$(git branch | grep \* )
  		git commit -m "${_branch:2}: $_msg"
	else
		echo "No commit message was supplied. No commit is made."
	fi
}
```

Add it to the `.bashrc` file and re open the console to use it. Usage is as follows:

```bash
# moving to a random branch for demostration purposes
git checkout LATIR-42
commit "Adding a super cool feature"
# same as running
# git commit -m "LATIR-42: Adding a super cool feature"
```

## Folder Structure

Each folder should be treated as a separate module. All exports that are to be shared between folders should be exported in the root index.js file as a named export (i.e. components/index.js). Nothing other than what is exported there should be imported in the other modules/folders.

- **components**: any React component that can work as a stand alone component goes here. For collection like components, the inner components should be exported as sub components (i.e. List -> List.Item). A utility tool is available to keep the component structure consistent: [juan-component](https://github.com/Jkierem/juan-component). For cases where components are too big and use sub components that should not be used elsewhere, they should have their own folder inside the parent folder but should not be added to the component/index.js file as to avoid the use of them elsewhere.
- **hooks**: any custom hooks should be stored here using the component folder structure (useHooks/index.js). Hooks should follow the common naming pattern of starting with the word "use" and camelcase (i.e. useDevice). Hooks should return an array when it returns three or less values or an object when exceeding this amount. They should be documented using [jsdoc](https://jsdoc.app/).
- **middleware**: anything that is in charge of communicating with external APIs goes here. Each entity should follow the component folder structure (i.e. Comment/index.js) and be exported in the root index.js file as a named export. 
- **resources**: static assets used around the app. This folder does not follow module folder structure. Each type of asset should be in a folder that specifies that type (i.e. for Fonts -> resources/fonts).
- **utils**: This folder should not be used as a module but rather as a series of single file modules that have small utilities and should not be grouped together in the index.js file as to remove noise and avoid the use of a garbage dumping file. The default export should be enough to use the module.
- **views**: React components that are a composition of stand alone components and represent a view in the webpage. Each view should represent a route in the app
