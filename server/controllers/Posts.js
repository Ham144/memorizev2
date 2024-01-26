import PostMessage from "../models/postmessage.js"

export const getPost = async(req,res) =>{
    try {
        const messages = await  postMessage.find()
        res.status(202).json(postMessage)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const createPost = async (req,res) =>{
    const post = req.body
    const newPost = new postMessage(post)
    try {
        await newPost.saved()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}