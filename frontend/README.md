# React Redux Skeleton

This project is a skeleton for React + Redux web application. It can be used as a starting point for React web application or just as an example how to implement Redux structure in React.

The repository contains a sample React application which is preconfigured to install all the dependencies for instant development. The application has very simple business logic showing how to implement basic operations with users. The main purpose of this project is to demonstrate how to organize your React + redux application.

## Getting Started

To get you started you can simply clone the react-redux-skeleton repository and install the dependencies:

### Prerequisites

You need to must a git client to clone the repository. You can get it from [http://git-scm.com/](http://git-scm.com/).

Also you must to have node.js and npm (node.js package manager). You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-modular

Clone the angular-modular repository using [git][git]:

```
git clone https://github.com/romandunets/react-redux-skeleton.git
```

Install all dependencies:

```
npm install
```

Start api mockup json-server:

```
npm run api
```

Start auto-reloading webpack-dev-server:

```
npm start
```

## DEBUGGING

If you have `Error: watch . ENOSPC` error while running api, this can solve the problem:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```