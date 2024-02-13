import React from 'react'

const Script = () => {
    function handleScroll() {
        var sidebar = document.getElementById('side-bar');
        var slideData = document.getElementById('slides-data-main');
        var slide1 = document.getElementById('slide-1');
        var slide2 = document.getElementById('slide-2');
    
        var scrollPosition = window.scrollY;
        
        if (scrollPosition >= slide1.offsetTop && scrollPosition < slide2.offsetTop) {
            // Scroll di antara slide 1 dan slide 2
            sidebar.style.right = '-300px'; // Sembunyikan sidebar
            slideData.style.display = 'none'; // Sembunyikan sidebar
        } else {
            // Scroll di luar slide 1
            sidebar.style.right = '0'; // Tampilkan sidebar
            slideData.style.display='unset';
    }
    }
  return (
    // Panggil fungsi handleScroll saat halaman dimuat dan saat di-scroll
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);
  )
}

export default Script