import React from 'react'
import Button from '../common/Button/Button'
import styles from './component.module.scss'

export default ({ initGame }) => (
  <section className={styles.section}>
    <h1 className={styles.header}>Frågesport</h1>
    <div>
      <Button icon="fwdArrow" onClick={initGame}>
        Spela
      </Button>
    </div>
    <div>
      <Button icon="cogWheel">Inställningar</Button>
    </div>
    <Button icon="cogWheel">Knappen</Button>
  </section>
)
