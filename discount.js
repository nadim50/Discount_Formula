
function discount_count(unit) {
    let unit_100_price = 100;
    let unit_less_200_price = 90;
    let unit_greater_200_price = 70;

    if (unit <= 100) {
        let price = unit_100_price * unit;
        return price;
    }

    else if (unit <= 200) {
        unit_100_price = unit_100_price * 100;
        unit_less_200_price = unit_less_200_price * (unit - 100);
        let price = unit_100_price + unit_less_200_price;
        return price;
    }

    else {
        unit_100_price = unit_100_price * 100;
        unit_less_200_price = unit_less_200_price * 100;
        unit_greater_200_price = unit_greater_200_price * (unit - 200);
        let price = unit_100_price + unit_less_200_price + unit_greater_200_price;
        return price;
    }



}

let units = 210;
console.log('Discount extend Price  is : ', (discount_count(units)))