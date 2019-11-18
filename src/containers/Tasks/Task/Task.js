import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Task.module.css'

export default function Task(props) {

    const [isEditing, setEditing] = useState(false)

    const taskDisplay = (
        <div className={styles.TaskContainer} style={{ backgroundColor: props.bgColor }}>
            <div className={styles.TaskEntry}>
                <input type="checkbox" checked={props.task.isFinished}
                    id={props.currentFolderIndex + '_' + props.task.taskId}
                    onChange={() => props.finish(props.task.taskId, props.currentFolderIndex)}></input>
                <label htmlFor={props.currentFolderIndex + '_' + props.task.taskId}>{props.task.name}</label>
            </div>
            {props.task.isFinished ? null :
                <div className={[styles.Icon, styles.Lift].join(" ")}>
                    <FontAwesomeIcon
                        onClick={() => { setEditing(!isEditing) }}
                        icon={faPencilAlt} />
                </div>
            }
            <FontAwesomeIcon
                className={[styles.Icon, styles.Shake].join(" ")}
                onClick={() => props.deleteTask(props.task.taskId, props.currentFolderIndex)}
                icon={faTrashAlt} />
        </div>
    )
    const taskEdit = (
        <div className={styles.TaskContainer}>
            <div className={styles.TaskEntry}>
                <input type="checkbox" checked={props.task.isFinished} disabled="true"></input>
                <input className={styles.EditField} type="text" value={props.task.name}
                    onChange={(e) => props.editTaskName(e, props.currentFolderIndex, props.task.taskId)}
                    onKeyPress={(e) => {
                        let code = (e.keyCode ? e.keyCode : e.which);
                        if (code === 13) {
                            setEditing(!isEditing)
                        }
                    }}
                ></input>
            </div>
            <FontAwesomeIcon className={styles.Icon}
                onClick={() => { setEditing(!isEditing) }}
                icon={faCheck} />
        </div>
    )

    return isEditing ? taskEdit : taskDisplay
}
