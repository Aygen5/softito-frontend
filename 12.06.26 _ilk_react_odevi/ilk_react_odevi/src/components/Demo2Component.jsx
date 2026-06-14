import React from "react";

const Selamla=()=>{

    return(
        <div className="p-3 border rounded">
            <h4 className="font-bold">Merhaba Dünya</h4>
        </div>
    );
}


const Demo2Component=()=>{

    return(
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 2: Bileşenler</h3>
            <div className="mt-4">
                <Selamla/>
            </div>
        </div>
    );
}

export default Demo2Component;