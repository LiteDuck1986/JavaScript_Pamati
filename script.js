console.log("JS strādā!")

document.querySelector("#btn-variables").addEventListener("click", () => {
    let vards = "Intars"
    let vecums = 17
    const nacionalitate = "Latvijā"
    document.querySelector("#variables-output").textContent = `${vards} ir ${vecums} gadus vecs un ir dzimis ${nacionalitate}.`
})

document.querySelector("#btn-age").addEventListener("click", () => {
    const age = document.querySelector("#age-input").value
    let tiesibas = document.querySelector("#tiesibas-check").checked
    let text = age >= 18 && tiesibas ? "Atļauts" : "Aizliegts" // Ternārais operators
    document.querySelector("#age-output").textContent = text
})

// For cikls
document.querySelector("#btn-loop").addEventListener("click", () => {
    let output= ""
    for (let i = 1; i <= 20; i++) output += i + " "
    document.querySelector("#loop-output").textContent = output
})

// Do While cikls
document.querySelector("#btn-loop2").addEventListener("click", () => {
    let izveletais = Number(document.querySelector("#number-input").value)
    let output= ""

    if(izveletais < 1 || izveletais > 100){
        output= "Izvēlies skaitu tikai no 1 - 100!"
        document.querySelector("#loop-output2").textContent = output
        return
    }

    let i = 0
    do{
        let randomSk = Math.floor(Math.random() * 9) + 1; // Random skaitlis no 1 - 9
        output += randomSk + " "
        i++
    }while (izveletais > i)
    document.querySelector("#loop-output2").textContent = output
})

// While cikls
document.querySelector("#btn-loop3").addEventListener("click", () => {
    let izveletais = Number(document.querySelector("#number-input2").value)
    let randomSk = 0;
    let output= ""

    if(izveletais < 1 || izveletais > 20){
        output= "Izvēlies skaitli no 1 - 20!"
        document.querySelector("#loop-output3").textContent = output
        return
    }

    while (randomSk !== izveletais) {
        randomSk = Math.floor(Math.random() * 20) + 1; // Random skaitlis no 1 - 20
        output += randomSk + " "
    }
    document.querySelector("#loop-output3").textContent = output
})