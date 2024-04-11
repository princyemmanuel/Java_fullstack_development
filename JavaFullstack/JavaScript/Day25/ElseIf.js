function EmployeeDesignation(year){
    if(year >=0 && year <= 2){
        console.log("Junior Engineer")
    }
    else if(year > 2 && year <=5){
        console.log("Senior Engineer")
    }
    else if(year > 5 && year <=9){
        console.log("Team Lead")
    }
    else{
        console.log("Project Manager")
    }
}
EmployeeDesignation(1.5)