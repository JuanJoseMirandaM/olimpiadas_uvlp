import Link from 'next/link'

const Olimpiadas = () => {
  return (
    <div className="container mx-auto px-2 pt-4 pb-12 text-grey-darker">
      <h2 className="w-full my-2 text-3xl lg:text-4xl font-bold leading-tight text-center text-grey-darker">
        Olimpiadas
      </h2>
      <div className="w-full mb-4">	
        <div className="h-1 mx-auto bg-yellow-500 w-64 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <div className="flex flex-col w-5/6 lg:w-1/5 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
          <div className="flex-1 bg-white text-grey-dark rounded-t rounded-b-none overflow-hidden shadow">
            <div className="p-8 text-3xl font-bold text-center border-b-4">1ra Mini Olimpiada</div>
            <ul className="w-full text-center text-sm">
              <li className="border-b py-4">Histología</li>
              <li className="border-b py-4">Embriología</li>
              <li className="border-b py-4">Anatomía</li>
            </ul>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              <Link href="/olimpiadas/primera">
                <button className="mx-auto lg:mx-0 bg-yellow-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg  focus:outline-none">
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <div className="w-full p-8 text-3xl font-bold text-center">3ra Mini<br/>Olimpiada</div>
            <div className="h-1 w-full bg-yellow-500 my-0 py-0 rounded-t"></div>
            <ul className="w-full text-center text-base font-bold">
              <li className="border-b py-4">Farmacología</li>
              <li className="border-b py-4">Semiología</li>
              <li className="border-b py-4">Fisiopatología</li>
            </ul>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="w-full text-center">
              <span className="pt-6 text-4xl text-grey-dark">Incripciones</span>
              <br />
              <span className="text-base">hasta el 9 de Agosto</span>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/olimpiadas/tercera">  
                <button className="mx-auto lg:mx-0 bg-yellow-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg  focus:outline-none">
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-5/6 lg:w-1/5 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
          <div className="flex-1 bg-white text-grey-dark rounded-t rounded-b-none overflow-hidden shadow">
            <div className="p-8 text-3xl font-bold text-center border-b-4">2da Mini<br/>Olimpiada</div>
            <ul className="w-full text-center text-sm">
              <li className="border-b py-4">Fisiología</li>
              <li className="border-b py-4">Microbiología</li>
              <li className="border-b py-4">Patología</li>
            </ul>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              <Link href="/olimpiadas/segunda">
                <button className="mx-auto lg:mx-0 bg-yellow-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg  focus:outline-none">
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Olimpiadas
