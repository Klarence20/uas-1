document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Inisialisasi AOS (Animate On Scroll)
    // Library ini membuat elemen muncul pelan-pelan saat di scroll
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Durasi animasi 1 detik
            once: true,     // Animasi hanya terjadi sekali saat scroll ke bawah
            offset: 100     // Mulai animasi sedikit sebelum elemen terlihat penuh
        });
    }

    // 2. Navbar Scroll Effect
    // Mengubah background navbar jadi gelap saat user scroll ke bawah
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Form Submission Handler (Simulasi)
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Ubah tombol jadi "Mengirim..."
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            btn.disabled = true;

            setTimeout(() => {
                alert("Pesan berhasil dikirim! (Ini hanya simulasi)");
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});