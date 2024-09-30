let add = document.querySelector('.to-do-list form #butt-add')
let task = document.querySelector('.to-do-list form #task')
let toDoList = document.querySelector('.to-do-list');
let delet = document.querySelector('.to-do-list .add-tasks .del')
// let addTasks = document.querySelector('.add-tasks')

console.log(add)
console.log(task)
console.log(toDoList)
// console.log(addTasks)

add.addEventListener("click" , function(){

    console.log("click")

    if(task.value  !== ""){

        console.log("print")

        let addTasks = document.createElement('div')

        addTasks.className = "add-tasks"

        console.log(addTasks)

        let p = document.createElement('p')

        p.innerText =  task.value 

        console.log(task.value)

        addTasks.appendChild(p)

        for(i=0 ; i<2 ; i++){

            let buttComp = document.createElement('button')

            if(i === 0) {

                buttComp.innerText= "Complate"

                buttComp.className = "butt"

                buttComp.addEventListener('click', function() {
                    p.style.textDecoration = "line-through"; 
                    p.style.color = "gray";
                });


            } else {

                buttComp.innerText= "Delet";

                buttComp.className = "butt"

                buttComp.classList.add('del');

                buttComp.addEventListener('click' ,  function(){

                    addTasks.remove();

            })

        }

            addTasks.appendChild(buttComp)
            
        }

        toDoList.appendChild(addTasks)

        task.value=''

    }
    

})


