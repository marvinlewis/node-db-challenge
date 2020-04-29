const router = require('express').Router();
const db = require('./project-model');


router.get('/', (req, res) => {
    db.getProject()
        .then(projects => {
            res.status(200).json({
                data : projects
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
})

router.post('/', (req, res) => {
    const project = req.body;
    console.log(req.body);
    db.addProject(project)
        .then(response => {
            res.status(200).json({
                data : response
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
})

module.exports = router; 