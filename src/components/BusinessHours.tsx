import React from 'react'
import BusinessHoursItem from './BusinessHoursItem'

interface Props {}

function BusinessHours(props: Props) {
    const {} = props

    return (
        <>
          <h1 style={{color:'#F3FFFF'}}>Business Hours</h1>
        <BusinessHoursItem time='09:00 am - 07:00 pm' title='Monday - Friday'/>
        <BusinessHoursItem time='09:00 am - 12:00 pm' title='Saturday'/>
        <BusinessHoursItem time='Closed' title='Sunday'/>
      
      
     
        </>
    )
}

export default BusinessHours
