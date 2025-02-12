import React, { useState } from 'react';
import NavBar from '../Components/Navbar';
import Land from '../Components/Land';

export default function Home() {
    const [counter, setCounter] = useState(0);

    function inc() {
        setCounter(counter + 1);
    }

    function dec() {
        setCounter(counter - 1);
    }

    function reset() {
        setCounter(0);
    }

    return (
        <>
            <NavBar counter={counter} />
            <Land counter={counter} inc={inc} dec={dec} reset={reset} />
        </>
    );
}
