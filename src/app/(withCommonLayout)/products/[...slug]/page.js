import React from 'react';

const CatchAllRoute = async ({params}) => {
    console.log(await params);
    return (
        <div>
            <h1>Catch All Route</h1>
        </div>
    );
};

export default CatchAllRoute;