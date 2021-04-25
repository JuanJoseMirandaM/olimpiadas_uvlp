import React from 'react'

const index = () => {
  return (
    <div className="w-full">
      <h2 className="w-full text-4xl lg:text-5xl font-bold pt-20 text-center uppercase">Resultados</h2>
      <div className="w-full mb-32">	
        <div className="h-1 mx-auto bg-yellow-500 w-96 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default index