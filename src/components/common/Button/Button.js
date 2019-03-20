import React from 'react'
import style from './button.module.css'
import { ReactComponent as CogWheelIcon } from './icon/cog-wheel.svg'
import { ReactComponent as FwdArrowIcon } from './icon/forward-arrow.svg'
import { ReactComponent as UserIcon } from './icon/user.svg'
import { ReactComponent as UsersIcon } from './icon/users.svg'

const Button = ({ children, icon, onClick }) => (
  <button className={style.button} onClick={onClick}>
    {icon && iconMapper[icon] ? iconMapper[icon] : null}
    <span>{children}</span>
  </button>
)

const iconMapper = {
  cogWheel: <CogWheelIcon className={style.icon} />,
  fwdArrow: <FwdArrowIcon className={style.icon} />,
  user: <UserIcon className={style.icon} />,
  users: <UsersIcon className={style.icon} />,
}

export default Button
