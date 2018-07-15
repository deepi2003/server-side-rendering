import React from 'react';

const Home = ()=>{
    return(
    <div> I am Home Component
            <button onClick = {()=>{ console.log('You pressed me'); } }>
                Click Me!
            </button>
        </div>);
};
export  default Home;
