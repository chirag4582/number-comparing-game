// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById('number1');

const number2 = document.getElementById('number2');

var randomnumber1 = Math.ceil(Math.random()*100)
 var randomnumber2 = Math.ceil(Math.random()*100)
 number1.innerHTML= randomnumber1;
 number2.innerHTML= randomnumber2;

// Iteration 3: Make the options button functional
var greaterthan = document.getElementById('greater-than');
var lessthan = document.getElementById('lesser-than');
var equal = document.getElementById('equal-to');

var score=0;
var time=5;

greaterthan.onclick = () => {
    if(randomnumber1>randomnumber2)
    {score+=1;

        
    }
    else
    {
        window.location.href="gameover.html"
    }
    console.log(score);
    randomnumber1 = Math.ceil(Math.random()*100)
    randomnumber2 = Math.ceil(Math.random()*100)
    number1.innerHTML= randomnumber1;
    number2.innerHTML= randomnumber2;
    localStorage.setItem("score",score);
}
lessthan.onclick = () => {
    if(randomnumber1<randomnumber2)
    {score+=1;
        
    }
    else
    {
        window.location.href="gameover.html"
    }
    console.log(score);
    randomnumber1 = Math.ceil(Math.random()*100)
     randomnumber2 = Math.ceil(Math.random()*100)
    number1.innerHTML= randomnumber1;
    number2.innerHTML= randomnumber2;
    localStorage.setItem("score",score);
};
equal.onclick = () => {
    if(randomnumber1===randomnumber2)
    {score+=1;
       
    }
    else
    {
        window.location.href="gameover.html"
    }
    console.log(score);
    randomnumber1 = Math.ceil(Math.random()*100)
    randomnumber2 = Math.ceil(Math.random()*100)
    number1.innerHTML= randomnumber1;
    number2.innerHTML= randomnumber2;
    localStorage.setItem("score",score);
};


// Iteration 4: Build a timer for the game
 const timer = document.getElementById('timer');
 var timerId;
 

 timerId = setInterval(startTimer,1000);

 function startTimer(){
    time;
    if(time==0){
        location.href="gameover.html"
       }
       timer.innerHTML=time;
       time--;
}


