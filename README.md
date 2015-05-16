<p align="center">
    <img src="http://res.cloudinary.com/angularclass/image/upload/v1431802814/ng6_vrmd60.png" alt="NG6" width="320px;"/>
</p>

# NG6
> Starter repo for [Angular](http://angular.io) + ES6 + [Webpack]()

This repo serves as a starter for anyone looking to get up and running with Angular and ES6. Using a combo of [Gulp]() and [Webpack]() for building our files and assiting with boilerplate. **Features include**:
* Best practice in file organization for Angular
* Ready to go build system for working with ES6
* Task for generating component boilerplate with angular, including test
* Testing system ready to go
* [Stylus]() support

___

# TOC
* [Walkthrough](#walkthrough)
    * [Build system](#build-system)
    * [File structure](#file-structure)
    * [Testing setup](#testing-setup)
* [Getting Started](#getting-started)
    * [Installing](#installing)
    * [Dependencies](#dependencies)
    * [Running the app](#running-the-app)
        * [Gulp tasks](#gulp-tasks)
        * [Testing](#testing)

# Walkthrough
## Build System
NG6 uses Gulp and Webpack together for its build system. Yes, you don't need Gulp if you'r using Webpack. This is true if you're build system is only responsible for file manipulation, which ours is not.

`Webpack` handles all the file related things. This inlcudes:
* Transpiling from ES6 to ES5
* Loading HTML files as modules
* Loading CSS and Stylus files and appending the styles to the DOM
* Bundling our app
* Loading any and all modules
* Doing the same for testing as well

`Gulp` is like the orchestrator, it handles:
* Starting and calling webpack
* Starting a dev server (yes webpack can do this too)
* Refreshing the browser and rebuilding on file changes
* Generate boilerplate for our angular app

## File Structure
We use the component approach in NG6. This will be a standard if using the new router in angular and a great way to insure easy transition to Angular 2. Everything or mostly everthing is a component. A component is a self contained app basically. It has its own style, template, controllers, routing, specs, etc. All capsulated in its own folder. Here's how it looks:
```
client
--app/
----app.js * entry file for app
----app.html * template for app
----components/ * where most of components live
------components.js * entry file for components
------home/ * home component
--------home.js * home entry file
--------home.component.js * directive for home
--------home.controller.js * controller for home
--------home.styl * styles for home
--------home.html * template for home
--------home.spec.js * specs for home
----common/ * where common things in our app live
```

## Testing Setup


