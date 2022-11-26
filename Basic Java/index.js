alert ("Double alert!")

//array and simple variables (declare with var (var can be used in the intire js file), let (let limiteaza folosire variabilei numai in functia respectiav) or const (const is not expected to change))
var a=[1,2,3,4]
var b=1
var d=6
console.log(a)
console.log(a.length)
console.log(a[0])

//js function
function myfunction(a,b) 
{var sum= a+d
return sum}

var x=2
var y=3
console.log (myfunction(x,y))
console.log (myfunction)

//string
var c={"colour":"black","talie":"medie","ability":myfunction}
console.log(c)
console.log(c.colour)
console.log(c.ability)
console.log(c.ability(x,y))

//conditions with if and else function
if (x>=2) {
    console.log("x>=2") 
} else {
    console.log("x<2")
}

if (x>=2) {
    console.log("x>=2")
} else if (x>2) {
    console.log("x>2")
}
    else if (x!=2) {
        console.log("x!=2")
} else {
    console.log("x<2")
}

//identifythe type of avariables
var number=5
console.log(typeof number)

// loop functions
var i=0
while(i<a.length){
    console.log(a[i])
    i++ //i=i+1 (works either way)
}
while(i<a.length){
    console.log(a[i])
    i++
    break
}

for (let i=0; i < a.length; i++) {
    console.log(a[i])
}

a.map((value)=>{
    console.log(value)
    value+=10
})
console.log(a)