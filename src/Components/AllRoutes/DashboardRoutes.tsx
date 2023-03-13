import React from 'react'
import { useRoutes } from 'react-router-dom'
import DashboardHome from '../Dashboard/DashboardHome'
import DashHeader from '../Dashboard/DashHeader'

const DashboardRoutes = () => {

  let element = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardHome />
    }
  ])

  return (
    <>
      <DashHeader />
      {element}
    </>
  )
}

export default DashboardRoutes