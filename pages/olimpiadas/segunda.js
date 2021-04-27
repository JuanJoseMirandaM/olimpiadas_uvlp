import React from 'react'
import Link from 'next/link'

const Segunda = () => {
  return (
    <div className="w-full container px-4 md:px-0 mx-auto">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-2 pt-20">Segunda Mini Olimpiada</h1>
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-yellow-600 mb-3 uppercase">15, 22, 29 de Mayo</h2>
      
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
        <div className="grid gap-x-10 gap-y-8 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold my-4">Fisiología Medica - GUSTON Y HALL</h4>
            <iframe src="https://drive.google.com/file/d/1KmBfHnCb2CVZID3PDIhJ4237PEvrmhHN/preview" width="90%" height="480"></iframe>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold my-4">Microbiología Medica - MURRAY</h4>
            <iframe src="https://drive.google.com/file/d/1ffAn-W3A-WE8BNG2y5Sr_81GQGzefAer/preview" width="90%" height="480"></iframe>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold my-4">Patología Estructural y Funcional - ROBBINS</h4>
            <iframe src="https://drive.google.com/file/d/165sVlGQ-O2v9q9fQ2TfiPLep-qEtwvYt/preview" width="90%" height="480"></iframe>
          </div>
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
      
    </div>
  )
}

export default Segunda
