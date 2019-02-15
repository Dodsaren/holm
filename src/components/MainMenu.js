import React from 'react'
import styles from './start.scss'

const MainMenu = ({ startGame }) => (
  <section class={styles.section}>
    <h1>Välkommen till startskärmen</h1>
    <button onClick={startGame}>Klicka här för att starta spelet</button>
  </section>
)

export default MainMenu
