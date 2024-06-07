// 1) Stampare in console i numeri da 1 a 100.  V
// 2) Al posto dei numeri divisibili per 3 stampa Fizz.  V
// 3) Al posto dei numeri divisibili per 5 stampa Bazz.  V
// 4) Al posto dei numeri divisibili per 3 e 5 stampa FizzBuzz.  V
const numb3 = 'Fizz';
const numb5 = 'Buzz';
const numbTot = 'FizzBuzz';

for (let i=1; i <= 100; i++){
    
    let blocco = document.createElement('div'); //Creazione elemento

    document.getElementById('container').appendChild(blocco);//Aggiungere il div al container

    //LOOP
    if(i  % 3 === 0 && i % 5 === 0){  // Verifica 3 e 5
        console.log(numbTot);
        
        //Definizione div nel DOM
        blocco.className = 'red';
        blocco.innerHTML = numbTot;

    } else if(i % 3 === 0){  // Verifica 3
        console.log('Fizz');

        //Definizione div nel DOM
        blocco.className = 'green';
        blocco.innerHTML = numb3;


    } else if(i % 5 === 0){  // Verifica 5

        console.log('Buzz');

        //Definizione div nel DOM
        blocco.className = 'yellow';
        blocco.innerHTML = numb5;

    } else {

        console.log(i);  // Stampa numero 
        
        //Definizione div nel DOM
        blocco.className = 'blue';
        blocco.innerHTML = i;
    }
}