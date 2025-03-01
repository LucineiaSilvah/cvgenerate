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



 
   
   container.innerHTML=`
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

        <section class="formação">
          <h2>Formaçao</h2>
          <p>
           ${lista[8]} - ${lista[9]}
          </p>
          <p>
           ${lista[10]} - ${lista[11]}
          </p>
          <p>
           ${lista[12]} - ${lista[13]}
          </p>
         
          
         
        </section>

        <section class="experiencias">
          <h2>experiências</h2>
          <div class="experiencia">
            <div>
              <p> ${lista[14]}</p>
               <ul><li>${lista[15]}</li></ul>
              <p> ${lista[16]}</p>
              <ul><li>${lista[17]}</li></ul>
              <p> ${lista[18]}</p>
              <ul><li>${lista[19]}</li></ul>
            </div>
            
              
            
          </div>
        </section>

        <section class="cursos">
          <h2>Cursos Complementares</h2>
          <ul>
            <li>${lista[20]}</li>
                <li>${lista[21]}</li>
                <li>${lista[22]}</li>
                <li>${lista[23]}</li>
          </ul>
        </section>

        <section class="habilidades">
          <h2>Habilidades & Idioma</h2>
          <ul>
            <li>${lista[24]}</li>
                <li>${lista[25]}</li>
                <li>${lista[26]}</li>
                <li>${lista[27]}</li>
          </ul>
        </section>
      </main>
   
   `
 
  
 })


imprimir.addEventListener('click',()=>{
  window.print(container)
})
