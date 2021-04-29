import styled from 'styled-components'
import { useRef, useState } from "react";
import ModalPdf from '../../components/ModalPdf'
import ButtonPdf from '../../components/ButtonPdf'

const Segunda = () => {
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
      <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-2 pt-24">Segunda Mini Olimpiada</h1>
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-yellow-600 mb-3 uppercase">El 15, 22 y 29 de Mayo</h2>
      
      <div className="mt-8">
        <h3 className="text-3xl font-bold my-4">Convocatoria</h3>
        <ul className="list-disc list-inside">
          <li>Cada grupo deberá tener sólo un representante, el representante se encargará del llenado de la boleta de inscripción.(sólo se aceptarán los grupos de 3 integrantes).</li>
          <li>Los integrantes de cada grupo deberán ser de la misma universidad, no importa si son de diferentes años.</li>
          <li>Los temas que se tomarán en cuenta son:
            <ul className="ml-4 list-disc list-inside">
              <li>FISIOLOGIA</li>
              <li>MICROBIOLOGIA</li>
              <li>PATOLOGIA</li>
            </ul>
          </li>
          <li>Cada prueba contará de 50 preguntas de selección múltiple con una duración de 60 minutos.</li>
          <li>Los puntos serás acumulativos y al final de la MINI OLIPIADA MÉDICA se dará certificado a los 3primeros equipo con mayor puntaje.</li>
          <li>Podrá visualizar a los grupos ganadores en nuestra PAGINA WEB, INSTAGRAM y FACEBOOK</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold my-4">Material de estudio</h3>
        <div className="grid gap-x-10 gap-y-8 grid-cols-1 md:grid-cols-3">
          <ButtonPdf
            title="Fisiología Medica"
            author="JOHN E. HALL"
            onClick={openModal1}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
          </ButtonPdf>
          <ButtonPdf
            title="Microbiología Medica"
            author="MURRAY, ROSENTHAL Y PFALLER"
            onClick={openModal2}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
          </ButtonPdf>
          <ButtonPdf
            title="Patología Estructural y Funcional"
            author="GROBBINS"
            onClick={openModal3}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
          </ButtonPdf>
          
        </div>
        {/* <div>
          <object
            data='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
            type="application/pdf"
            width="500"
            height="678"
          >
          </object>
        </div>
        <a href="https://www.mediafire.com/file/adg0zunp43ldpfn/AUXILIARES_DE_DOCENCIA_2021_INF.pdf/file" target="_blank">AUXILIARES_DE_DOCENCIA_2021_INF.pdf/file</a> */}
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
      </ModalPdf>
    </div>
  )
}

export default Segunda
