import classNames from "classnames"
import React from "react"

interface ButtonProps {
  children: React.ReactNode
  isDisabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  width?: string
  variant?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  isDisabled,
  onClick,
  width,
  variant,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={classNames("primary__btn", `${width}`, `${variant}`)}
    >
      {children}
    </button>
  )
}

export default Button
