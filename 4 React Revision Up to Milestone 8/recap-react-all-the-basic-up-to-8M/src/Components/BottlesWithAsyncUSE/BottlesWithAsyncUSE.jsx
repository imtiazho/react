import React, { Suspense } from 'react';
import Bottle from '../Bottle/Bottle';

const fetchData = async () => {
    const res = await fetch("https://raw.githubusercontent.com/imtiazho/JsonData/refs/heads/main/bottles.json");
    return res.json();
}

const BottlesWithAsyncUSE = () => {
    const bottlePromise = fetchData()
    // console.log(bottlePromise);
    return (
        <div>
            <Suspense fallback={<h1>Loading</h1>}>
                <Bottle bottlePromise={bottlePromise}></Bottle>
            </Suspense>
        </div>
    );
};

export default BottlesWithAsyncUSE;