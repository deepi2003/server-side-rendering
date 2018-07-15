import React from 'react';

const Home = ()=>{
    return(
        <div>
    <div> I am Home Component </div>
            <button onClick = {()=>{ console.log('You pressed me'); } }>
                Click Me!
            </button>
        </div>);
};
export  default Home;
