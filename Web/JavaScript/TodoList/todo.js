let todos = []
let id = 0
let isAllCompleted = false

const todolist = document.querySelector('.todo-list')
const todoinput = document.querySelector('.todo-input')
const leftItemElem = document.querySelector('.left-items')
const completeAllbtn = document.querySelector('.complete-all-btn')

const onClickCompletedAll = () => {
    if (todos.length==0) return

    if (isAllCompleted) inAllComplete()
    else AllComplete()
    painttodos()
    isAllCompleted=!isAllCompleted
}

const AllComplete = () => {
    completeAllbtn.classList.add('checked')
    todos = todos.map(todo => ({...todo,isCompleted:true}))
}

const inAllComplete = () => {
    completeAllbtn.classList.remove('checked')
    todos = todos.map(todo => ({...todo, isCompleted:false}))
}

const checkCompleteAll = () => {
    const completedTodos = todos.filter(todo => todo.isCompleted)
    if (todos.length === completedTodos.length) {
        isAllCompleted=true
        completeAllbtn.classList.add('checked')
    }
    else {
        isAllCompleted=false
        completeAllbtn.classList.remove('checked')
    }
}

const setLeftItems = () => {
    const leftTodos = todos.filter(todo=>todo.isCompleted===false)
    leftItemElem.innerHTML=`${leftTodos.length} items left`
}

const completetodo = (todoid) => {
    todos = todos.map(todo => todo.id == todoid?{...todo, isCompleted:!todo.isCompleted}:todo)
    checkCompleteAll()
    painttodos()
}

const updateTodo = (content, todoid) => {
    todos.forEach((todo) => {
        if(todo.id===todoid){
            todo.content=content
        }
    })
    painttodos()
}

const onDbclickTodo = (e, todoId) => {
    const todoElem = e.target
    const todoItemElem = todoElem.parentNode
    const inputElem = document.createElement('input')
    inputElem.classList.add('edit-input')
    inputElem.value = todoElem.innerText

    inputElem.addEventListener('keypress', (e) => {
        if (e.key === 'Enter'){
            updateTodo(e.target.value, todoId)
            document.body.removeEventListener('click', onOutClick)
        }
    })

    inputElem.addEventListener('keydown', (e) => {
        if (e.key === 'Escape'){
            todoItemElem.removeChild(inputElem)
            document.body.removeEventListener('click', onOutClick)
        }
    })
    const onOutClick = (e) => {
        if(e.target !== inputElem) {
            todoItemElem.removeChild(inputElem)
            document.body.removeEventListener('click', onOutClick)
        }
    }

    document.body.addEventListener('click', onOutClick)
    todoItemElem.appendChild(inputElem)
    inputElem.focus()
}

const painttodo = (todo) => {
    const todoitem = document.createElement('li')
    todoitem.classList.add('todo-item')

    const checkbox = document.createElement('div')
    checkbox.classList.add('checkbox')
    checkbox.addEventListener('click', () => completetodo(todo.id))

    const todoElem = document.createElement('div')
    todoElem.classList.add('todo')
    todoElem.innerText = todo.content
    todoElem.addEventListener('dblclick', (event) => onDbclickTodo(event, todo.id))

    const delbtn = document.createElement('button')
    delbtn.classList.add('delBtn')
    delbtn.innerHTML='x'
    delbtn.addEventListener('click', () => deletetodo(todo.id))

    if (todo.isCompleted) {
        todoitem.classList.add('checked')
        checkbox.innerText = '✔'
    }

    todoitem.appendChild(checkbox)
    todoitem.appendChild(todoElem)
    todoitem.appendChild(delbtn)
    todolist.appendChild(todoitem)
}

const painttodos = () => {
    todolist.innerHTML = ''
    todos.forEach((todo) => painttodo(todo))
    setLeftItems()
}

const appendtodos = (text) => {
    const newid = ++id
    todos.push({id:newid, isCompleted:false, content:text})
    checkCompleteAll()
    painttodos()
}


const deletetodo = (todoid) => {
    todos = todos.filter(todo => todo.id !== todoid)
    checkCompleteAll()
    painttodos()
}

const init = () => {
    todoinput.addEventListener('keypress', (e)=>{
        if(e.key == 'Enter' && e.target.value != ''){
            appendtodos(e.target.value)
            todoinput.value=''
        }
    })

    completeAllbtn.addEventListener('click', onClickCompletedAll)
}

init()