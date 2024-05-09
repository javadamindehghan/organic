import React from 'react'

interface Props {
    title : string;
    time:string
}

function BusinessHoursItem(props: Props) {
    const {title ,time} = props

    return (
        <div > <p style={{color:'#B0B9AE'}}>{title}</p>
        <p style={{color:'#FFFFFF'}}>{time}</p></div>
    )
}

export default BusinessHoursItem
