import React from 'react'

const About = () => {
  return (
    <div className="pt-8 container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">Universidad del Valle</p>
          <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">Acerca de Nosotros</h2>
        </div>
        <div className="col-start-1 row-start-3 space-y-3 px-4 mt-4">
          <p className="flex items-center text-black text-md">
            La Olimpiada Medica Boliviana - Univalle es una actividad para los alumnos de 1° a 5° año de las diferentes facultades de Medicina, fue creada con el objetivo de promover y profundizar el estudio, mejorando así la calidad del futuro profesionales en el área de salud. 
          </p>
        </div>
        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <img src="student2z.jpg" alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
            </div>
            <div className="relative hidden md:block">
              <img src="student3z.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
            <div className="relative hidden md:block">
              <img src="student1z.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
