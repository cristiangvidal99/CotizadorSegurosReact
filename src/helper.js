// Function that obtains the difference of years
export function getDifferenceYear(year) {
    return  new Date().getFullYear() - year
}
// Function that calculates the total to pay according to the brand
export function calculateCarBrand(marca) {
    let increase;

    switch(marca) {
        case 'Europeo':
            increase = 1.30;
            break;
        case 'Americano':
            increase = 1.15;
            break;
        case 'Europeo':
            increase = 1.05;
            break;
        default:
            break;
    }

    return increase;
}
// Function that calculates the type of car insurance
export function getPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Function that shows the first letter in uppercase
export function toUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}