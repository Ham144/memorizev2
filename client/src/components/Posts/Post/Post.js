import React from 'react'
// import { useSelector } from 'react-redux'
import useStyles from './styles.js'
const Post = ()=>{
    // const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    // console.log(posts)
    return (
        <>
            <h1 >Post</h1>
            <Post/>
            <Post/>
        </>
    )
}

export default Post