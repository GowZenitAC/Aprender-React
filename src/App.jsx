
import './App.css'
import { preguntas } from './data/preguntas'
import { useState } from 'react'
function App() {
  const [indexPregunta, setIndexPregunta] = useState(0) //pregunta actual, el indexPregunta es el indice de la pregunta y el setIndexPregunta es la funcion que cambia el indice de la pregunta
  const [respuestas, setRespuestas] = useState(null)
  
  
  

  const selectRespuesta = (option) => {
    const res = option === 'Sí' ? 40 : 10
    setRespuestas(res + respuestas) //...respuestas es el valor actual y option es el nuevo valor
    
    saveRespuesta(res + respuestas)

    

    setIndexPregunta(indexPregunta + 1)
    console.log({respuestas});
  }
  const saveRespuesta = (response) => {
    // const respuestaAcumulada = parseInt(respuestas)
    // console.log({respuestaAcumulada});
    localStorage.setItem('respuestas', JSON.stringify(response)) // 'respuestas' es la clave y 'respuestaAcumulada' es el valor
  }
  return (
    <>
      <h1 className='title'>Test vocacional</h1>
      <h3>Pregunta: <span> {preguntas[indexPregunta].text}</span></h3>
      <ul>
        {preguntas[indexPregunta].answers.map((option, index) => <button className='btn_option' key={index} onClick={() => selectRespuesta(option)} >{option}</button>)}
      </ul>
      
      <h4>Respuestas: {respuestas}</h4>
    </>
  )
}

export default App
