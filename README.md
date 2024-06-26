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

### 2.4.4 error related with eslint

props Name is missing in props validation eslint...

`Solution 1 : To evince the type of prop`

'prop-type' installation

```
npm install -D prop-types
```

To evince type definition in components

```
import PropTypes from 'prop-types';
...

export default function TodoItem({
  id,
  text,
  checked,
  todos,
  setTodos,
  setChecked,
}){
 ...
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setChecked: PropTypes.func.isRequired,
};
```

`Solution 2 : To remove eslint warning`  
vite-react project has '.eslintrc.cjs' in the root.  
Just add the following script to 'rules':

```
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',   // <--- added script
  },
```

## 2.5 Absolute path in vite-react project

### 2.5.1 vs-code setting

In Setting(gear) of vs-code  
Search : `javascript.preferences.import Module Specifier`  
Select : on-relative

### 2.5.2 vite.config.js setting

```
npm install path
```

To edit 'vite.config.js' file

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### 2.5.3 To create/edit 'jsconfig.json' file

Create the file in the project root  
Edit the content as below:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src", "**/*.js", "**/*.jsx"] // apply to the specified directories
}

```

### 2.3.4 Result

When you create any file and if you need to import any other component, the import clause would be like '@/~~~' as below:

```
import Footer from '@/components/Footer';
import MainNav from '@/components/MainNav';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
  return (
    <>
      <MainNav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

```

# 3 React Router

## 3.1 Setup

`npm install react-router-dom`

## 3.2 Basic Concept

### 3.2.1 Basic route form

```
<BrowserRouter>
<Routes>
<Route />
</Routes>
</BrowserRouter>
```

### 3.2.2 Basic route form with Layout

- 'Route' can be nested by other 'Route'.
- The most outer 'Route' may hold 'Layout' component.
- The 'Layout' component will effect to all inner Route.
- Nested Route's element part will be displayed in the Layout's 'Outlet' part.
- Link(react-router-dom) can be used only inside of 'BrowserRouter'.

```
// React Router form ...........
// This setting is applied to index(main).js or app.js (or both files).

<BrowserRouter>
<Routes>
<Route path="/" element={<Layout search={search}, setSearch={setSearch} />}>
  <Route index element={<DefaultPage />} />
  <Route path="article/">
    <Route index element={<CreateArticle />} />
    <Route path=":id" element={<ViewAreticle />} />
  </Route>
  <Route path="about/" element={<AboutPage />} />
</Route>
</Routes>
</BrowserRouter>

// 'Layout' component  ...........

import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
  return (
    <>
      <MainNav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
```

# 4 Others

## 4.1 'return' statement in jsx

With { }, 'return' should be mentioned.

```
Const count = () => {
  return ();
}
```

After 'return', use '( );'  
Or without '( );', use '<></>;'.

```
// with ( );
Const count = () => {
  return (<> ~~~~</>);
}

// without ( );
Const count = () => {
  return <> ~~~~</>;
}
```

Without { }, do not use '( );' statement as well as 'return'.

```
Const count = () => <> ~~~~</>;
```

# Reference

Special thanks to Dave Gray for sharing react-router-dom tutorial in the following site :

> www.youtube.com/watch?app=desktop&v=XBRLVRjZ3CQ
