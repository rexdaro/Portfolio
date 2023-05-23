import Card from "./Card"
import foto_manu from '../../../public/img/foto_manu.jpg'


function Principal() {

    return (
      <>
        <div id='inicio' className="div_componentePrincipal">
          <Card clase={'div_card'}/> 
          <div className="div_img_manu">
            <div className="animacion_imagen_manu">
              <img src={foto_manu} alt="Manuel Rivas" className="img_manu"></img>
            </div>
          </div>
            
        </div>

        
          
        
      </>
      
    )
  }
  
  export default Principal