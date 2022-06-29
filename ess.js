//Container Creation
const container = document.querySelector('.container')
let header = document.createElement('div')
header.classList.add('header')
container.appendChild(header)
header.innerText = 'ETCH-A-SKETCH'
let tablecontainer = document.createElement('div')
tablecontainer.classList.add('secondcontainer')
container.appendChild(tablecontainer)
let table = document.createElement('div')
table.classList.add('table')
tablecontainer.appendChild(table)







//Variable declerations for grid
let column = 0
let box = 0
let array = []


let length = 16


//et length = prompt('How long')

//Grid Creation

let gridCreate = () => {


for (j = 0; j < length; j++){
    column = document.createElement('div')
    column.classList.add('column')
    table.appendChild(column)
    
  
    
for (i = 0; i < length; i++) {
    box = document.createElement('div')
    box.classList.add('row')
    column.appendChild(box)
   
    
    }
};
}











gridCreate() //Calling initial grid function

//Grid event listeners 
table.onmousedown = function(event) {
    let target = event.target; 
  
    if (event.target.classList.contains('rainbow')) {
        let hex = '#' + Math.floor(Math.random()*16777215).toString(16)
        event.target.style.backgroundColor = hex
      
    } else if (event.target.classList.contains('row')) {
        console.log(event.target);
        event.target.style.backgroundColor = 'black';
              } 
    
     table.onmousemove = function(event) {
     let target = event.target; 
  
    if (event.target.classList.contains('rainbow')) {
        let hex = '#' + Math.floor(Math.random()*16777215).toString(16)
        event.target.style.backgroundColor = hex
            } else if (event.target.classList.contains('row')) {
                console.log(event.target);
                event.target.style.backgroundColor = 'black';
                      } 
            
        } 
    };

  table.onmouseup = function(event) {
            table.onmousemove = undefined;
  };


//button declerations for black, rainbow, and clear
  let buttons = document.createElement('div')
  buttons.classList.add('buttonholder')
  tablecontainer.appendChild(buttons)


  let buttontwo = document.createElement('button')
  buttontwo.classList.add('btntwo')
  buttontwo.innerText = 'BLACK'
  buttons.appendChild(buttontwo)

  let button = document.createElement('button')
  button.classList.add('btn')
  button.innerText = 'RAINBOW'
  buttons.appendChild(button)

  let buttonthree = document.createElement('button')
  buttonthree.classList.add('btnthree')
  buttonthree.innerText = 'CLEAR'
  buttons.appendChild(buttonthree)


  let slideContainer = document.createElement('input')
  slideContainer.classList.add('slide')
  buttons.appendChild(slideContainer)
  slideContainer.type = 'range' 
  slideContainer.min = '1'
  slideContainer.max = '100'
  slideContainer.value = '1'
  

  


  slideContainer.addEventListener("change", function(){
    document.getElementsByClassName('.slide').textContent = slideContainer.value
    console.log(slideContainer.value)
    let length = slideContainer.value
    gridCreate()
  
  })

button.onclick = function(event) {
        check = document.querySelectorAll('.row')
        for (const checkk of check) {
            checkk.classList.add('rainbow')
            
        }
        
    }


    buttontwo.onclick = function(event) {
        check = document.querySelectorAll('.rainbow')
        for (const checkk of check) {
            checkk.classList.remove('rainbow')
            
        }
        
    }
    
    buttonthree.onclick = function(event) {
        check = document.querySelectorAll('.row')
        for (const checkk of check) {
            checkk.remove()
            
        }
        
    }


    buttonthree.onclick = function(event) {
        check = document.querySelectorAll('.column')
        for (const checkk of check) {
            checkk.remove()
            
        }
        gridCreate()
    }


    
    
    
/*
  function randomColors() {
    let hex = '#' + Math.floor(Math.random()*16777215).toString(16)
    button.style.backgroundColor = hex
    buttontwo.style.backgroundColor = hex
    buttonthree.style.backgroundColor = hex
}
randomColors() */

let footer = document.createElement('div')
footer.classList.add('footer')
footer.innerText = 'Copyright MelatoninJR 2022 '
container.appendChild(footer)