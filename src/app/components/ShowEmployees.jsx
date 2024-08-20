"use client"
import React from 'react'
import styles from './ShowEmp.module.css'
import { useSelector } from 'react-redux'

const ShowEmployees = () => {

  const employeeData = useSelector((data) => data.employees)

  return (
    <div className={styles.container}> 
      <h2 className={styles.title}>Show Employees</h2>
      <ul>
        {employeeData.map((item) => (<li key={item.id}>{item.name}</li>))}
      </ul>
      
    </div>
  )
}

export default ShowEmployees
