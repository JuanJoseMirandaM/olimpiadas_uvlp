// import React from 'react'

// const Tercera = () => {
//   return (
//     <div className="w-full container mx-auto">
//       <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-2 pt-20">Tercera Mini Olimpiada</h1>
//       <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-green-400 mb-3 uppercase">Fecha a definir</h2>
//     </div>
//   )
// }

// export default Tercera
import styled from 'styled-components'
import { useRef, useState } from "react";
import ModalPdf from '../../components/ModalPdf'
import ButtonPdf from '../../components/ButtonPdf'
import CardConvocatoria from '../../components/CardConvocatoria';

const Tercera = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const cancelButtonRef = useRef();

  const url1 = "https://drive.google.com/file/d/1KmBfHnCb2CVZID3PDIhJ4237PEvrmhHN/preview";
  const url2 = "https://drive.google.com/file/d/1ffAn-W3A-WE8BNG2y5Sr_81GQGzefAer/preview";
  const url3 = "https://drive.google.com/file/d/165sVlGQ-O2v9q9fQ2TfiPLep-qEtwvYt/preview";

  function closeModal1() {
    setOpen1(false);
  }

  function openModal1() {
    setOpen1(true);
  }

  function closeModal2() {
    setOpen2(false);
  }

  function openModal2() {
    setOpen2(true);
  }

  function closeModal3() {
    setOpen3(false);
  }

  function openModal3() {
    setOpen3(true);
  }

  return (
    <div className="w-full container px-4 md:px-0 mx-auto">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-2 pt-24">Tercera Mini Olimpiada</h1>
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-green-400 mb-3">14, 21 y 28 de Agosto</h2>
      
      <div className="mt-8">
        <h3 className="text-3xl font-bold my-4">Convocatoria</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" >
          <CardConvocatoria
            title="Equipo"
            img='/group.svg'
            body="Cada equipo deberá tener un representante, mismo que se encargará del llenado de la boleta de inscripción.(grupos de 3 integrantes). Los integrantes de cada grupo deberán ser de la misma universidad, no importa si son de diferentes años."
          />
          <CardConvocatoria
            title="Prueba"
            img='/reloj.svg'
            body="Cada prueba contará de 50 preguntas de selección múltiple con una duración de 60 minutos."
          />
          <CardConvocatoria
            title="Temas"
            img='/book.svg'
            body="Los temas a tomar en cuenta son Farmacología, Semiología y Fisiopatología"
          />
          <CardConvocatoria
            title="Puntaje"
            img='/trofeo.svg'
            body="Los puntos serás acumulativos y al final de la MINI OLIMPIADA MÉDICA se dará certificado a los tres primeros equipo con mayor puntaje.Podrá visualizar a los grupos ganadores en nuestra PAGINA WEB, INSTAGRAM y FACEBOOK"
          />
          
        </div>

        <a href="https://forms.gle/DevPHTnL56Kn9tTk6" target="_blank">
          <button type="button" className="bg-green-200 text-green-700 text-xl font-semibold px-12 py-4 mt-4 rounded-lg">Inscribite</button>
        </a>
      </div>
      {/* <div className="mt-8">
        <h3 className="text-3xl font-bold my-4">Material de estudio</h3>
        <div className="grid gap-x-10 gap-y-8 grid-cols-1 md:grid-cols-3">
          <ButtonPdf
            title="Fisiología Medica"
            author="JOHN E. HALL"
            onClick={openModal1}
            
          >
          </ButtonPdf>
          <ButtonPdf
            title="Microbiología Medica"
            author="MURRAY, ROSENTHAL Y PFALLER"
            onClick={openModal2}
            
          >
          </ButtonPdf>
          <ButtonPdf
            title="Patología Estructural y Funcional"
            author="GROBBINS"
            onClick={openModal3}
            
          >
          </ButtonPdf>
        </div>
      </div>
      <ModalPdf
        open={open1}
        cancelButtonRef={cancelButtonRef}
        closeModal={closeModal1}
        url={url1}>
      </ModalPdf>
      
      <ModalPdf
        open={open2}
        cancelButtonRef={cancelButtonRef}
        closeModal={closeModal2}
        url={url2}>
      </ModalPdf>

      <ModalPdf
        open={open3}
        cancelButtonRef={cancelButtonRef}
        closeModal={closeModal3}
        url={url3}>
      </ModalPdf>*/}  
    </div> 
  )
}

export default Tercera

