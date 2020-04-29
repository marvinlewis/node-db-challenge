const router = require('express').Router();
const db = require('./project-model');


router.get('/', (req, res) => {
    db.getTask()
        .then(task => {
            res.status(200).json({
                data : task
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
})

router.post('/', (req, res) => {
    const tasks = req.body;
    console.log(req.body);
    db.addTask(tasks)
        .then(task => {
            res.status(200).json({
                data : task
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error : err
            })
        })
})

module.exports = router;