$('#button1').on("click",(function(event) {
	  console.log("in click fnct");
	  event.preventDefault();
      console.log("handle submit");
      alert("button clicked");
      }));
function myFunction() { 
 alert("clicked");
 console.log("in myFunction");
};
