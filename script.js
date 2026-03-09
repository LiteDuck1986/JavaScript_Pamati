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

document.querySelector("#btn-loop").addEventListener("click", () => {
    let output= ""
    for (let i = 1; i <= 20; i++) output += i + " "
    document.querySelector("#loop-output").textContent = output

    let output2= ""
    do{
        output2 += i + ""
        i++
    }while (i >= izveletais)
})