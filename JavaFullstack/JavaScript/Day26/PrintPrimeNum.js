function PrimeNumbers(){
    for(x = 2;x<=100;x++){
        if(x % x === 0 && x % 1 === 0 )
        console.log(x);
    }
}

PrimeNumbers();