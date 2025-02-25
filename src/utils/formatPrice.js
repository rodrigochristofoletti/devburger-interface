export function FormatPrice (value) {
    return new Intl.NumberFormat('en-DE', {
        style: "currency",
        currency: "EUR",
    } 

    ).format(value / 100);
}