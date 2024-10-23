function calculateDiscountedPrice(price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrace = 1000
const discountPercentage = 10
const finalPrice = calculateDiscountedPrice(originalPrace, discountPercentage)
console.log(`Original price: ${originalPrace} \nDiscount: ${discountPercentage}% \nPrice with discount: ${finalPrice}`);