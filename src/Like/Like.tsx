import React from 'react'
import Card from './Card'
import dataJson from './data.json'


export default function Like() {
  
    return (
        <div className='mt-4'>
            <Card data = {dataJson} />
        </div>
    )
}
