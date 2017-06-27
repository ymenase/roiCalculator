(function(){
  var app = angular.module('roiCalculator',[]);
//application variable adds scope to pass variables between JS and HTML files

  app.controller('CalculatorController', ['$scope', function($scope){

    //mock data
    var revenueItem1 = {
      "name" : "Product1",
      "oneTimePmt" : 100,
      "monthlyPmt" : 50
    };

    var revenueItem2 = {
      "name" : "Product2",
      "oneTimePmt" : 50,
      "monthlyPmt" : 25
    }



    //create an array for the revenue items
  $scope.revenueItems = [revenueItem1, revenueItem2];

    //add items and properties to array
  $scope.addRevenueItem = function(name, oneTimePmt, monthlyPmt) {

    $scope.revenueItems.push({
      name: name,
      oneTimePmt: oneTimePmt,
      monthlyPmt: monthlyPmt
    })
  }

  //remove items based off index number submitted when hitting delete button
  $scope.removeRevenueItem = function(item) {
    var index = $scope.revenueItems.indexOf(item);
    $scope.revenueItems.splice(index, 1);
  }

    //corresponding mock data and array for expenses
    var expenseItem1 = {
      "name" : "Expense1",
      "oneTimePmt" : 500,
      "monthlyPmt" : 20
    };

    var expenseItem2 = {
      "name" : "Expense2",
      "oneTimePmt" : 200,
      "monthlyPmt" : 40
    }

    var expenseItem3 = {
      "name" : "Expense3",
      "oneTimePmt" : 1000,
      "monthlyPmt" : 10
    }

    $scope.expenseItems = [expenseItem1, expenseItem2];

    $scope.addExpenseItem = function(name, oneTimePmt, monthlyPmt) {

    $scope.expenseItems.push({
      name: name,
      oneTimePmt: oneTimePmt,
      monthlyPmt: monthlyPmt
    })
  }

   $scope.removeExpenseItem = function(item){
     var index = $scope.expenseItems.indexOf(item);
      $scope.expenseItems.splice(index, 1);
   }




    $scope.calculate = function(){
   //store variables to make calculations and pass to HTML

      $scope.oneTimeRevenue = 0;
      $scope.monthlyRevenue = 0;
      $scope.oneTimeExpense = 0;
      $scope.monthlyExpense = 0;
      $scope.totalRevenue = 0;
      $scope.totalExpense = 0;
      $scope.monthlyContributionProfit = 0;
      $scope.totalContributionProfit = 0;
      $scope.contributionMargin = 0;
      $scope.capitalROI = 0;


      //loop through arrays to continuously calculate updated figures
      for(i = 0; i < $scope.revenueItems.length; i++) {
        $scope.oneTimeRevenue += parseInt($scope.revenueItems[i].oneTimePmt);
        $scope.monthlyRevenue += parseInt($scope.revenueItems[i].monthlyPmt);
      }

      for(i = 0; i < $scope.expenseItems.length; i++) {
        $scope.oneTimeExpense += parseInt($scope.expenseItems[i].oneTimePmt);
        $scope.monthlyExpense += parseInt($scope.expenseItems[i].monthlyPmt);

      }

      //other calculations
      $scope.totalRevenue = ($scope.oneTimeRevenue + ($scope.monthlyRevenue * 12)).toFixed(2);


      $scope.totalExpense = ($scope.oneTimeExpense + ($scope.monthlyExpense * 12)).toFixed(2);


      $scope.monthlyContributionProfit = $scope.monthlyRevenue - $scope.monthlyExpense;
     
      $scope.totalContributionProfit = $scope.totalRevenue - $scope.totalExpense;


      $scope.contributionMargin = ($scope.totalContributionProfit / $scope.totalRevenue).toFixed(2);

      $scope.capitalROI = (($scope.oneTimeExpense - $scope.oneTimeRevenue) / $scope.monthlyContributionProfit).toFixed(1);


    }

  }])



})();
