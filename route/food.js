const express = require('express')
const { getAllPosts } = require('../controller/food')

const router = express.Router()

router.get('/', getAllFoods)

module.exports = router