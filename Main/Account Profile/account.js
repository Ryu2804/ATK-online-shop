import { convertToRupiah } from "../convertToRupiah.js";
import { statistic } from "../Statistic.js";

var priceList = {
    "Pensil 2B": 2000,
    "Bolpoin Kokoro": 6000,
    "Spidol Snowman Hitam": 8500,
    "Spidol Kecil Hitam": 1500,
    "Tipe-X Kertas Joyko": 7500,
    "Buku Kotak Besar": 6500,
    "Penghapus Joyko": 2000,
    "Tas Sekolah": 125000,
    "Penggaris Besi": 10000,
    "Penggaris Kayu": 8000,
    "Penggaris Plastik": 5000,
    "Jangka": 8000,
    "Kotak Pensil": 11500,
    "Pulpen Standard": 3000,
    "Buku Tulis 38 Lembar": 4000,
    "Buku Gambar A4": 6000,
    "Spidol Warna": 12000,
    "Sticky Notes": 7500,
    "Kertas HVS A4 70gsm": 35000,
    "Kertas HVS A4 80gsm": 40000,
    "Stapler Kecil": 7000,
    "Isi Staples": 3000,
    "Map Plastik": 2500,
    "Map Kertas": 2000,
    "Lem Kertas UHU": 5000,
    "Pensil Warna 12 Warna": 18000,
    "Crayon 12 Warna": 15000,
    "Penghapus Papan Tulis": 5000,
    "Stabilo": 6000,
    "Gunting": 7000
};
var currentState = ["", ""];

window.state = localStorage.getItem("State");
window.body = document.getElementById("mainBody");
window.statisticBody = document.getElementById("statisticBody");
window.modalFooter = document.getElementById("modalFooter");
window.modalHeader = document.getElementById("modalHeader");
window.modalBody = document.getElementById("modalBody");
window.historyModal = document.getElementById("historyModal");


document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "q") {
        window.state++;
        if (window.state & 1) {
            window.body.setAttribute("data-bs-theme", "light");
        } else {
            window.body.setAttribute("data-bs-theme", "dark");
        }
        localStorage.setItem("State", window.state);
    }
});

window.backToStore = function () {
    window.location.href = "../Dashboard/dashboard.php";
};

window.showHistory = function () {
    modalHeader.innerHTML = '<h1 class="modal-title fs-5">History</h1><button button id="modalCloseBtn" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    modalFooter.innerHTML = '';
    var counter = parseInt(localStorage.getItem("Counter"));
    var body = "";
    body = '<div id="historyList" class="list">';
    for (var i = counter; i >= 1; i--) {
        body += '<div class="card text-center">';
        var data = JSON.parse(localStorage.getItem(i));
        var stuff = data["Stuff"];
        var total = data["Total"];
        var date = data["Date"];
        body += '<div class="card-header"><ul class="nav nav-pills card-header-pills">';
        var currState = true;
        for (var type in stuff) {
            if (currState) {
                currentState[i] = type;
                currState = false;
                body += '<li id="' + i + '-' + type + '-Nav" class="nav-item" onclick="switchItem(`' + type + '`,' + i + ')"><a class="nav-link active" href="#">' + type + '</a></li>';
            }
            else body += '<li id="' + i + '-' + type + '-Nav" class="nav-item" onclick="switchItem(`' + type + '`,' + i + ')"><a class="nav-link disabled" href="#">' + type + '</a></li>';
        }
        body += '</ul></div>';
        var curr = currentState[i];
        var quantity = parseInt(stuff[curr]["quantity"]);
        body += '<div class="card-body" style="width:100%"><div class="card mb-3" style="width: 100%;"><div class="row g-0"><div class="col-md-4" id="' + i + '-historyImage"><img src="../Asset/Sell/' + currentState[i] + '.jpg" class="img-fluid rounded-start imgHistory" alt="..."></div><div class="col-md-8" id="' + i + '-historyText"><div class="card-body" style="text-align:start"><h5 class="card-title">' + curr + '</h5><p class="card-text">Dipesan sebanyak ' + quantity + ' dengan total pembayaran sebesar ' + convertToRupiah(quantity * priceList[curr]) + '</p><p class="card-text"><small class="text-body-secondary">' + date + '</small></p></div></div></div></div></div><div class="card-footer"><div style="display:flex"><div style="flex:6;text-align:start"> Purchase #' + i + ' </div><div style="flex:6;text-align:end"> Total Spent: ' + convertToRupiah(total) + '</div></div></div></div>';
    }
    body += '</div>';
    modalBody.innerHTML = body;
    
}

window.loadState = function () {
    if (window.state & 1) {
        window.body.setAttribute("data-bs-theme", "light");
    } else {
        window.body.setAttribute("data-bs-theme", "dark");
    }
    statistic();
}

window.switchItem = function (typeTo, row) {
    var idHistoryImage = row + "-historyImage";
    var idHistoryText = row + "-historyText";

    window.historyImage = document.getElementById(idHistoryImage);
    window.historyText = document.getElementById(idHistoryText);

    var quantity = JSON.parse(localStorage.getItem(row))["Stuff"][typeTo]["quantity"];
    var date = JSON.parse(localStorage.getItem(row))["Date"];
    var typeCurr = currentState[parseInt(row)];
    var idCurr = row + "-" + typeCurr + "-Nav";
    var idTo = row + "-" + typeTo + "-Nav";
    var listCurr = document.getElementById(idCurr);
    var listTo = document.getElementById(idTo);
    listCurr.innerHTML = '<a class="nav-link disabled" href="#">' + typeCurr + '</a>';
    listTo.innerHTML = '<a class="nav-link active" href="#">' + typeTo + '</a>';
    historyImage.innerHTML = '<img src="../Asset/Sell/' + typeTo + '.jpg" class="img-fluid rounded-start imgHistory" alt="...">';
    historyText.innerHTML = '<div class="card-body" style="text-align:start"><h5 class="card-title">' + typeTo + '</h5><p class="card-text">Dipesan Sebanyak ' + quantity + ' Dengan Total Pembayaran sebesar ' + convertToRupiah(quantity * priceList[typeTo]) + '</p><p class="card-text"><small class="text-body-secondary">' + date + '</small></p></div>';
    currentState[parseInt(row)] = typeTo;
}