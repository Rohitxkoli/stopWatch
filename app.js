let count = document.querySelector("#count");
let second = document.querySelector("#second");
let minute = document.querySelector("#minute");
let hour = document.querySelector("#hour"); 

let pause = document.querySelector("#pause");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");

let timer = false;
var cnt = 0;
var sec = 0;
var min = 0;
let hr = 0;

start.addEventListener("click",()=>{
    timer = true;
    stopWatch();
});

pause.addEventListener("click",()=>{
    timer = false;
    
});

reset.addEventListener("click",()=>{
    timer = false;
     count.innerText = "00";
     second.innerText = "00";
     minute.innerText = "00";
     hour.innerText = "00";

        cnt = 0;
        sec = 0;
        min = 0;
        hr = 0;
    
});

function stopWatch() {
    if(timer == true) {

        setTimeout(()=>{

            if(cnt == 100)
            {
                cnt = 0;
                sec = sec+1;
            }

            if(sec == 60) {
                min = min+1;
                sec = 0;
            }

            if(min == 60) {
                hr = hr+1;
                min = 0;
                sec = 0;
                cnt = 0;
            }

            cnt = cnt+1;
            count.innerHTML = cnt;
            second.innerHTML = sec;
            minute.innerHTML = min;
            hour.innerHTML = hr;

            stopWatch();
        },10)
    }
}

 



     
    
 