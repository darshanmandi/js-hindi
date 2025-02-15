//for

/*for(let index=1;index<100;index++)
{
    if(index%2!= 0){
        console.log(index);
    }
   
    
}
for(let i=1;i<10;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(i+" X "+j+"="+i*j);
        
    }
}*/
let myName=["Darshan","Dinesh","Aditya","Chetan"]
for (let index = 0; index < myName.length; index++) {
    const element = myName[index];
    //console.log(myName[i]);
    
}
/*for( let index=1;index<20;index++)
{
    if(index==5)
    {
        console.log(`Detected 5`);
        break;
        
    }
    console.log(`value of i ${index}`);
    

}*/
for( let index=1;index<20;index++)
{
    if(index==5)
    {
        console.log(`Detected 5`);
        continue;
        
    }
    console.log(`value of i ${index}`);
    

}
let  student=["Darshan","Dinesh","Aditya","Suresh","Chetan","Abhishek","Pankaj","Aksh","Akashay","Ritik","Isha","Akshika","Palak"];
let rno;
let qb;
for (let rno = 1,qb=65,j=0;rno<=13 && qb<=67 &&j<student.length; rno++,qb++,j++) {
    console.log(`Roll Number= ${rno} , Name = ${student[j]} ,Question Booklet Serires = ${String.fromCharCode(qb)}`);
    if(qb==67){
        qb=64;
    }
    
}