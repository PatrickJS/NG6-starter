<p align="center">
    <img src="http://res.cloudinary.com/angularclass/image/upload/v1431802814/ng6_vrmd60.png" alt="NG6" width="320px;"/>
</p>

# NG6 [![Join the chat at https://gitter.im/angularclass/NG6-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/NG6-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Starter repo for [Angular](https://angularjs.org) + [ES6](https://git.io/es6features) + [JSPM](http://jspm.io/) (or [Webpack](https://github.com/angularclass/NG6-starter/tree/master))

This repo serves as an extremely minimal starter for anyone looking to get up and running with Angular and ES6. Using a combo of [JSPM](http://jspm.io/) and [Gulp](http://gulpjs.com/) for building our files and assisting with boilerplate.
**This seed is not a yeoman generator!** Its just a minimal starter with tasks to build and create boilerplate. **Features include**:
* Best practice in file organization for Angular
* Frictionless package management and module loader with [JSPM](http://jspm.io)
* Ready to go build system for working with [ES6](https://git.io/es6features)
* Task for generating component boilerplate with angular, including test
* Testing system ready to go

**Check out the [webpack version](https://github.com/angularclass/NG6-starter/tree/master) for an alternative ES6 build system**

> If you're looking for [Angular 2](https://angular.io/) please use [angular2-webpack-starter](https://github.com/angularclass/angular2-webpack-starter)

___

# TOC
* [Walkthrough](#walkthrough)
    * [What about Webpack?](#how-is-this-different-than-webpack)
    * [Build system](#build-system)
    * [File structure](#file-structure)
    * [Testing setup](#testing-setup)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
        * [Gulp tasks](#gulp-tasks)
        * [Testing](#testing)
    * [Generating Components](#generating-components)   
* [Starter Kit Support and Questions](#starter-kit-support-and-questions)

# Walkthrough
## How is this different than Webpack?
Webpack builds your application into a single package before you serve it to the client. JSPM is different for two major reasons:
 1. JSPM is built ontop of [SystemJS](https://github.com/systemjs/systemjs) which uses a polyfill for the new ES6 module loader that will eventually be supportedly natively. This means that there is no intermediate build process before your files are served. Instead, the module loader will load (and transpile) only the files it needs at runtime. When you're ready for deployment, JSPM can also bundle your app for production (very much like webpack here).
 2. JSPM abstracts dependency management. You can `jspm install` any package that lives on bower, npm, or github and use the ES6 `import` syntax all the same on them.
 3. It features live reload. Yes you read that right-any change in JS file will reload only those modules, which are affected. You can read more about it on project page: [jspm-hot-reloader](https://github.com/capaj/jspm-hot-reloader)

## Build System
This branch of NG6 uses the power of JSPM and Gulp together for its build system. Yes, you don't need Gulp if you're using JSPM. This is true if your build system is only responsible for file manipulation, which ours is not.

`JSPM` does most of the heavy lifting here, it handles:
* Dependency management. Download external modules from npm, bower, or straight from github
* Dynamic transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Loading CSS files and appending the styles to the DOM
* Loading any and all modules
* Doing the same for testing as well

`Gulp` is like the orchestrator, it handles:
* Starting a dev server
* Refreshing the browser on file changes
* Generate boilerplate for our angular app
* Building a production version of our app ready for deployment

**Check out the [webpack version](https://github.com/angularclass/NG6-starter/tree/master) for an alternative ES6 build system**

## File Structure
We use the component approach in NG6. This will be a standard if using the new router in angular and a great way to ensure easy transition to Angular 2. Everything or mostly everything is a component. A component is a self contained app basically. It has its own style, template, controllers, routing, specs, etc. All capsulated in its own folder. Here's how it looks:
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
All test are written in ES6 too because why not! We use JSPM to take care of all the logistics of getting those files run in browsers just like our client files. Our setup is:

* Karma
* JSPM + Babel
* Mocha
* Chai

To run test just `npm test` or `karma start`. Read more about testing [below](#testing)


# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm`
Once you have those, you should install these globals with `npm i -g`:
* `jspm`
* `gulp`
* `karma`
* `karma-cli`

## Installing
* `fork` me
* `clone` your fork
* `git checkout jspm`
* `npm i` to install all dependencies
* (with JSPM there's usually a `jspm install` step too, but that is added to npm's `postinstall` for convenience)

#### Failing `npm install`
If this is your first time running JSPM, you'll probably run into a `warn Error - GitHub rate limit reached`

Fix this by adding your GitHub credentials to JSPM with: `jspm registry config github`.

## Running the app
NG6 uses Gulp to build and start the dev environment. After you have installed all dependencies you can now run the app.
Run `gulp` to start a dev server and watch all files. The port will displayed to you.

### Gulp tasks
Without Webpack's required build step, serving is easy and you choose when you are ready to build now

Here's a list of possible Gulp task to run:
* `serve` (also default `gulp`)
  * starts a dev server with `browser-sync` serving the client folder and listens for changes
* `build`
  * bundles our app into a single file with all included dependencies into `dist/`. both minified and unminified included
* `component`
  * builds out boilerplate for a new angular component, [read below](#generating-components) to see how to use this in more detail

### Testing
To run test, just run `npm test` or `karma start`.

The only difference from a regular `Karma` setup is the use of [`karma-jspm`](https://github.com/Workiva/karma-jspm) plugin to let JSPM handle spec files as modules. `Karma` will run all files that match `.spec.js` inside the `app` folder. This is awesome because we can write tests for our components in the same folder with the rest of the component. Be sure to include your `spec` files in the appropriate component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` extension, you must change the `jspm.loadFiles` glob in `karma.conf.js` to look for whatever file(s) you want.

`Mocha` is the testing suite being used and `chai` is the assertion library. If you would like to change this, do so in `karma.conf.js`.


## Generating components
Following a good practice allows us to guarantee certain things. We can take advantage of these guarantees and use a task to automate things. Because the components we make will almost always have the same structure, we can generate this boilerplate for you. Boilerplate includes:
* Component folder
* Component entry file which will `import` all of its dependencies
* Component component file, or directive file will will also `import` its dependencies
* Component template
* Component controller
* Component css
* Component spec with passing tests already written

You can create all this by hand, but it gets old fast!
To generate a component, we must use the `gulp component --name componentName` task.

The `--name` flag is the name of the component you want to create. Be sure to be unique, or it will override an existing component.


The component will be created by default on the root of `client/app/components`.

We can change this by passing in the `--parent` flag.

You can pass in a path relative to `client/app/components/` and your component will be made there.

So running `gulp component --name signup --parent auth` will create a `signup` component at `client/app/components/auth/signup`.

Running `gulp component --name footer --parent ../common` will create a `footer` component at `client/app/common/footer`.

Because `--name` is used to create folder name too, use camel or snakeCase and stay consistent.

# Starter Kit Support and Questions
> Contact us anytime for anything about this repo

* [Gitter: angularclass/NG6-starter](https://gitter.im/angularclass/NG6-starter)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)

___

enjoy -- **AngularClass**


<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn Angular in 2 days from the best
