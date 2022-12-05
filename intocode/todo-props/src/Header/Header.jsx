import React from "react"
import { useState } from "react"
import styles from "./Header.module.css"

function Header ({tasks, setTasks}) {

    const [text, setText] = useState ('')

    function addTask (e) {
        e.preventDefault()
        if (text.length > 0) setTasks([{text: text, completed: false}, ...tasks])
        setText("")
    }

    return (
        <div className={styles.header}>
        <h2 className={styles.title}>Список дел</h2>
        <hr className={styles.line}/>
        <form className={styles.form}>
            <input placeholder="Введите текст..." className={styles.input} type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)}/>
            <button className={styles.button} onClick={addTask} >➕</button>
        </form>
        </div>
    )
}
 
export default Header