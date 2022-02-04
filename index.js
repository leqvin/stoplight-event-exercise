/*(function() {
  'use strict';
  let stopbutton = document.getElementById('stopButton')
  console.log(stpbtn)
})();*/

//Global Variables
let stopBtn = document.getElementById('stopButton')
let stopLt = document.getElementById('stopLight')
let slowBtn = document.getElementById('slowButton')
let slowLt = document.getElementById('slowLight') 
let goBtn = document.getElementById('goButton')
let goLt = document.getElementById('goLight')

stopLight()
slowLight()
goLight()

function stopLight(){
  toggleLight(stopBtn, stopLt, "stop")
  mouseEnter(stopBtn)
  mouseLeave(stopBtn)
}

function slowLight(){
  toggleLight(slowBtn, slowLt, "slow")
  mouseEnter(slowBtn)
  mouseLeave(slowBtn)
}

function goLight(){
  toggleLight(goBtn, goLt, "go")
  mouseEnter(goBtn)
  mouseLeave(goBtn)
}

function toggleLight(buttonName, lightName, className) {
  //let buttonStatus = false
  buttonName.addEventListener("click", function() {
    //buttonStatus = true
    if (lightName.classList.toggle(className)){
      console.log(`${buttonName.textContent} bulb on`)
    } else {
      console.log(`${buttonName.textContent} bulb off`)
    }
    //lightName.classList.toggle(className);
    }) 
}

function mouseEnter(buttonName) {
  buttonName.addEventListener('mouseenter', e => {
    console.log(`"Entered" ${buttonName.textContent} button`)
  })
}

function mouseLeave(buttonName){
  buttonName.addEventListener('mouseleave', e => {
    console.log(`"Leave" ${buttonName.textContent} button`)
  })
}


