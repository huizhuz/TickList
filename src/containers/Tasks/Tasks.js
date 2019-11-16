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
        showFinished: false
    }

    onFinishClick = (taskId, folderIndex) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        let finishedTaskIndex = allTasksToBeUpdated[folderIndex].tasks.findIndex(task => task.taskId === taskId);
        allTasksToBeUpdated[folderIndex].tasks[finishedTaskIndex].isFinished = !allTasksToBeUpdated[folderIndex].tasks[finishedTaskIndex].isFinished;
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    toggleFinished = () => {
        this.setState({showFinished: !this.state.showFinished});
    }

    render() {
        const currentFolderIndex = this.state.allTasks.findIndex(folder => folder.folderId === this.props.currentFolderId);
        var tasksElements = null;
        var initialTask = null;
        var finishedTasksElements = null;
        if (currentFolderIndex !== -1) {
            const tasks = this.state.allTasks[currentFolderIndex].tasks; // array of tasks in current folder
            tasksElements = tasks.map(task => {
                if (task.isFinished === false) {
                    return (<Task key={task.taskId} task={task} currentFolderIndex={currentFolderIndex}
                        finish={this.onFinishClick}></Task>)
                } else return null;
            })
        } else {
            initialTask = <div>Choose a folder to start</div>
        }
        if (currentFolderIndex !== -1) {
            const tasks = this.state.allTasks[currentFolderIndex].tasks;
            finishedTasksElements = tasks.map(task => {
                if (task.isFinished === true) {
                    return (<Task key={task.taskId} task={task} currentFolderIndex={currentFolderIndex}
                        finish={this.onFinishClick} bgColor="white"></Task>)
                } else return null;
            })
        }

        return (
            <div>
                <h1 className={styles.TasksTitle}>Tasks</h1>
                {currentFolderIndex !== -1 ? tasksElements : initialTask}
                <div className={styles.FinishedTasks}>
                    <h3 onClick={this.toggleFinished}>Finished list</h3>
                    {currentFolderIndex !== -1 && this.state.showFinished? finishedTasksElements : null}
                </div>
            </div>
        );
    }
}

export default Tasks;
