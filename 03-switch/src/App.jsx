
import { useState } from 'react'
import './App.css'

function App() {
  const[inputDia, setInputDia]=useState('')

  function executarSwitchTrue(){
    let dia = Number(inputDia)
    switch(true){
      case dia < 8: alert("Dia ok")
        break
      case dia<1 || dia >7: alert("Dia ruim")
        breakd
        default: alert("Tá bom")

    }
  }

  function executarComArray(){
    const dias = ["", "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
    let dia = Number(inputDia)
    alert(dias[dia])
  }

  function executar(){
    let valor = Number(inputDia)
    switch(valor){
    //  case 0:

      case 1: alert('Domingo')
              break;
      case 2: alert('Segunda-feira')
              break;
      case 3: alert("Terça-feira")
              break;
      case 4: alert("Quarta-feira")
              break; 
      case 5: alert("Quinta-feira")
              break; 
      case 6: alert("Sexta-feira")
              break;        
      case 7: alert("Sábado")
              break;
      default: alert("Digita direito ai, ó") 

      }
  }

  return (
    <>
      <input type="text"
      value={inputDia}
      onChange={(e) => setInputDia(e.target.value)}
       />
       <button onClick={executar}>Executar</button>
       <button onClick={executarComArray}> Executar com array</button>
       <button onClick={executarSwitchTrue}>SWITCH true :P</button>
     </>
  )
}

export default App
