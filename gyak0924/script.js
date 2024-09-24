let t = [0,1,2,3,4,5];
console.log(t[2]);
console.log(t.length);
let name="";
let age;
const obj = {name:"Géza", age:20};
console.log(obj);


/*
3.) Kérjetek be 1 számot és írjátok ki
console-ba 1-100-ig az összes számot, ami
osztható a bekért számmal!
*/

let num = Number(prompt("Adj meg egy számot: "))
for (let i = 1; i < 100+1; i++) {
    if(i%num==0){
    console.log(i)
    }
    
}

function szorzas(a,b) {
 return a*b;
}

let a1 = Number(prompt("Adj meg egy számot: "))
let a2 = Number(prompt("Adj meg egy számot: "))

console.log(szorzas(a1,a2));
document.getElementById("container").style.width="100px";
document.getElementById("container").style.height="100px";
document.getElementById("container").style.backgroundColor="red";
document.getElementById("container").onclick = function () {
    document.getElementById("container").style.backgroundColor="green";
}

document.getElementById("container").onmouseenter = function () {
    document.getElementById("container").style.width=parseInt(document.getElementById("container").style.width)*1.1+"px";
    document.getElementById("container").style.height=parseInt(document.getElementById("container").style.height)*1.1+"px";
}

console.log(parseInt("100px"))