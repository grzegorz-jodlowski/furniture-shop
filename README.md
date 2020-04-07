<p align="center">
<a href="https://dazzling-engelbart-461483.netlify.com/"><img src="public/images/furniture-shop.png" title="furniture shop" alt="screen from main page of furniture shop."></a>
</p>



# <p align="center">🪑 Furniture shop with React</p>
<p align="center">Project for learning team cooperation in IT (with React and Redux)</p>

</br>

## Table of Contents

- [What's this project about?](#about)
- [Technologies used](#technologies)
- [What I learned?](#what)
- [Interesting code snippet](#interesting)
- [Installation](#install)
- [NPM scripts](#scripts)
- [GIT hooks](#githooks)
- [Netlify](#net)

</br>

## <a name="about"></a>What's this project about?

This is project for furniture store. It consists of many sections regarding: Hot deals, Features, New Furniture, Gallery, Feedback, Brands... RWD has been implemented for most sections and its mode is saved in the Redux application state. It is possible to add furniture product to 'favorites' and this will also be saved in the application state.

</br>

## <a name="technologies"></a>Technologies used
- HTML
- CSS
- SCSS
- JavaScript
- React
- Redux
- webpack
- GIT
- Jira

</br>

## <a name="what"></a>What I learned?
- what are the main agile methodologies and their advantages over the waterfall method in IT,
- what roles are in the standard development team,
- how the scrum sprint is organized and which elements are necessary,
- use Jira as a tool for organizing team work,
- how to communicate in a team and what tools are best used during remote communication,
- work with git in a team in a pull request system,
- create transparent pull requests,
- synchronize work with git, GitHub and Jira,
- solve conflicts in a git in a more advanced way,
- do code review for other team members,
- work with GitHub in a more advanced way,
- create a linear project history by working with git rebase,
- modify commits history using the interactive git rebase mode,
- copy commits between branches (cherry-pick command),
- create project documentation (Readme file, GitHub Wiki),
- write documentation in Markdown language,
- use Redux in a more advanced way.



</br>

## <a name="interesting"></a>Interesting code snippet (for me of course 😉)
- commits join in history using `git rebase -i HEAD ~ 3` (last 3 commits)

```git
pick f4b0988 Add header and footer
pick 3f91f8b Add new content
fixup 6d9c1c8 Fix typo

# Rebase 7c044ca..6d9c1c8 onto 7c044ca (3 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```
-  reducer responsible for the change of state depending on the size of the window

```js
// action name creator
const reducerName = 'deviceMode';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const UPDATE_DEVICE_MODE = createActionName('UPDATE_DEVICE_MODE');

// action creators
export const createActionUpdateDeviceMode = payload => ({
  payload: payload,
  type: UPDATE_DEVICE_MODE,
});

/* reducer */
export default function reducer(statePart = '', action = '') {
  switch (action.type) {
    case UPDATE_DEVICE_MODE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}


```

</br>

## <a name="install"></a>Installation and quick start

- use the package manager [npm](https://www.npmjs.com/get-npm) to install dependencies:

```bash
npm install

or

npm i
```
- run watch mode to start the server, constantly refreshing and more:

```bash
npm start
```

<br/>


## <a name="scripts"></a>NPM scripts

There are 3 main scripts to speed up work:

- `build`: builds a project in the` build` folder based on files from the `src` and` public` folders,
- `start`: observes changes in the` src` folder and starts working preview,
- `test`: starting the unit tests,
- `refactor`: the script automatically formats files in the `src/` folder according to the accepted code formatting convention, and also checks for errors using ESLint.

<br/>


## <a name="githooks"></a>GIT hooks
The project uses Git Hooks - the ability to run scripts in response to selected Git events.

Each time you execute the `git commit` command, unit tests, formatting, and linting will be run
for files selected with `git add` and to be saved in commit.

<br/>


## <a name="net"></a>Netlify
[Furniture shop](https://dazzling-engelbart-461483.netlify.com/)

</br>
</br>

  *team project implemented as part of the 9-month [Web Developer Plus](https://kodilla.com/pl/bootcamp/webdeveloper/?type=wdp&editionId=309) course organized by [Kodilla](https://drive.google.com/file/d/1AZGDMtjhsHbrtXhRSIlRKKc3RCxQk6YY/view?usp=sharing).
