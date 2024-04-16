var data =[ 10,20,30,40,50,60,70,80,90,100];
console.log("Data before",data);
//removed 1 element from index position 3
 data.splice(3,1);
 console.log("After splice", data)
 //removed 2 element from index position 3
 data.splice(6,2);
 console.log("After splice", data)
  //removed all element from index position 2
  data.splice(2);
  console.log("After splice", data)

  //add elements to index 1
  data.splice(1,2,"Princy", "fdfgd");
  console.log("Adding",data);
    //added 2 elements to from 1
    data.splice(1,2,"Princy", "fdfgd");
    console.log("Adding",data);
