const express = require('express');

const checklistDependentRoute = express.Router();

const Checklist = require('../models/checklist')
const Task = require('../models/task')

checklistDependentRoute.get('/:id/tasks/new', async(req, res) => {
    try {
        let task = Task()
        res.status(200).render('tasks/new', { checklistId: req.params.id, task: task })
    } catch (error) {
        res.status(422).render('pages/error', { error: 'Erro ao criar a task' })
    }
})

module.exports = { checklistDependent :checklistDependentRoute}