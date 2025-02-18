const myNum=[1,2,3,]
/*const Mytotal=myNum.reduce(function(acc,curval){
    console.log(`acc:${acc} and currval:${curval}`);
    
    return acc+curval;

},0)*/
const Mytotal=myNum.reduce((acc,curval)=>acc+curval,0 )
console.log(Mytotal);
const marks=[
    {
        subject:'English',
        OM:95
    },
    {
        subject:'Math',
        OM:85
    },
    {
        subject:'Physics',
        OM:88
    },
    {
        subject:'Chemistry',
        OM:90
    },
    {
        subject:'Computer Science',
        OM:98
    }


]
const totmarks=marks.reduce((acc,item)=>acc+item.OM,0)
console.log(`Total Marks :=${totmarks}`)
