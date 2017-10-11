var controllers=angular.module('controllers',[]);

controllers.controller('LoginCtrl',function($scope,$rootScope,$location){
	
	$rootScope.surname="something";
	
	$scope.validate = function(){
		if($scope.username===$scope.password){
			$rootScope.username=$scope.username;
			$location.path('/home');
		}
		else{
			alert("Enter Valid data");
			$location.path('/login');
		}
	}
})

controllers.controller('ItemCtrl',function($scope,$http,$rootScope){
	
	$http.get("data/data.json").then(function(response){	//ajax call
		console.log("Success"+response);
		$scope.items=response.data;
	}).then(function(response){
		alert("Status :"+response.statusText);
	})
	
	
	$scope.generateList = function(){
		$rootScope.list=[];
		angular.forEach($scope.items,function(item){
			if(item.marked==true){
				$rootScope.list.push(item);
			}
	})
}
	
	
	$scope.totalPrice = function(){
	var total=0;
	angular.forEach($rootScope.list,function(item){
		if(item.marked==true){
			total=total+item.price;
			}
	
	})
		$scope.finalPrice=total;
		return total;
}

})