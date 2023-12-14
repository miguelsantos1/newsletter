import { EnvelopeSimple } from 'phosphor-react'
import newsletter from '../src/assets/newsletter.png'

import axios from 'axios'

export default function App() {

  function handleForm(event) {
    event.preventDefault()

    return console.log("Nothing here yet")
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
          <span>
            <input type="email" placeholder='DIGITE SEU EMAIL'/>
            <EnvelopeSimple size={96} color="#00ff6e" />
          </span>
            <input type='submit' value="ENVIAR"/>
        </form>

      </main>

    </>
  )
}
