import React from 'react'

const Segunda = () => {
  return (
    <div className="w-full container mx-auto">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-2 pt-20">Segunda Mini Olimpiada</h1>
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-yellow-600 mb-3 uppercase">15, 22, 29 de Mayo</h2>
      
      <div className="mt-8">
        <h3 className="text-xl font-bold">Convocatoria</h3>
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
      
    </div>
  )
}

export default Segunda
