import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Folder.module.css'

export default function Folder(props) {
    return (
        <div className={styles.Folder}>
            <div className={styles.FolderName} onClick={() => props.updateCurrentFolder(props.folder.id)}>
                <p>{props.folder.name}</p>
            </div>
            <FontAwesomeIcon
                className={styles.Icon}
                onClick={() => props.deleteFolder(props.folder.id)}
                icon={faTrashAlt} />
        </div>
    )
}
