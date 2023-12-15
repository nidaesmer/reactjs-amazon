### Sisterslab Bilim ve Teknolojide Kadın Derneği'nin düzenlediği Frontend Akademisi sonunda yaptığım bitirme projesini sizinle paylaşmaktan mutluluk duyarım. Bu README dosyasında size projemin ufak bir özetinden bahsedeceğim. Ve bunu sitemin ekran görüntüleri ve kodlarıyla desteklemeye çalışacağım. Umarım herkes için açıklayıcı bir yazı olabilir. Hadi başlayalım..


### İlk olarak sitemizin üst kısmından başlayalım.

![1](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/7265c94c-1c41-41ba-9d0f-9e13bd39a1c8)

1-Sitenin en üstünde Navbar filesi kodlandı ve düz tailwind yazımı yapıldı fakat farklılık olarak "login"e Ternary operatörü olan isLoggedIn ile etki-tepki sağlanmaya çalışıldı. Kodları ise :
![2](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/4be1dcad-fefe-4688-a018-2ef84b129bec)
buradanın amacı kullanıcının giriş yapmış olup olmadığına bağlı olarak içeriği koşullu olarak render etmektedir.
Eğer kullanıcı giriş yapmışsa (isLoggedIn true ise), "logout" butonunu render eder. Bu buton, belirli bir stile sahiptir ve tıklama olayını işleyen bir onClick olay işleyici içerir. 

2-Sitenin görsel ile kaplı kısmında ise <SwiperSlider/> kullanılmıştır, bunun amacı ise kaydırmalı bir yapı ile diğer görselleri görebilme estetiği sağlanılmaya çalışılmıştır.
![3](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/98581d07-573e-4f34-a9e3-755878cdd31f)
kodlarda swiperSliderin özellikleri işlenmiştir.

![4](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/efcf53ca-ba16-4919-8a37-08f3bd214267)
3-Sitemizin bu kısmında cartlar görünüyor. Farklı görsel ve reklamlarla e-ticaret mantığı uygulanmaya çalışıldı.

![5](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/393a89c5-b39e-4647-bba7-876c3c8c76cb)
4-Bu kısımda sitenin tıklanabilir kategorileri gösterilmiştir. Herhangi bir ürüne tıklayıp detaya gitme sayfası kodlanmıştır.

Best Sellers kısmı için detayların json dosyasından gelme işlemi şu kodlarla sağlanmıştır:
![6](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/66f79245-18a1-4db0-859c-57add689e3be)
a) <SwiperSlide> ile eklemek yerıne array.fromu kullandık. 2 farklı yöntem gösterilmiş oldu.

b)   ```{Array.from({ length: 9 }, (_, i) => (```
   9 elemanlı bir dizi oluşturur. Bu olayların amacı slyat gosterisi gibi görünmesidir.
   (_, i) => fonksiyonu, dizi elemanlarını oluştururken her bir elemanın indeksini (i) kullanır.
    _ elemanları getirir.
    
c) ```<SwiperSlide key={i}> ```
bu Swiper kütüphanesi için bir slayt öğesini temsil eden bir JSX öğesini oluşturur. Her slayt, kendine özgü bir anahtar (key) değeri ile belirlenir.

d) ```<img src={`../images/product_${i}_small.jpg`} alt="" /> ```
ifadesi, her slayt içinde bir resim öğesi oluşturur. Resmin yolu (src) i değeri kullanılarak dinamik olarak belirlenir. Örneğin, ilk slayt için ../images/product_0_small.jpg, ikinci slayt için ../images/product_1_small.jpg gibi.

e) ```Link to={`/product/${i}`}>```
Bu kısım, React Router tarafından sağlanan Link bileşenini kullanarak bir bağlantı oluşturur. Bu bağlantı, "/product" yoluna giden bir URL'yi temsil eder ve bu URL'nin sonuna i değeri eklenir. Yani, her slayt bir ürünü temsil eder ve bu ürünün detaylarına yönlendiren bir bağlantı oluşturulur.

