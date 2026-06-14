import React from "react";

const Kart=(props)=>{
    return(
        <div className="border rounded p-3"> {props.children} </div>
    );
}


const Demo4PropsChildren=()=>{
    return(
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 4: Props Children</h3>
            <div className="grid grid cols-2 gap-3 mt-4">

                <Kart>
                    <h4 className="font-bold">Kart 1 Başlık</h4>
                    <p>Birinci kartın içerik metni.</p>
                </Kart>

                <Kart>
                    <h4 className="font-bold">Kart 2 Başlık</h4>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">Kart Butonu</button>
                </Kart>

            </div>
        </div>
    );
}


export default Demo4PropsChildren;