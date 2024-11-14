// Import
import { statistic } from "./Statistic.js";
import { convertToRupiah } from "./convertToRupiah.js";
import { normalizeDate } from "./normalizeDate.js";

// Variabel
var totalCartPrice = 0;
var typeAdd;
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
try {
    var onCart = JSON.parse(sessionStorage.getItem("Cart"));
    if (onCart == null) var onCart = {};
} catch (error) {
    var onCart = {};
}

// HTML ID
window.modalCartBody = document.getElementById("modal-cart-body");
window.modalFooter = document.getElementById("modalFooter");
window.modalHeader = document.getElementById("modalHeader");
window.modalBody = document.getElementById("modalBody");
window.liveToast = document.getElementById('liveToast');


//Function
window.updateCart = function () {
    var id = typeAdd + "-input";
    var placeholder = document.getElementById(id);
    var quantity = parseInt(placeholder.value, 10);
    if (typeAdd in onCart) {
        onCart[typeAdd]["type"] = typeAdd;
        onCart[typeAdd]["quantity"] += quantity;
        onCart[typeAdd]["price"] += quantity * priceList[typeAdd];
    } else {
        onCart[typeAdd] = {};
        onCart[typeAdd]["type"] = typeAdd;
        onCart[typeAdd]["quantity"] = quantity;
        onCart[typeAdd]["price"] = quantity * priceList[typeAdd];
    }
    sessionStorage.setItem("Cart", JSON.stringify(onCart));
    totalCartPrice += quantity * priceList[typeAdd];
};

window.modal = function (type) {
    var id = type + "-input";
    var placeholder = document.getElementById(id);
    var quantity = placeholder.value;
    var price = priceList[type] * quantity;
    if (quantity > 0) {
        var Totalsum = totalCartPrice + price;
        modalCartBody.innerHTML = "<strong>" + type + "</strong> " + "<br>Your Total Purchases: " + convertToRupiah(price) + " <br> Number of Stuff: " + quantity + " <br> Total On Cart: " + convertToRupiah(Totalsum);
        typeAdd = type;
    } else {
        placeholder.value = 0;
        modalCartBody.innerHTML = "...";
    }
};

window.add = function (type) {
    var idInput = type + '-input';
    var placeholder = document.getElementById(idInput);
    placeholder.value++;
};

window.substract = function (type) {
    var idInput = type + '-input';
    var placeholder = document.getElementById(idInput);
    placeholder.value--;
    if (placeholder.value < 0) placeholder.value = 0;
};

window.check = function (type) {
    var idBox = type + '-box';
    var checkBox = document.getElementById(idBox);
    var idMin = type + '-add';
    var idAdd = type + '-min';
    var idInput = type + '-input';
    var addButton = document.getElementById(idAdd);
    var minButton = document.getElementById(idMin);
    var placeholder = document.getElementById(idInput);

    if (checkBox.checked) {
        totalCartPrice += placeholder.value * priceList[type];
        placeholder.disabled = true;
        addButton.disabled = true;
        minButton.disabled = true;
    } else {
        totalCartPrice -= placeholder.value * priceList[type];
        placeholder.disabled = false;
        addButton.disabled = false;
        minButton.disabled = false;
    }
    totalSpent.innerHTML = "Total Spent: " + convertToRupiah(totalCartPrice);
};

window.showCart = function () {
    modalHeader.innerHTML = '<h1 class="modal-title fs-5">My Cart</h1><button id="modalCloseBtn" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    modalBody.innerHTML = '<div id="cartList" class="cart-list"></div>';
    modalFooter.innerHTML = '<div style="display:flex;width:100%;height:100%"><div style="flex:0.75;"><div class="checkbox-wrapper-39 center"><label><input id="selectAll-box" type="checkbox" onclick="selectAll()" /><span class="checkbox"></span></label></div><div class="center">Select All</div></div><div style="flex:4.9; position:relative; text-align:end;"><h3 id="cartTotalSpent" style="position: absolute; top: 50%; transform: translate(0%, -50%); width: 100%;">Total Spent: Rp 0,00</h3></div><div style="flex:0.1"></div><div style="flex:1.5; display:flex; justify-content:center; align-items:center"><button type="button" style="width: 11.25rem;" class="btn btn-outline-danger" onclick="deleteItem()">Delete Item</button></div><div style="flex:1.5; display:flex; justify-content:center; align-items:center"><button id="liveToastBtn" type="button" style="width: 11.25rem;" class="btn btn-outline-warning" onclick="commitBuy()">Commit Purchases</button></div></div>';
    fillCart();
};

