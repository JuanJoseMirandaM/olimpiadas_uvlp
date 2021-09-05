import React from 'react'
import { Table } from '../../components/Table'

const segundaMiniOlimpiada = [
  {
    'id': 1,
    'name1': 'Henry Mamani Chambi',
    'name2': 'Laura Meylin Tantani Sullca',
    'name3': 'Rosy Marienca Condori Mamani',
    'fase1': 43800,
    'fase2': 52800,
    'fase3': 74400,
    'total': 171000
  },
  {
    'id': 2,
    'name1': 'XIMENA TICONA LLANOS',
    'name2': 'JHOSELIN CAROL QUISPE QUISPE',
    'name3': 'ERIKA CAMELA CASILLA MAMANI',
    'fase1': 50400,
    'fase2': 36600,
    'fase3': 70800,
    'total': 157800
  },
  {
    'id': 3,
    'name1': 'REYNALES LEON FERNANDA NAGEL',
    'name2': 'ROCIO CADENA BETANCURT',
    'name3': 'JEFFERSON ALEXANDER SANTA CRUZ FARARI',
    'fase1': 60000,
    'fase2': 32400,
    'fase3': 62600,
    'total': 155000
  },
  {
    'id': 4,
    'name1': 'CRISTHIAN PUSARICO ALCON',
    'name2': 'RUSSO ANGEL LÓPEZ QUISPE',
    'name3': 'CHRIS WAGNER FERNANDEZ CHIRINOS',
    'fase1': 49800,
    'fase2': 35400,
    'fase3': 48000,
    'total': 133200
  },
  {
    'id': 5,
    'name1': 'ERICK BRAYAN ZAMBRANA SUAREZ',
    'name2': 'KATIA FLORES SANTOS',
    'name3': 'OLIVER BERNABE QUISPE MAMANI',
    'fase1': 45000,
    'fase2': 36600,
    'fase3': 50400,
    'total': 132000
  },
  {
    'id': 6,
    'name1': 'JOSE ENRIQUE AGUILAR TINTAYA',
    'name2': 'ROSA MARIA HUANCA QUISPE',
    'name3': 'DAYANA MIRIAM HERRERA VARGAS',
    'fase1': 36600,
    'fase2': 33600,
    'fase3': 40200,
    'total': 110400
  },
  {
    'id': 7,
    'name1': 'MARCO ANTONIO TOLA CHOQUETARQUI',
    'name2': 'SARA RAQUEL TICONA VALENZUELA',
    'name3': 'NOEMI TARQUI CUSI',
    'fase1': 42000,
    'fase2': 25200,
    'fase3': 31800,
    'total': 99000
  },
  {
    'id': 8,
    'name1': 'KATHERINE LAYME CEREZO',
    'name2': 'HELDRY ROSS FLORES',
    'name3': 'SORIA, DEYSI LIMACHI TITO',
    'fase1': 10200,
    'fase2': 74400,
    'fase3': 0,
    'total': 84600
  },
  {
    'id': 9,
    'name1': 'BRANDON GUTIERREZ HUANCA',
    'name2': 'ANYELA LIZETH LEIVA HUAMANI',
    'name3': 'AYRTON ADAN PAZ HUARANI',
    'fase1': 31200,
    'fase2': 16800,
    'fase3': 19200,
    'total': 67200
  },
  {
    'id': 10,
    'name1': 'FERNANDO CHOQUE QUISPE',
    'name2': 'DARENKA DARLING JIMENEZ QUISBERT',
    'name3': 'YOSETH WENDY MAMANI QUISPE',
    'fase1': 23400,
    'fase2': 32400,
    'fase3': 0,
    'total': 55800
  }
];

const terceraMiniOlimpiada = [
  {
    'id': 1,
    'name1': 'ERIKA CAMELA CASILLA MAMANI',
    'name2': 'XIMENA TICONA LLANOS',
    'name3': 'JHOSELIN CAROL QUISPE QUISPE',
    'fase1':40600,
    'fase2':67200,
    'fase3':46800,
    'total':154400
  },
  {
    'id':2,
    'name1': 'ROSY MARIENCA CONDORI MAMANI ',
    'name2': 'JOSE SANTIAGO ALANOCA SILVA',
    'name3': 'LAURA MEYLIN TANTANI SULLCA ',
    'fase1':40800,
    'fase2':40800,
    'fase3':15600,
    'total':97200
  },
    {
    'id':3,
    'name1': 'ALBA DANIELA RODRIGUEZ SILVA',
    'name2': 'MARIA ANGÉLICA CONDE OJOPI',
    'name3': 'OLIVER BERNABE QUISPE MAMANI',
    'fase1':31200,
    'fase2':33000,
    'fase3':23400,
    'total':87600
  },
{
    'id':4,
    'name1': 'GABRIELA EVELIN CARBAJAL ALLPACCA',
    'name2': 'PHANNEL YABELI ALIAGA OJEDA',
    'name3': 'YASHIRA EVELYN JARA PINTO',
    'fase1':28800,
    'fase2':26400,
    'fase3':27200,
    'total':82400
  }
];

const index = () => {
  return (
    <div className="w-full container mx-auto">
      <h2 className="w-full text-4xl lg:text-5xl font-bold pt-32 text-center uppercase">Resultados</h2>
      <div className="w-full mb-20">
        <div className="h-1 mx-auto bg-green-400 w-96 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <h3 className="w-full text-2xl lg:text-3xl p-10 text-center">Resultados Tercera MiniOlimpiada</h3>
      <Table
        teams={terceraMiniOlimpiada}
      ></Table>

      <h3 className="w-full text-2xl lg:text-3xl p-10 text-center">Resultados Segunda MiniOlimpiada</h3>
      <Table
        teams={segundaMiniOlimpiada}
      ></Table>
    </div>
  )
}

export default index