

function Secundario({clase, titulo, id, subComponent}) {

    return (
      <>
        <div id={id} className={clase}>
            <h2 className='titulo_secundario' >{titulo}</h2>   
            {subComponent}    
        </div>
      </>      
    )
  }
  
  export default Secundario