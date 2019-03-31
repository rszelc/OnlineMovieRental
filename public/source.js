var timer1 = 0;
var timer2 = 0;




window.onload = start;
function start()
{
	var tresc="";
	for(i=1;i<=5;i++)
	{
		var element = "slide"+i;
		tresc = tresc + '<div class="slide" id="'+element+'"></div>';
		
	}
	document.getElementById("slider").innerHTML = tresc;
	zmienslajd(1,1);
	zmienslajd(2,2);
	zmienslajd(3,3);
	zmienslajd(4,4);
	zmienslajd(5,5);
	
	
}
function schowaj(nr)
{
	var element = "#slide"+nr;

	$(element).fadeOut(500);
}
function zmienslajd(nr, numer)
{

	var element = "slide"+nr;
	var element2 = "#slide"+nr;
	
	if (numer>10) numer=1;
	var plik = "<img src=\"img/slide" + numer + ".jpg\" />";
	document.getElementById(element).innerHTML = plik;
	numer++; 
	$(element2).fadeIn(500);
	var f1= "zmienslajd("+nr+", "+numer+")";
	var f2= "schowaj("+nr+")";
	timer1 = setTimeout(f1, 5000);
	timer2 = setTimeout(f2, 4500);
}
function handler1()
{
	document.querySelector('modal').style.display = "flex";
}
