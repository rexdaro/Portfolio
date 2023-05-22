function Icono({icono, descripcion, claseImg="icono", claseParrafo="parrafo_de_icono"}) {

    return (
        <div className="div_icono_parrafo">            
            < img className={claseImg} src={icono} alt='css3' />
            <p className={claseParrafo}>{descripcion}</p>
        </ div>
      
    )
  }
  
  export default Icono