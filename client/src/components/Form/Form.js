import React, {useState} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles.js'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'
const Form = ()=>{
    const [postData, setPostData] = useState({
        creator:'', title:'', message: '', tags: '', selectedFile: ''
    })
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(createPost(postData))
    }
    const clear = ()=>{

    }
    return (
        <Paper className= {classes.paper}>
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete='off' onSubmit={handleSubmit}>
                <Typography variant='h6' >Creatinga Memory</Typography>
                <TextField name='Creator'  variant='outlined'  label='Creator'  fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData ,creator: e.target.value})} />
                <TextField name='Title'  variant='outlined'  label='Title'  fullWidth value={postData.title} onChange={(e)=> setPostData({...postData ,title: e.target.value})} />
                <TextField name='Massage'  variant='outlined'  label='Massage'  fullWidth value={postData.message} onChange={(e)=> setPostData({...postData ,message: e.target.value})} />
                <TextField name='Tags'  variant='outlined'  label='Tags'  fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData ,tags: e.target.value})} />
                <div className={classes.fileInput}>
                <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form