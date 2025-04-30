let btn = document.querySelector(".btn")
let ism = document.querySelector(".ism")
let email = document.querySelector(".email")
let shikoyat = document.querySelector(".shikoyat")
let sana = new Date()



btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const userData = {
        nom:ism.value,
        email: email.value,
        shikoyat:shikoyat.value,
        sana:sana
    }
    
    fetch("https://680b1addd5075a76d989d913.mockapi.io/versiya/shikoyat", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(userData) 
    })
    .then(response => response.json()) 
    .then(data => {console.log("Success:", data)
        alert("Shikoyatingiz jo'natildi ✅✅✅")
    }) 
    .catch(error => console.error("Error:", error));
    ism.value = ""
    shikoyat.value = ""
    email.value = ""

})