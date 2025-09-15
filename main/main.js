
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('show'); // Переключаем класс show
    });
});
const img1 = '/img/1.svg'
const img1_1 = '/img/img1.svg'
const img2 = '/img/2.svg'
const img2_2 = '/img/img2.svg'
const img3 = '/img/3.svg'
const img3_3 = '/img/img3.svg'
const img4 = '/img/4.svg'
const img4_4 = '/img/img4.svg'
const img5 = '/img/5.svg'
const img5_5 = '/img/img5.svg'
const img6 = '/img/6.svg'
const img6_6 = '/img/img6.svg'

const card1 = document.querySelector('.card1')

card1.addEventListener('mouseenter', () => {
    mainImage1.src = img1_1
})
card1.addEventListener('mouseleave', () => {
    mainImage1.src = img1
})

const card2 = document.querySelector('.card2')

card2.addEventListener('mouseenter', () => {
    mainImage2.src = img2_2
})
card2.addEventListener('mouseleave', () => {
    mainImage2.src = img2
})

const card3 = document.querySelector('.card3')

card3.addEventListener('mouseenter', () => {
    mainImage3.src = img3_3
})
card3.addEventListener('mouseleave', () => {
    mainImage3.src = img3
})

const card4 = document.querySelector('.card4')

card4.addEventListener('mouseenter', () => {
    mainImage4.src = img4_4
})
card4.addEventListener('mouseleave', () => {
    mainImage4.src = img4
})

const card5 = document.querySelector('.card5')

card5.addEventListener('mouseenter', () => {
    mainImage5.src = img5_5
})
card5.addEventListener('mouseleave', () => {
    mainImage5.src = img5
})

const card6 = document.querySelector('.card6')

card6.addEventListener('mouseenter', () => {
    mainImage6.src = img6_6
})
card6.addEventListener('mouseleave', () => {
    mainImage6.src = img6
})