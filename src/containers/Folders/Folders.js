import React, { Component } from 'react';
import Folder from './Folder/Folder';
import Aux from '../../hoc/Aux'
import Tasks from '../Tasks/Tasks'

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
        isEditing: false,
        currentFolderId: -1,
        editingFolderName: false,
    }

    showFolderInput = () => {
        this.setState({ isEditing: true });
    }

    newFolderNameUpdate = (e) => {
        this.setState({ newFolderName: e.target.value });
    }

    submitIfIsEnter = (e) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if (code === 13) {
            this.addFolder();
        }
    }

    addFolder = () => {
        if (this.state.newFolderName === "") {
            return;
        }
        const foldersToBeUpdated = [...this.state.folders];
        let newFolderId;
        if (foldersToBeUpdated.length === 0) {
            newFolderId = 0;
        } else {
            newFolderId = foldersToBeUpdated[foldersToBeUpdated.length - 1].id + 1;
        }
        foldersToBeUpdated.push({
            id: newFolderId,
            name: this.state.newFolderName,
            taskQuantity: 0
        });
        this.setState({ folders: foldersToBeUpdated, newFolderName: "", isEditing: false });
    }

    editFolder = (id) => {
        this.setState({editingFolderName: true})
    }

    deleteFolder = (id) => {
        const foldersToBeUpdated = [...this.state.folders];
        const index = foldersToBeUpdated.findIndex(folder => folder.id === id);
        foldersToBeUpdated.splice(index, 1);
        this.setState({ folders: foldersToBeUpdated });
    }

    updateCurrentFolder = (id) => {
        this.setState({ currentFolderId: id });
    }


    render() {
        // JSX elements
        const folderElements = this.state.folders.map(eachFolder => {
            return (
                <Folder
                    updateCurrentFolder={this.updateCurrentFolder}
                    key={eachFolder.id}
                    folder={eachFolder}
                    editingFolderName={this.state.editingFolderName}
                    editFolder={this.editFolder}
                    deleteFolder={this.deleteFolder}></Folder>
            )
        });
        const plusSign = <FontAwesomeIcon
            onClick={this.showFolderInput}
            className={styles.AddFolderSign}
            icon={faPlusCircle} />;

        const addFolderInput =
            <div className={styles.AddFolderInput}>
                <input type="text" id="newFolder"
                    onChange={(e) => this.newFolderNameUpdate(e)}
                    onKeyPress={(e) => this.submitIfIsEnter(e)}></input>
                <FontAwesomeIcon className={styles.Icon}
                    onClick={this.addFolder}
                    icon={faPlus} />
            </div>

        return (
            <Aux>
                <div className={styles.FoldersContainer}>
                    <h1 className={styles.FolderTitle}>Folders</h1>
                    {folderElements}
                    <div className={styles.FolderControl}>
                        {this.state.isEditing ? addFolderInput : plusSign}
                    </div>
                </div>
                <div className={styles.TasksContainer}>
                    <Tasks currentFolderId={this.state.currentFolderId}></Tasks>
                </div>
            </Aux>
        );
    }
}

export default Folders;
