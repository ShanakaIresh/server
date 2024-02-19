const BlogModel = require('../model/blogModel.js')
const blogClz = new BlogModel.Blogs

const getBlogs = async (req, res) => {
    blogClz.getBlogs().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}

const deleteBlogs = async (req, res) => {
    blogClz.deleteBlogs(req.body.Blog_Id).then((data) => {
        res.send('success')
    }).catch((err) => {
        res.send('failed')
    })
}
const postBlogs = async (req, res) => {
    blogClz.postBlogs(req.body.data).then((data) => {
        res.send('success')
    }).catch((err) => {
        res.send('failed')
    })
}



module.exports = { getBlogs, deleteBlogs, postBlogs }