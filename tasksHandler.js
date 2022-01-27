const fs = require('fs');
let tasks = require('./tasks.json');

const tasksHandler = {
    getAllTasks() {
        return tasks;
    },
    getTask(id) {
        return tasks.find(task => task.id === id);
    },
    addTask(obj) {
        const updatedObj = [...tasks, obj]
        fs.writeFile('tasks.json', JSON.stringify(updatedObj), (err) => {
            if (err) console.log(err);
        })
    },
    changeTask(id, newStatus) {
        const task = tasks.find(task => task.id === id);
        task.status = newStatus;
    },
    deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id)
        const updatedObj = [...tasks]
        fs.writeFile('tasks.json', JSON.stringify(updatedObj), (err) => {
            if (err) console.log(err);
        })
    }
}

module.exports.tasksHandler = tasksHandler;