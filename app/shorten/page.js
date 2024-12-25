"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState('')
    const [generated, setgenerated] = useState(false)

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)

            })
            .catch((error) => console.error(error));
    }
    return (
        <>
            <div className='mx-auto max-w-lg bg-blue-200 p-6 rounded-lg flex flex-col gap-4 my-12'>

                <h1 className='font-bold text-2xl text-center'>Generate your short URL</h1>
                <div className='flex flex-col gap-2'>
                    <input className='p-2 focus:outline-green-200' type='text' placeholder='Enter your URL' value={url} onChange={(e) => seturl(e.target.value)} />
                    <input className='p-2 focus:outline-green-200' type='text' placeholder='Enter your preferred short URL text' value={shorturl} onChange={(e) => setshorturl(e.target.value)} />
                    <button className='bg-blue-600 rounded-lg p-2 font-bold text-white my-2' onClick={generate}>Generate</button>
                </div>

                {generated && <code>
                    Your Link: <Link target="_blank" href={generated}>{generated}</Link>
                </code>}
            </div>
        </>
    )
}

export default Shorten