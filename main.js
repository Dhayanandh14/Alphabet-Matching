var alpha  = document.querySelector("#alphabets")
var count = document.querySelector("#count")
a=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

sum=0;
alpha.addEventListener("keypress",(e)=>{
	console.log(e.key)
	    count.innerHTML ="";
		if (e.key == "a") {sum=sum+1;console.log(sum);count.innerHTML =sum;}
		if (e.key == "b") {sum=sum+2;console.log(sum);count.innerHTML =sum;}
		if (e.key == "c") {sum=sum+3;console.log(sum);count.innerHTML =sum;}
		if (e.key == "d") {sum=sum+4;console.log(sum);count.innerHTML =sum;}
		if (e.key == "e") {sum=sum+5;console.log(sum);count.innerHTML =sum;}
		if (e.key == "f") {sum=sum+6;console.log(sum);count.innerHTML =sum;}
		if (e.key == "g") {sum=sum+7;console.log(sum);count.innerHTML =sum;}
		if (e.key == "h") {sum=sum+8;console.log(sum);count.innerHTML =sum;}
		if (e.key == "i") {sum=sum+9;console.log(sum);count.innerHTML =sum;}
		if (e.key == "j") {sum=sum+10;console.log(sum);count.innerHTML =sum;}
		if (e.key == "k") {sum=sum+11;console.log(sum);count.innerHTML =sum;}
		if (e.key == "l") {sum=sum+12;console.log(sum);count.innerHTML =sum;}
		if (e.key == "m") {sum=sum+13;console.log(sum);count.innerHTML =sum;}
		if (e.key == "n") {sum=sum+14;console.log(sum);count.innerHTML =sum;}
		if (e.key == "o") {sum=sum+15;console.log(sum);count.innerHTML =sum;}
		if (e.key == "p") {sum=sum+16;console.log(sum);count.innerHTML =sum;}
		if (e.key == "q") {sum=sum+17;console.log(sum);count.innerHTML =sum;}
		if (e.key == "r") {sum=sum+18;console.log(sum);count.innerHTML =sum;}
		if (e.key == "s") {sum=sum+19;console.log(sum);count.innerHTML =sum;}
		if (e.key == "t") {sum=sum+20;console.log(sum);count.innerHTML =sum;}
		if (e.key == "u") {sum=sum+21;console.log(sum);count.innerHTML =sum;}
		if (e.key == "v") {sum=sum+22;console.log(sum);count.innerHTML =sum;}
		if (e.key == "w") {sum=sum+23;console.log(sum);count.innerHTML =sum;}
		if (e.key == "x") {sum=sum+24;console.log(sum);count.innerHTML =sum;}
		if (e.key == "y") {sum=sum+25;console.log(sum);count.innerHTML =sum;}
		if (e.key == "z") {sum=sum+26;console.log(sum);count.innerHTML =sum;};
	})

function cal(){
	count.innerHTML ="";
	alpha  = document.querySelector("#alphabets").value="";
	sum=0;
}