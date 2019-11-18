import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './Folder.module.css'
import { is } from '@babel/types';

export default function Folder(props) {
    var activeClass;
    if (props.chosenFolderId === props.folder.id) {
        activeClass = styles.Chosen;
    }
    var isEditting = false;
    if (props.idOfFolderBeingEditted === props.folder.id){
        isEditting = true;
    }

    const folderDisplay = (
        <div className={[styles.Folder, activeClass].join(" ")}>
            <div className={styles.FolderName} onClick={() => props.updateCurrentFolder(props.folder.id)}>
                <p>{props.folder.name}</p>
            </div>
            <div className={[styles.Icon, styles.Lift].join(" ")}>
                <FontAwesomeIcon
                    onClick={() => props.changeBeingEdittedFolderId(props.folder.id)}
                    icon={faPencilAlt} />
            </div>
            <FontAwesomeIcon
                className={[styles.Icon, styles.Shake].join(" ")}
                onClick={() => props.deleteFolder(props.folder.id)}
                icon={faTrashAlt} />
        </div>);
    const folderEdit = (
        <div className={styles.Folder}>
            <input type="text" value={props.folder.name}
                onChange={(e) => props.updateFolderName(e, props.folder.id)}
                onKeyPress={(e) => props.updateIfIsEnter(e, props.folder.id)}></input>
            <FontAwesomeIcon className={styles.PlusSign}
                // onClick={this.addFolder}
                icon={faPlus} />
        </div>
    );
    return isEditting ? folderEdit : folderDisplay;
}
