
let myList = document.getElementById('list')
let addBtn = document.getElementById('add-btn')
let newToDo = document.getElementById('todo-input')

let initialToDos = ['Eat cakes', 'Buy cola', 'Travel to Sidney']

function deleteToDo(event){

    let id = event.target.id.slice(0, event.target.id.indexOf('-'))

    let newList = initialToDos.filter((item, index)=>index!=id)

    initialToDos= newList

    renderToDos()

}

function renderToDos () {

    console.log(initialToDos)

    myList.innerHTML =""

    for (i=0; i<initialToDos.length;i++) {

        let newEl = document.createElement('div')
        newEl.innerHTML = `<div id="${i}-todo" style="width:450px" class="to-do card bg-light align-items-center my-2 p-2">
        <div class="text-center">${initialToDos[i]}</div>
        <a id="${i}-deletebtn" href="#" class="btn btn-danger col-3 my-2">Delete</a>
    </div>`

        myList.prepend(newEl)

        document.getElementById(`${i}-deletebtn`)
        .addEventListener('click',(e)=>{

            deleteToDo(e)
        })

    }
}

renderToDos()

addBtn.addEventListener('click',(e)=>{

    e.preventDefault()

    if (newToDo.value.length) {

        initialToDos.push(newToDo.value)
        renderToDos()
    }

    newToDo.value=""
   
})

