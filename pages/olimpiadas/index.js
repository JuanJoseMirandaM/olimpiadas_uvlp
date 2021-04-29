import React from 'react'
import Link from 'next/link'

const Olimpiadas = () => {
  return (
    <div className="w-full flex-grow container mx-auto">
      <h2 className="w-full text-4xl lg:text-5xl font-bold pt-24 text-center uppercase">Olimpiadas</h2>
      <div className="w-full mb-32">	
        <div className="h-1 mx-auto bg-yellow-500 w-96 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <div className="grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3">
        <Link href="/olimpiadas/primera"><button className="h-28 w-3/4 flex-none ml-full rounded-md transform shadow-lg bg-gradient-to-br from-pink-600 to-red-900 -rotate-1 sm:-rotate-2 text-3xl text-white text-center font-bold motion-safe hover:scale-125">1ra MINI <br/> OLIMPIADA</button></Link>
        <Link href="/olimpiadas/segunda"><button className="h-28 w-3/4 flex-none ml-full rounded-md transform shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600 rotate-1 sm:rotate-2 text-3xl text-white pt-4 text-center font-bold motion-safe hover:scale-125">2da MINI <br/> OLIMPIADA</button></Link>
        <Link href="/olimpiadas/tercera"><button className="h-28 w-3/4 flex-none ml-full rounded-md transform shadow-lg bg-gradient-to-br from-green-400 to-blue-300 -rotate-1 sm:-rotate-2 text-3xl text-white pt-4 text-center font-bold motion-safe hover:scale-125">3ra MINI <br/> OLIMPIADA</button></Link>
      </div>
    </div>
  )
}

export default Olimpiadas
