const PROMO = `PATRON`;

const PRODUCTS = [
    {
        id: 1,
        title: "iPhone 9",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69
    },
    {
        id: 2,
        title: "iPhone X",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09
    },
    {
        id: 4,
        title: "OPPOF19",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3
    },
    {
        id: 5,
        title: "Huawei P30",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09
    },
    {
        id: 6,
        title: "MacBook Pro",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57
    },
    {
        id: 7,
        title: "Samsung Galaxy Book",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25
    }
]

const PERCENT = 100;

function compareNumeric(a, b) {
    if (a.rating > b.rating) return -1;
    if (a.rating == b.rating) return 0;
    if (a.rating < b.rating) return 1;
}

let usersPromo = prompt(`Enter promo.`);
if (usersPromo !== null) {
    usersPromo = usersPromo.replaceAll(` `, ``).toUpperCase();
}

const isPromoActive = PROMO === usersPromo;

const isSortByRatingActive = confirm(`Would you like to sort products by rating?`);

const renderProductsTable = (products, promo, sortByRating) => {
    const copiedProducts = JSON.parse(JSON.stringify(products));

    if (sortByRating) {
        copiedProducts.sort(compareNumeric);
    }

    let TRs = copiedProducts.map((item) => {
        return `
        <tr>
            <td>${item.title}</td>
            <td>${item.price}$</td>
            <td>${item.discountPercentage}%</td>
            <td>${item.rating}</td>
        </tr>`
    });
    
    const finalPrice = copiedProducts.reduce((currentValue, item) => {
        if (promo) {
            const discountPrice = item.price - (item.price * item.discountPercentage / PERCENT) + currentValue;

            return +discountPrice.toFixed(2);
        } else {
            return currentValue + item.price;
        }
    }, 0);
     
    document.write(`
        <table>
            <thead>
                <tr>
                    <th>Product title</th>
                    <th>Product price</th>
                    <th>Product discount percentage</th>
                    <th>Product rating</th>
                </tr>
            </thead>
            <tbody>${TRs.join(``)}</tbody>
            <tfoot>
                <tr>
                    <td colspan="4">Final price: ${finalPrice}$</td>
                </tr>
            </tfoot>
        </table>
    `)
}

renderProductsTable(PRODUCTS, isPromoActive, isSortByRatingActive);
