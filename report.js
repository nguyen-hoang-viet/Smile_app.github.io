const tbody = document.querySelector('tbody');

function renderReport(reportData) {

    tbody.innerHTML = '';
    for (let indexOfReport = 0; indexOfReport < reportData.length; indexOfReport++) {
        const row = tbody.insertRow();

        const cell1 = row.insertCell();
        cell1.textContent = reportData[indexOfReport].tableNumber;
        cell1.style.textAlign = 'left';

        const cell2 = row.insertCell();
        cell2.textContent = '1';
        cell2.style.textAlign = 'left';

        const cell3 = row.insertCell();
        cell3.textContent = '1';
        cell3.style.textAlign = 'left';

        const cell4 = row.insertCell();
        cell4.textContent = reportData[indexOfReport].codeOfDish;
        cell4.style.textAlign = 'left';

        const cell5 = row.insertCell();
        cell5.textContent = reportData[indexOfReport].nameOfDish;
        cell5.style.textAlign = 'left';

        const cell6 = row.insertCell();
        cell6.textContent = reportData[indexOfReport].quantity;
        cell6.style.textAlign = 'left';

        const cell7 = row.insertCell();
        cell7.textContent = reportData[indexOfReport].totalOfBill.toLocaleString({ style: 'currency', currency: 'VND' });;
        cell7.style.textAlign = 'left';

        const cell8 = row.insertCell();
        cell8.textContent = reportData[indexOfReport].shipFee.toLocaleString({ style: 'currency', currency: 'VND' });
        cell8.style.textAlign = 'left';

        const cell9 = row.insertCell();
        cell9.textContent = reportData[indexOfReport].discountCode.toLocaleString({ style: 'currency', currency: 'VND' });
        cell9.style.textAlign = 'left';

    }
}

window.addEventListener('load', () => {

    var reportData = JSON.parse(localStorage.getItem('reportData'));

    //const confirmation = confirm(reportData[0].codeOfDish)
    
    renderReport(reportData);
})