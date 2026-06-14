import React from "react";

const Demo7EventHandling=()=>{

    const butonaTiklandi=(mesaj)=>{
        alert(mesaj);
    }

    const formGonder=(e)=>{
        e.preventDefault();
        alert("Form Gönderildi");
    }

    return(

        <div className="p-4">
            <h3 className="text-xl font-bold">Demo 7: Olay Yönetimi</h3>

            <div>
                <h4 className="font-bold">Buton Tıklama Olayı </h4>

                <div className="flex flex-col gap-2 mt-2">

                    <button onClick={()=>butonaTiklandi("Basit Tıklama")}
                        className="bg-blue-500 text-white p-2 rounded">
                        Tıkla - Mesaj Ver
                    </button>

                    <button onClick={()=>butonaTiklandi("Parametreli Tıklama")}
                        className="bg-green-600 text-white p-2 rounded">
                        Parametreli Tıklama
                    </button>

                </div>

            </div>

            <div className="mt-4">

                <h4 className="font-bold">Form Olayı</h4>

                <form onSubmit={formGonder} className="border p-3 mt-2">

                    <input type="text"placeholder="Metin girin"className="border p-2 mr-2"/>

                    <button type="submit"className="bg-purple-600 text-white p-2 rounded">
                        Formu Gönder
                    </button>

                </form>

            </div>

        </div>

    );
}

export default Demo7EventHandling;