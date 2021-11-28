import React from 'react'
import './PreviewComponent.scss'
import CustomButton from '../../../CustomComponents/CustomButton/CustomButton'
import imgArray from '../../../ImageArray'

const PreviewComponent = ({ selectedImage }) => {
    return (
        <div className="PreviewRoot">
            <img
                src={imgArray[selectedImage].img}
                style={{ width: '90%', alignSelf: 'center', marginTop: '20px', borderRadius: '20px' }}
            >
            </img>
            <div style={{ width: '90%', height: '120px', alignSelf: 'center', marginTop: '20px', borderRadius: '20px', backgroundColor: '#FFFFFF', marginBottom: '20px' }}>
                <div style={{ margin: '10px', fontFamily: 'Poppins', fontSize: '16px', textAlign: 'center' }}>Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages</div>
                <CustomButton style={{ margin: '10px', marginLeft: '20px', }}>Listen</CustomButton>
            </div>
        </div>
    )
}

export default PreviewComponent
