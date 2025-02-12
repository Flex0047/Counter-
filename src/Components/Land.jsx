import React from 'react';

export default function Land({ counter, inc, dec, reset }) {
    return (
        <>
            <div className="flex items-center justify-center w-full bg-teal-600 h-dvh">
                <button className="px-4 py-2 text-white rounded-md bg-slate-700" onClick={inc}>inc</button>
                <span className="mx-4 text-lg font-bold">{counter}</span>
                <button className="px-4 py-2 text-white rounded-md bg-slate-700" onClick={dec}>dec</button>
                <button className="px-4 py-2 ml-4 text-white rounded-md bg-sky-500 hover:bg-sky-700" onClick={reset}>Reset</button>
            </div>
        </>
    );
}
