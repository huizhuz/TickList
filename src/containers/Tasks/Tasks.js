import React, { Component } from 'react';

export class Tasks extends Component {
    state = {
        allTasks: [
            {
                folderId: "",
                tasks: [
                    {
                        name: "add my todo",
                        isFinished: false,
                        priority: 0
                    },
                    {
                        name: "delete my todo",
                        isFinished: false,
                        priority: 0
                    },
                ]
            }
        ],
        currentFolderId: this.props.currentFolderId,
        currentTasks: [],
    }

    render() {
        return (
            <div>
                {this.props.currentFolderId}
            </div>
        );
    }
}

export default Tasks;
