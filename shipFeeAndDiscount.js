let listDishOrdered = [];
let listQuantity = [];
let tableID
let dateAndTimeOfTable = []

window.addEventListener('load', () => {

    const storedData = localStorage.getItem('orderData');

    if (storedData) {
        const orderData = JSON.parse(storedData)

        tableID = orderData.tableID
        listDishOrdered = orderData.listDishOrdered
        listQuantity = orderData.listQuantity
        dateAndTimeOfTable = orderData.dateAndTimeOfTable

        //const confirmation = confirm(tableID);
    }
    localStorage.removeItem('orderData');
})

const btnThanhToan = document.getElementById('btn-thanh-toan');
const shipFeeInput = document.getElementById('ship-fee');
const discountCodeInput = document.getElementById('discount-code');
const noteInput = document.getElementById('note');

function openBillWindow(){
    const shipFee = Number(shipFeeInput.value);
    const discountCode = Number(discountCodeInput.value);
    const note = noteInput.value

    localStorage.setItem('orderData', JSON.stringify({listDishOrdered, listQuantity, tableID, shipFee, discountCode, note, dateAndTimeOfTable}))

    window.close()

    // Open bill popup window
    const billWindow = window.open(
        'bill.html', 
        'billWindow', 
        `width=1000, height=800`
    );

    // (Optional) Focus the bill window
    billWindow.focus();

}
// Click button 'Thanh toan' to open bill window
btnThanhToan.addEventListener('click', function(e) {
    openBillWindow()
});
// Press Enter to open bill window
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter'){
        openBillWindow()
    }
});