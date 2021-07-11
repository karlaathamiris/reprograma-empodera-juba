const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({
        title: "Empodera a Juba - Projeto Final {reprograma}",
        version: "1.0.0",
        message: "Seja bem vinde a nossa API 🦁"
    })
})

module.exports = router