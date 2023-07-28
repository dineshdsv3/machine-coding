import React, { useState, useEffect } from 'react';


const App = () => {
    let [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter => counter + 1)
    }

    const reset = () => {
        setCounter(0)
    }

    const decrement = () => {
        counter > 0 && setCounter(counter => counter - 1);
    }

    return <main>
        {counter}

        <div class='container'>
            <button id='increment' onClick={increment}>Increment</button>
            <button id='reset' onClick={reset}>Reset</button>
            <button id='decrement' onClick={decrement} disabled={counter == 0}>Decrement</button>
        </div>

    </main>;
}


export default App;