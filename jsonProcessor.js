"use strict"

$( function() {
	console.log("Getting Here!");
		
	var data = {								//This is the name of the array

			"players":							//This is a label in the JSON
		[
			{										//This starts the first item in the JSON group
				"firstName" : "Lance",
				"lastName" : "Miller",
				"age" : "38",
				"address" : "17 Ekman Street",
				"address1" : "Apt#3",
				"city" : "Worcester",
				"zipCode" : "01607",
				"dateJoined" : "Jan 14, 1981",
				"accountHolder": false
													//This is the end of the first item in the JSON group
			},
			{
				"firstName" : "Sam",
				"lastName" : "Miller",
				"age" : "34",
				"address" : "598 Framington Ave.",
				"address1" : "",
				"city" : "Framigham",
				"zipCode" : "01789",
				"dateJoined" : "Oct 5, 1986",
				"accountHolder": false
			},
			{
				"firstName" : "Sue",
				"lastName" : "Sadlowski",
				"age" : "39",
				"address" : "1 Main Street",
				"address1" : "Apt#3",
				"city" : "Woonsoket",
				"zipCode" : "01234",
				"dateJoined" : "July 20, 1980",
				"accountHolder": true
			}
		]
	};															//forEach loops only works for arrays
	data.players.forEach(function (bb) {             	//This is a forEach loop. I reference is called bb
		console.log ("First Name = " + bb.firstName);   //This will print out the first name for each 
		console.log ("Players info = " + bb.lastName + " address: " + bb.address + " age: " + bb.age); //This puts multi data points in
	
		if ( bb.accountHolder ) {
			console.log("Account Holder is " + bb.firstName);  //This is a ifloop that will print out the true value
		}
	
	});
	
	console.log ("First Name = " + data.players[0].firstName); //This will just print the first name
	console.log ("Date Joined = " + data.players[0].dateJoined); //This will just print the date joined
		
});