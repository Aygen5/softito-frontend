import { useState } from "react";


const Odev = () => {


  const [ogrenciler, setOgrenciler] = useState([
    { id: 1, ad: "Aygen", bolum: "Yazılım" }
  ]);


  const [form, setForm] = useState({
    ad: "",
    bolum: ""
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };


  const ekle = () => {
    if (!form.ad || !form.bolum) return;

    const yeni = {
      id: Date.now(),
      ad: form.ad,
      bolum: form.bolum
    };


    setOgrenciler([...ogrenciler, yeni]);
    setForm({ ad: "", bolum: "" });
  };


  const sil = (id) => {
    setOgrenciler(ogrenciler.filter(o => o.id !== id));
  };



  const guncelle = (id) => {
    const yeniAd = prompt("Yeni ad:");
    const yeniBolum = prompt("Yeni bölüm:");

    setOgrenciler(
      ogrenciler.map(o =>o.id === id? {...o,ad: yeniAd || o.ad, bolum: yeniBolum || o.bolum } : o));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-xl font-semibold mb-4">Öğrenci Formu</h2>

      <div className="flex gap-2 mb-4">
        <input
          name="ad"
          value={form.ad}
          onChange={handleChange}
          placeholder="Ad"
          className="border p-2 rounded w-full" />

        <input
          name="bolum"
          value={form.bolum}
          onChange={handleChange}
          placeholder="Bölüm"
          className="border p-2 rounded w-full"/>

        <button onClick={ekle} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Ekle
        </button>

      </div>

      
      <div className="space-y-3">
        {ogrenciler.map((o) => (
          <div key={o.id} className="flex justify-between items-center bg-gray-50 p-3 rounded border"
          >
            <div>
              <p className="font-medium">{o.ad}</p>
              <p className="text-sm text-gray-500">{o.bolum}</p>
            </div>

            <div className="flex gap-2">
              <button onClick={() => guncelle(o.id)} className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500">
                Güncelle
              </button>

              <button onClick={() => sil(o.id)} className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600" >
                 Sil
              </button>  
            
           </div>
              
           </div> 
         ))}  
       
      </div>

    </div>
  );
};

export default Odev;