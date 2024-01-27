import React, {useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import {getposts} from './actions/posts'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'

import card from './images/card.png'
import useStyles from './styles.js'
const App = ()=>{
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getposts()) 
    },[dispatch])
    return (
        <Container maxWidth="lg" >
            <AppBar className={classes.AppBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>MEMORIES</Typography>
                <img className={classes.image} src={card}  alt='card'  height='70'></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7} ><Posts/></Grid>
                        <Grid item xs={12} sm={4} ><Form/></Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App