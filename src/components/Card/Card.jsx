import "./styles.css"
import styles from "./Card.module.sass"

const Card = () => {
  const textStyles = {
    color: "blue",
    fontSize: "2rem",
    textAlign: "center",
    marginTop: "1rem"
  }

  return (
    <>
      <div className="card">
        Soy una card !
      </div>
      <div className={styles.card}>
        Soy una card 2!
      </div>
      <div className="card">
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*upEqPV2WWQYQleWr.jpg"
          alt="Logo de React"
          className={styles.image}
        />
        <h3 className={styles.title}>React</h3>
        <p className={styles.description}>
          React es una librería de JavaScript para construir interfaces de usuario
          basadas en componentes, con un renderizado eficiente y un flujo de datos
          predecible.
        </p>
      </div>

      <div style={{ ...textStyles }}>
        Hola soy un texto con estilos en línea spread operator !
      </div>

      <div style={textStyles}>
        Hola soy un texto con estilos en línea destructurado !
      </div>
    </>
  )
}

export default Card;