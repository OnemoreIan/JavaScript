window.onload = () => {
    //frontend conection
    let clock = document.getElementById('clock');
    let cyclesInput = document.getElementById('cycles-input');
    let startButton = document.getElementById('start-button');
    let workTimeInput = document.getElementById('work-time');
    let breakTimeInput = document.getElementById('break-time');
    let restTimeInput = document.getElementById('rest-time');

    //button functionality
    startButton.onclick =()=>{
        populateVariables();
        startPomodoro();
    };
    
    function startPomodoro(){
        console.log('started pomodoro');
        pomodoroController();
    }

    /*pomodoro*/
    let workTime;
    let breakTime;
    let timeCompleted;//cuantos tiempos completados
    let cyclesGoal;
    let cyclesCompleted=0;

    function populateVariables(){
        console.log('populated variables');
        workTime = workTimeInput.value;//minutos
        breakTime = breakTimeInput.value;//minutos
        restTime = restTimeInput.value;//minutos
        cyclesGoal = cyclesInput.value;
        timeCompleted = 0;
    }

    function pomodoroController(){
        if (isRestTime()){
            cyclesCompleted++;
            if (!goalReached()) {
                currentTime = restTime;
                timer();
                timeCompleted=0;
            } else {
                console.log('Pomodoro Finished!');
            }
            return;
        }
        if (timeCompleted % 2 == 0) {
            //toca work
            currentTime = workTime;
            timesCompleted++;
            timer();
            console.log('Time to work!!!' + timeCompleted + ', cycles: '+cyclesCompleted);
        }else{
            //toca rest
            currentTime=breakTime;
            timeCompleted++;
            timer();
            console.log('Time to break TC: '+timeCompleted + ', cycles: '+cyclesCompleted);
        }
    }
    
    function isRestTime(){
        return timeCompleted ==7;
    }
    function goalReached(){
        return cyclesGoal==cyclesCompleted;
    }

    /*Timer */
    let currentTime =1;/*Minutos seteados */
    let seconds = 0;

    function timer(){
        if (currentTime > 0 || seconds >0) {
            if (seconds == 0) {
                seconds = 59;
                currentTime--;
            } else {
                seconds--;
            }
            updateClock();
            console.log(currentTime,seconds);
            setTimeout(timer,1000);
        } else {
            pomodoroController();
            console.log('El temporizador termino');
        }
    }
    timer();

    //clock
    let clockMinutes;
    let clockSeconds;

    function updateClock(){
        clockMinutes = formatNumbers(currentTime);
        clockSeconds = formatNumbers(seconds);
        clock.innerHTML=clockMinutes+':'+clockSeconds;
    }

    function formatNumbers(time){
        let formattedDigits;
        if (time < 10){
            formattedDigits='0'+time;
        }else{
            formattedDigits=time;
        }
        return formattedDigits;
    }

};