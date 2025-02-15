const myobject={
    js:'java script',
    cpp:'c++',
    ph:'php',
    py:'python'

}
for (const key in myobject) {
    console.log(key);// will print key only
    
    console.log(myobject[key]);// will print only key value
    console.log(`${key} is the shortcut for ${myobject[key]}`);// will prnit the key and value
    
    
    
}
// for in loop with array
const prog=["js","php","python"]
for (const key in prog) {
   console.log(key)// will print the key 
   console.log(prog[key]);
}
// for in  loop with map
/*const map=new Map()
map.set('IN', "INDIA")
map.set('UK',"United Kingdom")
map.set('IN',"INDIA")//WILL NOT INSERT DUPLICATE VALUE IN MAP
for (const key in map) {
    console.log(key);
    
    
}// map is not iterateable  and not used with for in*/