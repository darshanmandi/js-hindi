// swtich case statement
const month=121;
switch(month)
{
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("december");
        break;
        default:
            console.log("no month");
            break;
}

// String comp
const grade="p";
switch(grade)
{
    case "p":
        console.log("pass");
        break;
    case "f":
        console.log("fail");
        break;
    default:
        console.log("Enter Correct Grade F or P");
        
        break;

        
}
// truty
const uemail=[]//""//"h@yamil.com"
if(uemail)
{
    console.log("user have email");
    
}
else
{
    console.log("User Dont Have Email");
    
}
// falsy value
//false,0,-0, BigInt 0n,"",null,undefined,Nan
//truthy value
//true,1,"0",'false'," ",[],{},funcvtion(){}
if(uemail.length===0)
{
    console.log("Array is empty");
    
}
const empobj={}
if(Object.keys(empobj).length===0)
{
    console.log("object is empty");
    
}
//Nullish Coalescing operator(??): null undefined 
let val1;
//val1=5??10;
//val1=null??10;
// val1=undefined??15
//val1=null ?? 10 ??20

console.log(val1);
// terniary operator 
const a=100;
a<20? console.log("less than 20"):console.log("greater");
;


