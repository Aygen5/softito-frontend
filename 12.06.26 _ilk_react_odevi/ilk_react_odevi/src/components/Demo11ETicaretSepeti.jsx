import React, { useState } from "react";

const Demo11ETicaretSepeti=()=>{

    const urunler=[
        {
            id:1,
            ad:"Yedek Kablosuz Klavye",
            kategori:"Aksesuar",
            fiyat:750,
            stok:12
        },

        {
            id:2,
            ad:"Yedek Oyuncu Faresi",
            kategori:"Aksesuar",
            fiyat:600,
            stok:5
        },

        {
            id:3,
            ad:"Yedek Full HD Monitör",
            kategori:"Ekran",
            fiyat:3200,
            stok:3
        },

        {
            id:4,
            ad:"Yedek Bluetooth Kulaklık",
            kategori:"Ses",
            fiyat:950,
            stok:8
        },

        {
            id:5,
            ad:"Yedek SSD Depolama",
            kategori:"Depolama",
            fiyat:1800,
            stok:6
        }
    ];



    const [aramaMetni,setAramaMetni]=useState("");
    const [seciliKategori,setSeciliKategori]=useState("Tumu");
    const [sepet,setSepet]=useState([]);


    const sepeteEkle=(urun)=>{

        const urunVarMi=sepet.find(
            (item)=>item.id===urun.id
        );

        if(urunVarMi){

            const guncelSepet=sepet.map((item)=>
                item.id===urun.id ? {...item, adet:item.adet+1}: item
            );

            setSepet(guncelSepet);
        }
        else{

            setSepet([...sepet,
                {
                    ...urun,
                    adet:1
                }
            ]);
        }
    };




    const sepettenSil=(id)=>{

        const yeniSepet=sepet.filter(
            (item)=>item.id!==id
        );

        setSepet(yeniSepet);
    };



    const sepetiTemizle=()=>{
        setSepet([]);
    };



    const filtrelenmisUrunler=urunler.filter((urun)=>{

        const kategoriUygun=
            seciliKategori==="Tumu" ||
            urun.kategori===seciliKategori;

        const aramaUygun=
            urun.ad
            .toLowerCase()
            .includes(aramaMetni.toLowerCase());

        return kategoriUygun && aramaUygun;
    });



    const toplamTutar=sepet.reduce( (toplam,item)=>
        toplam+(item.fiyat*item.adet),0
    );



    const satinAl=()=>{

    if(sepet.length===0){

        alert("Sepetiniz boş");
        return;
    }
    alert("Siparişiniz Alındı");
    setSepet([]);
   };

    return(

        <div className="p-4">
            <h3 className="text-2xl font-bold"> Demo 11: E-Ticaret Sepet Paneli</h3>

            <p className="text-gray-500 mb-4">JSX, props, eventler, listeler ve koşullu rendering kullanıldı.  </p>

            <div className="border rounded p-4">

                <h4 className="font-bold mb-2">Ürün Ara ve Filtrele</h4>

                <input type="text"placeholder="Ürün adı ara..." value={aramaMetni} onChange={(e)=>
                        setAramaMetni(e.target.value)
                    }
                    className="border p-2 w-full mb-3"/>

                <div className="flex gap-2 mb-3">

                    <button onClick={()=>setSeciliKategori("Tumu")} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mt-2">
                        Tümü
                    </button>

                    <button onClick={()=>setSeciliKategori("Aksesuar")}className="bg-gray-200 px-3 py-1 rounded">
                        Aksesuar
                    </button>

                    <button onClick={()=>setSeciliKategori("Ekran")} className="bg-gray-200 px-3 py-1 rounded">
                        Ekran
                    </button>

                    <button onClick={()=>setSeciliKategori("Ses")}   className="bg-gray-200 px-3 py-1 rounded" >
                        Ses
                    </button>

                    <button  onClick={()=>setSeciliKategori("Depolama")}   className="bg-gray-200 px-3 py-1 rounded" >
                        Depolama
                    </button>

                </div>

            </div>




            <div className="grid grid-cols-4 gap-4 mt-4">

                <div className="col-span-3">

                    <h4 className="font-bold mb-3 border-t pt-2">  Ürün Listesi </h4>

                    {filtrelenmisUrunler.map((urun)=>(

                        <div key={urun.id} className="border rounded p-3 mb-3 shadow-sm bg-white" >

                            <h4 className="font-bold">{urun.ad} </h4>

                            <p>Kategori: {urun.kategori} </p>

                            <p className="text-blue-700 font-bold">Fiyat: {urun.fiyat} TL</p>

                            <p className="text-green-700">Stok: {urun.stok} </p>

                            <button onClick={()=>sepeteEkle(urun)} className="bg-blue-500 text-white px-3 py-2 rounded mt-2">
                                Sepete Ekle
                            </button>

                        </div>

                    ))}

                </div>




                <div>

                    <div className="border rounded p-3 sticky top-2">

                        <h4 className="font-bold text-xl mb-3">Sepetiniz</h4>

                        {sepet.length===0 ? ( <p>Sepetiniz boş.</p>

                        ) : (

                            <div>

                                {sepet.map((item)=>(

                                    <div key={item.id} className="border-b mb-2 pb-2">

                                        <h5 className="font-bold">{item.ad}  </h5>

                                        <p> Fiyat: {item.fiyat} TL </p>

                                        <p> Adet: {item.adet}  </p>
                                      

                                        <button   onClick={()=> sepettenSil(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                             Sil  
                                         
                                        </button>   
            
                                     </div>        
                                        
                            ))}
                                   

                                

                                <h4 className="font-bold mt-3"> Toplam Tutar: {" "} {toplamTutar} {" "} TL </h4>

                                <button  onClick={sepetiTemizle} className="bg-gray-500 text-white px-3 py-2 rounded mt-2" >Temizle</button>
                                <button onClick={satinAl} className="bg-green-600 text-white px-3 py-2 rounded mt-2 ml-2">Satın Al</button>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Demo11ETicaretSepeti;