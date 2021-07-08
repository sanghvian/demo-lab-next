import React from 'react'
// import floatBack from '@assets/images/float-back.png'
import FloatBack from '@assets/images/float-back.svg'
import Image from 'next/image'
import {useRouter} from 'next/router'

const Backbutton = () => {
    const router = useRouter()
    return (
        <div onClick={()=>router.push('/')} className="floating-button">
            {/* <Image src={floatBack} alt="" /> */}
            <FloatBack/>
        </div>
    )
}

export default Backbutton
