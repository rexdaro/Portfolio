import mail from '../../../public/icon/mail_ico.svg'



function Contacto({clase}) {

    return (
        <>
            <div className="div_contacto">
                    <img src="" alt="" />
                    <h4>¿Quieres contactar conmigo?</h4>
                    <h5>¡Hablemos!</h5>

                    
                    <a className='boton_enviar' href="">
                        <img className='ico_mail' src={mail} alt="mail" />
                        <h2 >
                            Contactame aquí
                        </h2>                        
                    </a>
                    
                    
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