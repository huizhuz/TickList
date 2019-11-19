import React, { Component } from 'react';
import Task from './Task/Task';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
            },
            {
                folderId: 2,
                tasks: [
                    {
                        taskId: 0,
                        name: "hahaha",
                        isFinished: false,
                        priority: 0
                    },
                    {
                        taskId: 1,
                        name: "hohoho",
                        isFinished: false,
                        priority: 0
                    },
                ]
            }
        ],
        newTaskName: "",
        showFinishedTasks: false
    }

    newTaskNameUpdate = (e) => {
        this.setState({ newTaskName: e.target.value })
    }

    onAddNewTask = (folderIndex) => {
        if (this.state.newTaskName === "") {
            return;
        };
        const allTasksToBeUpdated = [...this.state.allTasks];
        let newTaskId;
        const currentTasks = allTasksToBeUpdated[folderIndex].tasks;
        if (currentTasks.length === 0) {
            newTaskId = 0;
        } else {
            newTaskId = currentTasks[currentTasks.length - 1].taskId + 1;
        }
        allTasksToBeUpdated[folderIndex].tasks.push({
            taskId: newTaskId,
            name: this.state.newTaskName,
            isFinished: false,
            priority: 0
        });
        this.setState({ allTasks: allTasksToBeUpdated, newTaskName: "" });
    }

    submitIfIsEnter = (e, folderIndex) => {
        let code = (e.keyCode ? e.keyCode : e.which);
        if (code === 13) {
            this.onAddNewTask(folderIndex);
        }
    }
    // return true/false: whether to show finished list or not
    toggleFinished = () => {
        this.setState({ showFinishedTasks: !this.state.showFinishedTasks });
    }

    onFinishClick = (taskId, folderIndex) => {
        setTimeout(() => {
            const allTasksToBeUpdated = [...this.state.allTasks];
            let finishedTaskIndex = allTasksToBeUpdated[folderIndex].tasks.findIndex(task => task.taskId === taskId);
            allTasksToBeUpdated[folderIndex].tasks[finishedTaskIndex].isFinished = !allTasksToBeUpdated[folderIndex].tasks[finishedTaskIndex].isFinished;
            this.setState({ allTasks: allTasksToBeUpdated });
        }, 400);
    }

    deleteTask = (taskId, folderIndex) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        let taskToBeDeletedIndex = allTasksToBeUpdated[folderIndex].tasks.findIndex(task => task.taskId === taskId);
        allTasksToBeUpdated[folderIndex].tasks.splice(taskToBeDeletedIndex, 1);
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    addFolder = (newFolderId) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        allTasksToBeUpdated.push({
            folderId: newFolderId,
            tasks: []
        })
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    deleteFolder = (folderId) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        const folderIndex = this.state.allTasks.findIndex(folder => folder.folderId === folderId);
        allTasksToBeUpdated.splice(folderIndex, 1);
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    editTaskName = (e, folderIndex, taskId) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        const taskIndex = allTasksToBeUpdated[folderIndex].tasks.findIndex(task => task.taskId === taskId);
        allTasksToBeUpdated[folderIndex].tasks[taskIndex].name = e.target.value;
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    setPriority = (taskId, folderIndex) => {
        const allTasksToBeUpdated = [...this.state.allTasks];
        const taskIndex = allTasksToBeUpdated[folderIndex].tasks.findIndex(task => task.taskId === taskId);
        allTasksToBeUpdated[folderIndex].tasks[taskIndex].priority = 1 - allTasksToBeUpdated[folderIndex].tasks[taskIndex].priority;
        this.setState({ allTasks: allTasksToBeUpdated });
    }

    render() {
        // find the index of current folder's tasks in the allTasks array
        const currentFolderIndex = this.state.allTasks.findIndex(folder => folder.folderId === this.props.currentFolderId);

        // initialize JSX elements
        var tasksElements = null;
        var highPriorityElements = null;
        var lowPriorityElements = null;
        var initialTask = null;
        var finishedTasksElements = null;
        var showFinishedButton = false;
        var addNewTask = null;
        // array of tasks in current folder
        if (currentFolderIndex !== -1) {
            const tasks = this.state.allTasks[currentFolderIndex].tasks;
            addNewTask = (
                <div className={styles.AddTask} key="add">
                    <input type="text" value={this.state.newTaskName}
                        onChange={(e) => this.newTaskNameUpdate(e)}
                        onKeyPress={(e) => this.submitIfIsEnter(e, currentFolderIndex)}
                    ></input>
                    <FontAwesomeIcon className={styles.Icon}
                        onClick={() => this.onAddNewTask(currentFolderIndex)}
                        icon={faPlus} />
                </div>
            )
            if (tasks.length !== 0) {

                highPriorityElements = tasks.map(task => {
                    if(task.isFinished === false && task.priority === 1) {
                        return (<Task key={task.taskId} task={task}
                            currentFolderIndex={currentFolderIndex}
                            finish={this.onFinishClick} deleteTask={this.deleteTask}
                            editTaskName={this.editTaskName}
                            setPriority={this.setPriority}
                            ></Task>)
                    } else return null;
                });

                lowPriorityElements = tasks.map(task => {
                    if(task.isFinished === false && task.priority === 0) {
                        return (<Task key={task.taskId} task={task}
                            currentFolderIndex={currentFolderIndex}
                            finish={this.onFinishClick} deleteTask={this.deleteTask}
                            editTaskName={this.editTaskName}
                            setPriority={this.setPriority}
                            ></Task>)
                    } else return null;
                });
                tasksElements = [highPriorityElements, lowPriorityElements];
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
                tasksElements = (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>Start adding your tasks!</div>
                )
            }
        } else {
            initialTask = <div>Choose a folder to start</div>
        }


        return (
            <div>
                <h1 className={styles.TasksTitle}>Tasks</h1>
                {currentFolderIndex !== -1 ? [addNewTask, tasksElements] : initialTask}
                <div className={styles.FinishedTasks}>
                    {showFinishedButton ? <h3 onClick={this.toggleFinished}>Finished list</h3> : null}
                    {currentFolderIndex !== -1 && this.state.showFinishedTasks ? finishedTasksElements : null}
                </div>
            </div>
        );
    }
}

export default Tasks;
