function Button_menu({text, enlace, clase}) {

    return (
      <a className={clase} href={enlace}>
      <p>{text}</p>
      </ a>
    )
  }
  
  export default Button_menu