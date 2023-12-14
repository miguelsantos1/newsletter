import { EnvelopeSimple, Warning } from 'phosphor-react'
import newsletter from '../src/assets/newsletter.png'

import axios from 'axios'

export default function App() {

  function handleForm(event) {
    event.preventDefault()

      const email = document.querySelector("#email").value

      axios.post('/noRouteYet', {
        email: email
      }).then((response) => {
        console.log(response)
      }).catch(() => {
        
        const warning = document.querySelector(".warning-notification")


        warning.style.display = "flex"
      
        setTimeout(() => {
          warning.style.display = "none"
        }, 3000)

      })

}



  return(
    <>

      <header>
      
        <img src={newsletter} />

      </header>    

      <main>

        <p> 
          Se inscreva em nosso newsletter e fique sempre atualizado! 
        </p>

        <form onSubmit={ handleForm } action="post">
            <input type="email" id='email' placeholder='DIGITE SEU EMAIL'/>
            <span>
              <EnvelopeSimple size={40} color="#00ff6e" />
            </span>
            <input type='submit' value="ENVIAR"/>
        </form>

        <div className="warning-notification">
          <div>
              <Warning size={30} weight='bold' color="#f06000" />
            <h1> OCORREU ALGUM PROBLEMA! </h1>
          </div>
          <p> Olá, visitante. Esta opção ainda não está concluída. </p>
        </div>

      </main>

    </>
  )
}
