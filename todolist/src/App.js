import React, {useState} from 'react';
import './App.css';

function App() {
  

  const [nuovoElemento, setNuovoElemento]=useState("");
  const [elementi, setElementi]=useState([]);

  function aggiungiElemento(){
    // console.log(nuovoElemento);

    if(!nuovoElemento){
      alert("Inserisci un elemento...");
      return;
    }

    const elemento = {
      id:Math.floor(Math.random()*1000),
      value:nuovoElemento
    };


    setElementi(vecchiaLista => [...vecchiaLista, elemento]);

    setNuovoElemento("");

  }

  function eliminaElemento(id){
    const nuovaLista = elementi.filter(elemento => elemento.id !== id);
    setElementi(nuovaLista);
  }
  
  return (
    <div className="App">
      <h1>Lista delle cose da fare</h1>

      <input
       type="text"
       placeholder="Cosa devo fare..."
       value={nuovoElemento}
       onChange={e => setNuovoElemento(e.target.value)}
       />

       <ul>
         {elementi.map(elemento => {
           return(
             <li key={elemento.id}>{elemento.value}<button className='delete-button' onClick={() => eliminaElemento(elemento.id)}>❌</button></li>
           )
         })}
       </ul>

       <button className='add-button' onClick={() => aggiungiElemento()}>Aggiungi</button>

    </div>
  );
}

export default App;
