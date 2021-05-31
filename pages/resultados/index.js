import React from 'react'

const index = () => {
  return (
    <div className="w-full container mx-auto">
      <h2 className="w-full text-4xl lg:text-5xl font-bold pt-20 text-center uppercase">Resultados</h2>
      <div className="w-full mb-32">	
        <div className="h-1 mx-auto bg-yellow-500 w-96 opacity-50 my-0 py-0 rounded-t"></div>
      </div>
      <div className="w-full">
        <h3 className="w-full text-2xl lg:text-3xl p-10 text-center">Resultados Segunda MiniOlimpiada</h3>
        <table className="w-full table-fixed border border-collapse border-red-800 text-center">
          <thead>
            <tr className="bg-red-700 text-xl text-white">
              <th className="w-2/12">#</th>
              <th className="w-2/12">Participantes</th>
              <th className="w-2/12">1ra Fase</th>
              <th className="w-2/12">2da Fase</th>
              <th className="w-2/12">3ra Fase</th>
              <th className="w-2/12">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>HENRY MAMANI CHAMBI, LAURA MEYLIN TANTANI SULLCA, ROSY MARIENCA CONDORI MAMANI</td>
              <td>43800</td>
              <td>52800</td>
              <td>74400</td>
              <td>171000</td>
            </tr>
            <tr className="bg-red-200">
              <td>2</td>
              <td>XIMENA TICONA LLANOS, JHOSELIN CAROL QUISPE QUISPE, ERIKA CAMELA CASILLA MAMANI</td>
              <td>50400</td>
              <td>36600</td>
              <td>70800</td>
              <td>157800</td>
            </tr>
            <tr>
              <td>3</td>
              <td>REYNALES LEON FERNANDA NAGEL, ROCIO CADENA BETANCURT, JEFFERSON ALEXANDER SANTA CRUZ FARARI</td>
              <td>60000</td>
              <td>32400</td>
              <td>62600</td>
              <td>155000</td>
            </tr>
            <tr className="bg-red-200">
              <td>4</td>
              <td>CRISTHIAN PUSARICO ALCON, RUSSO ANGEL LÓPEZ QUISPE, CHRIS WAGNER FERNANDEZ CHIRINOS</td>
              <td>49800</td>
              <td>35400</td>
              <td>48000</td>
              <td>133200</td>
            </tr>
            <tr>
              <td>5</td>
              <td>ERICK BRAYAN ZAMBRANA SUAREZ, KATIA FLORES SANTOS, OLIVER BERNABE QUISPE MAMANI</td>
              <td>45000</td>
              <td>36600</td>
              <td>50400</td>
              <td>132000</td>
            </tr>
            <tr className="bg-red-200">
              <td>6</td>
              <td>JOSE ENRIQUE AGUILAR TINTAYA, ROSA MARIA HUANCA QUISPE, DAYANA MIRIAM HERRERA VARGAS</td>
              <td>36600</td>
              <td>33600</td>
              <td>40200</td>
              <td>110400</td>
            </tr>
            <tr>
              <td>7</td>
              <td>MARCO ANTONIO TOLA CHOQUETARQUI, SARA RAQUEL TICONA VALENZUELA, NOEMI TARQUI CUSI</td>
              <td>42000</td>
              <td>25200</td>
              <td>31800</td>
              <td>99000</td>
            </tr>
            <tr className="bg-red-200">
              <td>8</td>
              <td>KATHERINE LAYME CEREZO, HELDRY ROSS FLORES SORIA, DEYSI LIMACHI TITO</td>
              <td>10200</td>
              <td>74400</td>
              <td>0</td>
              <td>84600</td>
            </tr>
            <tr>
              <td>9</td>
              <td>BRANDON GUTIERREZ HUANCA, ANYELA LIZETH LEIVA HUAMANI, AYRTON ADAN PAZ HUARANI</td>
              <td>31200</td>
              <td>16800</td>
              <td>19200</td>
              <td>67200</td>
            </tr>
            <tr className="bg-red-200"  >
              <td>10</td>
              <td>FERNANDO CHOQUE QUISPE, DARENKA DARLING JIMENEZ QUISBERT, YOSETH WENDY MAMANI QUISPE</td>
              <td>23400</td>
              <td>32400</td>
              <td>0</td>
              <td>55800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default index