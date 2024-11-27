const increment = document.getElementById("increment")
let count = 0
increment.addEventListener("click", ()=>{
count = count + 1
const counting = document.getElementById("counting")
counting.textContent = count

if (count >= 100) {
    const game = document.getElementById("game");
    game.textContent = "🎉🎉Congratulations🎉🎉";
    increment.setAttribute("disabled", "");
} else{
    increment.removeAttribute("disabled", "")
}
})



const restBtn = document.getElementById("restBtn")
restBtn.addEventListener("click", ()=>{
    count = 0
counting.textContent = count
increment.removeAttribute("disabled");
game.textContent = "Click Counter Game" ;
})

const  decrement = document.getElementById("decrement")
decrement.addEventListener("click", ()=>{
 
    
    game.textContent = "Click Counter Game "
    
    if(count > 0){
count =  count - 1
counting.textContent = count
    }else{
        alert("Negative Value not accepted")
        
    }
    increment.removeAttribute("disabled")
   
})