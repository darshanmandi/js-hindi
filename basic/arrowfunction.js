const  user={
    username:"Darshann",
    office:"GSSS Saigaloo",
    welcome:function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        

    }
}
//user.username="Hemant"
//user.welcome()
//console.log(this);
/*function test(){
    let username="hitesh"
    console.log(this.username)
}
test()*/
let afunction= ()=>{
    let username="Ramesh";
    console.log(this.username);
}
afunction()
const add=(num1,num2)=>( {username:"Aditya"});

//console.log(add(3,4))
//************* Immeiately Invoked Function IIFE */
(function database(server){ // Named IIfe
    console.log(`DB Connected ${server}`);
})('Darshan');
((name)=>{ //Simple IIfe
    console.log(`DB Connected 2 ${name}`);

})('Aditya');
