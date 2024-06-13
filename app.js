var input ;
function getData(){

     input = +prompt("Enter Your Timer in minutes")-1
    minute.innerHTML = input

}

var minute = document.getElementById("minute")
var second = document.getElementById("second")
var sec = 59
var interval ;
var startbtn =document.getElementById("startbtn")
function startTimer(){
    // interval = setInterval(start,1000)
    
    sec --
    second.innerHTML = sec
    if(sec == 0){
        input -- 
        minute.innerHTML -- 
        sec = 59
        sec.innerHTML = sec

    }if(minute.innerHTML && second.innerHTML == 0){
        clearInterval(interval)
        // alert("stopped")
        minute.innerHTML = 0
        second.innerHTML = 0
        // getData()
        startbtn.removeAttribute("disabled")
    }
    // ele.setAttribute("disabled","true")
}



function start(){
   
    if(input >= 0){
        interval = setInterval(startTimer,1000)
        startbtn.setAttribute("disabled","true")

    }else{
        alert("Enter Valid Number")
        minute.innerHTML = 0
        second.innerHTML = 0
        
        return
    }

}


function stop(){
    clearInterval(interval)
    startbtn.removeAttribute("disabled")
}


function reset(){
clearInterval(interval)
startbtn.removeAttribute("disabled")

minute.innerHTML = 0
second.innerHTML = 0


getData()
}