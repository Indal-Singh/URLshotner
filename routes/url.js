const express = require('express')
const router = express.Router()
const { handelShortID, handelRedirect } = require('../controllers/url')

router.get('/',(req,res)=>{
    res.render('home/index');
})

router.post('/url',handelShortID)

router.get('/:shortID',handelRedirect)

module.exports = router;