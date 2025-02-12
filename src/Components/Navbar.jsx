import React from 'react'

export default function NavBar({ counter }) {
    return (
        <div className='z-10 flex justify-around w-full pt-3 text-3xl h-14 bg-teal-950 text-purple-50' >
            <h1>NavBar</h1>
            <span>{counter}</span>
        </div>
    )
}