angular.module("commonSenseDietApp").run(["$templateCache",function(e){e.put("app/views/components/primary-search.html",'<div class="loader not-visible">Loading...</div><div id="move-searchbar" class="searchbar-container"><input class="home-searchbar" type="text" ng-model="vm.searchterm" ng-model-options="{debounce: 200}" placeholder="Raw Oranges..." ng-change="vm.handleQueryInput()"> <img ng-click="vm.handleQueryInput()" class="search-icon not-visible" src="../../.././assets/images/search_icon_1.png"></div><section class="search-results-container not-visible"><ul ng-if="vm.items.length > 1" class="search-results-list"><li ng-repeat="searchResult in vm.items" ng-click="vm.goToSearchResult(searchResult.ndbno)"><p class="result-name">{{searchResult.name}}</p><p class="result-id"><span>{{searchResult.group}}</span></p></li></ul><ul ng-if="vm.items[0].message" class="no-search-results"><li><p class="result-name">{{ vm.items[0].message }}</p></li></ul></section><section class="paginator"><ul ng-if="vm.pager.pages.length"><li><a ng-click="vm.setPage(1, vm.searchresultsarray.length)">First</a></li><li><a ng-click="vm.setPage(vm.pager.currentPage - 1, vm.searchresultsarray.length)">Previous</a></li><li ng-repeat="page in vm.pager.pages" ng-class="{paginatorActive:vm.pager.currentPage === page}"><a ng-click="vm.setPage(page, vm.searchresultsarray.length)">{{page}}</a></li><li><a ng-click="vm.setPage(vm.pager.currentPage + 1)">Next</a></li><li><a ng-click="vm.setPage(vm.pager.totalPages)">Last</a></li></ul><p ng-if="vm.pager.pages.length">About <span>{{vm.totalResults}}</span> Total Search Results.<br>Page <span>{{vm.page}}</span> of <span>{{vm.pager.totalPages}}</span></p></section>'),e.put("app/views/errors/404.html",'<section class="text-center"><p>This Page Does Not Exist.</p></section>'),e.put("app/views/pages/answer.html",'<section class="answer-content"><div class="the-answer text-center {{ vm.yesNoMaybe == \'yes\' ? \'green\' : \'orange\' }}"><span class="{{ vm.yesNoMaybe == \'yes\' ? \'orange\' : \'green\' }}">{{ vm.stored.report.food.name }}</span><h1>{{ vm.yesNoMaybe }}!</h1></div><div class="table-of-nutrients-wrapper"><h2>Table of Nutrients</h2><ul><li ng-if="vm.stored.report.food.fg" class="dashboardbox"><label>Food Group<p>{{vm.stored.report.food.fg}}</p></label></li><li ng-if="vm.stored.report.food.sn" class="dashboardbox"><label>Scientific Name<p>{{vm.stored.report.food.sn}}</p></label></li><li ng-if="vm.stored.report.food.manu" class="dashboardbox"><label>Manufacturer<p>{{vm.stored.report.food.manu}}</p></label></li><li ng-if="vm.stored.report.food.cn" class="dashboardbox"><label>Commercial Name<p>{{vm.stored.report.food.cn}}</p></label></li><li ng-if="vm.stored.report.food.ff" class="dashboardbox"><label>Fat Factor<p>{{vm.stored.report.food.ff}}</p></label></li><li ng-if="vm.stored.report.food.pf" class="dashboardbox"><label>Protein Factor<p>{{vm.stored.report.food.pf}}</p></label></li><li ng-if="vm.stored.report.food.cf" class="dashboardbox"><label>Carbohydrate Factor<p>{{vm.stored.report.food.cf}}</p></label></li><li ng-if="vm.stored.report.food.r" class="dashboardbox"><label>Refuse Percentage<p>{{vm.stored.report.food.r}}</p></label></li><li ng-if="vm.stored.report.food.rd" class="dashboardbox"><label>Refuse Description<p>{{vm.stored.report.food.rd}}</p></label></li><li ng-if="vm.stored.report.food.sd" class="dashboardbox"><label>Short Description<p>{{vm.stored.report.food.sd}}</p></label></li></ul><span>Information provided by food manufacturers is label data. Manufacturers are responsible for descriptions, nutrient data and ingredient information. USDA calculated nutrient values and weights are for every 100 grams of<p>{{ vm.stored.report.food.name }}</p></span><table class="table-of-nutrients" cellspacing="0" cellpadding="0"><thead><tr><th>Nutrient</th><th>For Every 100 Grams of<br>{{ vm.stored.report.food.name }}..</th><th ng-repeat="measure in vm.stored.report.food.nutrients[0].measures">{{ measure.label }} <span ng-if="measure.eqv">{{ measure.eqv }}g</span></th></tr></thead><tbody><tr><td ng-if="vm.nutrientGroups.proximates" class="table-of-nutrients-subheader" colspan="100">Proximates</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Proximates\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Proximates\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Proximates\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.minerals" class="table-of-nutrients-subheader" colspan="100">Minerals</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Minerals\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Minerals\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Minerals\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.vitamins" class="table-of-nutrients-subheader" colspan="100">Vitamins</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Vitamins\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Vitamins\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Vitamins\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.lipids" class="table-of-nutrients-subheader" colspan="100">Lipids</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Lipids\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Lipids\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Lipids\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.aminoAcids" class="table-of-nutrients-subheader" colspan="100">Amino Acids</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Amino Acids\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Amino Acids\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Amino Acids\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr><tr><td ng-if="vm.nutrientGroups.other" class="table-of-nutrients-subheader" colspan="100">Other</td></tr><tr ng-repeat="nutrient in vm.stored.report.food.nutrients"><td ng-if="nutrient.group == \'Other\'">{{ nutrient.name }}</td><td ng-if="nutrient.group == \'Other\'">{{ nutrient.value }} {{ nutrient.unit }}</td><td ng-if="nutrient.group == \'Other\' && vm.stored.report.food.nutrients[0].measures.length >= 1" ng-repeat="measure in nutrient.measures">{{ measure.value }}</td></tr></tbody></table></div></section><section class="text-center"><h1>Place Huge Banner Ad Here :)</h1></section><section class="sources-of-data-wrapper" ng-if="vm.stored.report.sources.length"><h3>Sources of Data</h3><ul><li ng-repeat="source in vm.stored.report.sources"><p>{{source.authors}}, <strong>{{source.title}}</strong> {{source.year}}, {{source.vol}}, {{source.iss}}</p></li></ul></section><include-footer></include-footer>'),e.put("app/views/pages/contact.html",'<section><div class="contact-us-title"><h1>Contact Us</h1></div><form class="contact-us-form" name="contactUsForm" ng-submit="vm.processContactForm()"><div class="form-group"><input placeholder="name" type="text" name="name" ng-model="vm.name" class="form-control" required=""> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.name.$error.required">Required!</span></div><div class="form-group"><input placeholder="Email" type="email" name="email" ng-model="vm.email" class="form-control" required=""> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.email.$error.required">Required!</span> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.$error.email">Invalid email!</span></div><div class="form-group"><input name="headline" placeholder="Headline" type="text" ng-model="vm.headline" class="form-control" required=""> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.headline.$error.required">Required!</span></div><div class="form-group"><textarea name="message" placeholder="Message" type="textbox" ng-model="vm.message" class="form-control" required=""></textarea> <span class="label label-danger" ng-show="vm.submitted && contact-us-form.subjectList.$error.required">Required!</span></div><input type="submit" id="submit-contact-form-btn"></form></section><include-footer></include-footer>'),e.put("app/views/pages/home.html",'<section class="home-container"><div id="wrapper" class="jumbotron"><div class="header-container"><ul class="header-list"><li class="header"><img src="../../../assets/images/text-logo-7.png"></li><li><p class="sub-header">A simple, yes or no response to the question. Is<acme-malarkey extra-values="[\'agave\', \'olive oil\', \'whole milk\']"></acme-malarkey>good for me?</p></li><ul></ul></ul></div></div><primary-search></primary-search><div class="home-buttons"><div class="animated infinite" ng-class="vm.classAnimation"><a ng-click="vm.handleKeyupEvent()" class="btn btn-lg btn-success">SEARCH</a></div><div class="animated infinite" ng-class="vm.classAnimation"><a class="btn btn-lg btn-success" href="#/about">UH..</a></div></div></section>'),e.put("app/views/pages/submitNewFood.html",'<section class="new-food-content"><div class="submit-new-food-title"><h1>Submit a New Food</h1><p>Before submitting a food be sure to search for it first!<br>We might already have it in our database.</p></div><form class="submit-food-form" ng-submit="newFood.submitFood()"><input placeholder="Food Name" ,="" type="text" class="name-input" ng-model="newFood.formData.foodName"> <input placeholder="Food ID" ,="" type="text" class="id-input" ng-model="newFood.formData.foodId"> <input placeholder="Food Group" ,="" type="text" class="food-group-input" ng-model="newFood.formData.foodGroup"> <input placeholder="Yes, No or Maybe" ,="" type="text" class="answer-input" ng-model="newFood.formData.answer"> <input placeholder="Reason Why" ,="" type="text" class="carbs-input" ng-model="newFood.formData.reasoning"> <input placeholder="serving size" ,="" type="number" class="serving-size-input" ng-model="newFood.formData.servingSize"> <input placeholder="calories" ,="" type="number" class="name-input" ng-model="newFood.formData.calories"> <input placeholder="total fat" ,="" type="number" class="total-fat-input" ng-model="newFood.formData.totalFat"> <input placeholder="Trans Fat" ,="" type="number" class="trans-fat-input" ng-model="newFood.formData.transFat"> <input placeholder="saturated fat" ,="" type="number" class="saturated-fat-input" ng-model="newFood.formData.saturatedFat"> <input placeholder="cholesterol" ,="" type="number" class="cholesterol-input" ng-model="newFood.formData.cholesterol"> <input placeholder="protein" ,="" type="number" class="protein-input" ng-model="newFood.formData.protein"> <input placeholder="sodium" ,="" type="number" class="sodium-input" ng-model="newFood.formData.sodium"> <input placeholder="carbohydrates" ,="" type="number" class="carbs-input" ng-model="newFood.formData.carbs"> <input placeholder="sugar" ,="" type="number" class="sugar-input" ng-model="newFood.formData.sugar"> <input placeholder="fiber" ,="" type="number" class="fiber-input" ng-model="newFood.formData.fiber"> <input type="checkbox" value="vegetarian" ng-model="newFood.formData.vegetarian"> vegetarian <input type="checkbox" value="gluten-free" ng-model="newFood.formData.glutenFree"> gluten free <input type="checkbox" value="vegan" ng-model="newFood.formData.vegan"> vegan <input type="checkbox" value="nut-free" ng-model="newFood.formData.nutFree"> nut free <input type="submit" id="submit-new-food-btn"></form></section>'),e.put("app/views/partials/footer.html",'<section class="footer-content"><div class="footer-nav-container"><ul class="footer-nav-list"><li><a ng-href="#/">home</a></li><li><a ng-href="#/about">about</a></li><li><a ng-href="#/contact">contact us</a></li><li><a ng-href="#/privacy-policy">privacy policy</a></li><li><a ng-href="#/how-it-works">how it works</a></li><li><a ng-href="#/terms-of-use">terms of use</a></li><li><a ng-href="#/meet-ONNA">ONNA</a></li></ul></div><div id="scrolled-to" class="disclaimer-container"><p class="disclaimer-copy">DISCLAIMER: We admit we know nothing about healthy dietary practices and overall food consumption. We also do not recommend you you use our service as a means to follow a strict diet without first consulting with your doctor. Any advice you find on our site does not consider prior existing medical conditions such as diabetes, heart-disease or any and all medical conditions. Our search results and advice is completely biased and in no way reflects any empirical or medical research or dietary expertise. You use this site at your own risk and in using it, agree to not hold us liable for any consquences from decisions made on your behalf as a results of using this website and/or service.</p><p class="disclaimer-copy">Copyright 2016 - Blackhouse LLC.</p></div></section>'),e.put("app/views/partials/navbar.html",'<nav class="navbar"><ul><li class="active nav-logo"><a ng-href="#/"><img src="../../.././assets/images/symbol-logo-6.png"></a><p>In <span>ALPHA</span> since: {{ vm.relativeDate }}.</p></li><li><a ng-href="#/about">About</a></li><li><a ng-href="#/how-it-works">How It Works</a></li></ul></nav>'),e.put("app/views/static/about.html",'<section class="about-content"><div class="about-copy-container"><h1 class="about-header">Eating Healthy is <span class="highlight">Simple</span>...Right?</h1><p class="about-copy">We\'ve all heard of the Atkins diet and the Paleo diet and the raw foods diet and the blood type diet and the cigarette diet and the baby food diet and the WWII rations diet but come on! Hasn\'t it all gotten just a bit too riduculous? What in the world happened to common sense? <span class="highlight">Since when did eating healthy become so complicated?</span></p><p class="about-copy">We created Foodle because we believe that you need a crazy diet fad to eat healthy. If you\'re ever feeling uncertain about whether or not it\'s ok to eat something, <span class="highlight">simply search any food, beverage or meal on Foodle and get a</span> <span>YES!</span> or <span>NO!</span> response. That\'s it!<br></p><p class="about-copy">We believe that eating well and keeping your diet in check shouldn\'t be rocket science. Is a cheeseburger good for you? <span>NO!</span> Is an apple good for you? <span>YES!</span></p><p class="about-copy">See how easy that was? Some might call it common sense...but then again common sense isn\'t so common is it? Why follow some crazy, out-of-the-box diet fad you can\'t stick to anyways? Before you eat something, just <span class="highlight">Foodle</span> it.</p><p class="about-copy"><span class="highlight">Psst</span>, If you really want to know how this all works check out our kickass algorithm based on nutrional data from the <a href="https://ndb.nal.usda.gov/ndb/">USDA National Nutrient Database for Standard Reference</a>.<i class="em em-beers"></i></p><a href="#/how-it-works" class="btn primary-cta-btn">See How It All Works</a></div></section><include-footer></include-footer>'),e.put("app/views/static/how-it-works.html",'<section class="how-it-works-content"><div class="how-it-works-copy-container"><h1 class="how-it-works-header">How It Works</h1><div class="how-it-works-section"><h2 class="how-it-works-subheader">It\'s All About The Health Score:</h2><p class="how-it-works-copy">Every searchable food and beverage in our database, aka the <a href="https://ndb.nal.usda.gov/ndb/">USDA Food Composition Databases</a>, once searched, is assigned a <span class="highlight">Health Score</span>. The maximum Health Score for any food is 100 points. In fact, every food starts off with 100 total Health Score points before encountering our algorithm, humbly named, the <span class="highlight">Optimal Nutrition Assurance Algorithm</span>, or <span class="highlight">ONAA</span> for short.</p><br><p class="how-it-works-copy">Ultimately, it is ONAA\'s job to account for total nutrients, calories, trans-fats, and sugars for a given food,or beverage, and assign it a final Health Score. A Health Score of 100 points indicates the healthiest possible food you could eat while a Health Score of 1 point represents the worst possible food you could eat. Any Health Score below 69 points will result in a big fat <span class="highlight-red">NO</span> for that food/beverage when searched. Such is the importance of the <span class="highlight">Health Score</span>. <i class="em em-clap"></i></p><br><p class="how-it-works-copy">If you\'d like to learn more about ONNA and how it determines what you should eat, and not eat, you can check out our explainer page <a href="#/meet-ONNA">here</a>.</p></div></div></section><include-footer></include-footer>'),e.put("app/views/static/meet-ONNA.html",'<section class="how-it-works-content"><div class="how-it-works-copy-container"><h1 class="how-it-works-header">This Is How the <span class="highlight">Magic</span> Happens.</h1><div class="how-it-works-section"><p class="how-it-works-copy">Much like your everyday onion, <a href="http://www.jonnybowden.com/onions-a-real-superfood/">which is super healthy for you and widely regarded as a super food!</a>, our <span class="highlight">Optimal Nutrition Assurance Algorithm (ONAA),</span> has layers. She\'s complicated. But don\'t worry. It helps to think of each "layer" as one of ONAA\'s primary functions. There are in fact 4 primary layers and 1 secondary layer. Each one of the primary layers will deal with either the nutrients, calories, sugars, or fat content per food and ultimately come up with a "Health Score" per food. We\'ll walk you through every one of ONAA\'s layers and discover the role each one plays in helping to evaluate a given food as something you should eat...or not eat, depending on the final "Health Score".</p></div><div class="how-it-works-section"><h2 class="how-it-works-subheader"><span class="highlight">Layer 1:</span> You Are What Your Food Is:</h2><p class="how-it-works-copy">ONAA\'s first layer, one of its 4 primary functions, is considered to be one of the most informative layers in terms of evaluating harmful nutrients for a given food. As such, this layer affects the overall Health Score greatly and accounts for 25% of the maximum 100 Health Score points a food can receive. To be more precise, ONAA\'s goal here is to identify several of the most harmful and unhealthy nutrients, ingredients, minerals, vitamins, acids, additives, substances, proteins, GMO\'s etc. per food and adjust that food\'s Health Score accordingly. To do this it relies on our <span class="highlight">Optimal Nutrition Index</span>, or <span class="highlight">ONI</span> for short, which you can read more about <a href="#">here</a>. So why does ONAA need to rely on ONI to adjust a food\'s Health Score?</p><br><p class="how-it-works-copy">Basically you can think of ONI as a list of the most harmful substances a food could have. It is continously changing, improving and growing.</p></div><div class="how-it-works-section"><h2 class="how-it-works-subheader"><span class="highlight">Layer 2:</span> Watch Those Calories Baby:</h2><p class="how-it-works-copy">Next we have to consider the amount of calories (measured in kcals) for every 100 grams of a given food. 100 grams is what ONAA deems as <span class="highlight">one serving</span>, which is equal to roughly half a pound, of any given food. If we take the daily recommended calorie intake for most people worldwide across all ages, <span class="highlight">2500 kcals</span><a href="https://www.cnpp.usda.gov/sites/default/files/usda_food_patterns/EstimatedCalorieNeedsPerDayTable.pdf">*</a>, and our food\'s total kcals per serving, ONAA can use these two data points to tell how many servings of that food you can eat before reaching the daily recommended calorie limit and conditionally remove points from the overall Health Score of that food. The whole idea here is that the more of something you can eat without exceeding your recommended calorie intake, the healthier it is for you! So how does ONAA actually calculate the number of points to assign?</p><table class="calories-spectrum-table" cellspacing="0" cellpadding="0"><thead><tr><th>Calories Per Serving (kcals/100g)</th><th>Points Lost</th></tr></thead><tbody><tr><td>0 - 100 kcals</td><td>1</td></tr><tr><td>101 - 200 kcals</td><td>2</td></tr><tr><td>201 - 300 kcals</td><td>3</td></tr><tr><td>301 - 400 kcals</td><td>4</td></tr><tr><td>401 - 500 kcals</td><td>5</td></tr><tr><td>501 - 600 kcals</td><td>6</td></tr><tr><td>601 - 700 kcals</td><td>7</td></tr><tr><td>701 - 800 kcals</td><td>8</td></tr><tr><td>801 - 900 kcals</td><td>9</td></tr><tr><td>901 - 1000 kcals</td><td>10</td></tr><tr><td>1101 - 1200 kcals</td><td>11</td></tr><tr><td>1201 - 1300 kcals</td><td>12</td></tr><tr><td>1301 - 1400 kcals</td><td>13</td></tr><tr><td>1401 - 1500 kcals</td><td>14</td></tr><tr><td>1501 - 1600 kcals</td><td>15</td></tr><tr><td>1601 - 1700 kcals</td><td>16</td></tr><tr><td>1701 - 1800 kcals</td><td>17</td></tr><tr><td>1801 - 1900 kcals</td><td>18</td></tr><tr><td>1901 - 2000 kcals</td><td>19</td></tr><tr><td>2001 - 2100 kcals</td><td>20</td></tr><tr><td>2101 - 2200 kcals</td><td>21</td></tr><tr><td>2201 - 2300 kcals</td><td>22</td></tr><tr><td>2301 - 2400 kcals</td><td>23</td></tr><tr><td>2401 - 2500 kcals</td><td>24</td></tr><tr><td>> 2500 kcals</td><td>25</td></tr></tbody></table></div><div class="how-it-works-section"><h2 class="how-it-works-subheader"><span class="highlight">Layer 3:</span> Remember Jump Rope for Heart?:</h2><p class="how-it-works-copy">According to the American Heart Association: <span class="highlight">"You should limit the amount of trans-fats to less than 1 percent of your total daily calories. That means if you need about 2,000 calories a day, less than 20 calories (or 2 grams) should come from trans fats"</span>. For our purposes ONAA will use 2500 calories a day which means the maximum recommended limit for trans-fats is 2.5 grams a day.</p><br><p class="how-it-works-copy">It\'s important to note that trans-fats are really, really, really bad for you. As the Mayo clinic puts it, <span class="highlight">"Trans fat is considered by many doctors to be the worst type of fat you can eat. Unlike other dietary fats, trans fat — also called trans-fatty acids — both raises your LDL ("bad") cholesterol and lowers your HDL ("good") cholesterol."</span>. Which basically means even the most minute amount of trans-fat should be avoided.</p></div><div class="how-it-works-section"><h2 class="how-it-works-subheader"><span class="highlight">Layer 4:</span> Yes, Sugar Love is in Your DNA:</h2><p class="how-it-works-copy">In the 2015, the <span class="highlight">World Health Organization,</span> cut the recommended sugar intake for adults in half from the original 10 percent of total daily calories to five percent. For a normal weight adult, that\'s about 25 grams, or 6 teaspoons, per day. This is because when it comes to sugar, one could make the case that it\'s just as bad for you as trans-fats regardless of wether you\'re talking about Fructose or Sucrose<a href="http://well.blogs.nytimes.com/2016/06/08/is-sugar-really-bad-for-you-it-depends/">*</a>. Thus, as far as we\'re concerned, sugar intake must be highly limited especially when you consider that only half a can of soda would put most men and women past their daily recommended sugar limit.</p></div><div class="how-it-works-section"><h2 class="how-it-works-subheader"><span class="highlight">Layer 5:</span> ONNA\'s Hierarchy of Food Needs:</h2><p class="how-it-works-copy">Remember that silly food group pyramid we used to study in elementary school? Well as it turns out, it\'s not as useless as we all thought! ONNA\'s fifth layer is regarded as one of it\'s least informative functions in terms of evaluating how healthy a given food is to consume. As such, this layer affects the overall Health Score very little and accounts for only 5 bonus points on top of the maximum 100 Health Score points a food can receive. Currently the United States Department of Agriculture recognizes 25 distinct food groups. While most of these food groups don\'t really indicate how healthy any of the foods that fall under it are, there are a few groups that we can confidently identify as mostly unhealthy. Those groups, as recognized by the United States Department of Agriculture, are the "Fast Foods" group and "Sweets" group.</p></div></div></section><include-footer></include-footer>'),e.put("app/views/static/privacy-policy.html",'<section class="privacy-policy-content"><div class="privacy-policy-container"><h1 class="privacy-policy-header">Privacy Policy</h1><p class="privacy-policy-copy">This privacy policy discloses the privacy practices for Foodle.com, commonSenseDietApp. This privacy policy applies solely to information collected by this web site and certain third parties mentioned here after. It will notify you of the following:</p><ul class="privacy-policy-copy-list"><li><p class="privacy-policy-copy">What personally identifiable information is collected from you through the web site, how it is used and with whom it may be shared.</p></li><li><p class="privacy-policy-copy">What choices are available to you regarding the use of your data.</p></li><li><p class="privacy-policy-copy">The security procedures in place to protect the misuse of your information.</p></li></ul><h2 class="privacy-policy-subheader">Information Collection, Use, and Sharing</h2><p class="privacy-policy-copy">We are the sole owners of any information collected from you via this site. We only have access to collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone at anytime under any circumstances unless upon receiving a valid request from you to release your data only and your data only.</p><p class="privacy-policy-copy">We are the sole owners of any information collected from you via this site. Currently we only have access to collect information that you voluntarily give us via email or other direct contact from you. We will not sell, rent give or show this information to anyone at anytime under any circumstances unless upon receiving a valid request from you to release your data only and your data only. Be aware that although we do not collect any data from you at this time we do employ third-party technologies and work with third-party vendors that may use cookies to serve ads based on a user\'s prior visits. This is discussed in further detail below.</p><p class="privacy-policy-copy">We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order or answer a suppor ticket.</p><p class="privacy-policy-copy">Unless you ask us not to, we may contact you via email (only if you have provided us your email before by contacting us) in the future to tell you about specials, new products or services, or changes to this privacy policy.</p><h2 class="privacy-policy-subheader">Your Access to and Control Over Information</h2><p class="privacy-policy-copy">You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the contact form on our website:</p><ul class="privacy-policy-copy-list"><li><p class="privacy-policy-copy">See what data we have about you, if any.</p></li><li><p class="privacy-policy-copy">Change/correct any data we have about you.</p></li><li><p class="privacy-policy-copy">Have us delete any data we have about you.</p></li><li><p class="privacy-policy-copy">Express any concern you have about our use of your data</p></li></ul><h2 class="privacy-policy-subheader">Security</h2><p class="privacy-policy-copy">We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p><p class="privacy-policy-copy">Wherever we collect sensitive information (such as credit card data or email addresses), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or by looking for "https" at the beginning of the address URL of our web page.</p><p class="privacy-policy-copy">While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p><h2 class="privacy-policy-subheader">Cookies and Third-Party Vendors</h2><p class="privacy-policy-copy">We work with third-party vendors that use "cookies" on this site (mainly Google). A cookie is a piece of data stored on a site visitor\'s hard drive to help improve access to the site and identify repeat visits. Cookies can enable sites to track and target the interests of users to enhance their site experience. Usage of these cookie is in no way linked to any personally identifiable information about you, the user. Third party vendors, including Google, use cookies on this website to serve ads based on our users\' prior visits to this site or other websites. Google\'s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/u/0/ads/authenticated">Ad Settings</a>. Alternatively users can opt out of a third-party vendor\'s use of cookies for personalized advertising by visiting <a href="www.aboutads.info">www.aboutads.info</a>.</p><h2 class="privacy-policy-subheader">Links</h2><p class="privacy-policy-copy">This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p></div></section><include-footer></include-footer>'),e.put("app/views/static/terms-of-use.html",'<section class="terms-of-use-content"><div class="terms-of-use-copy-container"><h1 class="terms-of-use-header">Terms of Use</h1><p class="terms-of-use-copy">Blackhouse LLC, by providing this website, domain and all associated properties, assets, trademarks, and services, collectively referenced from here on as "Blackhouse LLC", is not making any assurances, guaranties, or warranties as to the safeness or riskiness of the information presented on this website or any actions, consequences, results, claims or inferences derived from content presented on this website.</p><br><p class="terms-of-use-copy">You acknowledge that by visiting and/or using and/or referring this website you are aware that Blackhouse LLC knows nothing about healthy dietary practices and overall food consumption. You agree that Blackhouse LLC is not recommending the use of this webite and it\'s content as a means to follow a nutritional diet. Any information or conclusions you gather from our site does not consider prior existing medical conditions such as diabetes, heart-disease or any and all medical conditions and will not be regarded as such. Our search results and advice is completely biased and in no way reflects medical research or dietary expertise. You use this site at your own risk and in using it, agree to not hold us liable for any consquences from decisions made on your behalf as a results of using this website and/or service.</p><br><p class="terms-of-use-copy">This website is provided for informational purposes only and is not comparable to other information or services provided by medical, governmental or scientific authorities such as the United States Food &amp; Drug Administration. The content on this website is not tailored to each individual User and therefore may fail to account for your individual preferences, risk-tolerances, allergies, or health conditions. This website does not provide medical and/or dietary advice and should not be used as such. This website does not predict or assure healthy eating choices or practices. Each User should do his or her due diligence prior to using this website and may also wish to consult a nutritional expert or doctor.</p></div></section><include-footer></include-footer>');
}]);
//# sourceMappingURL=../maps/scripts/app-7ba859e272.js.map
