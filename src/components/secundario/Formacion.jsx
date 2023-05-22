import alura from '../../../public/img/formacion-Alura.png'
import frecodecamp from '../../../public/img/formacion-frecodecamp.png'
import javascript from '../../../public/img/formacion-javascript.png'
import react from '../../../public/img/react-udemy.png'




import Icono from './componentes_iconos/Icono'

function Formacion({clase}) {

    return (
        <>
            <div className="div_iconos">
                <Icono 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                icono={alura} 
                descripcion={'Full-Stack Developer'}
                />
                <Icono 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                icono={frecodecamp} 
                descripcion={'Diferentes Cursos'}
                />
                <Icono 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                icono={javascript} 
                descripcion={'Javascript Moderno'}
                />
                <Icono 
                claseImg='img_formacion' 
                claseParrafo='parrafo_img_formacion' 
                icono={react} 
                descripcion={'React'}
                />
                
            </div>
            
            
        </>
      
    )
  }
  
  export default Formacion