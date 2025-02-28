let myForm = document.getElementById("myForm")
const btnEnviar = document.getElementById("btnEnviar")
let container = document.getElementById("container")
let imprimir = document.getElementById("imprimir")

btnEnviar.addEventListener('click', (e)=>{
  e.preventDefault()
 
var formData = new FormData(myForm)
const lista = []
 formData.forEach((name)=>{
 lista.push(name)
 
 
})


console.log(lista)
 
   
   container.innerHTML+=`
    <header>
        <h1>${lista[0]}</h1>
        <h3>${lista[1]}</h3>
        <hr />
      </header>
      <main>
        <section class="contato">
          <p>${lista[2]}</p>
          <p>${lista[3]}</p>
          <p>${lista[4]}</p>
          <p>${lista[5]}</p>
        </section>
        <section class="objetivo">
         
            <h2>Objetivos</h2>
            <p>
              ${lista[7]}
            </p>
        
        </section>

        <section class="formacao">
          <h2>Formaçao</h2>
          <p>descreva formacao</p>
        </section>

        <section class="experiencias">
          <h2>experiências</h2>
          <div class="experiencia">
            <div>
              <p>cargo</p>
              <p>empresa</p>
              <p>periodo</p>
            </div>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>

        <section class="cursos">
          <h2>Cursos Complementares</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <section class="habilidades">
          <h2>Habilidades & Idioma</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </main>
   
   `
 
  
 })


imprimir.addEventListener('click',()=>{
  window.print(container)
})