import { type } from 'os';
import React from 'react'
import { useState } from 'react'

type dataProps = {
    data: {
        danhLamThangCanh: {
            name: string,
            content: Array<{
                id: number,
                name: string,
                img: string,
                like: number
            }>
        },
        monAn: {
            name: string,
            content: Array<any>
        }
    }
}

export default function Card(props: dataProps) {

    const { danhLamThangCanh, monAn } = props.data

    const [content, setContent] = useState(danhLamThangCanh.content)

    const renderCard = () => {
        return content.map((card, index) => {

            return <div key = {index} className=' col-md-3'>
                <div className="card col-md-12 mb-3 px-0" style={{ width: '18rem', height: '26rem' }}>
                <img src={card.img} className='img-fluid' style={{ objectFit: "cover", height: '200px' }} alt='img'></img>
                <div className='card-body'>
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-header'>
                    <button type='button' onClick={() => {

                    }}>Like</button>
                    <span>{card.like}</span>
                </div>
            </div>
            </div>
        })
    }

    return (
        <div  className='mx-auto container'>
            <div className='d-flex mb-5'>
                <h3 onClick={() => {
                    setContent(danhLamThangCanh.content)
                }} className='mr-5' style={{ cursor: 'pointer' }}>Danh Lam Thắng Cảnh</h3>
                <h3 onClick={() => {
                    setContent(monAn.content)
                }} style={{ cursor: 'pointer' }}>Món Ăn</h3>
            </div>
            <div className='row mx-0' >
                {renderCard()}
            </div>
        </div>


    )
}
