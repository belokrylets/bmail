import React from "react"

interface CheckboxProps {
  isActive: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ isActive }) => {
  return (
    <div className="checkbox__wrapper">
      {isActive && <div className="active" />}
    </div>
  )
}

export default Checkbox
