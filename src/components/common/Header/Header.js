import React from 'react'
import S from './header.module.scss'

const Header = ({ children }) => <h1 className={S.header}>{children}</h1>

export default Header
