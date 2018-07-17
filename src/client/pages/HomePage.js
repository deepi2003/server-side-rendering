import React from 'react';

const HomePage = ()=>{
    return(
    <div> I am Home Component
            <button onClick = {()=>{ console.log('You pressed me'); } }>
                Click Me!
            </button>
        </div>);
};
export  default {
    component: HomePage
};

