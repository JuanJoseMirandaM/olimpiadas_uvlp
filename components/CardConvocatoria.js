import React from 'react'

const CardConvocatoria = ({title, body, img}) => {
  return (
    <div className="rounded-lg border border-green-400 border-opacity-5 font-nunito transition-shadow duration-300 flex flex-row items-start py-6 px-4 cursor-pointer group shadow-2xl hover:shadow-xl">
      <img src={img} width="20%" className="mr-6 textt-green-400"></img>
      {/* <span className="flaticon-users-1 text-green-400"></span> */}
      <div>
        <h4 className="text-green-400 font-semibold">{title}</h4>
        <p className="leading-relaxed pt-2 text-md">
          {body}
        </p>
        
      </div>
    </div>
  )
}

export default CardConvocatoria
