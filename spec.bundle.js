/*
 * When testing with webpack and ES6, we have to do some extra
 * things get testing to work right. Because we are gonna write test
 * in ES6 to, we have to compile those as well. That's handled in
 * karma.conf.js with the karma-webpack plugin. This is the entry
 * file for webpack test. Just like webpack will create a bundle.js
 * file for our client, when we run test, it well compile and bundle them
 * all here! Crazy huh. So we need to do some setup
*/

// import angular duh
import angular from 'angular';
// angular-mocks is a angular plugin built by the angular team
// for mocking out dependencies, we need this
import mocks from 'angular-mocks';

// Ok, this is kinda cray cray. We can use the the context method on
// require that webpack created in order to tell webpack
// what files we actually want to require or import.
// Below, context will be an function/object with file names as keys.
// using that regex we are saying look in client/app and find
// any file that ends with spec.js and get its path. By passing in true
// we say do this recursively
let context = require.context('./client/app', true, /\.spec\.js/);

// get all the files, for each file, call the context function
// that will require the file and load it up here. Context will
// loop and require those spec files here
context.keys().forEach(context);