function doWhile(){
    var x = 1;
    do{
        console.log(x);
        x++;
    }
   // while(x>10 && x<30);              // false && true = false
    while(x<10 && x<30);                // true && true = true
    console.log("Do while terminated");
}
doWhile();