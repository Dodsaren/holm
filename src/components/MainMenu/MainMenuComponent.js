import React from 'react'
import Button from '../common/Button/Button'
import Header from '../common/Header/Header'
import styles from './main-menu-component.module.scss'

export default ({ initGame }) => (
  <section className={styles.section}>
    <Header>Frågesport</Header>
    <div className={styles.menu}>
      <Button icon="fwdArrow" onClick={initGame}>
        Spela
      </Button>
    </div>
  </section>
)
