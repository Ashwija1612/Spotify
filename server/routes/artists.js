const router = require('express').Router();
const con = require('../config')

router.get('/', (req, res) => {

    con.query('SELECT * from artists', (err, result) => {
        if (err) throw err;
        // res.status(200).json(result)
        if (!err) {
            res.status(200).json(result)
        } else {
            console.log(err)
        }
        if(err) throw err
            console.log('The data from artists table are: \n', result)
    })

})

router.delete('/:id', (req, res) => {
    con.query('DELETE FROM artists WHERE id = ?', [req.params.id], (err, result) => {
        if (err) throw err;
        
        if (!err) {
            res.status(req.params.id).json(result)
        } else {
            console.log(err)
        }
        if(err) throw err
            console.log('The deleted from artists table are: \n', result)
    })
})

router.post('/', (req, res) => {
    const params = req.body
    con.query('INSERT INTO artists SET ?', params, (err, result) => {
        if (err) throw err;

        if (!err) {
            res.status('Artists with the record ID  has been added').json(result)
        } else {
            console.log(err)
        }
        if(err) throw err
            console.log('The data from artists table are: \n', result)
    })
})

router.put('/:id', (req, res) => {
    console.log(`connected as id ${connection.threadId}`)
    const {id, name, dob, bio} = req.body
    con.query('UPDATE songs SET name = ?, dob = ?, bio = ? WHERE id = ?', [name, dob, bio, id], (err, result) => {
        if (err) throw err;
        
        if (!err) {
            res.status(`Artists with the name: ${name} has been added.`).json(result)
        } else {
            console.log(err)
        }
        if(err) throw err
            console.log('The data from songs table are: \n', req.body)
    })

})

module.exports = router;