import React, {useReducer} from 'react'
import { Route, NavLink } from 'react-router-dom'

import AddProductForm from '../components/AddProductForm'
import { AdminReducer } from '../reducers/adminReducer'

const Admin = () => {
  const [state, dispatch] = useReducer(AdminReducer, {
    departments: []
  })
  return (
    <div>
      <NavLink to='/products'>Products</NavLink>
      <Route path='/products' component={() => (
        <AddProductForm departments={state.departments} />
      )} />
    </div>
  )
}

export default Admin