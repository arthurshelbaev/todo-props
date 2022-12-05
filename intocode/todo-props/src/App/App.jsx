import React, { useState } from "react"
import Header from "../Header/Header"
import Main from "../Main/Main"
import taskBase from "../Tasks"
import styles from "./App.module.css"

function App () {
    
    const [tasks, setTasks] = useState(taskBase)

    return (
        <div className={styles.body}>
        <Header tasks={tasks} setTasks={setTasks}/>
        <Main tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default App