// set function with 60 cndwn
// implement message

let timer = 60;

const hitTimer = (e) => {
    document.querySelector(".done").innerHTML = "";
        usersTime();
        if (timer===0){
            timer+=60;
        }
        const runTimer = setInterval(() => {

            console.log(timer);
            timer--
            if (timer === 0) {
                document.querySelector(".done").innerHTML = ' <h1>Im DONE!!</h1>';
                clearInterval(runTimer)
                timer = 60;
            }
        }, 10);
  
}

const btn = document.querySelector(".btn")

btn.addEventListener("click", hitTimer);

//add the input functionality
// function which reads value and converts to new start cndown

const usersTime = () => {
    const min = document.querySelector("input[name='min']").value
    const sec = document.querySelector("input[name='sec']").value
    timer = (Number((min * 60)) + Number(sec));
        
}

