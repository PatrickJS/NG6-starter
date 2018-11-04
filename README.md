<p align="center">
  <a href="http://courses.angularclass.com/courses/angular-2-fundamentals" target="_blank">
    <img width="438" alt="Angular 2 Fundamentals" src="https://cloud.githubusercontent.com/assets/1016365/17200649/085798c6-543c-11e6-8ad0-2484f0641624.png">
  </a>
</p>

---

<p align="center">
  <a href="https://angularclass.com" target="_blank">
    <img src="https://cloud.githubusercontent.com/assets/1016365/9864650/93a5660a-5b00-11e5-8716-a0d538d12913.png" alt="ng6-starter" width="480px;" >
  </a>
  <!-- old img url: http://res.cloudinary.com/angularclass/image/upload/v1431802814/ng6_vrmd60.png -->
</p>

# NG6 [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://angularclass.com/slack-join) [![Join the chat at https://gitter.im/angularclass/NG6-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/NG6-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> The de facto starter repo for building scalable apps with [Angular](https://angularjs.org), [ES6](https://git.io/es6features), and [Webpack](http://webpack.github.io/)

This repo serves as a minimal starter for those looking to get up-and-running with Angular and ES6, using [Gulp](http://gulpjs.com/) and [Webpack](http://webpack.github.io/) for the build process.
**This seed is not a Yeoman generator.** It's a minimal starter with tasks for building the boilerplate. **These are its features**:
* The best practice in directory/file organization for Angular (allowing for infinite horizontal app scaling)
* A ready-to-go build system for working with [ES6](https://git.io/es6features)
* Tasks for generating additional boilerplate:
  * Angular components
  * Angular services & factories
  * Angular directives
  * Angular filters
* A full testing system in place
* [SASS](http://sass-lang.com/) support via node-sass

**Check out the [JSPM version](https://github.com/angularclass/NG6-starter/tree/jspm)--an alternative to Webpack as an ES6 build system.**

> If you're looking for a preliminary [Angular 2](https://angular.io/) build, please use the [angular2-webpack-starter](https://github.com/angularclass/angular2-webpack-starter).
___

# Table of Contents
* [Walkthrough](#walkthrough)
    * [Build System](#build-system)
    * [File Structure](#file-structure)
    * [Testing Setup](#testing-setup)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the App](#running-the-app)
        * [Gulp Tasks](#gulp-tasks)
        * [Testing](#testing)
        * [Generators](#generators)
		  * [Generating Components](#generating-components)
          * [Generating Services](#generating-services)
          * [Generating Factories](#generating-factories)
          * [Generating Directives](#generating-directives)
          * [Generating Filters](#generating-filters)
* [Starter Kit Support and Questions](#starter-kit-support-and-questions)

# Walkthrough
## Build System
NG6 uses NPM scripts, Gulp, and Webpack together for its build system. Yes, you don't need Gulp if you're using Webpack. This is true if your build system is only responsible for file manipulation. However, ours is not.

`Webpack` handles all file-related concerns:
* Transpiling from ES6 to ES5 with `Babel`
* Loading HTML files as modules
* Transpiling stylesheets and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Hot module replacement for transpiled stylesheets
* Bundling the app
* Loading all modules
* Doing all of the above for `*.spec.js` files as well

`Gulp` is the orchestrator:
* Starting and calling Webpack
* Starting a development server (yes, Webpack can do this too)
* Generating boilerplate for the Angular app

**Check out the [JSPM version](https://github.com/angularclass/NG6-starter/tree/jspm)--an alternative to Webpack as an ES6 build system.**

## File Structure
We use a componentized approach with NG6. This will be the eventual standard (and particularly helpful, if using 
Angular's new router) as well as a great way to ensure a tasteful transition to Angular 2, when the time is ripe. 
Everything--or mostly everything, as we'll explore (below)--is a component. A component is a self-contained 
concern--may it be a feature or strictly-defined, ever-present element of the UI (such as a header, sidebar, or 
footer). Also characteristic of a component is that it harnesses its own stylesheets, templates, controllers, routes, 
services, and specs. This encapsulation allows us the comfort of isolation and structural locality. Here's how it 
looks:
```
client
⋅⋅app/
⋅⋅⋅⋅app.js              * app entry file
⋅⋅⋅⋅app.html            * app template
⋅⋅⋅⋅common/             * functionality pertinent to several components propagate into this directory
⋅⋅⋅⋅⋅⋅directives/           * where directives live
⋅⋅⋅⋅⋅⋅⋅⋅directives.js           * directives entry file
⋅⋅⋅⋅⋅⋅filters/              * where filters live
⋅⋅⋅⋅⋅⋅⋅⋅filters.js              * filters entry file
⋅⋅⋅⋅components/        * where components live
⋅⋅⋅⋅⋅⋅components.js     * components entry file
⋅⋅⋅⋅⋅⋅home/             * home component
⋅⋅⋅⋅⋅⋅⋅⋅home.js              * home entry file (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅home.component.js    * home "directive"
⋅⋅⋅⋅⋅⋅⋅⋅home.controller.js   * home controller
⋅⋅⋅⋅⋅⋅⋅⋅home.scss            * home styles
⋅⋅⋅⋅⋅⋅⋅⋅home.html            * home template
⋅⋅⋅⋅⋅⋅⋅⋅home.spec.js         * home specs (for entry, component, and controller)
⋅⋅⋅⋅factories/         * where factories live
⋅⋅⋅⋅⋅⋅factories.js          * factories entry file
⋅⋅⋅⋅services/          * where services live
⋅⋅⋅⋅⋅⋅services.js           * services entry file
```

## Testing Setup
All tests are also written in ES6. We use Webpack to take care of the logistics of getting those files to run in the various browsers, just like with our client files. This is our testing stack:
* Karma
* Webpack + Babel
* Mocha
* Chai
* Sinon

To run tests, type `npm test` in the terminal. Read more about testing [below](#testing).

# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install dependencies

## Running the App
NG6 uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running `npm start` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.
 
### Tasks
Here's a list of available tasks:
* `npm run build`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `npm run serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `npm run watch`
  * alias of `serve`
* `npm start` (which is the default task that runs when typing `gulp` without providing an argument)
  * runs `serve`.
* `npm run component`
  * scaffolds a new Angular component. [Read below](#generating-components) for usage details.
* `npm run service`
  * scaffolds a new Angular service. [Read below](#generating-services) for usage details.
* `npm run factory`
  * scaffolds a new Angular factory. [Read below](#generating-factories) for usage details.
* `npm run directive`
  * scaffolds a new Angular directive. [Read below](#generating-directives) for usage details.
* `npm run filter`
  * scaffolds a new Angular filter. [Read below](#generating-filters) for usage details.
  
### Testing
To run the tests, run `npm test`.

`Karma` combined with Webpack runs all files matching `*.spec.js` inside the `app` folder. This allows us to keep test files local to the component--which keeps us in good faith with continuing to build our app modularly. The file `spec.bundle.js` is the bundle file for **all** our spec files that Karma will run.

Be sure to define your `*.spec.js` files within their corresponding component directory. You must name the spec file like so, `[name].spec.js`. If you don't want to use the `.spec.js` suffix, you must change the `regex` in `spec.bundle.js` to look for whatever file(s) you want.
`Mocha` is the testing suite, `Chai` is the assertion library and `Sinon` is a library that provides spies, stubs and mocks. If you would like to change this, see `karma.conf.js`.
#### Debug Test

To debug a test you need to modify the `karma.conf.js` file setting `singleRun: false `. 
Then Karma will be open in a new browser window with the url: [[http://localhost:9876](http://localhost:9876).
Press the debug button, and if you open the developer tools on this new url [http://localhost:9876/debug.html](http://localhost:9876/debug.html) you can see all the Javascript files and Spec files and set break points to debug your test.
The test results will be printed on the browser's console instead of your command prompt.

### Examples

It's always easier to learn something if you have an examples. Here is a list of repos which based on this starter:

 - [TodoMVC Example App](https://github.com/AngularClass/NG6-todomvc-starter)

### Generators

We choose a consistent directory structure between components offers us the certainty of predictability.
We can take advantage of this certainty by creating a [plop](https://github.com/amwmedia/plop) template to automate the "instantiation" of our components.
The component boilerplate task generates this:
Each element ([Component](#generating-components)/[Factory](#generating-factories)/[Service](#generating-services)/[Directive](#generating-directives)/[Filter](#generating-filters)) has it's own command, file structure and default folder. 

You may, of course, create these files manually, every time a new module is needed, but that gets quickly tedious.
To generate a component, run `npm run [Angular Element]`. Then plop will provide you simple wizard to generate Angular Element. 

You should provide name of this element. This name will be converted to proper case, recommended by angular styleguide.

The element will be created, by default, inside `client/app/[element's default path]`. But in case if you wish to place it in different
location, wizard will ask you about that. If you answered `yes`, then plop will allow you to choose directory.

```
Command: `npm run [Angular Element]`
Default path: `client/app/[default-path-for-angular-element]`
⋅⋅⋅⋅⋅⋅file-structure/
⋅⋅⋅⋅⋅⋅⋅⋅some-file
```


#### Generating Components

**Command:** `npm run component`

**Default path:** `client/app/components`

**File structure:**
```
⋅⋅⋅⋅⋅⋅component-name/
⋅⋅⋅⋅⋅⋅⋅⋅component-name.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅component-name.component.js
⋅⋅⋅⋅⋅⋅⋅⋅component-name.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅component-name.html // component's template
⋅⋅⋅⋅⋅⋅⋅⋅component-name.scss // scoped to affect only its own template
⋅⋅⋅⋅⋅⋅⋅⋅component-name.spec.js // contains passing demonstration tests
```

#### Generating Services

**Command:** `npm run service`

**Default path:** `client/app/services`

**File structure:**
```
⋅⋅⋅⋅⋅⋅service-name/
⋅⋅⋅⋅⋅⋅⋅⋅service-name.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅service-name.service.js // service
⋅⋅⋅⋅⋅⋅⋅⋅service-name.spec.js // contains passing demonstration tests
```

#### Generating Factories

**Command:** `npm run factory`

**Default path:** `client/app/factories`

**File structure:**
```
⋅⋅⋅⋅⋅⋅factory-name/
⋅⋅⋅⋅⋅⋅⋅⋅factory-name.js // entry file where all its dependencies load
⋅⋅⋅⋅⋅⋅⋅⋅factory-name.factory.js // file with factory logic
⋅⋅⋅⋅⋅⋅⋅⋅factory-name.spec.js // contains passing demonstration tests
```

#### Generating Directives

**Command:** `npm run directive`

**Default path:** `client/app/common/directives`

The `[name].directive.js` file will contain only the link function and the directive's attribute `restrict` is set as  `A` (Attribute) and without template by default because we should only use directives for DOM manipulations and use `component` for creating 'web elements' from now on.

**File structure:**
```
⋅⋅⋅⋅⋅⋅common/directives/
⋅⋅⋅⋅⋅⋅⋅⋅directive-name.directive.js // file with the filter's link function
⋅⋅⋅⋅⋅⋅⋅⋅directive-name.spec.js // contains passing demonstration tests
```

#### Generating Filters

**Command:** `npm run filter`

**Default path:** `client/app/filters`

Filters entry file is `client/app/common/filters/filter.js`, all filters are declared here, and we only add the file for the link function.

**File structure:**
```
⋅⋅⋅⋅filters/
⋅⋅⋅⋅⋅⋅filter-name.js // file with the filter function
⋅⋅⋅⋅⋅⋅filter-name.spec.js // contains passing demonstration tests
```

# Starter Kit Support and Questions
> Contact us, anytime, regarding anything about this project.

* [Gitter: angularclass/NG6-starter](https://gitter.im/angularclass/NG6-starter)
* [Twitter: @AngularClass](https://twitter.com/AngularClass)

___

enjoy — **AngularClass** 

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? hello@angularclass.com
