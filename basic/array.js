let myArr=[0,1,2,3,4,5]
const myArr2= new Array(1,2,3,9);
//console.log(myArr[2])
//myArr.pop()
//myArr.unshift(123)
//myArr.shift()
//console.log(myArr2.indexOf(9))
//const NewArr=  myArr2.join()
//console.log("A", myArr);
//const sliceArr=myArr.slice(1,3)
//console.log(sliceArr);
//console.log("B",myArr)
//const spliarr=myArr.splice(1,3)
//console.log(spliarr);
//console.log("C",myArr)
const cricketer=["Rahul","Sachin","Ajay"]
const cricket2=["Suresh","Abhishek"]
//cricketer.push(cricket2)

const allcri=cricketer.concat(cricket2)
const newcri=[...cricketer,...cricket2]
console.log(newcri);
let flatarr=[1,2,3,[4,5],6,[7,8,[9,10]]]
let newflat=flatarr.flat(Infinity)
//console.log(newflat);
console.log(Array.of({name:"darshan"}))

