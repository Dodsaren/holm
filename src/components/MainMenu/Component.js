import React from 'react'
import styles from './component.module.scss'

export default ({ initGame }) => (
  <section className={styles.section}>
    <h1>Välkommen till startskärmen</h1>
    <button onClick={initGame}>Klicka här för att starta spelet</button>
  </section>
)
