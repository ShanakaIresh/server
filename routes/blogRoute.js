const express = require('express')
const router = express.Router()
const blogController = require('../controller/blogController.js')

router.route('/getBlogs').get(blogController.getBlogs)
router.route('/postBlogs').post(blogController.postBlogs)
router.route('/deleteBlogs').delete(blogController.deleteBlogs)

module.exports = router