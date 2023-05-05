const form = document.querySelector("form")
const ul = document.querySelector('ul')

class TodoItem{
    constructor(id, text, isCompleted){
        this.id = id;
        this.text = text.textContent;
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
class TodoList{
    constructor(element){
        this.items = [];
        this.element = element;
    }
    add(text){
        let newToDo = new TodoItem(Math.random(), text, false)
        this.items.push(newToDo)
        this.element.innerHTML += `<li>${text}</li>`
    }
    remove(id){

    }
    update(id, updates){

    }
}

// list.appendChild(TodoItem.createDOMElement())
let homeToDo = new TodoList(ul)

homeToDo.add("Do Laundry")


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let input = form[0].value
    TodoList.add(input)  
})