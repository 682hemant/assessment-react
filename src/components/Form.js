import React from 'react'
import styles from '../assets/Form.module.css'

const Form = ({formSubmitHandler,userName,nameChangeHandler}) => {
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>username</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Add username to the surprise box"
          value={userName}
          onChange={nameChangeHandler}
        />
        <button className={styles.button}>Add name</button>
      </form>
    </div>
  )
}
export default Form;
