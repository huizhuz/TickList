import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faCheck, faFlag as faFlagChosen } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

import styles from './Task.module.css'

export default function Task(props) {

    const [isEditing, setEditing] = useState(false);
    const [fadeout, setFadeout] = useState(false);

    var fadeoutStyle = fadeout ? styles.FadeOut : null;

    const taskDisplay = (
        <div className={[styles.TaskContainer, fadeoutStyle].join(" ")} style={{ backgroundColor: props.bgColor }}>
            <div className={styles.TaskEntry}>
                <input type="checkbox" checked={props.task.isFinished}
                    id={props.currentFolderIndex + '_' + props.task.taskId}
                    onChange={() => {
                        setFadeout(!fadeout);
                        props.finish(props.task.taskId, props.currentFolderIndex)
                    }}></input>
                <label htmlFor={props.currentFolderIndex + '_' + props.task.taskId}>{props.task.name}</label>
            </div>
            {props.task.isFinished ? null :
                props.task.priority === 1 ?
                    <FontAwesomeIcon
                        className={styles.Icon}
                        onClick={() => props.setPriority(props.task.taskId, props.currentFolderIndex)}
                        icon={faFlagChosen} /> :
                    <FontAwesomeIcon
                        className={styles.Icon}
                        onClick={() => props.setPriority(props.task.taskId, props.currentFolderIndex)}
                        icon={faFlag} />
            }
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
