import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-20 font-barlow">
      <footer className="container mx-auto w-full">
        <div className="pb-4 flex flex-row flex-wrap text-white text-sm justify-center">
          <div className="flex py-4 w-full text-center md:justify-start md:w-2/3">
            <p>Copyright ©2021 Olimpiadas Medicas UVLP. Todos los Derechos Reservados.</p>
          </div>
          <div className="flex py-4 w-full md:justify-end md:w-1/3">
            <p>Sitio desarrollado por <a target="_blank" title="Especialistas en Desarrollo Web" href="http://juanjoses.me/#/">JSM Solutions 🚀</a></p>
          </div>
          
        </div>
      </footer>
    </div>
  )
}

export default Footer
