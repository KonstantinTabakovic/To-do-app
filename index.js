/* Count Items left */
const itemCount = document.querySelector('.count span');
itemCount.innerText = document.querySelectorAll('.list').length;

/*Add items */
const addButton = document.querySelector('.todo-input button');
const itemInput = document.getElementById('todo-input');
const todo = document.querySelector('.todos ul');
const itemID = document.querySelector('.filters input[type="radio"]:checked');

addButton.addEventListener('click',()=>{
    if(itemInput.value.length > 0){
        addItems(itemInput.value);
        itemInput.value = '';
    }
})

itemInput.addEventListener('keypress',(event)=>{
    if(event.charCode === 13 && itemInput.value.length > 0){
        addItems(itemInput.value);
        itemInput.value = '';
    }
})

function addItems(text){
    const item = document.createElement('li');
    item.innerHTML = 
    `
    <label class="list">
    <input class="checkbox" type="checkbox"> 
    <span class="text">${text}</span>
    </label>
    <span class="remove"></span>
    `;
    if(itemID.id === 'completed'){
        item.classList.add('hidden');
    }
    todo.append(item);
    updateCount(1);
}

function updateCount(num) {
    itemCount.innerText = +itemCount.innerText + num;
}
