const express = require('express')
const storeRoute = require('../controller/store.controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

router.get('/store/order', storeRoute.listOrder)
router.post('/store/order', storeRoute.insertOrder)
router.put('/store/order/:id', storeRoute.updateOrder)
router.delete('/store/order/:id', storeRoute.deleteOrder)

module.exports = router