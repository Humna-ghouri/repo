
// for nav 
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.onclick = function () {
    mobileMenu.classList.toggle("hidden");
};





let paraIndex = 0;
const paragraphs = [
    "We have been working with Adsventure for over six months now. We are very satisfied with the course of this cooperation, the punctuality and conscientiousness of the people responsible for our projects. Both AdWords campaigns and those on Facebook achieve high results. We recommend!",
    "Adsventure has been a game-changer for our business. Their team is professional, responsive, and delivers outstanding results. Our online presence has significantly improved, and we couldn't be happier with their services.",
    "Working with Adsventure has been a pleasure. Their expertise in digital marketing is evident, and they have helped us achieve our goals efficiently. We highly recommend their services to anyone looking to boost their online marketing efforts."
];

const paraContent = document.getElementById('slider-content'); // Get the paragraph element

function updateParagraph() {
    paraContent.textContent = paragraphs[paraIndex]; // Update the paragraph content
}

function showNextPara() {
    paraIndex = (paraIndex + 1) % paragraphs.length; // Move to the next paragraph
    updateParagraph();
}

function showPreviousPara() {
    paraIndex = (paraIndex - 1 + paragraphs.length) % paragraphs.length; // Move to the previous paragraph
    updateParagraph();
}

// Add event listeners for the arrows
document.getElementById('next').addEventListener('click', showNextPara);
document.getElementById('prev').addEventListener('click', showPreviousPara);

// na hone wala kaam
let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function showCard(index) {
    const offset = -index * 100; // 100% of slider width
    document.querySelector('.cards-container').style.transform = `translateX(${offset}%)`;
}

function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    showCard(currentIndex);
}

function prevCard() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    showCard(currentIndex);
}

showCard(currentIndex);




// form validations
document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("success-message").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("success-message").classList.add("hidden");
        document.getElementById("appointment-form").reset();
    }, 3000);
});

// /////
const logos = document.querySelectorAll('#logos img');
        let currentIndexs = 0;

        document.getElementById('next').addEventListener('click', () => {
            logos[currentIndexs].classList.add('hidden');
            currentIndexs = (currentIndexs + 1) % logos.length;
            logos[currentIndexs].classList.remove('hidden');
        });

        document.getElementById('prev').addEventListener('click', () => {
            logos[currentIndexs].classList.add('hidden');
            currentIndexs = (currentIndexs - 1 + logos.length) % logos.length;
            logos[currentIndexs].classList.remove('hidden');
        });















        // /////////////////////////////////////////////
        const swiper = new Swiper('.card-wrapper', {
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },
            }
        });