!function(){"use strict";angular.module("commonSenseDietApp",["ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","envconfig.module","underscore","LocalStorageModule"])}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/views/partials/navbar.html",controller:"NavbarController",controllerAs:"vm",bindToController:!0};return e}angular.module("commonSenseDietApp").directive("acmeNavbar",e)}(),function(){"use strict";function e(){var e={restrict:"E",templateUrl:"app/views/partials/footer.html",controllerAs:"vm",bindToController:!0};return e}angular.module("commonSenseDietApp").directive("includeFooter",e)}(),function(){"use strict";function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"],angular.module("commonSenseDietApp").controller("NavbarController",e)}(),function(){"use strict";function e(e,t){function o(){return a().then(function(){e.info("Activated Foods List Typer")})}function a(){return t.getFoodNamesList(20).then(function(e){return r.foodnameslist=e,r.foodnameslist})}var r=this;r.foodnameslist=[],o()}e.$inject=["$log","getFoodNamesOnly"],angular.module("commonSenseDietApp").controller("MalarkeyController",e)}(),function(){"use strict";function e(e,t,o,a){function r(r,n,s,i){function l(){angular.element(t[0].querySelector("#wrapper")).addClass("not-visible"),angular.element(t[0].querySelector("#move-searchbar")).removeClass("searchbar-container").addClass("global-searchbar-container"),angular.element(t[0].querySelector(".home-buttons")).addClass("not-visible"),angular.element(t[0].querySelector(".search-results-container")).removeClass("not-visible"),angular.element(t[0].querySelector(".navbar")).addClass("lightgrey-bg").addClass("bottom-border-grey"),angular.element(t[0].querySelector(".navbar ul li p")).addClass("lightgrey-bg").addClass("not-visible"),angular.element(t[0].querySelector(".search-icon")).removeClass("not-visible"),u=o(function(){return i.activate(i.searchterm).then(function(){e.info("Polling API")})},500)}function c(e,t){1>e||e>i.pager.totalPages||(i.totalResults=t,i.page=e,i.pager=a.getPaginator(t,e),i.items=i.searchresultsarray.slice(i.pager.startIndex,i.pager.endIndex+1))}i.handleKeyupEvent=function(){i.searchterm&&i.searchterm.length>=4&&l()};var u;i.pager={},i.setPage=c,i.totalResults=0;var p=r.$watch("vm.searchresultsarray",function(){i.searchresultsarray||(i.searchresultsarray=[]),angular.forEach(i.searchresultsarray,function(e){e.name&&(e.name=e.name.split(/UPC:|gtin:/g)[0].replace(/\,/g,"").toLowerCase(),e.name=e.name.charAt(0).toUpperCase()+e.name.slice(1))}),i.searchresultsarray.length>0&&i.setPage(1,i.searchresultsarray.length)});r.$on("$destroy",function(){p(),o.cancel(u)})}var n={restrict:"E",templateUrl:"app/views/partials/primary-search.html",link:r,controller:"SearchController",controllerAs:"vm",bindToController:!0};return n}e.$inject=["$log","$document","$timeout","Paginator"],angular.module("commonSenseDietApp").directive("primarySearch",e)}(),function(){"use strict";function e(e){function t(t,o,a,r){var n=e(o[0],{typeSpeed:80,deleteSpeed:60,pauseDelay:4e3,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(r.extraValues,function(e){n.type(e).pause()["delete"]()});var s=t.$watch("vm.foodnameslist",function(){r.foodnameslist.list||(r.foodnameslist.list=[]),angular.forEach(r.foodnameslist.list.item,function(e){e=e.name.split("UPC")[0].replace(/\,/g,"").toLowerCase(),n.type(e).pause()["delete"]()})});t.$on("$destroy",function(){s()})}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:"MalarkeyController",controllerAs:"vm",bindToController:!0};return o}e.$inject=["malarkey"],angular.module("commonSenseDietApp").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e){function t(t,o,a){o=o||1,a=a||10;var r,n,s=Math.ceil(t/a);10>=s?(r=1,n=s):6>=o?(r=1,n=10):o+4>=s?(r=s-9,n=s):(r=o-5,n=o+4);var i=(o-1)*a,l=Math.min(i+a-1,t-1),c=e.range(r,n+1);return{totalItems:t,currentPage:o,pageSize:a,totalPages:s,startPage:r,endPage:n,startIndex:i,endIndex:l,pages:c}}var o={getPaginator:t};return o}e.$inject=["_"],angular.module("commonSenseDietApp").factory("Paginator",e)}(),function(){"use strict";function e(e,t,o){function a(a){var r=o.defer();return a&&t.isSupported?(t.clearAll(),t.set("foodData",a),n.theAnswer="yes",t.set("answer",n.theAnswer),r.resolve(n.theAnswer)):t.isSupported||(e.log("local storage is not supported"),r.reject("local storage is not supported")),r.promise}function r(){}var n={theAnswer:"no",yesNoMaybeAlgorithm:r,yesNoMaybePromise:a};return n}e.$inject=["$log","localStorageService","$q"],angular.module("commonSenseDietApp").factory("answerService",e)}(),function(){"use strict";angular.module("underscore",[]).factory("_",["$window",function(e){return e._}])}(),angular.module("envconfig.module",[]).constant("ENV_VARS",{apiUrl:"http://api.nal.usda.gov",apiKey:"oSZ9f2ly7gkJo0A7fcRtd9z6AEGJaXIgPhNM6lhV",debug:!0}).constant("test",!0),function(){"use strict";function e(e,t,o){function a(o){function a(e){return e.data}function n(t){return e.error(t.data)}return t.get(r.ndbApiUrl+"/ndb/search/?format=json&q="+o+"&sort=r&api_key="+r.ndbApiKey).then(a)["catch"](n)}var r={ndbApiKey:o.apiKey,ndbApiUrl:o.apiUrl,getSearchResultsList:a};return r}e.$inject=["$log","$http","ENV_VARS"],angular.module("commonSenseDietApp").factory("getSearchResults",e)}(),function(){"use strict";function e(e,t,o){function a(o){function a(e){return e.data}function n(t){return e.error(t.data)}return t.get(r.ndbApiUrl+"/ndb/reports/?ndbno="+o+"&type=f&format=json&api_key="+r.ndbApiKey).then(a)["catch"](n)}var r={ndbApiKey:o.apiKey,ndbApiUrl:o.apiUrl,getSearchResultNutritionData:a};return r}e.$inject=["$log","$http","ENV_VARS"],angular.module("commonSenseDietApp").factory("getNutritionalData",e)}(),function(){"use strict";function e(e,t,o){function a(o){function a(e){return e.data}function n(t){return e.error(t.data)}return o||(o=30),t.get(r.ndbApiUrl+"/ndb/list?format=json&It=f&max="+o+"&sort=n&offset=15&api_key="+r.ndbApiKey).then(a)["catch"](n)}var r={ndbApiKey:o.apiKey,ndbApiUrl:o.apiUrl,getFoodNamesList:a};return r}e.$inject=["$log","$http","ENV_VARS"],angular.module("commonSenseDietApp").factory("getFoodNamesOnly",e)}(),function(){"use strict";function e(e,t,o,a,r,n,s,i){var l=this;l.searchresultsarray=[],l.activate=function(e){return o.getSearchResultsList(e).then(function(e){return e&&e.list?(l.searchresultsarray=e.list.item,l.searchresultsarray):(l.searchresultsarray=e.errors.error,l.searchresultsarray)})},l.goToSearchResult=function(e){return l.foodNutritionData=null,r.getSearchResultNutritionData(e).then(function(e){l.foodNutritionData=e,l.foodNutritionData?i.yesNoMaybePromise(l.foodNutritionData).then(function(e){return e?n.path("answer"):void 0}):a.log("could not get food's nutrition data from API")})}}e.$inject=["$document","$scope","getSearchResults","$log","getNutritionalData","$location","$rootScope","answerService"],angular.module("commonSenseDietApp").controller("SearchController",e)}(),function(){"use strict";function e(e,t){function o(){e(function(){a.classAnimation="pulse"},1e4)}var a=this;a.classAnimation="",a.creationDate=1450389822870,o(),t.$on("$destroy",function(){e.cancel(o)})}e.$inject=["$timeout","$scope"],angular.module("commonSenseDietApp").controller("MainController",e)}(),function(){"use strict";function e(){}angular.module("commonSenseDietApp").controller("Error404Controller",e)}(),function(){"use strict";function e(e,t){var o=this;o.processContactForm=function(){function o(e){return e.data}function a(e){return t.error(e.data)}return e.post("/submitContactUsForm").then(o)["catch"](a)}}e.$inject=["$http","$log"],angular.module("commonSenseDietApp").controller("ContactController",e)}(),function(){"use strict";function e(e,t){var o=this;o.stored,o.yesNoMaybe,o.nutrientGroups={proximates:!1,minerals:!1,vitamins:!1,lipids:!1,other:!1,aminoAcids:!1},o.getLocalStorageData=function(){t.get("foodData")?(o.stored=t.get("foodData"),o.yesNoMaybe=t.get("answer").split(/UPC:|gtin:/g)[0].replace(/\,/g,"").toLowerCase(),o.stored.report.food.nutrients.forEach(function(e){switch(e.group){case"Proximates":o.nutrientGroups.proximates=!0;break;case"Minerals":o.nutrientGroups.minerals=!0;break;case"Vitamins":o.nutrientGroups.vitamins=!0;break;case"Lipids":o.nutrientGroups.lipids=!0;break;case"Other":o.nutrientGroups.other=!0;break;case"Amino Acids":o.nutrientGroups.aminoAcids=!0}}),e.log(o.stored.report)):e.log("No data in localStorage or sessionStorage!")},o.getLocalStorageData()}e.$inject=["$log","localStorageService"],angular.module("commonSenseDietApp").controller("AnswerController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("commonSenseDietApp").run(e)}(),function(){"use strict";function e(e){e.when("/",{templateUrl:"app/views/pages/home.html",controller:"MainController",controllerAs:"vm"}).otherwise({controller:"Error404Controller",templateUrl:"app/views/errors/404.html"}),e.when("/about",{templateUrl:"app/views/pages/static/about.html"}).otherwise({controller:"Error404Controller",templateUrl:"app/views/errors/404.html"}),e.when("/disclaimer",{templateUrl:"app/views/pages/static/disclaimer.html"}).otherwise({controller:"Error404Controller",templateUrl:"app/views/errors/404.html"}),e.when("/privacy-policy",{templateUrl:"app/views/pages/static/privacy-policy.html"}).otherwise({controller:"Error404Controller",templateUrl:"app/views/errors/404.html"}),e.when("/contact",{templateUrl:"app/views/pages/contact.html",controller:"ContactController",controllerAs:"vm"}).otherwise({controller:"Error404Controller",templateUrl:"app/views/errors/404.html"}),e.when("/answer",{templateUrl:"app/views/pages/answer.html",controller:"AnswerController",controllerAs:"vm"}).otherwise({controller:"Error404Controller",templateUrl:"app/views/errors/404.html"}),e.when("/how-it-works",{templateUrl:"app/views/pages/static/how-it-works.html"}).otherwise({controller:"Error404Controller",templateUrl:"app/views/errors/404.html"})}e.$inject=["$routeProvider"],angular.module("commonSenseDietApp").config(e)}(),function(){"use strict";angular.module("commonSenseDietApp").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t,o){e.debugEnabled(!0),t.defaults.useXDomain=!0,t.defaults.headers.common="Content-Type: application/json",delete t.defaults.headers.common["X-Requested-With"],o.setStorageType("sessionStorage")}e.$inject=["$logProvider","$httpProvider","localStorageServiceProvider"],angular.module("commonSenseDietApp").config(e)}(),angular.module("commonSenseDietApp").run(["$templateCache",function(e){e.put("app/views/errors/404.html",'<section class="text-center"><p>This Page Does Not Exist.</p></section>'),e.put("app/views/pages/answer.html",'<section class="answer-content"><div class="the-answer text-center {{ vm.yesNoMaybe == \'yes\' ? \'green\' : \'orange\' }}"><span class="{{ vm.yesNoMaybe == \'yes\' ? \'orange\' : \'green\' }}">{{ vm.stored.report.food.name }}</span><h1>{{ vm.yesNoMaybe }}!</h1><p>Oink Oink...</p></div><div class="table-of-nutrients-wrapper"><h2>Table of Nutrients</h2><ul><li ng-if="vm.stored.report.food.fg" class="dashboardbox"><label>Food Group<p>{{vm.stored.report.food.fg}}</p></label></li><li ng-if="vm.stored.report.food.sn" class="dashboardbox"><label>Scientific Name<p>{{vm.stored.report.food.sn}}</p></label></li><li ng-if="vm.stored.report.food.manu" class="dashboardbox"><label>Manufacturer<p>{{vm.stored.report.food.manu}}</p></label></li><li ng-if="vm.stored.report.food.cn" class="dashboardbox"><label>Commercial Name<p>{{vm.stored.report.food.cn}}</p></label></li><li ng-if="vm.stored.report.food.ff" class="dashboardbox"><label>Fat Factor<p>{{vm.stored.report.food.ff}}</p></label></li><li ng-if="vm.stored.report.food.pf" class="dashboardbox"><label>Protein Factor<p>{{vm.stored.report.food.pf}}</p></label></li><li ng-if="vm.stored.report.food.cf" class="dashboardbox"><label>Carbohydrate Factor<p>{{vm.stored.report.food.cf}}</p></label></li><li ng-if="vm.stored.report.food.r" class="dashboardbox"><label>Refuse Percentage<p>{{vm.stored.report.food.r}}</p></label></li><li ng-if="vm.stored.report.food.rd" class="dashboardbox"><label>Refuse Description<p>{{vm.stored.report.food.rd}}</p></label></li><li ng-if="vm.stored.report.food.sd" class="dashboardbox"><label>Short Description<p>{{vm.stored.report.food.sd}}</p></label></li></ul><span>Information provided by food manufacturers is label data. Manufacturers are responsible for descriptions, nutrient data and ingredient information. USDA calculated nutrient values and weights are for every 100 grams of<p>{{ vm.stored.report.food.name }}</p></span><table class="table-of-nutrients" cellspacing="0" cellpadding="0"><thead><tr><th>Nutrient</th><th>For Every 100 Grams of<br>{{ vm.stored.report.food.name }}..</th><th ng-repeat="measure in vm.stored.report.food.nutrients[0].measures">{{ measure.label }} <span ng-if="measure.eqv">{{ measure.eqv }}g</span></th></tr></thead><tbody><tr><td ng-if="vm.nutrientGroups.proximates" class="table-of-nutrients-subheader" colspan="100">Proximates</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Proximates\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Proximates\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Proximates\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.minerals" class="table-of-nutrients-subheader" colspan="100">Minerals</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Minerals\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Minerals\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Minerals\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.vitamins" class="table-of-nutrients-subheader" colspan="100">Vitamins</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Vitamins\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Vitamins\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Vitamins\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.lipids" class="table-of-nutrients-subheader" colspan="100">Lipids</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Lipids\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Lipids\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Lipids\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.aminoAcids" class="table-of-nutrients-subheader" colspan="100">Amino Acids</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Amino Acids\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Amino Acids\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Amino Acids\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.other" class="table-of-nutrients-subheader" colspan="100">Other</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Other\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Other\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Other\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr></tbody></table></div></section><section class="text-center"><h1>Place Huge Banner Ad Here :)</h1></section><section class="sources-of-data-wrapper" ng-if="vm.stored.report.sources.length"><h3>Sources of Data</h3><ul><li ng-repeat="source in vm.stored.report.sources"><p>{{source.authors}}, <strong>{{source.title}}</strong> {{source.year}}, {{source.vol}}, {{source.iss}}</p></li></ul></section><include-footer></include-footer>'),e.put("app/views/pages/contact.html",'<section><div class="contact-us-title"><h1>Contact Us</h1></div><form class="contact-us-form" name="contactUsForm" ng-submit="vm.processContactForm()"><div class="form-group"><input placeholder="name" type="text" name="name" ng-model="vm.name" class="form-control" required=""> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.name.$error.required">Required!</span></div><div class="form-group"><input placeholder="Email" type="email" name="email" ng-model="vm.email" class="form-control" required=""> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.email.$error.required">Required!</span> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.$error.email">Invalid email!</span></div><div class="form-group"><input name="headline" placeholder="Headline" type="text" ng-model="vm.headline" class="form-control" required=""> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.headline.$error.required">Required!</span></div><div class="form-group"><textarea name="message" placeholder="Message" type="textbox" ng-model="vm.message" class="form-control" required=""></textarea> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.subjectList.$error.required">Required!</span></div><input type="submit" id="submit-contact-form-btn"></form></section><include-footer></include-footer>'),e.put("app/views/pages/home.html",'<section class="home-container"><div id="wrapper" class="jumbotron"><div class="header-container"><ul class="header-list"><li class="header"><img src="../../../assets/images/text-logo-7.png"></li><li><p class="sub-header">A simple, yes or no response to the question. Is<acme-malarkey extra-values="[\'agave\', \'olive oil\', \'whole milk\']"></acme-malarkey>good for me?</p></li><ul></ul></ul></div></div><primary-search></primary-search><div class="home-buttons"><div class="animated infinite" ng-class="vm.classAnimation"><a ng-click="vm.handleKeyupEvent()" class="btn btn-lg btn-success">SEARCH</a></div><div class="animated infinite" ng-class="vm.classAnimation"><a class="btn btn-lg btn-success" href="#/about">UH..</a></div></div></section>'),e.put("app/views/pages/submitNewFood.html",'<section class="new-food-content"><div class="submit-new-food-title"><h1>Submit a New Food</h1><p>Before submitting a food be sure to search for it first!<br>We might already have it in our database.</p></div><form class="submit-food-form" ng-submit="newFood.submitFood()"><input placeholder="Food Name" ,="" type="text" class="name-input" ng-model="newFood.formData.foodName"> <input placeholder="Food ID" ,="" type="text" class="id-input" ng-model="newFood.formData.foodId"> <input placeholder="Food Group" ,="" type="text" class="food-group-input" ng-model="newFood.formData.foodGroup"> <input placeholder="Yes, No or Maybe" ,="" type="text" class="answer-input" ng-model="newFood.formData.answer"> <input placeholder="Reason Why" ,="" type="text" class="carbs-input" ng-model="newFood.formData.reasoning"> <input placeholder="serving size" ,="" type="number" class="serving-size-input" ng-model="newFood.formData.servingSize"> <input placeholder="calories" ,="" type="number" class="name-input" ng-model="newFood.formData.calories"> <input placeholder="total fat" ,="" type="number" class="total-fat-input" ng-model="newFood.formData.totalFat"> <input placeholder="Trans Fat" ,="" type="number" class="trans-fat-input" ng-model="newFood.formData.transFat"> <input placeholder="saturated fat" ,="" type="number" class="saturated-fat-input" ng-model="newFood.formData.saturatedFat"> <input placeholder="cholesterol" ,="" type="number" class="cholesterol-input" ng-model="newFood.formData.cholesterol"> <input placeholder="protein" ,="" type="number" class="protein-input" ng-model="newFood.formData.protein"> <input placeholder="sodium" ,="" type="number" class="sodium-input" ng-model="newFood.formData.sodium"> <input placeholder="carbohydrates" ,="" type="number" class="carbs-input" ng-model="newFood.formData.carbs"> <input placeholder="sugar" ,="" type="number" class="sugar-input" ng-model="newFood.formData.sugar"> <input placeholder="fiber" ,="" type="number" class="fiber-input" ng-model="newFood.formData.fiber"> <input type="checkbox" value="vegetarian" ng-model="newFood.formData.vegetarian"> vegetarian <input type="checkbox" value="gluten-free" ng-model="newFood.formData.glutenFree"> gluten free <input type="checkbox" value="vegan" ng-model="newFood.formData.vegan"> vegan <input type="checkbox" value="nut-free" ng-model="newFood.formData.nutFree"> nut free <input type="submit" id="submit-new-food-btn"></form></section>'),e.put("app/views/partials/footer.html",'<section class="footer-content"><div class="footer-nav-container"><ul class="footer-nav-list"><li><a ng-href="#/">home</a></li><li><a ng-href="#/about">about</a></li><li><a ng-href="#/contact">contact us</a></li><li><a ng-href="#/privacy-policy">privacy policy</a></li></ul></div><div id="scrolled-to" class="disclaimer-container"><p class="disclaimer-copy">DISCLAIMER: We admit we know nothing about healthy dietary practices and overall food consumption. We also do not recommend you you use our service as a means to follow a strict diet without first consulting with your doctor. Any advice you find on our site does not consider prior existing medical conditions such as diabetes, heart-disease or any and all medical conditions. Our search results and advice is completely biased and in no way reflects any empirical or medical research or dietary expertise. You use this site at your own risk and in using it, agree to not hold us liable for any consquences from decisions made on your behalf as a results of using this website and/or service.</p><p class="disclaimer-copy">Copyright 2016 - Blackhouse LLC.</p></div></section>'),e.put("app/views/partials/navbar.html",'<nav class="navbar"><ul><li class="active nav-logo"><a ng-href="#/"><img src="../../.././assets/images/symbol-logo-6.png"></a><p>In <span>ALPHA</span> since: {{ vm.relativeDate }}.</p></li><li><a ng-href="#/about">About</a></li><li><a ng-href="#/contact">Contact</a></li><li><a ng-href="#/disclaimer">Disclaimer</a></li></ul></nav>'),e.put("app/views/partials/primary-search.html",'<div id="move-searchbar" class="searchbar-container"><input class="home-searchbar" type="text" ng-model="vm.searchterm" ng-model-options="{debounce: 200}" placeholder="Raw Oranges..." ng-keyup="vm.handleKeyupEvent()"> <img ng-click="vm.handleKeyupEvent()" class="search-icon not-visible" src="../../.././assets/images/search_icon_1.png"></div><section class="search-results-container not-visible"><ul ng-if="vm.items.length > 1" class="search-results-list"><li ng-repeat="searchResult in vm.items" ng-click="vm.goToSearchResult(searchResult.ndbno)"><p class="result-name">{{searchResult.name}}</p><p class="result-id"><span>{{searchResult.group}}</span></p></li></ul><ul ng-if="vm.items[0].message" class="no-search-results"><li><p class="result-name">{{ vm.items[0].message }}</p></li></ul></section><section class="paginator"><ul ng-if="vm.pager.pages.length"><li><a ng-click="vm.setPage(1, vm.searchresultsarray.length)">First</a></li><li><a ng-click="vm.setPage(vm.pager.currentPage - 1, vm.searchresultsarray.length)">Previous</a></li><li ng-repeat="page in vm.pager.pages" ng-class="{paginatorActive:vm.pager.currentPage === page}"><a ng-click="vm.setPage(page, vm.searchresultsarray.length)">{{page}}</a></li><li><a ng-click="vm.setPage(vm.pager.currentPage + 1)">Next</a></li><li><a ng-click="vm.setPage(vm.pager.totalPages)">Last</a></li></ul><p ng-if="vm.pager.pages.length">About <span>{{vm.totalResults}}</span> Total Search Results.<br>Page <span>{{vm.page}}</span> of <span>{{vm.pager.totalPages}}</span></p></section>'),e.put("app/views/static/about.html",'<section class="about-content"><div class="about-copy-container"><h1 class="about-header">Eating Healthy is Simple...Right?</h1><p class="about-copy">We\'ve all heard of the Atkins diet and the Paleo diet and the raw foods diet and the blood type diet and the cigarette diet and the baby food diet and the WWII rations diet but come on! Hasn\'t it all gotten just a bit too riduculous? <span class="highlight">Since when did eating healthy become so complicated?</span> What in the world happened to common sense?</p><p class="about-copy">We created Foodle because we believe that you don\'t need a crazy diet fad to eat well. <span class="highlight">Simply search any food, beverage or meal and get a big fat</span> <span>YES</span> or <span>NO</span> response...That\'s it!<br></p><p class="about-copy">What do we actually know about nutrition?... Uh nothing. We simply BELIEVE that eating healthy isn\'t complicated (not to mention our kickass <a href="#">algorithm</a> based on nutrional data from the <a href="#">USDA National Nutrient Database for Standard Reference</a>). Is a cheeseburger good for you? <span>NO!</span> Is an apple good for you? <span>YES!</span><br></p><p class="about-copy">See how easy that was! Some might call it common sense...but then again common sense isn\'t so common is it? Why follow some crazy, out-of-the-box diet fad you can\'t stick to anyways? Before you eat something, <span class="highlight">just Foodle it.</span></p></div></section><include-footer></include-footer>'),e.put("app/views/static/disclaimer.html",'<section class="disclaimer-content"><div class="disclaimer-copy-container"><h1 class="disclaimer-header">Disclaimer</h1><p class="disclaimer-copy">We admit we know nothing about healthy dietary practices and overall food consumption. We also do not recommend you use our service as a means to follow a strict diet without first consulting with your doctor. Any advice you find on our site does not consider prior existing medical conditions such as diabetes, heart-disease or any and all medical conditions. Our search results and advice is completely biased and in no way reflects any empirical or medical research or dietary expertise. You use this site at your own risk and in using it, agree to not hold us liable for any consquences from decisions made on your behalf as a results of using this website and/or service.</p><p class="disclaimer-copy">Blackhouse LLC, by providing this service and website, is not making any assurances, guaranties, or warranties as to the safeness or riskiness of any content on or produced by this website. While we have employed a patent-pending technology to provide this service, Users should not only rely on information gathered from this website and our search utility. This website is provided for informational purposes only and is not comparable to other information provided by medical, scientific, governmental, dietary and/or nutritional organizations or groups such as the FDA. Any information you attain from this website is not tailored to each individual User and therefore may fail to account for your individual preferences, risk-tolerances, or medical situation/s. This website does not provide medical or dietary advice and should not be used as such. Each User should do his or her due diligence prior to pursuing acts based on information obtained from this website and may also wish to consult a medical advisor.</p></div></section>'),e.put("app/views/static/how-it-works.html",""),e.put("app/views/static/privacy-policy.html",'<section class="privacy-policy-content"><div class="privacy-policy-container"><h1 class="privacy-policy-header">Privacy Policy</h1><p class="privacy-policy-copy">This privacy policy discloses the privacy practices for Foodle.com, commonSenseDietApp. This privacy policy applies solely to information collected by this web site and certain third parties mentioned here after. It will notify you of the following:</p><ul class="privacy-policy-copy-list"><li><p class="privacy-policy-copy">What personally identifiable information is collected from you through the web site, how it is used and with whom it may be shared.</p></li><li><p class="privacy-policy-copy">What choices are available to you regarding the use of your data.</p></li><li><p class="privacy-policy-copy">The security procedures in place to protect the misuse of your information.</p></li></ul><h2 class="privacy-policy-subheader">Information Collection, Use, and Sharing</h2><p class="privacy-policy-copy">We are the sole owners of any information collected from you via this site. We only have access to collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone at anytime under any circumstances unless upon receiving a valid request from you to release your data only and your data only.</p><p class="privacy-policy-copy">We are the sole owners of any information collected from you via this site. Currently we only have access to collect information that you voluntarily give us via email or other direct contact from you. We will not sell, rent give or show this information to anyone at anytime under any circumstances unless upon receiving a valid request from you to release your data only and your data only. Be aware that although we do not collect any data from you at this time we do employ third-party technologies and work with third-party vendors that may use cookies to serve ads based on a user\'s prior visits. This is discussed in further detail below.</p><p class="privacy-policy-copy">We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order or answer a suppor ticket.</p><p class="privacy-policy-copy">Unless you ask us not to, we may contact you via email (only if you have provided us your email before by contacting us) in the future to tell you about specials, new products or services, or changes to this privacy policy.</p><h2 class="privacy-policy-subheader">Your Access to and Control Over Information</h2><p class="privacy-policy-copy">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the contact form on our website:</p><ul class="privacy-policy-copy-list"><li><p class="privacy-policy-copy">See what data we have about you, if any.</p></li><li><p class="privacy-policy-copy">Change/correct any data we have about you.</p></li><li><p class="privacy-policy-copy">Have us delete any data we have about you.</p></li><li><p class="privacy-policy-copy">Express any concern you have about our use of your data</p></li></ul><h2 class="privacy-policy-subheader">Security</h2><p class="privacy-policy-copy">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p><p class="privacy-policy-copy">Wherever we collect sensitive information (such as credit card data or email addresses), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or by looking for "https" at the beginning of the address URL of our web page.</p><p class="privacy-policy-copy">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p><h2 class="privacy-policy-subheader">Cookies and Third-Party Vendors</h2><p class="privacy-policy-copy">We work with third-party vendors that use "cookies" on this site (mainly Google). A cookie is a piece of data stored on a site visitor\'s hard drive to help improve access to the site and identify repeat visits. Cookies can enable sites to track and target the interests of users to enhance their site experience. Usage of these cookie is in no way linked to any personally identifiable information about you, the user. Third party vendors, including Google, use cookies on this website to serve ads based on our users\' prior visits to this site or other websites. Google\'s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/u/0/ads/authenticated">Ad Settings</a>. Alternatively users can opt out of a third-party vendor\'s use of cookies for personalized advertising by visiting <a href="www.aboutads.info">www.aboutads.info</a>.</p><h2 class="privacy-policy-subheader">Links</h2><p class="privacy-policy-copy">This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p></div></section><include-footer></include-footer>');
}]);
//# sourceMappingURL=../maps/scripts/app-6ba0be2a76.js.map
