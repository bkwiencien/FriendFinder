var friends = require("../data/friends.js");
module.exports = function(app) {
    
    app.get("/api/friends",function(req,res){
    	res.json(friends);
    });	

    app.post("/api/data",function(req,res){
    	console.log("in post");
        var userScores = [];
        var userTotal  = 0;
    	var best = {
    		name: "test-name",
    		photo: "test-photo",
    		diff:  100
    	};
        userScores = req.param("scores");
        for (j=0;j<10;j++) {
            userTotal = userTotal + parseFloat(userScores[j]);
        }
        res.json(best);
        console.log("userTotal was " + userTotal);
        console.log("i was sent " + req.param("name"));
        console.log("i was also sent " + req.param("scores"));
    });

}
