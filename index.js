const form = document.querySelector("#todo-form")

const ul = document.querySelector('ul')

class TodoItem{
    constructor(id, text, isCompleted){
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted
        this.element = this.createDOMElement();
    }
    createDOMElement(){

        const li = document.createElement('li');
        //SECTION - CREATES THE CHECKBOX AND MAKES IT RELATED TO THE ISCOMPLETE VARIABLE
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = this.isCompleted;
        //REVIEW - ASSUMING THAT IT SHOULD LINK TO UPDATE DOM IF CLICKED
        checkbox.addEventListener('click', () => {
          this.isCompleted = !this.isCompleted;
          this.updateDOMElement();
        });
        //SECTION - PUTS CHECKBOX INSIDE LIST
        li.appendChild(checkbox);
        //SECTION - 
        const label = document.createElement('label');
        label.textContent = this.text;
        li.appendChild(label);
        //SECTION - CREATE BUTTON
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        //
        deleteButton.addEventListener('click', () => {
            ul.removeChild(this.element)
        });
        li.appendChild(deleteButton);
        
        return li;
    }
    updateDOMElement(){

        const checkbox = this.element.querySelector('input[type="checkbox"]');
        checkbox.checked = this.isCompleted;
        const label = this.element.querySelector('label');
        label.textContent = this.text;

    }
}
// class TodoList{
//     constructor(element){
//         this.items = [];
//         this.element = element;
//     }
//     add(text){
//         let newToDo = new TodoItem(Math.random(), text, false)
//         this.items.push(newToDo)
//         this.element.innerHTML += `<li>${text}</li>`
//     }
//     remove(id){

//     }
//     update(id, updates){

//     }
// }

class TodoList {
    constructor() {
      this.items = [];
      this.element = document.getElementById('todo-list');
    }
    
    add(inputValue) {
        console.log(inputValue);
      const input = document.getElementById('todo-input');
      const text = inputValue.trim();
      if (text.length === 0) return;
      
      const id = Date.now().toString();
      const item = new TodoItem(id, text, false);
      this.items.push(item);
        ul.appendChild(item.element);
      inputValue = '';
    }
    
    remove(event) {
      const id = event.detail;
      const index = this.items.findIndex(item => item.id === id);
      if (index === -1) return;
      
      const item = this.items[index];
      this.element.removeChild(item.element);
      this.items.splice(index, 1);
    }
    
    update(id, updates) {
      const item = this.items.find(item => item.id === id);
      if (!item) return;
      
      Object.assign(item, updates);
      item.updateDOMElement();
    }
}

// list.appendChild(TodoItem.createDOMElement())
let homeToDo = new TodoList(ul)


console.log(form);

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let input = form.children[0].value
    console.log(input);
    homeToDo.add(input)  
})

