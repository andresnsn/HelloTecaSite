const router = require('express').Router();
const Book = require('../models/Book')
const auth = require('../middlewares/auth')

//Get All
router.get('/', async (req, res) => {

    try{
        const book = await Book.find()
        
        res.json({
            success: true,
            data: book
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
//Get One
router.get('/:slug', async (req, res) => {

    try{
        const book = await Book.findOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            data: book
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
//Create
router.post('/', auth, async (req, res) => {
    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        image: req.body.image
    })

    try{
        const savedBook = await book.save()
        res.json({
            success: true,
            data: savedBook
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }


})

//Update
router.patch('/:slug', auth, async(req, res) => {
    try{
        const updatedBook = await Book.updateOne({
            slug: req.params.slug
        },
        {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            image: req.body.image
        })
        res.json({
            success: true,
            updated: updatedBook
        })
    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }
})
//Delete

router.delete('/:slug', auth, async (req, res) => {
    try{
        const deletedBook = await Book.deleteOne({
            slug: req.params.slug
        })
        res.json({
            success: true,
            deleted: deletedBook.deletedCount
        })

    }catch(err){
        res.json({
            success: false,
            message: err
        })
    }



})

module.exports = router

    // portfolio
    //         .save()
    //         .then((data) => {
    //             res.json({
    //                 success: true,
    //                 data
    //             })
    //         })
    //         .catch((err) => {
    //             res.json({
    //                 success: false,
    //                 message: err
    //             })
    //         })