//Current time-------------->

function time()
{
	var clock=new Date();
	document.getElementById("timer").innerHTML=clock.toLocaleTimeString();
}
var b=setInterval(time,1000);

//Stop timer----------------->

function sto()
{
	clearInterval(b);
}

//Alert after 2sec----------->

function aler()
{
	alert("hello");
}

//Alert chancel-------------->

function al()
{
	clearInterval(y);
}