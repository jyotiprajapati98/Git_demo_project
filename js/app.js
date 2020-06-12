var userName;
	function getName(){
		return document.getElementById("name").value;
	}
	function submitFuction1(){
		userName =getName();
		window.alert("Welcome to You "+userName);
		document.getElementById("form").submit();
		

	}
function getNumber(){
			return document.getElementById("fib").value;
}


function fibo(){
	var limit =getNumber();
	var f1=0;
	var f2=1;
	document.write("The fibonacci series : ");
	document.write("",f1," ");
	document.write("",f2," ");
	//document.write("",limit," ");
	 
	var i,f3;
	for(i=2; i<=limit; i++)
	{
		 f3=f1+f2;
		 document.write("",f3," ");
		 f1=f2;
		 f2=f3;
	}
}
	
	