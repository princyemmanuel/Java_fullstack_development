function IsEligibleVote(age){
    if(age < 18){
        console.log("Not Eligible for voting");
    }
    else{
        console.log("Eligible for Voting");
    }
};
IsEligibleVote(11)