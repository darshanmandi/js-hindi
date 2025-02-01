const mySym=Symbol("key1")
const jsuser={
    name:"Darshan",
    "lname":"Thakur",
    age:40,
    [mySym]:"MyKey1",
    location:"Mandi",
    email:"Darshan@gmail.com",
    isloggedin:"false"
}
console.log(jsuser["lname"])
//console.log(jsuser.age)
//console.log(jsuser.name)
//console.log(jsuser["email"])
//console.log(jsuser[mySym]);
jsuser.email="Darshan@fb.com"
//Object.freeze(jsuser)
jsuser["email"]="Darshan@insta.com"
console.log(jsuser);
jsuser.msg=function(){
    console.log("Hello Darshan");
}

jsuser.msg2=function(){
    console.log(`Hello JS User,${this.name}`)
}
console.log(jsuser.msg());
console.log(jsuser.msg2());