"use client"
import React from 'react'
import styles from './ShowEmp.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeEmployee } from '../reduxToolkit/slice'

const ShowEmployees = () => {

  const dispatch = useDispatch();

  const employeeData = useSelector((data) => data.employeeData.employees)

  return (
    <div className={styles.container}> 
      <h2 className={styles.title}>Show Employees</h2>
      <ul>
        {employeeData.map((item) => (
          <li key={item.id}>
            <button 
              className={styles.button}
              onClick={() => dispatch(removeEmployee(item.id))}
            >
              Delete
            </button>
            <span>{item.name}</span>
            <br /><br />
          </li>))} 
      </ul>
      
    </div>
  )
}

export default ShowEmployees
