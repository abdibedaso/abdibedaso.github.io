function calcTip() {
    let subtotalElem = document.getElementById('subtotal');
    let tipElem = document.getElementById('tip');
    let totalElem = document.getElementById('total');

    let subtotal = subtotalElem.value;
    let tip = tipElem.value;

    let total = (tip / 100) * subtotal;
    totalElem.innerHTML = '$' + total;
}