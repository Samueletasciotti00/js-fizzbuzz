// 1) Stampare in console i numeri da 1 a 100.  V
// 2) Al posto dei numeri divisibili per 3 stampa Fizz.  V
// 3) Al posto dei numeri divisibili per 5 stampa Bazz.  V
// 4) Al posto dei numeri divisibili per 3 e 5 stampa FizzBuzz.  V

for (let i=1; i <= 100; i++){
    
    //LOOP
    if(i  % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    } else if(i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}