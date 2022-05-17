/*
    js Simon Says
*/

const button = document.getElementById('play');
const numeriArea = document.getElementById('numeri');
const timerArea = document.getElementById('timer');
var myRandomArr = [];
var clock;
var timer;
button.addEventListener('click',
    function(){
        myRandomArr = arrayRandomUniqueNum(5,1,100);
        for(let i=0; i<5; i++){
            numeriArea.innerText += ` ${myRandomArr[i]}`;
        }
        let time = 0;
        timer = setInterval(() => {
            time++;
            timerArea.innerText = `Timer: ${time}`;
        }, 1000);
        clock = setTimeout(
            function(){
                numeriArea.innerText = '';
                clearInterval(timer);
                timerArea.innerText = '';
                let myUtenteArr = numeriUtente();
                let counter = 0;
                for(let i=0; i<5; i++){
                    if(myUtenteArr[i] === myRandomArr[i]){
                        counter++;
                    }
                }
                if (counter === 5){
                    alert('Hai indovinato tutti i numeri');
                } else if (counter!=0){
                    alert(`Hai indovinato ${counter} numeri`);
                }else {
                    alert('Non hai indovinato nessun numero');
                }
            }
        ,30000);
        console.log(myRandomArr);
    }
);

// finzioni specifiche
function numeriUtente(){
    let arrUtente = [];
    for(let i=0; i<5; i++){
        arrUtente.push(parseInt(prompt(`Inserisci il numero ${i+1}`)));
    }
    console.log(arrUtente);
    return arrUtente;
}

// funzioni generiche

function arrayRandomUniqueNum(numItems,min,max){
    const arrInt = [];
    while(arrInt.length<numItems){
        let randNumInt = numeroRandom(min,max);
        if(!arrInt.includes(randNumInt)){
            arrInt.push(randNumInt);
        }
    }
    return arrInt;
}

function numeroRandom (min,max){
    let numero = Math.floor(Math.random() * (max-min+1) + min);
    return numero;
}   