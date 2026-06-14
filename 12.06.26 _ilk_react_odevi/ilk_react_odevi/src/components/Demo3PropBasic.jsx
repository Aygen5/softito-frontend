import React from "react";

const UrunKarti=(props)=>{
    return (
        <div className="border p-3 rounded">
            <h4 className="font-bold">{props.ad}</h4>
            <p>{props.fiyat}</p>
            <p>Stokta: {props.stoktaVar ? "Var" : "Yok"}</p>
        </div>
    );
}




const Demo3PropBasic=()=>{
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 3: Props Kullanımı</h3>
            <div className="grid grid cols-3 gap-3 mt-4">
                <UrunKarti
                  ad="Laptop"
                  fiyat={15000}
                  stoktaVar={true}
                  />

                   <UrunKarti
                    ad="Telefon"
                    fiyat={12000}
                    stoktaVar={false}
                />

                <UrunKarti
                    ad="Kulaklık"
                    fiyat={2500}
                    stoktaVar={true}
                />

            </div>
        </div>
    );
}


export default Demo3PropBasic;
