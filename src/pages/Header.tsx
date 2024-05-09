import { Grid } from '@mui/material'
import Appbar from '../components/Appbar'
import React from 'react'

interface Props {}

function Header(props: Props) {
    const {} = props

    return (
 
        <Grid container>
            <Grid sm={10}>
            <Appbar/>
            </Grid>
       </Grid>
     
     
     
     
    )
}

export default Header
