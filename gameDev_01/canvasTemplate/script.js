
function world() {
	document.getElementById("hello").innerHTML = "<del>Hello!</del><ins>Good to see you.</ins>";
}
function metallicEffect() {
	let pad = document.getElementById("imgdraw");
	let wid = Number(document.getElementById("setWidth").value);
	let ht = Number(document.getElementById("setHeight").value);
	pad.height = ht;
	pad.width = wid;
}
function paint() {
	let pad = document.getElementById("imgdraw");
	let cxt = pad.getContext("2d");
	cxt.strokeStyle = 'lightgrey';
	cxt.fillStyle = 'dimgrey';
	cxt.lineWidth = 5;
	cxt.rect(75,75,250,250);
	cxt.stroke();
	cxt.fill();
	
}