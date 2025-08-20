const formatPrice = (price: number, symbol = "تومان") => {
    const formatter = new Intl.NumberFormat("fa-IR", {
        style: "currency",
        currency: "IRR",
    });

    return formatter.format(price).replace("ریال", symbol);
};

export default formatPrice;
