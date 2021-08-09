<p align="center">
    <a target="_blank" rel="noopener noreferrer">
        <img width="200" src="https://raw.githubusercontent.com/Dananboom/jquery-es/main/docs/jquery-es.png" alt="jquery-es logo">
    </a>
</p>
<p align="center">
    <a href="https://github.com/Dananboom/jquery-es/actions">
        <img src="https://github.com/Dananboom/jquery-es/actions/workflows/node.js.yml/badge.svg" alt="Build Status">
    </a>
    <a href="https://coveralls.io/github/Dananboom/jquery-es?branch=main">
        <img src="https://coveralls.io/repos/github/Dananboom/jquery-es/badge.svg?branch=main" alt="Coverage Status"/>
    </a>
    <a href="https://www.npmjs.com/package/jquery-es">
        <img src="https://img.shields.io/npm/v/jquery-es.svg" alt="Version">
    </a>
    <a href="https://npmcharts.com/compare/jquery-es?minimal=true">
        <img src="https://img.shields.io/npm/dm/jquery-es.svg" alt="Downloads">
    </a>
    <a href="https://bundlephobia.com/package/jquery-es">
        <img src="https://img.shields.io/bundlephobia/minzip/jquery-es" alt="Downloads">
    </a>
    <a href="https://www.npmjs.com/package/jquery-es">
        <img src="https://img.shields.io/npm/l/jquery-es.svg" alt="License">
    </a>
</p>
Modern jquery, refactoring jquery API with ES6, is lighter, more elegant, and supports ES Module.

## Overview
The jquery-es is a refactoring of jquery using modern JS API, and remove the complex browser compatibility handling and regular match. The refactoring of the new API results in better performance and development experience.

The jquery-es source code uses the [ES Module](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules "Web API  Interface reference | MDN") standard development. This means that you can do optimizations like [tree-shaking](https://webpack.js.org/guides/tree-shaking/#root "guides | webpack") with packaging tools like WebPack Rollup.

## Features 
- ES Module
- More dom friendly
- AJAX
- Animate

## Install
```bash
#npm
npm install jquery-es --save
#yarn
yarn add jquery-es
```

Since jquery-es uses the ES Module standard, you need to use an environment that supports modularity. If you want to use it in a script, pull this repository and package it manually.

```bash
git clone git@github.com:Dananboom/jquery-es.git
cd jquery-es
npm install
npm run build
```

Find the file you need in the dist directory.

## Demo
Simple to use

```javascript
import $ from 'jquery-es'

// document onload
$(function(){
    console.log('hello world')
})
```

According to the need to import

```javascript
import { version } from 'jquery-es'

// print version
console.log(version)
```