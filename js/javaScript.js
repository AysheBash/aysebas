

    //1 div içinde yazıları kırmızı rengine çevirme
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("button1").onclick = function() {
            var spans = document.querySelectorAll("#faq-container .filled-span");
            for (var i = 0; i < spans.length; i++) {
                spans[i].style.color = "red";
            }
        };
    });
    
        
        //2 div içinde yazıları siyah rengine çevirme
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("button2").onclick = function() {
                var spans = document.querySelectorAll("#faq-container .filled-span");
                for (var i = 0; i < spans.length; i++) {
                    spans[i].style.color = "black";
                }
            };
        });
        
        //3 Arkaplan rengini değiştiren fonksiyon
        function changeColor() {
            document.body.style.backgroundColor = "lightblue";
        }
        function changeColorReverse() {
            document.body.style.backgroundColor = "white";
        }
    
    
        //4 Mesaj gösteren fonksiyon
         function showMessage() {
            alert("Merhaba! Hoş geldiniz.");
            }
    
        //5 Gizli div'i gösteren veya gizleyen fonksiyon
        document.getElementById("toggle-button").addEventListener("click", function() {
            var div = document.getElementById("hiddenDiv");
            if (div.style.display === "none") {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });
        //6 Formu doğrulayan fonksiyon
        function validateForm() {
            var x = document.forms["myForm"]["fname"].value;
            if (x == "") {
                alert("İsim alanı boş bırakılamaz");
                return false;
                }
        }

        
        //7 Tüm harfleri büyük yapma fonksiyonu
        function makeTextUppercase() {
        var elements = document.querySelectorAll('.filled-span');
        elements.forEach(function(element) {
        var text = element.textContent || element.innerText;
        var newText = text.toUpperCase();
        element.textContent = newText;
        });
        }

        // Büyük harfe dönüştürme butonunun tıklama olayı
        var uppercaseButton = document.getElementById("uppercase-button");
       uppercaseButton.addEventListener("click", makeTextUppercase);
        // Tüm harfleri küçük yapma fonksiyonu
       function makeTextLowercase() {
       var elements = document.querySelectorAll('.filled-span');
       elements.forEach(function(element) {
        var text = element.textContent || element.innerText;
        var newText = text.toLowerCase();
        element.textContent = newText;
    });
}

// Küçük harfe dönüştürme butonunun tıklama olayı
var lowercaseButton = document.getElementById("lowercase-button");
lowercaseButton.addEventListener("click", makeTextLowercase);


        //9 Paragraf stilini Değiştir
    
        function changeParagraphStyle() {
                // Belirli bir div içindeki paragrafları seç
                var paragraphs = document.querySelectorAll(".filled-span");
                
                // Her bir paragraf için stil değişikliği yap
                paragraphs.forEach(function(paragraph) {
                    paragraph.style.fontFamily = "Arial"; // Örnek olarak font family'sini değiştirelim
                });
        }
        // Belirtilen paragrafı büyütme fonksiyonu
        function changeParagraphSizeBig() {
           // Belirtilen paragrafı seç
           var paragraph = document.getElementById("faq-container");

           // Paragrafın boyutunu değiştir
           paragraph.style.fontSize = "24px"; // Örnek olarak 24px olarak ayarladım
        }

        // Butona tıklandığında fonksiyonu çağırma
        var button = document.getElementById("change-size-button");
        button.addEventListener("click", changeParagraphSizeBig);

        //11 Paragraf Boyutunu küçük yap
    
        function changeParagraphSizeSmall() {
                // Belirli bir div içindeki paragrafları seç
                var paragraphs = document.querySelectorAll(".filled-span");
                
                paragraphs.forEach(function(paragraph) {
                    paragraph.style.fontSize = "10px"; // Örnek olarak font boyutunu değiştirelim
                });
        }
    
        //12Yeni paragraf ekle
         // Butonu ve div'i seçiyoruz
        var addButton = document.getElementById("add-paragraph-button");
        var container = document.getElementById("faq-container");
    
            // Butona tıklanınca çalışacak fonksiyonu tanımlıyoruz
            addButton.addEventListener("click", function() {
                // Yeni bir paragraf oluşturuyoruz
                var newParagraph = document.createElement("span");
                newParagraph.textContent = "El Dokuma Halı ";
                newParagraph.textContent = "El dokuma halılar makine işçiliği ya da fabrikasyon olmayan halılardır. El düğümü ile kendine özel tezgahlarda dokunmaktadır. Yün, ipek ya da bunların karışımı olacak şekilde imal edilebilmektedir.  ";
                
                // Oluşturduğumuz paragrafı div'e ekliyoruz
                container.appendChild(newParagraph);
            });
            
            //hoşgeldiniz
            function validateForm() {
                var name = document.forms["myForm"]["fname"].value.trim();
    
                if (name !== "") {
                    alert("Hoşgeldiniz, " + name + "!");
                } else {
                    alert("Lütfen bir isim girin!");
                }
    
                // Formun gerçekleştireceği varsayılan davranışı engellemek için false döndürülür
                return false;
            }
    
            //14 Resmin Boyutunu Büyütme
            function changeImageSizeBig() {
                var images = document.querySelectorAll(".filled-div");
                images.forEach(function(image) {
                    image.style.width = "300px"; // Yeni genişlik
                    image.style.height = "auto"; // Otomatik yükseklik
                });
            }
    
            //15 Resmin boyutunu Büyütme
            function changeImageSizeSmall() {
                var images = document.querySelectorAll(".filled-div");
                images.forEach(function(image) {
                    image.style.width = "50px"; // Yeni genişlik
                    image.style.height = "auto"; // Otomatik yükseklik
                });
            }

    