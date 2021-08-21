import React from 'react'

export const TableTr = ({team}) => {
  const {id, name1, name2, name3, fase1, fase2, fase3, total} = team;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 text-center">
            {id == 1? <span className="om-font trophy primer-lugar"></span>: <></>}
            {id == 2? <span className="om-font trophy segundo-lugar"></span>: <></>}
            {id == 3? <span className="om-font trophy tercer-lugar"></span>: <></>}
            {id > 3? <label className="text-xl font-extrabold">{id}</label>: <></>}
          </div>
          <div className="ml-4">
            {/* <div className="text-sm font-medium text-gray-900"> */}
            <div className="text-md text-gray-500">
              {name1}
            </div>
            <div className="text-md text-gray-500">
              {name2}
            </div>
            <div className="text-md text-gray-500">
              {name3}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
        {fase1}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
        {fase2}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
        {fase3}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-xl font-medium">
        {total}
      </td>
    </tr>
  )
}
