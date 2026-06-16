/* ekranda bi kampanya alanı oluşturuluyor ve her saniye sayaç azalıyor. 
    süre bitince tekrar başa dönüyor.*/

    /* useState veri saklar, useEffect bir işlem başlatır. 
       bu örnekte sayaç çalıştırmak için kullanılmış.*/
import { useState, useEffect } from "react";


/* component oluşturuluyor.*/
export default function KampanyaBanner() {

    /* state'in adı= secondsleft (kalan saniye)
       değiştiren fonksiyonun adı= setSecondsLeft = */

    /* başlangıç değeri verilmiş. hesaplayınca 12000 saniye oluyor. yani 3 sa 20 dk.*/
  const [secondsLeft, setSecondsLeft] = useState(3600 * 3 + 1200);



  /* component ilk açıldığında çalışacak çünkü aşağıda boş dependency array var */
  useEffect(() => {

    /* setInterval= belirli aralıklarda bir fonksiyonu tekrar tekrar çalıştırır. 
       bu componentte 1000 milisaniye verilmiş. 
    yani her 1 saniyede 1 çalış*/
    const timer = setInterval(() => {

        /* state güncelleme
           prev= önceki state değeri (başlangıçta 12000)
           1 saniye sonra yeni state= 11999 olur
           bu şekilde sürekli azalır. */
      setSecondsLeft((prev) => {

        /* süre bitince ne oluyor kısmı
           prev=1 ise 1 sn sonra 0 olur ama burada kontrol ediliyor
           eğer 1 veya daha küçük ise yeniden 12000 yapılıyor.*/ 
        if (prev <= 1) {
          return 3600 * 3 + 1200;
        }
        return prev - 1;
      });
    }, 1000);

      /* component ekrandan silinirse bu cleanup function çalışır
         yani sayaç durdurulur.*/
    return () => {
      clearInterval(timer);
    };
  }, []);



  const formatCountdown = (totalSecs) => {
    const hours = Math.floor(totalSecs / 3600);  
    const minutes = Math.floor((totalSecs % 3600) / 60); /* 12000 değil 03:20:00 şeklinde görülür*/
    const seconds = totalSecs % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }; 7  /* padStart ile 3 gelirse önüne 0 gelir. 03 olur*/ 







  return (
    <div className="slider-banner">
      <div className="slider-bilgi">
        <span className="slider-etiket">GÜNÜN FIRSATI</span>
        <h2 className="slider-baslik">Büyük Yaz İndirimleri Başladı!</h2>
        <p className="slider-detay">
          Tüm Elektronik, Giyim ve Kitaplarda sepette anında %40'a varan indirimleri kaçırmayın.
        </p>
      </div>

      <div className="slider-sayac">
        <span>⏰ Kalan Süre:</span>
        <span>{formatCountdown(secondsLeft)}</span>
      </div>
    </div>
  );
}