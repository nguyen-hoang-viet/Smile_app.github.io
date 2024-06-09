const dishAndPrice = [
    ["TV", "Tokbokki kiểu việt", 25000],
    ["KP", "Kimbap thường", 18000],
    ["TSTTM", "Trà sữa truyền thống (M)", 20000],
    ["TSTTL", "Trà sữa truyền thống (L)", 28000],
    ["TSTXM", "Trà sữa thái xanh (M)", 20000],
    ["TSTXL", "Trà sữa thái xanh (L)", 28000],
    ["TDM", "Trà dâu (M)", 20000],
    ["TDL", "Trà dâu (L)", 25000],
    ["TĐM", "Trà đào (M)", 20000],
    ["TĐL", "Trà đào (L)", 25000],
    ["SDM", "Soda dâu (M)", 20000],
    ["SDL", "Soda dâu (L)", 25000],
    ["SVQM", "Soda việt quất (M)", 20000],
    ["SVQL", "Soda việt quất (L)", 25000],
    ["TCM", "Trà chanh (M)", 12000],
    ["TCL", "Trà chanh (L)", 15000],
    ["KPC", "Kimbap chiên", 22000],
    ["CV", "Mì Cay viên", 37000],
    ["CKCV", "Mì Cay Kimchi", 37000],
    ["CHS", "Mì Cay Hải sản", 45000],
    ["CKCHS", "Mi Cay kimchi hải sản", 47000],
    ["CBM", "Mì Cay Bò Mỹ", 45000],
    ["CKCBM", "Mì Cay Kimchi Bò Mỹ", 47000],
    ["CTC", "Mì Cay Thập Cẩm", 48000],
    ["CĐB", "Mi Cay Đặc Biệt", 52000],
    ["MTĐRC", "Mì tương đen rau củ", 35000],
    ["CXXTN", "Chân gà sả tắc có xương (N)", 30000],
    ["CXXTL", "Chân gà sả tắc có xương (L)", 65000],
    ["CXSTN", "Chân gà sốt thái có xương (N)", 30000],
    ["CXSTL", "Chân gà sốt thái có xương (L)", 65000],
    ["RXXTN", "Chân gà sả tắc rút xương (N)", 35000],
    ["RXXTL", "Chân gà sả tắc rút xương (L)", 70000],
    ["RXSTN", "Chân gà sốt thái rút xương (N)", 35000],
    ["RXSTL", "Chân gà sốt thái rút xương (L)", 70000],
    ["CST", "Cóc sốt thái", 15000],
    ["GR", "Gan rim", 18000],
    ["BX", "Bắp xào", 20000],
    ["V3", "Bò viên", 10000],
    ["MV", "Mực viên", 12000],
    ["CVTC", "Cá viên bọc trứng cút", 15000],
    ["CVSM", "Cá viên sốt ma", 15000],
    ["KTC", "Khoai tây chiên (xí muội)", 18000],
    ["XXĐ", "Xúc xích đức", 10000],
    ["PMQ", "Phomai que", 10000],
    ["CB1", "Combo 1", 35000],
    ["CB2", "Combo 2", 40000],
    ["CB3", "Combo 3", 55000],
    ["CB4", "Combo 4", 55000],
    ["KBL", "Khô bò", 38000],
    ["KTC1", "Khoai tây chiên (phomai)", 18000],
    ["KGL", "Khô gà", 28000],
    ["BTT", "Bánh tráng trộn", 20000],
    ["CBIS3", "Combo 1 sốt", 45000],
    ["CB283", "Combo 2 sốt", 50000],
    ["CH383", "Combo 3 sốt", 65000],
    ["MTĐT", "Mì tương đen trứng", 35000],
    ["THQ", "Tokbokki HQ", 27000],
    ["TPM", "Tokbokki phomai", 35000],
    ["TOM", "Trà ổi hồng (M)", 20000],
    ["TOL", "Trà ổi hồng (L)", 25000],
    ["KBT", "Khô bỏ thêm", 7000],
    ["XXĐT", "Xx đức thêm"],
    ["XXVT", "Xx thường thêm", 3000],
    ["MIT", "Mi thêm", 12000],
    ["NKCT", "Nấm kim châm", 5000],
    ["VT", "Viên", 3000],
    ["KCT", "Kimchi", 6000],
    ["PDT", "Pudding", 4000],
    ["TCT", "Trân châu trắng", 1000],
    ["TDT", "Thach dừa", 1000],
    ["CHIP", "Chipchip", 30000],
    ["BLTM", "BLTM", 60000],
    ["KGK", "Khô gà kí", 320000],
    ["KBK", "Khô bò kí", 650000],
    ["HĐK", "Hạt điều kí", 300000],
    ["CS", "Chiên sốt", 10000],
    ["BTR", "Bánh tráng ruốc", 12000],
    ["MUC", "Mực ngào", 130000],
    ["KBT", "Khô bò thêm", 7000],
    ["KGT", "Khô gà thèm", 6000],
    ["BTK", "Bánh tráng thêm", 4000],
    ["PTK", "Phồng tôm thêm", 4000],
    ["MT", "Mì tokbokki", 35000],
    ["HCT", "Hạt chia thêm", 4000],
    ["TĐT", "Thạch đào", 4000],
    ["PMT", "Phô mai SỢI thêm", 10000],
    ["PMT1", "Phô mai lát thêm", 10000],
    ["CTT", "Chả cá thuường", 5000],
    ["CHT", "Cha cả hân", 5000],
    ["V1", "Tôm viên", 10000],
    ["V2", "Cá viên", 10000],
    ["CB1S1", "Combo 1 sốt mắm", 45000],
    ["CB1S2", "Combo 1 sốt mắm me", 45000],
    ["CB1S3", "Combo 1 sốt bơ tỏi", 15000],
    ["CB2S1", "Combo 2 sốt mắm", 50000],
    ["CB2S2", "Combo 2 sốt mắm me", 50000],
    ["CB2S3", "Combo 2 sốt bơ tỏi", 50000],
    ["CB3S1", "Combo 3 sốt mắm", 65000],
    ["CB3S2", "Combo 3 sốt mắm me", 65000],
    ["CB3S3", "Combo 3 sốt bơ tỏi", 65000],
    ["TT", "Trứng thêm", 5000],
    ["NN", "Nước ngọt", 13000],
    ["NTT", "Nem trẻ trộn", 50000],
    ["TVM", "Trà vải (M)", 20000],
    ["TVL", "Trà vải (L)", 25000],
    ["SCVQ", "Sữa chua việt quất", 22000],
    ["TCXCN", "Trứng cút xào chua ngọt", 30000],
    ["TCC", "Trứng cút chiên", 10000],
    ["MTPM", "Mi tokbokki phomai", 40000],
    ["GBPKL", "Gân bò sốt thái", 70000],
    ["CB2PK", "Combo 2 món", 70000],
    ["NC", "Nui chiên", 15000],
    ["NL", "Nước suối", 7000],
    ["CB2ST", "Combo 2 món sốt thái", 70000],
    ["TLT", "Trà lipton", 20000],
    ["CCRR", "Chả cá rau răm", 20000],
    ["CCT", "Chả cá trộn", 25000],
    ["MCT", "Mì cay thêm", 12000],
    ["TXM", "Trà xoài (M)", 20000],
    ["TXL", "Trà xoài (L)", 25000],
    ["GSC", "Gà sốt cay", 35000],
    ["GSPM", "Gà sốt phomai", 35000],
    ["GSCPM", "Gà sốt cay phủ phomai", 40000],
    ["GV", "Gà viên", 27000]
];

