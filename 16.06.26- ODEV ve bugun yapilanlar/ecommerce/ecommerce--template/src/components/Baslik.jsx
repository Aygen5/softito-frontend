/*useState ve useEffect kullanılacak. */
/*component içinde veri saklanır. useEffect ile de bir şey olunca çalışacak kod yazılır*/
/*bu kodda state değişince çalıştırmak istediğimiz işler için useEffect kullanıyoruz.*/

import { useState, useEffect } from "react";

/*component oluşturuluyor.*/
/* export default bu dosyayının başka yerde kullanılmasını sağlar*/
/* parantezin içinde gelenler propslardır. bunlar üst componentten gelen bilgilerdir.*/

export default function Baslik({ env, sepetAdedi, onSepetAc, searchVal, onSearchChange }) {

    /* bir state oluşturuyoruz.*/
    /* state'in adı windowSize. değiştiren fonksiyon setWindowSize*/
    /* başlangıç değerleri verilmiş. object kullandık*/
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });



  /* bir fonksiyon oluşturuyoruz. görevi: pencere boyutu değişirse yeni değerleri almak*/
  /* kullanıcı pencere boyutunu değiştirirse bu fonksiyon çalışır,
     react state'in değiştiğini görür,
     tekrar render yapar, 
     ekran güncellenir. */



  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };


    /* burada addEventListener tarayıcıyı dinle demektir.*/
    /* eğer resize olursa yani pencere boyutu değişirse handleResize çalıştır*/ 
    /* return ( )=> {  bir cleanup fonksiyonudur. 
       yani component silinirken çalışır.*/



    window.addEventListener("resize", handleResize);
    return () => {

        /* event listener bellekte kalır.
           diyelim li baslik component kaldırıldı. ama listener hala çalışıyor
           bellek sızıntısı, gereksiz performans kaybı oluşur.
            bu nedenle react'ta genelde addeventlistener varsa yanına removeenetlistener yazılır.*/
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const getEnvName = (cat) => {
    if (cat === "all") return "TÜM KATEGORİLER";
    return cat.toUpperCase();
  };






  return (
    <header className="eticaret-header">
      <div className="header-ust-alan">
        <div className="logo-alani">
          <div className="site-logo-link">HEPSİAL</div>
          <span className="site-logo-badge">STORE</span>
        </div>

        <div className="arama-alani">
          <input
            type="text"
            placeholder="Ürün, kategori veya marka ara..."
            value={searchVal}
            onChange={(e) => onSearchChange(e.target.value)}
            className="arama-input"
          />
          <button className="arama-butonu">Ara</button>
        </div>

        <div className="kullanici-kontrolleri">
          <div className="menu-linki">Giriş Yap</div>
          <div className="menu-linki">Siparişlerim</div>
          
          <button onClick={onSepetAc} className="sepet-tetikleyici">
            <span>🛒 Sepetim</span>
            {sepetAdedi > 0 && (
              <span className="sepet-sayac-rozet">{sepetAdedi}</span>
            )}
          </button>
        </div>
      </div>

      <div className="kategori-seridi">
        <span className="badge badge-gray">{getEnvName(env)}</span>
        <span className="detail-meta-label">| Çözünürlük: {windowSize.width}px</span>
      </div>
    </header>
  );
}