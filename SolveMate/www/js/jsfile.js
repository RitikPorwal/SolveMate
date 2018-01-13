function equation() {
  
	var x = document.getElementById('eqn').value;
	var a=0,b=0,c=0;
	var quad=document.getElementById('eqntype1');
	var linear=document.getElementById('eqntype2');

	if(quad.checked){
		var l = x.substring(0,x.indexOf('+')-2);						//Coefficient of X2
		var m = x.substring(x.indexOf('+')+1,x.lastIndexOf('+')-1); 	//Coefficient of X2
		var n = x.substring(x.lastIndexOf('+')+1);						//Constant Term
		if(l!='')														//Auto sensing unity coefficient of X2
			a=parseInt(l);
		else
			a=1;
		b=parseInt(m);
		c=parseInt(n);
		//alert(a);alert(b);alert(c)
		b=b/a;															//to make coefficient of X2 = 1 dividing equation by 'a';
		c=-c/a;															//moving constant from LHS to RHS
		a=1;
		var term=(b/2)*(b/2);											//'term' is variable added to both side for completing square
		var sqrtLHS=Math.sqrt((c+term));								//Square Root of RHS to get +ve and -ve roots
		var ans1= sqrtLHS-(b/2);										//Subtraction: Moving remaining constant to RHS for final roots
		var ans2= -sqrtLHS-(b/2);
		ans1=ans1.toFixed(2);											//Rounding off to 2 decimal places
		ans2=ans2.toFixed(2);
		document.getElementById('Answer').value = (ans1 + "  and  " + ans2);
	}
	else if(linear.checked){
		var l = x.substring(0,x.lastIndexOf('+')-1);					//Coefficient of X
		var m = x.substring(x.lastIndexOf('+')+1);						//Constant term on LHS
		var n = x.substring(x.indexOf('=')+1);							//Constant term on RHS
		if(l!='')														//auto sensing unity coefficient of X
			a=parseInt(l);
		else
			a=1;
		b=parseInt(m);
		c=parseInt(n);		
		//alert(a);alert(b);alert(c);
		c=c-b;															//Moving LHS constant to RHS
		var ans = c/a;													//Dividing RHS by X coefficient for answer
		ans=ans.toFixed(2);												//Rounding off for 2 decimal places
		document.getElementById('Answer').value = (ans);
	}	
}
 
function cancel() {
	document.getElementById('eqn').value = null;						//Resetting the interface
	document.getElementById('Answer').value = null;
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
