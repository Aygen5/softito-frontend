import React from "react";

const DegistirilmeyenKart=(props)=>{

    const deneVeHataGoster=()=>{
        try{

            props.baslik="Yeni Başlık";

        }
        catch(hata){

            alert(
                "Hata Yakalandı! Props Değiştirilemez"
            );
        }
    }

    return(

        <div className="border rounded p-3">
            <h4 className="font-bold"> {props.baslik}</h4>
            <p className="text-gray-500">Gelen Prop Değeri: {props.baslik} </p>

            <button  onClick={deneVeHataGoster} className="bg-red-500 text-white p-2 rounded mt-2">
                Prop Değiştirmeyi Dene
            </button>

        </div>

    );
}

const Demo8ReadonlyProps=()=>{

    return(

        <div className="p-4">
            <h3 className="text-xl font-bold">  Demo 8: Salt Okunur Props </h3>

            <div className="mt-4">
                 <DegistirilmeyenKart baslik ="Değiştirilemeyen Kart Başlığı"/>

            </div>

        </div>

    );
}

export default Demo8ReadonlyProps;