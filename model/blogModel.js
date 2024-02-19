const db = require('../config/db.js')


class Blogs {
    constructor() {

    }

    async getBlogs() {
        const resData = db.execute('SELECT * FROM `blogs`').then((data) => {
            return data[0]
        }).catch((err) => {
            return err
        })

        return resData
    }

    async deleteBlogs(id) {
        const resData = db.execute(`DELETE FROM \`blogs\` WHERE Blog_Id =${id}`).then((data) => {
            return data
        }).catch((err) => {
            return err
        })

        return resData
    }

    async postBlogs(dataList) {
        const query = `INSERT INTO blogs (Blog_name, Blog_content, Blog_author) 
                      VALUES ("${dataList.Blog_name}","${dataList.Blog_content}","${dataList.Blog_author}")`
        const resData = db.execute(query).then((data) => {
            return data
        }).catch((err) => {
            return err
        })
        return resData

    }



}


module.exports = { Blogs }