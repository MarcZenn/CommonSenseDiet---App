// var Food = require('../models/foodModel.js');
// var mongoose = require('mongoose');
//
//
// var handleNewFoodController = {
//
// 	postNewFood : function(req, res) {
// 		var food = new Food({
// 			foodName: req.body.foodName,
// 			foodId: req.body.foodId,
// 			foodGroup: req.body.foodGroup,
// 			answer: req.body.answer,
// 			reasoning: req.body.reasoning,
// 			servingSize: req.body.servingSize,
// 			calories: req.body.calories,
// 			totalFat: req.body.totalFat,
// 			transFat: req.body.transFat,
// 			saturatedFat: req.body.saturatedFat,
// 			cholesterol: req.body.cholesterol,
// 			protein: req.body.protein,
// 			sodium: req.body.sodium,
// 			carbohydrates: req.body.carbohydrates,
// 			sugar: req.body.sugar,
// 			fiber: req.body.fiber,
// 			vegetarian: req.body.vegetarian,
// 			glutenFree: req.body.glutenFree,
// 			vegan: req.body.vegan,
// 			nutFree: req.body.nutFree
// 			});
// 			food.save(function(err, food){
// 				if(err){
// 					var errorMessage = 'An error occured, please try again';
// 					req.flash('error', errorMessage);
// 					res.set('Content-Type', 'application/json'); // tell Angular that this is JSON
// 					res.send(JSON.stringify({error: err}));
// 					// res.send({err: 'Problem saving new food to MongoDB'})
// 					// res.send(err);
// 				}
// 				else {
// 					res.set('Content-Type', 'application/json'); // tell Angular that this is JSON
// 					res.send(JSON.stringify({success : food}));
// 					// res.send(food);
// 				}
// 			});
// 	}
//
//
// }
//
// module.exports = handleNewFoodController;
