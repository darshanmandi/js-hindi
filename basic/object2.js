//const tinduser=new Object()
const tinderuser={}

    tinderuser.id="285966"
    tinderuser.name="Java"
    tinderuser.loggdin=false
//console.log(tinderuser)
const rguser={
    email:"user@hotmail.com",
    userfullname:{
        fname:"Hitesh",
        lname:"thakur"
    }

}
console.log(rguser.userfullname)
const obj2={1:"Rahul",2:"Suresh"}
const obj3={3:"Chetan",4:"Akshay"}
const obj4={...obj2, ...obj3}
//const obj4=Object.assign(obj2,obj3)
console.log(obj4)
const users=[
    {
        id:1,
        email:"xy@com"
    },
    {
        id:2,
        email:"bax@cnc"
    }
]

users[1].email
//console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('loggdin'))
const course={
    name:"Java Script",
    price:1230,
    courseinstructor:"hitesh"
}
const {courseinstructor:instructor}=course
console.log(instructor)