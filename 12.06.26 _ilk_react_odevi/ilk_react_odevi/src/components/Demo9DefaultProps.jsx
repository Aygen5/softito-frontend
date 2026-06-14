import React from "react";

const ProfilKarti=({
    isim="Aygen Yıldırım",
    rol="Öğrenci"
})=>{

    return(

        <div className="border rounded p-3">
            <h4 className="font-bold"> {isim}</h4>
            <p className="text-gray-500">  Rol: {rol} </p>

        </div>

    );
}

const Demo9DefaultProps=()=>{

    return(

        <div className="p-4">

            <h3 className="text-xl font-bold">Demo 9: Varsayılan Props</h3>

            <div className="grid grid-cols-3 gap-3 mt-4">

                <ProfilKarti
                    isim="Aygen Yıldırım"
                    rol="Öğrenci"
                />

                <ProfilKarti
                    isim="Aygen Yıldırım"
                    rol="Çalışan"
                />

                <ProfilKarti/>

            </div>

        </div>

    );
}

export default Demo9DefaultProps;