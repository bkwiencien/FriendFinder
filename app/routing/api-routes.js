var friends = require("../data/friends.js");
module.exports = function(app) {
    
    app.get("/api/friends",function(req,res){
    	res.json(friends);
    });	

    app.post("/api/data",function(req,res){
    	console.log("in post");
    	var best = {
    		name: "test-name",
    		photo: "test-photo",
    		diff:  100
    	};
        res.json(best);
        console.log("i was sent " + req.param("name"));
        console.log("i was also sent " + req.param("scores"));
    });

}