var priceDish;
var listDishOrdered = [];
var listQuantity = [];
var tableNumber


const btnDownload = document.getElementById('btn-download');
const btnPrint = document.getElementById('btn-print');
const tbody = document.querySelector('tbody');
const total = document.getElementById('total');

// Danh sách sản phẩm mẫu (thay thế bằng dữ liệu thực)
var products = [];

// Hiển thị danh sách sản phẩm
function renderProducts() {
    let totalAmount = 0;
    tbody.innerHTML = '';
    products.forEach((product, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = product.name;
        cell1.style.textAlign = 'left';

        row.insertCell().textContent = product.quantity;

        const cell2 = row.insertCell();
        cell2.textContent = product.price.toLocaleString({ style: 'currency', currency: 'VND' });
        cell2.style.textAlign = 'right';

        const amount = product.quantity * product.price;
        totalAmount += amount;

        const cell3 = row.insertCell();
        cell3.textContent = amount.toLocaleString({ style: 'currency', currency: 'VND' });
        cell3.style.textAlign = 'right';

    });
    total.textContent = totalAmount.toLocaleString({ style: 'currency', currency: 'VND' });
}

window.addEventListener('load', () => {

    const storedData = localStorage.getItem('orderData');
    if (storedData) {
        const orderData = JSON.parse(storedData)

        tableNumber = orderData.tableID
        listDishOrdered = orderData.listDishOrdered
        listQuantity = orderData.listQuantity
        
        //Gom món
        for (let index1 = 0; index1 < listDishOrdered[tableNumber].length - 1; index1++){
            for (let index2 = index1 + 1; index2 < listDishOrdered[tableNumber].length; index2++){
                if (listDishOrdered[tableNumber][index1] === listDishOrdered[tableNumber][index2]){
                    listQuantity[tableNumber][index1] = listQuantity[tableNumber][index1] + 1;
                    listDishOrdered[tableNumber].splice(index2, 1);
                    listQuantity[tableNumber].splice(index2, 1);
                    index2--
                }
            }
        }

        for (let indexOfListDishOrdered = 0; indexOfListDishOrdered < listDishOrdered[tableNumber].length; indexOfListDishOrdered++){
            for (let indexOfdishAndPrice = 0; indexOfdishAndPrice < dishAndPrice.length; indexOfdishAndPrice++){
                if (listDishOrdered[tableNumber][indexOfListDishOrdered] === dishAndPrice[indexOfdishAndPrice][1]){
                    priceDish = dishAndPrice[indexOfdishAndPrice][2];
                    break;
                }
            }
            products.push({name: listDishOrdered[tableNumber][indexOfListDishOrdered], quantity: listQuantity[tableNumber][indexOfListDishOrdered], price: priceDish});
        }
        localStorage.removeItem('orderData');
        renderProducts();
    }
})

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape'){
        window.close()
    }
});


