import './App.css'

function App() {

  function demonstrarWhile(){
    //console.log('Funcionei');
    let cont = 0
    while(cont < 10){
      console.log(cont);
      cont++
    }
  }

  return (
    <>
      <h1>Repetições</h1>
      <section>
      <h2>while</h2>
      </section>
      <button onClick={demonstrarWhile}>demo while</button>
        {/* <section>
          <h2>for</h2>
        </section>
        <section>
          <h2>do-while</h2>
        </section> */}
    </>
  )
}

export default App
