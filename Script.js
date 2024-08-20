document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    const introContent = document.querySelector('.intro-content');
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        introContent.classList.add('hidden');
        header.style.display = 'block';
    } else {
        introContent.classList.remove('hidden');
        header.style.display = 'none';
    }
});

//read more
document.getElementById("readMoreLink").addEventListener("click", function(e) {
    e.preventDefault();
    var moreContent = document.getElementById("moreContent");
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        this.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        this.textContent = "Read More";
    }
});


// document.addEventListener('keydown', function(event) {
//     if (event.key === 'PrintScreen') {
//         event.preventDefault();
//         alert('Screenshots are not allowed!');
//     }
// });

// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//     alert('Right-click is disabled!');
// });

