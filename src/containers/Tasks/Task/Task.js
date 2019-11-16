import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Task.module.css'

export default function Task(props) {
    return (
        <div className={styles.TaskContainer} style={{backgroundColor: props.bgColor}}>
            <div className={styles.TaskEntry}>
                <input type="checkbox" checked={props.task.isFinished}
                    id={props.currentFolderIndex+'_'+props.task.taskId}
                    onChange={() => props.finish(props.task.taskId, props.currentFolderIndex)}></input>
                <label htmlFor={props.currentFolderIndex+'_'+props.task.taskId}>{props.task.name}</label>
            </div>
            <div className={[styles.Icon, styles.Lift].join(" ")}>
                <FontAwesomeIcon
                // onClick={() => props.deleteFolder(props.folder.id)}
                icon={faPencilAlt} />
            </div> 
            <FontAwesomeIcon
                className={styles.Icon}
                // onClick={() => props.deleteFolder(props.folder.id)}
                icon={faTrashAlt} />
        </div>
    )
}
