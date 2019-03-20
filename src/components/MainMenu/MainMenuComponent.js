import React from 'react'
import Button from '../common/Button/Button'
import styles from './main-menu-component.module.scss'

export default ({ initGame }) => (
  <section className={styles.section}>
    <h1 className={styles.header}>Frågesport</h1>
    <div className={styles.menu}>
      <Button icon="fwdArrow" onClick={initGame}>
        Spela
      </Button>
    </div>
  </section>
)
