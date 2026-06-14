import React from "react";

const OgrenciKarti=(props)=>{

    return(

        <div className="border rounded p-3">

            <h4 className="font-bold">{props.ad}</h4>
            <p>  Bölüm: {props.bolum}</p>
            <p> Ortalama: {props.ortalama}</p>

        </div>

    );
}

const Demo10Review=()=>{

    const ogrenciler=[
        {
            id:1,
            ad:"Aygen",
            bolum:"Yazılım Mühendisliği",
            ortalama:3.40
        },
        {
            id:2,
            ad:"Ahmet",
            bolum:"Makine Mühendisliği",
            ortalama:3.10
        },
        {
            id:3,
            ad:"Mehmet",
            bolum:"Çevre Mühendisliği",
            ortalama:2.95
        }
    ];

    return(

        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 10: Genel Tekrar </h3>
            <div className="grid grid-cols-3 gap-3 mt-4">

                {ogrenciler.map((ogrenci)=>(
                    <OgrenciKarti
                        key={ogrenci.id}
                        ad={ogrenci.ad}
                        bolum={ogrenci.bolum}
                        ortalama={ogrenci.ortalama}
                    />
                ))}

            </div>

        </div>

    );
}

export default Demo10Review;