const form = document.querySelector("form")

class TodoItem{
    constructor(id, text, isCompleted, element){
        this.id = id;
        this.text = text.textContent;
        this.isCompleted = isCompleted
        this.element = element
    }
    createDOMElement(){

    }
    updateDOMElement(){

    }
}
class TodoList{
    constructor(items, element){
        this.items = items;
        this.element = element;
    }
    static add(text){

    }
    remove(id){

    }
    update(id, updates){

    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let input = form[0].value
    TodoList.add(input)  
})