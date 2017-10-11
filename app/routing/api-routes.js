var friends = require("../data/friends.js");
module.exports = function(app) {
    
    app.get("/api/friends",function(req,res){
    	res.json(friends);
    });	

    app.post("/api/data",function(req,res){
    	console.log("in post");
        var userScores = [];
        var userTotal  = 0;
        var userName = "";
        var userPhoto = "";
        var diff = 0;
    	var best = {
    		name: "test-name",
    		photo: "test-photo",
    		diff:  100
    	};
        userScores = req.param("scores");
        userName=req.param("name");
        userPhoto=req.param("photo");
        for (i=0;i<friends.length;i++) {
          diff = 0;
          for (j=0;j<10;j++) {
              var s = parseFloat(userScores[j]);
              diff = diff + Math.abs(s-friends[i].scores[j]);
          }
          if (diff < best.diff) {
            best.name = friends[i].name;
            best.photo = friends[i].photo;
            best.diff = diff;
          }  
         }
        res.json(best);
    });

}
