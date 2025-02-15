//these are array specicific loop
//for of
let  arr=[1,{a:2,b:3},4,5]
for (const i of arr) {
    console.log(i);
    
    
}
const strval="hello darshan";
for(const val of strval){
    console.log(val);
    
}
//map:---Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in
//  the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns
//  a 2-member array of [key, value] for each iteration
const map=new Map()
map.set('IN', "INDIA")
map.set('UK',"United Kingdom")
map.set('IN',"INDIA")//WILL NOT INSERT DUPLICATE VALUE IN MAP
 for (const [key,value] of map)//[] are used to destructure of array and will print key and value 
     {
    console.log(key,"-",value);
    
 }
 // checking for object  for of loop
/*const myobject={
    'game1':"cricket",
    'game2':'hockey'

}
for (const [key, value] of myobject) {
    console.log(key,'',value);
}
    object is not iteratble in  forof loop*/