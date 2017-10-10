var friends = require("../data/friends.js");
module.exports = function(app) {
    
    app.get("/api/friends",function(req,res){
    	res.json(friends);
    });	

    app.post("api/data",function(req,res){
    	console.log("in post");
    	var best = {
    		name: "",
    		photo: "",
    		diff:  100
    	};
    });

}
