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

let draugi = ["Edijs", "Intars", "Džons", "Kārlis"]

document.querySelector("#btn-array").addEventListener("click", () => {
    // draugi.push("Andrejs") // masīva beigās pievieno jaunu elementu

    document.querySelector("#array-output").textContent = draugi.join(", ")

})

document.querySelector("#btn-array2").addEventListener("click", () => {

    let izveletais = document.querySelector("#name-input").value
    let irDraugs = draugi.includes(izveletais)
    const index = draugi.indexOf(izveletais)
    const element = document.getElementById("#remove-friend");

    if(irDraugs){
        document.querySelector("#array-output2").textContent = "Jā masīvā ir draugs " + izveletais + "."
        return
    }
    else if(!irDraugs){
        document.querySelector("#array-output2").textContent = "Masīvā nav tāds draugs " + "'" +izveletais + "'."
        return
    }

    document.querySelector("#array-output").textContent = draugi.join(", ")

})

document.querySelector("#btn-objects").addEventListener("click", () => {
    let persona = {
        vards: "Pēteris", // Īpašības
        vecums: 18,
        nacionalitate: "Latvietis",
        sveiciens(){ // metode
            return "Mani sauc " + this.vards + ", man ir " + this.vecums + " gadi un esmu " + this.nacionalitate + "."
        }
    }
    document.querySelector("#objects-output").textContent = persona.sveiciens()
})

// function aprekinatLaukumu(platums, augstums){
//     return platums * augstums
// }

const aprekinatLaukumu = (platums, augstums) => platums * augstums // 2. Variants

document.querySelector("#btn-function").addEventListener("click", () => {
    const w = Number(document.querySelector("#width").value)
    const h = Number(document.querySelector("#height").value)
    const output = document.querySelector("#function-output")

    if(w && h){
        output.textContent = `Aprēķinātais laukums: ${aprekinatLaukumu(w, h)}`
    }else{
        output.textContent = "Ievadi abus skaitļus!"
    }
})

document.querySelector("#btn-color").addEventListener("click", () => {
    const color = "#" + Math.floor(Math.random()* 16777215).toString(16)
    box.textContent = color
    box.style.background = color
})

document.querySelector("#btn-countdown").addEventListener("click", () => {
    const countdownOut = document.querySelector("#countdown-output")
    const dateInput = document.querySelector("#date-input").value

    if(!dateInput){
        countdownOut.textContent = "Izvēlies datumu!"
        return
    }

    const today = new Date() // Šodienas datums
    const targetDate = new Date(dateInput)

    const diff = targetDate - today
    if(diff < 0){
        countdownOut.textContent = "Šis nav nākotnes datums!"
        return
    }

    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24))

    if(daysLeft === 1){
        countdownOut.textContent = "Atlikusi 1 diena!"
    }else{
        countdownOut.textContent = `Atlikušas ${daysLeft} dienas līdz ${targetDate.toLocaleDateString("lv-LV")}`
    }
})

// 9. Sekcija
const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const eventOut = document.querySelector("#event-output")

box1.addEventListener("mouseenter", () => {
    eventOut.textContent = "Kursors uzlikts uz kastes #1"
})

box1.addEventListener("mouseleave", () => {
    eventOut.textContent = "Kursors izgāja no kaste #1"
})

box2.addEventListener("click", () => {
    eventOut.textContent = "Uzklikšķināji uz kaste #2"
})

box2.addEventListener("click", () => {
    eventOut.textContent = "Uzklikšķināji uz kaste #2"
})

document.addEventListener("keydown", (e) =>{
    eventOut.textContent = `Nospiedi taustiņu: ${e.key}`
})

window.addEventListener("scroll", () =>{
    eventOut.textContent = "Lapa tiek ritināta..."

    let scrollTimer

    scrollTImer = setTimeout(() =>{
        eventOut.textContent = "Lapa vairs netiek ritināta"
    }, 500)
})

// 10. sekcija:
const btnAddTodo = document.querySelector("#btn-add-todo")
const todoInput = document.querySelector("#todo-input")
const toDoList = document.querySelector("#todo-list")

let todos = JSON.parse(localStorage.getItem("todos")) || []

// Save funkcija
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos))
}

// Render
function renderTodos(){
    toDoList.innerHTML = ""
    todos.forEach((todo, index) => {
        const li = document.createElement("li")
        li.textContent = todo.text
        if(todo.done) li.classList.add("done")

        li.addEventListener("click", () =>{
            todos[index].done = !todos[index].done
            saveTodos()
            renderTodos()
        })

        const delBtn = document.createElement("button")
        delBtn.textContent = "Dzēst"
        delBtn.addEventListener("click", () =>{
            e.stopPropagation()
            todos.splice(index, 1);

            saveTodos()
            renderTodos()
        })

        li.appendChild(delBtn)
        toDoList.appendChild(li)
    })
}

btnAddTodo.addEventListener("click", () => {
    const text = todoInput.value
    if (!text) return

    todos.push({text, done: false})

    renderTodos()
    saveTodos()

    todoInput.value = ""
})

todoInput.addEventListener("keypress", (e) =>{
    if(e.key === "Enter") btnAddTodo.click()
})

renderTodos()