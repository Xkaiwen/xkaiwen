function hello(){
    alert("Hello World!");
}

function makeBig(){
    document.getElementById("text").style.fontSize="24pt";
}
function change(){
    document.getElementById("text").style.fontWeight="bold";
    document.getElementById("text").style.color="blue";
    document.getElementById("text").style.textDecoration="underline"
    alert("styles changed for the text area");
}
function unchange(){
    document.getElementById("text").style.fontWeight="normal";
    document.getElementById("text").style.color="black";
    document.getElementById("text").style.textDecoration="none"
    alert("styles removed for the text area");
}
function moo(){
    document.getElementById("text").style.textTransform="uppercase"
    let str=document.getElementById("text").value.split(".");
    let str2=str.join("-Moo");
    document.getElementById("text").value=str2;
}