import React from 'react'
import './ActorTab.scss'
import imgArray from '../../../../ImageArray'

const selectedIndex = 0

const ActorTab = ({ setSelectedImage }) => {
    return (
        <div className="Grid-Container">
            {imgArray.map((img, index) => {
                return (
                    <div>
                        <img
                            src={img.img}
                            style={{ width: '150px', height: '84px', borderRadius: '6px', marginRight: '20px' }}
                            onClick={()=> setSelectedImage(index)}
                        >
                        </img>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>{img.name}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default ActorTab
