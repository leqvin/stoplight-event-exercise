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
let flag = false;

// Get the element, add a click listener...
document.getElementById("controls").addEventListener("click", function(e) {

	if(e.target === "controls") {
    return;
  }

  let status;
  if(e.target.id === "stopButton") {
    status = stopLt.classList.contains('stop') ? 'on' : 'off';
  }
  if(e.target.id === "slowButton") {
    status = slowLt.classList.contains('slow') ? 'on' : 'off';
  }
  if(e.target.id === "goButton") {
    status = goLt.classList.contains('go') ? 'on' : 'off';
  }
  console.log(`${e.target.id} bulb ${status}`);


});



function toggleLight(buttonName, lightName, className) {
   buttonName.addEventListener("click", function() {
     lightName.classList.toggle(className)})
}

function mouseEnter(buttonName) {
  buttonName.addEventListener('mouseenter', e => {
    console.log(`Entered ${buttonName.textContent} button`)
  })
}

function mouseLeave(buttonName){
  buttonName.addEventListener('mouseleave', e => {
    console.log(`Leave ${buttonName.textContent} button`)
  })
}