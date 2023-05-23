import mail from '../../../public/icon/mail_ico.svg'
import foto_manu from '../../../public/img/foto_manu.jpg'


function Contacto({clase}) {

    return (
        <>
            <div className="div_contacto">
                    <div className="div_img_manu_footer">
                        <div className="animacion_imagen_manu_footer">
                            <img src={foto_manu} alt="Manuel Rivas" className="img_manu_footer"></img>
                        </div>
                    </div>
                    <h4>¿Quieres contactar conmigo?</h4>
                    <h5>¡Hablemos!</h5>

                    <div className='div_boton'>
                        <a className='boton_enviar' href="mailto:rexdaro@gmail.com">
                            <img className='ico_mail' src={mail} alt="mail" />
                            <h2 >
                                Contactame aquí
                            </h2>                        
                        </a>
                    </div>
                    
                    
                    
            </div>
            <div className='footer'>

                <h5>Copyright  | Coded with  by Manuel Rivas</h5>


                <div className='iconos_footer'>

                </div>

            </div>
            
        </>

        
      
    )
  }
  
  export default Contacto