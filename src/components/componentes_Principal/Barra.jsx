
import Button_menu from "./botones/Button_menu";



function Barra() {

    return (
      <div className="barra">
        
        
        <div className="div_barra">
          <Button_menu text='Manuel Rivas' enlace={'#inicio'} clase={"boton_principal"} ></Button_menu>
          <Button_menu text='Habilidades' enlace={'#Habilidades'} clase={"boton_menu"} ></Button_menu>
          <Button_menu text='Formacion' enlace={'#Formacion'} clase={"boton_menu"} ></Button_menu>
          <Button_menu text='Proyectos' enlace={'#Proyectos'} clase={"boton_menu"} ></Button_menu>
          <Button_menu text='Contacto' enlace={'#Contacto'} clase={"boton_menu"} ></Button_menu>
        </div>
      </div>
    )
  }
  
  export default Barra

