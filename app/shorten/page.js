"use client"

import React, { useState } from 'react'

const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState('')
    const [generated, setgenerated] = useState(false)
    return (
        <>
            <div className='mx-auto max-w-lg bg-blue-200 p-6 rounded-lg flex flex-col gap-4 my-12'>

                <h1 className='font-bold text-2xl text-center'>Generate your short URL</h1>
                <div className='flex flex-col gap-2'>
                    <input className='p-2 focus:outline-green-200' type='text' placeholder='Enter your URL' value={url} onChange={(e) => seturl(e.target.value)} />
                    <input className='p-2 focus:outline-green-200' type='text' placeholder='Enter your preferred short URL text' value={shorturl} onChange={(e) => setshorturl(e.target.value)} />
                    <button className='bg-blue-600 rounded-lg p-2 font-bold text-white my-2'>Generate</button>
                </div>
            </div>
        </>
    )
}

export default Shorten