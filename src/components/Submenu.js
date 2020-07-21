import React, { useState } from 'react'

import '../theme/Submenu.module.css'

export default ({title, children}) => {
  const [toggled, set] = useState(false)

  return (
    <div className={`submenu${toggled ? " toggled": ""}`}>
      <h4 onClick={() => set(!toggled)}>{title}</h4>
      <ul>
        {React.Children.map(children, child => <li>{React.cloneElement(child)}</li>)}
      </ul>
    </div>
  )
}