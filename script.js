// script.js

// Form elementini seçelim
const form = document.getElementById('contact-form');

// Gönder butonunu seçelim
const submitButton = document.getElementById('submit-btn');

// Mesaj sonucunu göstereceğimiz div'i seçelim
const messageContainer = document.getElementById('message-container');

// Forma submit eventi ekleyelim
form.addEventListener('submit', function(event) {
    // Formun default submit işlemini durduralım
    event.preventDefault();

    // Form bilgilerini FormData nesnesi ile alalım
    const formData = new FormData(form);

    // AJAX kullanarak formu submit edelim (simüle ediyoruz)
    // Burada gerçek bir servera POST request yapılabilir, ancak burada sadece simülasyon yapacağız
    setTimeout(function() {
        // Gönderilen mesaj sonucunu gösterelim
        showMessage('Mesajınız iletildi!', 'success');
    }, 1000); // 1 saniye gecikme ekledik, gerçek bir server durumu simüle etmek için

});

// Mesajı gösteren fonksiyon
function showMessage(message, messageType) {
    // Mesajın gösterileceği div'i temizleyelim
    messageContainer.innerHTML = '';

    // Mesaj elementini oluşturalım
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageType);
    messageElement.textContent = message;

    // Mesaj div'ini messageContainer'a ekleyelim
    messageContainer.appendChild(messageElement);

    // 3 saniye sonra mesajı kaldıralım (opsiyonel)
    setTimeout(function() {
        messageContainer.removeChild(messageElement);
    }, 3000);
}
