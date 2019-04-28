import React from 'react'
import style from './button.module.scss'
import { ReactComponent as CogWheelIcon } from './icon/cog-wheel.svg'
import { ReactComponent as FwdArrowIcon } from './icon/forward-arrow.svg'
import { ReactComponent as UserIcon } from './icon/user.svg'
import { ReactComponent as UsersIcon } from './icon/users.svg'

const Button = ({ children, icon, onClick }) => {
  const Icon = iconMapper[icon]
  return (
    <button className={style.button} onClick={onClick}>
      {Icon ? <Icon className={style.icon} /> : null}
      <span>{children}</span>
    </button>
  )
}

const iconMapper = {
  cogWheel: CogWheelIcon,
  fwdArrow: FwdArrowIcon,
  user: UserIcon,
  users: UsersIcon,
}

export default Button
