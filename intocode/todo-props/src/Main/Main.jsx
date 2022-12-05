import React from "react"
import styles from "./Main.module.css"

function Main ({tasks, setTasks}) {

    function del (i) {
        const filtered = tasks.filter((item, index) => {
            if (index === i) return false
            else return true
        })

        setTasks(filtered)
    }

    function makeComplete (i) {
        const newTasks = tasks.map((item, index) => {
            if (i === index && (item.completed === true || item.completed === false))
            return {...item, completed: !item.completed}
            else return item
        })
        setTasks(newTasks)
    }
    
    const newTasks = tasks.map((item, index) => {

         let textLine = item.completed ? `${styles.text} ${styles.complete}` : styles.text
         let checkButton = item.completed ? "⬛️" : "🔲"

        return (
            <div className={styles.tasks}>
                <div className={styles.task}>
                    <button className={styles.check} onClick={() => makeComplete(index)}>{checkButton}</button>
                    <p className={textLine}>{item.text}</p>
                    <button className={styles.button} onClick={() => del(index)}>❌</button>
                </div>
            </div> 
        )
    })
    return newTasks
}

export default Main