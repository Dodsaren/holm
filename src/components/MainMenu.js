import React from 'react'
import styles from './start.module.scss'

const MainMenu = ({ initGame }) => (
  <section className={styles.section}>
    <h1>Välkommen till startskärmen</h1>
    <button onClick={initGame}>Klicka här för att starta spelet</button>
  </section>
)

export default MainMenu
