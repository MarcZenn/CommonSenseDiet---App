module.exports = {
    getAnswers : function(req, res){
      var service = {
        theAnswer: '',
        HealthScore: 100,
        pointsDeducted: 0,
        ONI : ['Glucose (dextrose)', 'Cholesterol', 'Mercury', 'Sodium', 'Aspartic acid', 'Sucrose', 'Tocopherol, gamma', 'Vitamin E, added', 'Tocopherol, delta', 'Theobromine', 'Dihydrophylloquinone', 'Alcohol, ethyl','Maltose', 'Galactose', 'Fructose', 'Starch',"Fatty acids, total trans-monoenoic", "Fatty acids, total trans-polyenoic", 'Palm Oil', 'Yellow 5', 'Color Added', 'Lactic Acid', 'Corn syrup', 'Yellow 6', 'Blue 1']
      };

      var data = req.body;
      var evaluators  = [checkONI, checkKcals, checkSugar, checkTransFats, checkFoodGroup];

      // Define Layers
      function checkONI() {
        service.ONI.forEach(function(oniNutrient) {
          data.report.food.nutrients.forEach(function(badNutrient) {
            if (oniNutrient == badNutrient.name) {
              service.pointsDeducted += 1;
              console.log(oniNutrient);
            }
          });
        });
        console.log(service.pointsDeducted + ' points lost due to dangerous nutrients');
        return - service.pointsDeducted; // return number of points deducted.
      }
      function checkKcals() {
        var kCals = data.report.food.nutrients.filter(function(key) {
          if (key.name == 'Energy' && key.unit == 'kcal') {
            return key.value;
          }
        });
        if(kCals[0].value <= 99) {
          // if total kCals is less than 3 digits long
          service.pointsDeducted = 1;
        } else if(kCals[0].value >= 100) {
          // if total kCals is 3 digits or longer
          service.pointsDeducted = Math.round(kCals[0].value / 100);
        }
        console.log(service.pointsDeducted + ' points lost due to calories');
        return - service.pointsDeducted;
      };
      function checkTransFats() {
        var transFats = data.report.food.nutrients.filter(function(key) {
          if (key.name == 'Fatty acids, total trans') {
            return key.value;
          }
        });
        if (transFats.length) {
          service.pointsDeducted = transFats[0].value / .1 * 2;
        } else {
          service.pointsDeducted = 0;
        }
        console.log(service.pointsDeducted + ' points lost due to trans fats');
        return - service.pointsDeducted;
      };
      function checkSugar() {
        var sugar = data.report.food.nutrients.filter(function(key) {
          if (key.name == 'Sugars, total') {
            return key.value;
          }
        });
        if (sugar.length) {
          service.pointsDeducted = sugar[0].value / 1 * 1.5;
        } else {
          service.pointsDeducted = 0;
        }
        console.log(service.pointsDeducted + ' points lost due to sugar');
        return - service.pointsDeducted;
      };
      function checkFoodGroup() {
        if(data.report.food.fg == 'Sweets' || data.report.food.fg == 'Fast Foods') {
          service.pointsDeducted = 20;
        }
        console.log(service.pointsDeducted + ' points lost due to food group');
        return - service.pointsDeducted;
      };

      // Define Layers Caller
      function executeAsynchronously(functions) {
        // Set newScore back to 100 everytime this function is called to avoid newScore being added on top of newScore when user chains searches together without refreshing.
        var finalScore = service.HealthScore;

        functions.forEach(function(i) {
            finalScore = finalScore + i.call(); // Get final health score!
        });

        if(finalScore && finalScore <= 69) {

          service.theAnswer = 'NO';

        } else {

          service.theAnswer = 'YES';

        }
        res.send(service.theAnswer)
      }

      // Call Layers
      executeAsynchronously(evaluators);
    }
}
