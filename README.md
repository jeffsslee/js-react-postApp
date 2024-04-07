# 1 js-react-postApp

## 1.1 App Introduction

To understand the following skills :

- 'vite-react'
- 'react-router-dom'
  - Inner routing skills
  - Layout with 'Outlet' component

# 2. Vite-React

## 2.1 Intro

vite?  
[veet] french  
meaning: quickly, lively

`vite-react`  
A web development build tool  
based on 'Go' language  
vite-react is much faster then CRA(Create-React-App)  
vite-react is smaller in size and use minimum memory compared with CRA

## 2.2 How to use

### 2.2.1 install

`npm create vite@latest`  
then, project name, and select framework

> // you may also install with projectName, and framework in a single line  
> npm create vite@latest projectName -- --template react

### 2.2.2 download dependencies

`cd ./projectName`  
`npm install`

> In command line, go into the new project folder.  
> npm create vite@latest only creates project structures with dependency lists  
> you need to do 'npm install' to install actual dependency files.

### 2.2.3 run

`npm run dev`

> vite-react project will be launched under the fast dev server  
> http://127.0.0.1:5173

## 2.3 vite-react vs CRA(create-react-app)

### 2.3.1 Basic Characteristics

|            | Vite    | CRA     |
| ---------- | ------- | ------- |
| Bundling   | esbuild | webpack |
| Dev Server | Koa     | express |

`esbuild`

- Based on 'Go' lang
- Bundling only with the changed files; fast.

`webpack`

- Based on 'node js'
- Bundling with the whole files everytime; dull.

## 2.4 Careful Points

### 2.4.1 jsx document

`---.jsx`  
Any document containing jsx syntax should have extension key word '.jsx"

> In conventional react project, '.js' extension may be allowed though the document contains jsx syntax.

### 2.4.2 Absolute path

When importing any documents in the project, use absolute path.  
`import Cards from "/src/components/cards.jsx"`

### 2.4.3 Environment variables

CRA

- REACT_APP_API_KEY=123456...

Vite

- VITE_PAP_KEY=123456...

`React Global Environment Variables`  
In the project root, create .env file and input the variables.

```
REACT_APP_API_URL=http://localhost:3000   // in react project
VITE_API_URL=http://localhost:3000   // in vite-react project
```

When you use the global environment variables

```
// Header.jsx

// return <div> {process.env.REACT_APP_API_URL}</div>  // react
return <div> {import.meta.VITE_API_URL}</div> // vite-react
```

# Reference

Special thanks to Dave Gray for sharing react-router-dom tutorial in the following site :

> www.youtube.com/watch?app=desktop&v=XBRLVRjZ3CQ
