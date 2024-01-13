const starsEl = document.querySelectorAll(".fa-star")
const emojisEl = document.querySelectorAll(".far")
const colorsArray = ["black", "red", "orange", "lightblue", "lightgreen", "green"]

updateRating()

starsEl.forEach((star,index)=>{
    star.addEventListener("click", ()=>{
        updateRating(index)
    })
})

function updateRating(index){
    starsEl.forEach((star, idx)=>{
        if(idx < index+1){
            star.classList.add("active")
        }else {
            star.classList.remove("active")
        }
    })

    emojisEl.forEach(emoji=>{
        emoji.style.transform=`translateX(-${(index+1) * 50}px)`
        emoji.style.color = colorsArray[index+1]
        
    })

}
