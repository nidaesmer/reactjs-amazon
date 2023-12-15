### Sisterslab Bilim ve Teknolojide Kadın Derneği'nin düzenlediği Frontend Akademisi sonunda yaptığım bitirme projesini sizinle paylaşmaktan mutluluk duyarım. Bu README dosyasında size projemin ufak bir özetinden bahsedeceğim. Ve bunu sitemin ekran görüntüleri ve kodlarıyla desteklemeye çalışacağım. Umarım herkes için açıklayıcı bir yazı olabilir. Hadi başlayalım..


### İlk olarak sitemizin üst kısmından başlayalım.

![1](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/7265c94c-1c41-41ba-9d0f-9e13bd39a1c8)

Sitenin en üstü Navbar filesi ve düz tailwind yazımı yapıldı fakat farklılık olarak "login"e Ternary operatörü olan isLoggedIn ile etki-tepki sağlanmaya çalışıldı. Kodları ise :
![2](https://github.com/nidaesmer/bitirme-sisterslab/assets/77460814/4be1dcad-fefe-4688-a018-2ef84b129bec)
buradanın amacı kullanıcının giriş yapmış olup olmadığına bağlı olarak içeriği koşullu olarak render etmektedir.
Eğer kullanıcı giriş yapmışsa (isLoggedIn true ise), "logout" butonunu render eder. Bu buton, belirli bir stile sahiptir ve tıklama olayını işleyen bir onClick olay işleyici içerir. 
