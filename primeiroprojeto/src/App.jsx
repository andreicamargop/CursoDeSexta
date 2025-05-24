
import './App.css'

function App() {
  
  function adivinhar(){
    let aleatorio = Math.ceil(Math.random()*10)
    let palpite = Number(prompt("chuta ai"))
    
    if (palpite == aleatorio){
      alert ('Você acertou')
    }
    else{
      alert ('Você errou')
    }



    console.log(aleatorio);
  
  }

  return (
    <>
    <h1>Exercicío 1</h1>  
    <button onClick={adivinhar}>Adivinhar</button>
    </>
  )
}

export default App
