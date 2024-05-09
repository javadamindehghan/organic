import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
interface Props {}

function OurOffice(props: Props) {
    const {} = props

    return (
        <>
        <h1 style={{color:'#F3FFFF'}}>our office</h1>
        <ul style={{color:'#B0B9AE'}}>
        <li> <LocationOnIcon/> Tehran</li>
        <li><PhoneIcon/>+98912456983</li>
        <li><EmailIcon/>info@example.com</li>
        </ul>
        </>
    )
}

export default OurOffice
