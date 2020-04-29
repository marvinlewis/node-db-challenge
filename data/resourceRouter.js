const router = require('express').Router();
const db = require('./project-model');


router.get('/', (req, res) => {
    db.getResource()
        .then(resource => {
            res.status(200).json({
                data : resource
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
})

router.post('/', (req, res) => {
    const resources = req.body;
    console.log(req.body);
    db.addResource(resources)
        .then(resource => {
            res.status(200).json({
                data : resource
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
})

module.exports = router;