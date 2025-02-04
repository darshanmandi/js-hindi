//if statement
let number1=345;
let rem=1205;
let result=3560;
if ((number1>rem) && (number1>result))
{
    console.log(`Grestest Number Among ${number1},${rem} and ${result} is ${number1}`);

}
else if((rem>number1)&&(rem>result))
{
    console.log(`Grestest Number Among ${number1},${rem} and ${result} is ${rem}`);

}
else
{
    console.log(`Grestest Number Among ${number1},${rem} and ${result} is ${result}`);
 
}
//**** with or opertaor || */
let  mobileuser=true;
let emailuser=true;
if(mobileuser ||emailuser)//(mobileuser && emailuser) with and  operator 
{
    console.log("Logged in");

}