window.fillCart = function () {
    window.cartList = document.getElementById("cartList");
    window.totalSpent = document.getElementById("cartTotalSpent");
    window.selectAllBox = document.getElementById("selectAll-box");

    totalCartPrice = 0;
    cartList.innerHTML = "";
    for (var key in onCart) {
        var type = key;
        var quantity = onCart[key]["quantity"];
        cartList.innerHTML += '<div class="card mb-3" id="' + type + '-container"><div class="row g-0"><div class="col-md-1"><div class="cart-checkbox"><div class="checkbox-wrapper-39 center"><label><input id="' + type + '-box" type="checkbox" onclick="check(`' + type + '`)"/><span class="checkbox"></span></label></div></div></div><div class="col-md-2"><img src="../Asset/Sell/' + type + '.jpg" class="img-fluid rounded-start fit" alt="..."></div><div class="col-md-9"><div class="card-body" style="height:100%"><h2 class="card-title">' + type + '</h2><h7 class="card-text"> Harga: ' + convertToRupiah(priceList[type]) + ' </h7><div style="height:50%; position:relative"><div class="btn-wrapper"><button type="submit" class="btn btn-outline-warning" onclick=\'substract("' + type + '")\' style="width:3rem" id = "' + type + '-min">-</button><input id="' + type + '-input" type="number" class="form-control" value="' + quantity + '" min="0" required><button type="submit" class="btn btn-outline-warning" onclick=\'add("' + type + '")\' style="width:3rem" id = "' + type + '-add">+</button></div></div></div></div></div></div>';
    }
    totalSpent.innerHTML = "Total Spent: Rp 0,00";
    selectAllBox.checked = false;
}

window.selectAll = function () {
    for (var key in onCart) {
        var idBox = key + '-box';
        var checkBox = document.getElementById(idBox);
        checkBox.click();
    }
};

window.commitBuy = function () {
    window.closeModal = document.getElementById("modalCloseBtn");
    try {
        var cnt = localStorage.getItem("Counter");
        if (cnt == null || isNaN(cnt)) cnt = 0;
    } catch (error) {
        var cnt = 0;
    }
    try {
        var alreadySpent = parseInt(localStorage.getItem("Total Spent"));
        if (alreadySpent == null || isNaN(alreadySpent)) alreadySpent = 0;
    } catch (error) {
        var alreadySpent = 0;
    }
    var purchased = {};
    var numberOfProduct = 0;
    purchased["Stuff"] = {};
    for (var type in onCart) {
        var idBox = type + '-box';
        var checkBox = document.getElementById(idBox);
        if (checkBox.checked) {
            purchased["Stuff"][type] = onCart[type];
            delete onCart[type];
            numberOfProduct++;
        }
    }
    if (numberOfProduct == 0) return;

    cnt++;
    alreadySpent += totalCartPrice;
    purchased["Total"] = totalCartPrice;
    purchased["Date"] = normalizeDate();
    localStorage.setItem("Total Spent", alreadySpent);
    localStorage.setItem(cnt, JSON.stringify(purchased));
    localStorage.setItem("Counter", cnt);
    sessionStorage.setItem("Cart", onCart);
    const toast = bootstrap.Toast.getOrCreateInstance(liveToast);
    toast.show();
    statistic();

    closeModal.click();
};

window.deleteItem = function () {
    for (var type in onCart) {
        var idBox = type + '-box';
        var checkBox = document.getElementById(idBox);
        if (checkBox.checked) {
            delete onCart[type];
        }
    }
    sessionStorage.setItem("Cart", onCart);
    showCart();
};
