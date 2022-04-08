// declaration of variables

const price = document.getElementById('price');
const eightGbMemory = document.getElementById('normal-memory');
const sixteenGbMemory = document.getElementById('standard-memory');

const memoryCost = document.getElementById('memory-cost');

const lowSsd = document.getElementById('low-ssd');
const mediumSsd = document.getElementById('medium-ssd');
const highSsd = document.getElementById('high-ssd');

const storageCost = document.getElementById('storage-cost');

const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');

const deliveryCharge = document.getElementById('delivery-charge');

const totalPrice = document.getElementById('total-price');

const applyPromo = document.getElementById('apply-button');

const discountTotal = document.getElementById('discount-total');


// updating total price
function updateTotalPrice() {
    const total = parseFloat(price.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCharge.innerText);
    totalPrice.innerText = total;
    discountTotal.innerText = total;

}

// handle memory buttons

eightGbMemory.addEventListener('click', function () {
    price.innerText = '1299';
    memoryCost.innerText = '0';
    updateTotalPrice();
})
sixteenGbMemory.addEventListener('click', function () {
    price.innerText = '1299';
    memoryCost.innerText = '180';
    updateTotalPrice();
})

// handle storage button

lowSsd.addEventListener('click', function () {
    price.innerText = '1299';
    storageCost.innerText = '0';
    updateTotalPrice();
})
mediumSsd.addEventListener('click', function () {
    price.innerText = '1299';
    storageCost.innerText = '100';
    updateTotalPrice();
})
highSsd.addEventListener('click', function () {
    price.innerText = '1299';
    storageCost.innerText = '180';
    updateTotalPrice();
})

// handle delivery charge button

freeDelivery.addEventListener('click', function () {
    price.innerText = '1299';
    deliveryCharge.innerText = '0';
    updateTotalPrice();
})
paidDelivery.addEventListener('click', function () {
    price.innerText = '1299';
    deliveryCharge.innerText = '20';
    updateTotalPrice();
})

// handle promo code apply

applyPromo.addEventListener('click', function () {
    const couponCode = document.getElementById('input-field');
    const coupon = couponCode.value;
    if (coupon == 'macpro') {
        const discoutPercentage = totalPrice.innerText * 0.2;
        const discountAfterDeduction = totalPrice.innerText - discoutPercentage;
        discountTotal.innerText = discountAfterDeduction;
    }
    else {
        discountTotal.innerText = totalPrice.innerText;
    }
})

