import React from "react";

function Wraper({currentPage,atras,alante,datos_api}) {
    //console.log(datos_api);
    return(
        <div className='container'>
            <h1>Página: {currentPage}</h1>
            <button type='button' className='btn btn-primary' onClick={atras}>atrás</button>
            <button type='button' className='btn btn-primary' onClick={alante}>alante</button>
            <h2>Items</h2>
            <ul>
                {
                    datos_api.map(item=><li key={item.id}>{item.title}</li>)
                }
            </ul>
        </div>

    )

}
export default Wraper;