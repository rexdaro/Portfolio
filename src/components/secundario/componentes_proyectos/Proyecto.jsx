function Proyecto({imagen, descripcion, claseImg="icono", claseParrafo="parrafo_de_icono"}) {

    return (
        <div className="div_icono_parrafo">            
            < img className={claseImg} src={imagen} alt='css3' />
            <p className={claseParrafo}>{descripcion}</p>
        </ div>
      
    )
  }
  
  export default Proyecto