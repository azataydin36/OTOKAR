document.addEventListener('DOMContentLoaded', function() {
    var categoryLinks = document.querySelectorAll('.category-link');
    var products = document.querySelectorAll('.product');

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Aktif bağlantıları yönetmek için sınıf ekleyelim
            categoryLinks.forEach(function(clink) {
                clink.classList.remove('active');
            });
            this.classList.add('active');

            // Seçilen kategoriyi alalım
            var category = this.getAttribute('data-category');

            // Tüm ürünleri gösterelim veya sadece seçili kategoriye ait olanları gösterelim
            products.forEach(function(product) {
                if (category === 'all' || product.classList.contains(category)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
