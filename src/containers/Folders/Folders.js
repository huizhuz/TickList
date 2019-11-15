import React, { Component } from 'react';
import Folder from './Folder/Folder';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './Folders.module.css';

export class Folders extends Component {
    state = {
        folders: [
            { id: 0, name: "school", taskQuantity: 0 },
            { id: 1, name: "work", taskQuantity: 0 },
            { id: 2, name: "grocery", taskQuantity: 0 },
        ],
        newFolderName: "",
        isEditing: false
    }

    showFolderInput = () => {
        this.setState({ isEditing: true });
    }

    newFolderNameUpdate = (e) => {
        this.setState({newFolderName: e.target.value});
    }

    addFolder = () => {
        const foldersToBeUpdated = [...this.state.folders];
        const newFolderId = foldersToBeUpdated[foldersToBeUpdated.length-1].id + 1;
        foldersToBeUpdated.push({
            id: newFolderId,
            name: this.state.newFolderName,
            taskQuantity: 0
        });
        this.setState({ folders: foldersToBeUpdated, newFolderName: "", isEditing: false });
    }

    render() {
        // JSX elements
        const folderElements = this.state.folders.map(eachFolder => {
            return (
                <Folder
                    key={eachFolder.id}
                    folderProps={eachFolder}></Folder>
            )
        });
        const plusSign = <FontAwesomeIcon
            onClick={this.showFolderInput}
            className={styles.AddFolderSign}
            icon={faPlusCircle} />;
        
        const addFolderInput = 
            <div className={styles.AddFolderInput}>
                <input type="text" id="newFolder" onChange={(e) => this.newFolderNameUpdate(e)}></input>
                <FontAwesomeIcon
                    onClick={this.addFolder}
                    icon={faPlus} />
            </div>

        return (
            <div className={styles.FoldersContainer}>
                <h1 className={styles.FolderTitle}>Folders</h1>
                {folderElements}
                <div className={styles.FolderControl}>
                    {this.state.isEditing ? addFolderInput : plusSign}
                </div>
            </div>
        );
    }
}

export default Folders;
