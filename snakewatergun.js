let word = ["Snake", "Water", "Gun"]


console.log("This is a Snake Water & Gun Game")

console.log("======================================")


let user_point=0

let comp_point=0

let chance=0

do
{

let computer = word[Math.floor(Math.random() * word.length)]


let input = prompt("Choose your Symbol : ") 


if(input==="Snake" && computer==="Snake")

{
    
console.log("Draw")

}

else if(input==="Snake" && computer==="Water")

{
    console.log("You Win : (Snake Drinks The Water)")
  
  user_point++
   
 chance++

}

else if(input==="Snake" && computer==="Gun")

{
   
 console.log("You Loose : (Gun kill the Snake)")
  
  chance++
  
  comp_point++
}

else if(input==="Water" && computer==="Snake")

{
    
console.log("You loose : (Snake Drinks The Water)")

    comp_point++

}

else if(input==="Water" && computer==="Water")

{
   
 console.log("Draw")
   
 chance++

}

else if(input==="Water" && computer==="Gun")

{
   
 console.log("You win : (Gun not work in water)")
 
   user_point++
   
 chance++

}

else if(input==="Gun" && computer==="Snake")

{
    
console.log("You win : (Gun kill the Snake)")
  
  user_point++
   
 chance++

}

else if(input==="Gun" && computer==="Water")

{
    
console.log("You Loose : (Gun not work in water)")
    
comp_point++
    chance++

}

else if(input==="Gun" && computer==="Gun")

{
    
console.log("Draw")
   
 chance++

}

if(user_point==5 || comp_point==5)

{
    
break;

}

}while(true);


console.log("======================================")

console.log("======================================")

console.log("User Points : " + user_point)

console.log("Computer Points : " + comp_point)

console.log("Total Chances to complete game : " + chance)

console.log("======================================")

if(user_point > comp_point)

{
    
console.log("Congratulation You win")

}

else{
  
  console.log("Computer Wins")

}
