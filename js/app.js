let myForm = document.getElementById("myForm")
const btnEnviar = document.getElementById("btnEnviar")
let container = document.getElementById("container")


btnEnviar.addEventListener('click', (e)=>{
  e.preventDefault()
 
var formData = new FormData(myForm)
const lista = []
 formData.forEach((name)=>{
 lista.push(name)
})



 lista.map((item,index)=>{
   console.log(item,index);
   container.innerHTML+=`
    <header>
        <h1>${item}</h1>
        <h3>${item}</h3>
        <hr />
      </header>
      <main>
        <section class="contato">
          <p>endereco</p>
          <p>email</p>
          <p>telefone</p>
          <p>linkedin</p>
        </section>
        <section class="objetivo">
         
            <h2>Objetivos</h2>
            <p>
              resu mo Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nostrum distinctio porro commodi animi mollitia eaque cum atque ad
              ratione obcaecati nesciunt autem accusantium dolorum vitae consectetur
              non, tempore voluptates?
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
  });
  
 })