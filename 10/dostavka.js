"use strict";



document.addEventListener('DOMContentLoaded', () => {

    // 1 задание 

    const shopCart = document.querySelector('.shop__cart');
    const shopCartDelete = shopCart.querySelector('.shop__cart-delete');
    const shopCartChange = shopCart.querySelector('.shop__cart-change');
    const shopCartSortUp = shopCart.querySelector('.shop__cart-sort-up');
    const shopCartSortDown = shopCart.querySelector('.shop__cart-sort-down');
    const shopCartInner = shopCart.querySelector('.shop__cart-inner');
    const shopProducts = [
        'Торитики',
        'Кексики',
        'Напиточки',
        'Мармеладик',
        'Эклерчики',
        'А больше у нас нечего кушать',
        'Шляпа',
        'Очки'
    ];
   

    shopProducts.forEach(item => {
        let element = document.createElement('div');
        element.classList.add('shop__cart-item');
        element.textContent = item;
        shopCartInner.append(element);
    });

    // Функция по получению рандомного значения
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Изменение одного из элементов на другой
    shopCartChange.addEventListener('click', () => {
        let newItem = shopProducts[getRandomInt(shopProducts.length)];
        shopProducts[getRandomInt(shopProducts.length)] = newItem;
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });
    });

    // Удаление первого элемента

    // shopCartDelete.addEventListener('click', () => {
    //     shopCart.querySelector('.shop__cart-item').remove();
    // });

    shopCartDelete.addEventListener('click', () => {
        if (shopProducts.length!=0){
            shopProducts.splice(0,1);
            shopCart.querySelector('.shop__cart-item').remove();
        }
        // console.log(shopProducts);
        let elements = document.querySelectorAll('.shop__cart-item');
        let cnt=0;
        elements.forEach(el =>{
            el.textContent=shopProducts[cnt];
            cnt+=1;
        });
    });
});
