// 1) Stampare in console i numeri da 1 a 100.  V
// 2) Al posto dei numeri divisibili per 3 stampa Fizz.  V
// 3) Al posto dei numeri divisibili per 5 stampa Bazz.  V
// 4) Al posto dei numeri divisibili per 3 e 5 stampa FizzBuzz.  V
const numb3 = 'Fizz';
const numb5 = 'Buzz';
const numbTot = 'FizzBuzz';

for (let i=1; i <= 100; i++){
    
    //LOOP
    if(i  % 3 === 0 && i % 5 === 0){  // Verifica 3 e 5
        console.log(numbTot);
        
        //Stampaggio div nel DOM
        let blocco = document.createElement('div');
        blocco.className = 'red';
        document.getElementById('container').appendChild(blocco);

        blocco.innerHTML = numbTot;

    } else if(i % 3 === 0){  // Verifica 3
        console.log('Fizz');

        //Stampaggio div nel DOM
        let blocco = document.createElement('div');
        blocco.className = 'green';
        document.getElementById('container').appendChild(blocco);

        blocco.innerHTML = numb3;


    } else if(i % 5 === 0){  // Verifica 5
        console.log('Buzz');

        //Stampaggio div nel DOM
        let blocco = document.createElement('div');
        blocco.className = 'yellow';
        document.getElementById('container').appendChild(blocco);

        blocco.innerHTML = numb5;


    } else {
        console.log(i);  // Stampa numero 
        
        //Stampaggio div nel DOM
        let blocco = document.createElement('div');
        blocco.className = 'blue';
        document.getElementById('container').appendChild(blocco);

        blocco.innerHTML = i;
    }
}