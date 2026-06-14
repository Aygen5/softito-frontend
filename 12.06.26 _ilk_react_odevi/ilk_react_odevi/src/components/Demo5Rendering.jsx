import React from "react";

const UrunKutusu=(props)=>{

    return(

        <div className="border rounded p-3">

            <h4 className="font-bold">{props.ad}</h4>
            <div className="mt-2">{props.stokAdeti > 0 ? (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                        Stokta Var ({props.stokAdeti} adet)
                    </span>

            ) : (

                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                        Stokta Yok
                    </span>

            )}

            </div>

            <div className="mt-2">{props.indirimdeMi && (

                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                        Kampanyalı Ürün
                    </span>

                )}

            </div>

        </div>

    );
}

const Demo5Rendering=()=>{

    return(

        <div className="p-4">

            <h3 className="text-xl font-bold">Demo 5: Koşullu Render</h3>

            <div className="grid grid-cols-3 gap-3 mt-4">

                <UrunKutusu
                    ad="Televizyon"
                    stokAdeti={5}
                    indirimdeMi={true}
                />

                <UrunKutusu
                    ad="Tablet"
                    stokAdeti={0}
                    indirimdeMi={false}
                />

                <UrunKutusu
                    ad="Monitör"
                    stokAdeti={3}
                    indirimdeMi={true}
                />

            </div>

        </div>

    );
}

export default Demo5Rendering;