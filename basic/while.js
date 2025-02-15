let student=["Nitin","Paras","Sumit","Dinesh","Chetan","vijay"];
let rno=[101,102,103,104,105,106];
let question=65;
let nm=0;
let rn=0;
 while ((rn<rno.length && nm< student.length && question<=67)) {
    console.log(`${student[nm]},${rno[rn]},${String.fromCharCode(question)}`);
    if(question==67){
        question=64;
    }
    nm++;
    rn++;
    question++;
    
 }

 let i=15;
 do{
    console.log(i);
    
 }while(i>16);

 for (const nam of student) {
   console.log(nam);
   
 }