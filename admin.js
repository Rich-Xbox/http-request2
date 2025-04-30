let cards = document.querySelector(".card-container")


function fetch1(){

    fetch("https://680b1addd5075a76d989d913.mockapi.io/versiya/shikoyat")
    .then(res => res.json())
    .then(data =>{
        data.map(shikoyat => {
            let card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = ` <h3>${shikoyat.nom}</h3>
        <p>💲${shikoyat.email}</p>
        <p>🔇${shikoyat.shikoyat}</p>
        <p>🕐${shikoyat.sana}</p>
        <button onclick="delete1(${shikoyat.id})" class="delete-btn">Delete</button>`
        cards.append(card)
        })
    }
    )
}


function delete1(a,e){
    console.log(a);
    
    fetch(`https://680b1addd5075a76d989d913.mockapi.io/versiya/shikoyat/${a}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json" 
        },
       
    })
    .then(response => response.json()) 
    .then(data => {
        alert(`${a} raqamli shikoyat o'chirildi✅🚮`)
        console.log("Success:", data)}) 
    .catch(error => console.error("Error:", error));
    setTimeout(()=>{
    location.reload()
    },1000)
}

fetch1()