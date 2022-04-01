var todoListArray = ['item 1','item 2','item 3'];

var ulTag = document.getElementById('todoList');



loadValues();

function loadValues(){
    for (let i = 0; i <= todoListArray.length - 1; i++) {
        var newLi = document. createElement("li");
        newLi.setAttribute("id", "item"+i);
        newLi.setAttribute("onclick", "addStrikeAndRemove("+i+",item"+i+")");

        newLi. appendChild(document.createTextNode(todoListArray[i]));
        ulTag. appendChild(newLi);
    }
}

function addnewtodo(){

    document.getElementById('todoList').innerText = '';
    
    var imputvalue = document.getElementById('inputtext').value;

    document.getElementById('inputtext').value = '';

    todoListArray.push(imputvalue);
    console.log(todoListArray);
    loadValues();
}

function addStrikeAndRemove(index,element){
    element.classList.add("strike"); 

    setTimeout(function() {
        removeNode(index);
    }, 3000);

    
}

function removeNode(index){
    document.getElementById('todoList').innerText = ''; 
    todoListArray.splice(index, 1); 
    console.log(todoListArray); 
    loadValues();
}

