// Örnek kullanıcı adı ve şifre
var kullaniciAdi = "admin";
var sifre = "123";

function girisKontrolu(kullaniciAdiGirilen, sifreGirilen) {
    // Kullanıcı adı ve şifreyi kontrol et
    if (kullaniciAdiGirilen === kullaniciAdi && sifreGirilen === sifre) {
        alert("Giriş başarılı!"); // Kullanıcı adı ve şifre eşleşirse, başarılı giriş mesajı gösterilir
        return true; // Giriş başarılı olduğu için true döndürülür
    } else if (kullaniciAdiGirilen !== kullaniciAdi && sifreGirilen === sifre) {
        alert("Kullanıcı adı yanlış!"); // Kullanıcı adı yanlışsa hata mesajı gösterilir
    } else if (kullaniciAdiGirilen === kullaniciAdi && sifreGirilen !== sifre) {
        alert("Şifre yanlış!"); // Şifre yanlışsa hata mesajı gösterilir
    } else {
        alert("Kullanıcı adı ve şifre yanlış!"); // Hem kullanıcı adı hem de şifre yanlışsa hata mesajı gösterilir
    }
    return false; // Giriş başarısız olduğu için false döndürülür
}


/* 


Elden veri kontrolü yapmak için return ifadesi oldukça önemlidir. 
Bir fonksiyon çalıştırıldığında, genellikle bir sonuç döndürmesi beklenir ve bu sonuç, fonksiyonun çağrıldığı yere iletilir. 
İşte bu noktada return ifadesi devreye girer. return, bir fonksiyondan bir değer döndürmeyi sağlar.

Yukarıdaki girisKontrolu fonksiyonunda da return ifadesi kullanılarak, girişin başarılı veya başarısız olduğu bilgisini döndürüyoruz. 
Örneğin, giriş başarılı ise true döndürülür ve fonksiyonun çağrıldığı yere bu değer iletilir. 
Böylece, girişin başarılı olduğunu anlayabiliriz ve buna göre işlem yapabiliriz.

Eğer return ifadesi kullanılmasaydı, fonksiyonun sonunda bir değer döndürülmezdi. 
Bu durumda, fonksiyon her zaman undefined dönerdi. 
Bu da giriş kontrolü sonucunun belirsiz olmasına neden olurdu ve fonksiyonun çalıştırıldığı yerde hangi durumda olduğumuzu anlamamızı zorlaştırırdı.

Yani, return ifadesi kullanılarak fonksiyonların sonucunu belirlemek ve bu sonucu işlemek mümkün hale gelir. 
Bu sayede fonksiyonlar daha kullanışlı ve esnek hale gelir, çünkü çağrıldığı yerde elde edilen sonuca göre farklı işlemler yapılabilir.


*/
