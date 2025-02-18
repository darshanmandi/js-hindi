//foreach dont rturn value
const mynums=[1,2,3,4,5,6,7,8,9,10]
//let newnums=mynums.filter((val)=>val>5)//filter   is used to  retrun values  and used with arrow function
let newnums=mynums.filter(( nums)=>{
  return   nums>=5; // return keyword is used to return the value where we uses '{}' in arrow function. in singl line function we dont use return keyword to return values
})
console.log(newnums);

const Newnumb=[]
mynums.forEach( (val)=> {
    if(val>7){
        Newnumb.push(val)
    }
})
console.log(Newnumb);

const Hpdistt=[
{disttnm: 'Mandi',Dhq:'Mandi',Pop:725936,male:320936,fml:405000},
{disttnm: 'Shimla',Dhq:'Shimla',Pop:625936,male:320936,fml:305000},
{disttnm: 'Lahul Spti',Dhq:'Keylong',Pop:72593,male:32093,fml:40500},
{disttnm: 'Kangra',Dhq:'Dharamshala',Pop:825936,male:420936,fml:405000},
{disttnm: 'Chamba',Dhq:'Chamba',Pop:725936,male:320936,fml:405000},
{disttnm: 'Sirmaur',Dhq:'Nahan',Pop:725936,male:320936,fml:405000},
{disttnm: 'Kinnaur',Dhq:'Recokkngpeo',Pop:725936,male:320936,fml:405000}
]
let udist=Hpdistt.filter( (dnm)=> dnm.disttnm==='Mandi'||dnm.disttnm==='Shimla')
udist=Hpdistt.filter( (dnm)=>{
    return dnm.male>dnm.fml
})
console.log(udist);

//map function
const test=[1,2,3,4,5,6,7,8,9,10]
const newtest=test.map((num)=>{
    return num=num+50;
})
console.log(newtest)
// Chaining function
const newex=test.map( (num)=>num*20).map((num)=>num+5).filter((val)=> val>=40 && val<=150)
console.log(newex);

