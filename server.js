const express = require('express');
const bodyParser = require('body-parser');
const {tasksHandler} = require('./tasksHandler')
const {usersHandler} = require('./usersHandler')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Tasks API
app.get('/tasks', (req, res) => {
    const tasks = tasksHandler.getAllTasks()
    res.send(tasks);
})

app.get('/tasks/:id', (req, res) => {
    const task = tasksHandler.getTask(+req.params.id)
    res.send(task);
})

app.post('/tasks', (req, res) => {
    const task = {
        id: +req.body.id,
        title: req.body.title,
        status: req.body.status
    }
    tasksHandler.addTask(task)
    res.send('Post data')
})

app.put('/tasks/:id', (req, res) => {
    tasksHandler.changeTask(+req.params.id, req.body.status)
    res.sendStatus(200);
})

app.delete('/tasks/:id', (req, res) => {
    tasksHandler.deleteTask(+req.params.id)
    res.sendStatus(200);
})



//Users API
app.get('/users', (req, res) => {
    const users = usersHandler.getAllUsers()
    res.send(users);
})

app.get('/users/:id', (req, res) => {
    const user = usersHandler.getUser(+req.params.id)
    res.send(user);
})

app.post('/users', (req, res) => {
    const user = {
        id: +req.body.id,
        name: req.body.name,
        age: +req.body.age
    }
    usersHandler.addUser(user)
    res.send('Post data')
})

app.put('/users/:id', (req, res) => {
    usersHandler.changeUser(+req.params.id, req.body.age)
    res.sendStatus(200);
})

app.delete('/users/:id', (req, res) => {
    usersHandler.deleteUser(+req.params.id)
    res.sendStatus(200);
})



app.listen(7000, () => {
    console.log('API app started...')
})