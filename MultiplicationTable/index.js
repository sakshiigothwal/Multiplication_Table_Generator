let btn = document.getElementById('btn');
let numberInput = document.getElementById('number');
let clearAll=document.getElementById("clear");
let ul = document.getElementById('ul');

function tableGenerator(){
    
    let num = numberInput.value;

    let i = 1;
    let j = 0;
    while(i<=10 && j<10){
        let table = num * i;
        i++;
        j++;
        let list = document.createElement('li');
        list.textContent = num + " * " + j + " = " + table;
        ul.appendChild(list);
    }
}
function clearField(){
    numberInput.value= "";
    ul.innerHTML="";
}
btn.addEventListener("click", tableGenerator);
clearAll.addEventListener("click", clearField);
