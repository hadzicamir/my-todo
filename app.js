const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');
const checks = document.querySelectorAll("input[type='checkbox']");
const rmvBtn = document.getElementById('rmv');
const dels = document.getElementsByClassName('del');
const pens = document.getElementsByClassName('pen');
const spans = document.querySelectorAll('.todoSpan');
let total = document.getElementById('total');
let completed = document.getElementById('completed');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTodo();
    input.value = '';
});

function createTodo() {
    if(input.value === ''){
        console.log("Input can't be empty.")
    } else {
    let newDiv = document.createElement('div');
    newDiv.className = 'myDiv';
    let newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newCheck.classList.add('checkbox');
    let newLabel = document.createElement('label');
    let labelText = document.createElement('span');
    labelText.contentEditable="true";
    labelText.classList.add('todoSpan');
    labelText.innerText = input.value;
    labelText.setAttribute('maxlength', 10)
    newCheck.addEventListener('change', function() {
        labelText.style.textDecoration = newCheck.checked ? 'line-through' : 'none';
      });  
    newCheck.addEventListener('change', function() {
        newDiv.style.background = newCheck.checked ? 'rgba(117, 167, 201, 0.1)' : 'white';
      });      
    let newPen = document.createElement('a');
    newPen.classList.add('pen');
    newPen.setAttribute('href', '#');
    newPen.innerHTML = `<i class="fas fa-pen">`;
    let newDel = document.createElement('a');
    newDel.classList.add('del');
    newDel.setAttribute('href', '#');
    newDel.innerHTML = `<i class="fas fa-times">`;
    newLabel.appendChild(newCheck);
    // newLabel.appendChild(labelText);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(labelText);
    newDiv.appendChild(newDel);
    newDiv.appendChild(newPen);
    todos.appendChild(newDiv);
    total.textContent = +total.textContent + 1;
   newCheck.addEventListener("change", function(event) {
    if (this.checked) {
        completed.textContent = +completed.textContent + 1}
    else {completed.textContent = +completed.textContent - 1;}
  }); 
    }
}


rmvBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.checkbox:checked');    
    checkboxes.forEach.call(checkboxes, function(checkbox) {
    checkbox.parentElement.parentElement.remove();
    total.textContent = +total.textContent - 1;
    completed.textContent = +completed.textContent - 1;
   });
});

let newCount = document.querySelectorAll('input[type="checkbox"]:checked').length;  
todos.addEventListener('click', (e) => {
    let item = e.target;
    if(item.classList[0] === 'del'){
        let todo = item.parentElement;
        total.textContent = +total.textContent - 1;
        
        // completed.textContent = +completed.textContent - 1;
        
        todo.remove();
        completed.textContent = document.querySelectorAll('input[type="checkbox"]:checked').length;
        // if(newCount == 0){
        //     completed.value == 0;
        // }  
        // newCount--;
        
     }
     completed.textContent == 0;
     console.log(document.querySelectorAll('input[type="checkbox"]:checked').length);
     
    //  completed.textContent = 0;
});

todos.addEventListener('click', (e) => {
    let item = e.target;
    if(item.classList[0] === 'pen'){
        item.parentElement.classList.toggle('italic');
    }
});

