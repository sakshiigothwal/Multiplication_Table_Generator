let btn = document.getElementById('btn');
btn.addEventListener("click", tableGenerator);
function tableGenerator(){
    let numberInput = document.getElementById('number');
    let num = numberInput.value;
    let i = 1;
    let j = 0;
    while(i<=10 && j<10){
        let table = num * i;
        i++;
        j++;
        let ul = document.getElementById('ul');
        let list = document.createElement('li');
        list.textContent = num + " * " + j + " = " + table;
        ul.appendChild(list);
    }
}