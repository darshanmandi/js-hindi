function myfunction()
{
    console.log("Darshan");
    console.log("Lecturer Computer Science");
    console.log("GSSS Saigaloo")
}
myfunction();
function addnumbers(number1,number2, number3)
{
    //console.log(`Sum of ${number1},${number2} and ${number3} is = ${number1+number2+number3}`);
  //  let sum=number1+number2+number3;
  //  return(sum)
  return number1+number2+number3
}
let result=addnumbers(25,35,45);
//console.log(result)
function  userloginmsg(usernam="Darshan")
{
    if (!usernam){
      return console.log("Please enter user Name")
    }
    return `${usernam} just logged in`
}
//console.log(userloginmsg("Hitesh"))
function calculatecartprise(val1,val2,...num1){
    return num1;

}
//console.log(calculatecartprise(200,300,400,500))
let user={
    uname:"Darshan Thakur",
    price:199
}
function handleuser(anyobject)
{
console.log(`User Name is ${anyobject.uname} and Price is ${anyobject.price}`)
}
//handleuser(user)
handleuser(
    {
        uname:"Hitesh",
        price:"220"
    }
)

// array
const Myarray=[1323,2312,31232]
function getarrayval(getarray){
    return getarray[1]
}
//console.log(getarrayval(Myarray));
/*console.log(getarrayval([
200,300,500
]

))*/
let a=30
a=50
console.log(a)