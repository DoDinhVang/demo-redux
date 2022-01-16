import React from 'react'

type textProps = {
    name: string,
    age: number
}

export default function Text(props: textProps) {

    const {name,age} = props
    return (
        <div>
           <p>tên: {name}</p>
           <p>tuổi: {age}</p>
        </div>
    )
}
