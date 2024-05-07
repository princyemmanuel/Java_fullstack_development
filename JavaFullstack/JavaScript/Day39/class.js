class User {
    username = "Princy";
    city ="Nashville";

    display(){
        console.log(this.username,this.city);
    }

    changeCity(newcity){
        this.city = newcity;
    }
}
var User1 = new User;
var User2 = new User;
var User3 = new User;
var User4 = new User;

User1.display();

User2.changeCity("Kochi");
console.log(User2.city);
