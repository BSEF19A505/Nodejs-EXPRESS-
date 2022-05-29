const express = require('express');
const router = express.Router;
const members = module.require('../../members')
router.get('/', (req, res) => { //get all members
    // res.send("<h1>Hello WOrld</h1>");
    res.json(members); //get all members
})
router.get('/:id', (req, res) => { //get single member using id
    const found = members.some(members => members.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(members => members.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: 'Member not found' });
    }

});
module.exports = router;