let add1 = document.getElementById("add");
let sub1 = document.getElementById("sub");
let input = document.getElementById("input");

add1.addEventListener("click",addin);
sub1.addEventListener("click",subin);
d=0;
function addin(){
	d+=1;
	let input1 = document.getElementById("input").value=d;
}
function subin(){
	if(0>=d){
		let input1 = document.getElementById("input").value=0;
	}
	else{
		d-=1;
		let input1 = document.getElementById("input").value=d;
	}
}