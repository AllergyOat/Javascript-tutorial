import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import {loadProducts, loadProductsFecth} from "../data/products.js";
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
    await loadProductsFecth();

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/* 
Promise.all([
    loadProductsFecth(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
})
 */

/* 
//promises keep our code more flat.
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    })

}).then((value) => {
    console.log(value)

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
 */

/* 
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
 */