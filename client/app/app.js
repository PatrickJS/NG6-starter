import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jQ from 'jquery';
import Rx from 'rx-dom';
import angularMaterial from 'angular-material';

// import guardianApi from 'guardian-js';
// const guardian = require('guardian-js'); 404 ??

import 'normalize.css';
// import './app.scss'

class ArticleList {
  constructor(guardianService) {
    "ngInject";
    console.log("angular material:", angularMaterial)
    this.guardianService = guardianService;
    this.collection = null;
    this.searchText = '';
    this.section = '';
    
  }

  fetchData() {
    console.log("this.searchText:", this.searchText)
    this.guardianService.queryApi({
      searchFor: this.searchText,
      section: 'news'
    })
    .then( data => {
      this.collection = data.results
      console.log("this.collection:", this.collection);
    });
  }
}

angular.module('app', [uiRouter])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', {
    template: `<div class="app">
      <div ui-view></div> 
      

      <article-list />
    </div>`,
    restrict: 'E'
  })
  .component('articleList', {
    template: `<h3>...articles here !</h3>
      <p>
        search for :<input type="text" ng-model="listCtrl.searchText"> || <button ng-click="listCtrl.fetchData()">Send</button>
      </p><hr />
      <md-list>
        <md-list-item class="md-2-line" ng-repeat="item in listCtrl.collection">
          <div class="md-list-item-text">
            <h3>{{item.webTitle}}</h3>
            published at:  <md-chip>{{item.webPublicationDate}}</md-chip>
            <p>details at: <a target="_blank" href="{{item.apiUrl}}">link</a></p>
          </div>
        </md-list-item>
      </md-list>
      `,
    controller: ArticleList,
    controllerAs: 'listCtrl'

  })
  .factory('guardianService', function($q) {
      "ngInject";
      const apiKey = '&api-key='+'2248788b-c2b4-4a83-81ac-998fee831795',
       basicURL = 'http://content.guardianapis.com/search?',
       q = 'q=',
       section= 'news',
       searchParams = '',
       
       order='order-by=relevance&',
       showBlocks='show-blocks=all&',

       format = '&format=json',
       jsonp = '&JSONPRequest=?',
       searchType='&search=reactive';

      
      var defered = $q.defer();
      const success = data => console.log("data:", data);
      const error = (xhr, ajaxOptions, thrownError) => {
        console.log(xhr.status);
        console.log(thrownError);
      }

      const queryApi = params => {
        var url = basicURL+
          'section='+(params.section || section)+'&'+
          q+encodeURIComponent(params.searchFor)+
          apiKey
          
          // +searchType+format+jsonp;
        // Rx.DOM.jsonpRequest(url)
        //   .subscribe(
        //     function (data) {
        //       console.log("data:", data)
        //       // data.response[1].forEach(function (item) {
        //       //   console.log(item);
        //       // });
        //     },
        //     function (error) {
        //       console.log("error:", error)
        //     })
        
        console.log("url:", url);
        jQ.ajax({
          type: "GET",
          dataType: "jsonp",
          url,
          success: function(res) {
            defered.resolve(res.response);
          },
          error: function(xhr, ajaxOptions, thrownError) {
            defered.reject(xhr.status);
            console.log(thrownError);
          }
        })
        return defered.promise;
      }

      return {
        queryApi 
      };
  });





