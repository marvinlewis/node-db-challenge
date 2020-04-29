const db = require('./dbConfig.js');

module.exports = {
    addResource, 
    getResource,
    addProject,
    getProject,
    addTask,
    getTask
};

function addResource(item) {
    return db('resource').insert(item);
};

function getResource() {
    return db('resource');
};

function addProject(item) {
    return db('project').insert(item);
};

function getProject() {
    return db('project');
};

function addTask(item) {
    return db('task').insert(item);
};

function getTask() {
    return db('task')
    .join('project', 'project.id', 'task.projectId')
    .select('project.name', 'project.description', 'task.description', 'task.notes', 'task.completed', 'task.projectId')
    
};