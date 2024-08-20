"use client"
import React, { useState } from 'react'
import styles from "./AddEmp.module.css"
import { useDispatch } from 'react-redux';
import { addEmployee } from '../reduxToolkit/slice';


const AddEmployees = () => {

  const [empName, setEmpName] = useState("");
  const dispatch = useDispatch()

  const dataDispatch = () => {
    dispatch(addEmployee(empName))
    setEmpName("")
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Employees</h2>
      <input 
        className={styles.input}
        type="text" 
        value={empName}
        placeholder="Enter Employee Data"
        onChange={(e) => setEmpName(e.target.value)}
      />
      <br />
      <button 
        className={styles.button}
        onClick={dataDispatch}
      >
        Add Employee
      </button>
    </div>
  )
}

export default AddEmployees
