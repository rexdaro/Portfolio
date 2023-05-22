import playerZone from '../../../public/img/proyecto_playerZone.jpg'
import encriptador from '../../../public/img/proyecto_encriptador.jpg'
import cartas from '../../../public/img/proyecto_juegoCartas.jpg'
import portfolio from '../../../public/img/proyecto_portfolio.jpg'




import Proyecto from './componentes_proyectos/Proyecto'

function Proyectos({clase}) {

    return (
        <>
            <div className="div_iconos">
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                imagen={playerZone} 
                descripcion={'E-Comerce | PlayerZone'}
                />
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                imagen={encriptador} 
                descripcion={'Encriptador'}
                />
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                imagen={cartas} 
                descripcion={'BlackJack'}
                />
                <Proyecto 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                imagen={portfolio} 
                descripcion={'Portfolio'}
                />
                
            </div>
            
            
        </>
      
    )
  }
  
  export default Proyectos