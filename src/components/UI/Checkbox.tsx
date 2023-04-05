import React from "react"

interface CheckboxProps {
  isActive: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({ isActive }) => {
  return (
    <div className='checkbox'>
      {isActive && <div className='checkbox_active' />}
    </div>
  )
}

export default Checkbox
