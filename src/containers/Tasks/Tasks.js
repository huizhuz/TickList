import React, { Component } from 'react';
import Task from './Task/Task';

import styles from './Tasks.module.css';
export class Tasks extends Component {
    state = {
        allTasks: [
            {
                folderId: 0,
                tasks: [
                    {
                        taskId: 0,
                        name: "add my todo",
                        isFinished: false,
                        priority: 0
                    },
                    {
                        taskId: 1,
                        name: "delete my todo",
                        isFinished: false,
                        priority: 0
                    },
                ]
            },
            {
                folderId: 1,
                tasks: [
                    {
                        taskId: 0,
                        name: "addddd",
                        isFinished: false,
                        priority: 0
                    },
                    {
                        taskId: 1,
                        name: "deleteeeee",
                        isFinished: false,
                        priority: 0
                    },
                ]
            }
        ],
        showFinishedTasks: false
    }

    onFinishClick = (taskId, folderIndex) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        let finishedTaskIndex = allTasksToBeUpdated[folderIndex].tasks.findIndex(task => task.taskId === taskId);
        allTasksToBeUpdated[folderIndex].tasks[finishedTaskIndex].isFinished = !allTasksToBeUpdated[folderIndex].tasks[finishedTaskIndex].isFinished;
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    deleteTask = (taskId, folderIndex) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        let taskToBeDeletedIndex = allTasksToBeUpdated[folderIndex].tasks.findIndex(task => task.taskId === taskId);
        allTasksToBeUpdated[folderIndex].tasks.splice(taskToBeDeletedIndex,1);
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    deleteFolder = (folderId) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        const folderIndex = this.state.allTasks.findIndex(folder => folder.folderId === folderId);
        allTasksToBeUpdated.splice(folderIndex,1);
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    toggleFinished = () => {
        this.setState({ showFinishedTasks: !this.state.showFinishedTasks });
    }

    render() {
        // find the index of current folder's tasks in the allTasks array
        const currentFolderIndex = this.state.allTasks.findIndex(folder => folder.folderId === this.props.currentFolderId);

        // initialize JSX elements
        var tasksElements = null;
        var initialTask = null;
        var finishedTasksElements = null;
        var showFinishedButton = false;
        // array of tasks in current folder
        if (currentFolderIndex !== -1) {
            const tasks = this.state.allTasks[currentFolderIndex].tasks;
            tasksElements = tasks.map(task => {
                if (task.isFinished === false) {
                    return (<Task key={task.taskId} task={task} currentFolderIndex={currentFolderIndex}
                        finish={this.onFinishClick} deleteTask={this.deleteTask}></Task>)
                } else return null;
            })
            // array of finished tasks in current folder
            finishedTasksElements = tasks.map(task => {
                if (task.isFinished === true) {
                    return (<Task key={task.taskId} task={task} currentFolderIndex={currentFolderIndex}
                        finish={this.onFinishClick} deleteTask={this.deleteTask} bgColor="white"></Task>)
                } else return null;
            })
            // value to toggle the finished list button
            showFinishedButton = tasks.reduce((finishedExist, task) => {
                return finishedExist || task.isFinished;
            }, false);
        } else {
            initialTask = <div>Choose a folder to start</div>
        }


        return (
            <div>
                <h1 className={styles.TasksTitle}>Tasks</h1>
                {currentFolderIndex !== -1 ? tasksElements : initialTask}
                <div className={styles.FinishedTasks}>
                    {showFinishedButton? <h3 onClick={this.toggleFinished}>Finished list</h3> : null}
                    {currentFolderIndex !== -1 && this.state.showFinishedTasks ? finishedTasksElements : null}
                </div>
            </div>
        );
    }
}

export default Tasks;
