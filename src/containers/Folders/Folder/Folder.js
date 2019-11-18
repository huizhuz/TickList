import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Folder.module.css'

export default function Folder(props) {
    var activeClass;
    if(props.chosenFolderId === props.folder.id){
        activeClass = styles.Chosen;
    }
    return (
        <div className={[styles.Folder, activeClass].join(" ")}>
            <div className={styles.FolderName} onClick={() => props.updateCurrentFolder(props.folder.id)}>
                <p>{props.folder.name}</p>
            </div>
            <div className={[styles.Icon, styles.Lift].join(" ")}>
                <FontAwesomeIcon
                onClick={() => props.editFolder(props.folder.id)}
                icon={faPencilAlt} />
            </div> 
            <FontAwesomeIcon
                className={[styles.Icon,styles.Shake].join(" ")}
                onClick={() => props.deleteFolder(props.folder.id)}
                icon={faTrashAlt} />
        </div>
    )
}
