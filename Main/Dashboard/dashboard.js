import { convertToRupiah } from "../convertToRupiah.js";

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

window.state = localStorage.getItem("State");
window.body = document.getElementById("mainBody");
window.input = document.getElementById("searchInput");
window.accountPlaceholder = document.getElementById("accountPlaceholder");
window.toastTrigger = document.getElementById('liveToastBtn');
window.toastLiveExample = document.getElementById('liveToast');

if(window.state & 1) {
    window.body.setAttribute("data-bs-theme", "light");
} else {
    window.body.setAttribute("data-bs-theme", "dark");
}

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
  }

window.input.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchBtn").click();
    }
});

document.addEventListener("keydown", e => {
    if(e.ctrlKey && e.key.toLowerCase() === "q") {
        window.state++;
        if(window.state & 1) {
            window.body.setAttribute("data-bs-theme", "light");
        } else {
            window.body.setAttribute("data-bs-theme", "dark");
        }
        localStorage.setItem("State", window.state);
    }
});

window.accountPlaceholder.addEventListener('click', function() {
    window.location.href = '../Account Profile/Account.php';
});

window.search = function(id) {
    var inputStr = document.getElementById(id);
    var target = inputStr.value;
    for(var stuff in priceList) {
        var divStuff = document.getElementById(stuff);
        stuff = stuff.toLowerCase();
        target = target.toLowerCase();
        if(!stuff.includes(target)) {
            divStuff.style.display = "none";
        } else {
            divStuff.style.display = "block";
        }
    }
};

window.loadState = function(){
    var itemList = document.getElementById("dashboardList");
    if (window.state & 1) {
        window.body.setAttribute("data-bs-theme", "light");
    } else {
        window.body.setAttribute("data-bs-theme", "dark");
    } 
    var temporaryHTML = "";
    for(var type in priceList){
        itemList.innerHTML += '<div class="card" style="width: 18rem;" id="' + type + '"><img src="../Asset/Sell/' + type + '.jpg" class="card-img-top fit" alt="..."><div class="card-body"><h5 class="card-title">' + type + '</h5><p class="card-text">Harga: ' + convertToRupiah(priceList[type]) + '</p><div class="btn-wrapper"><button type="submit" class="btn btn-outline-warning" onclick="substract(\'' + type + '\')">-</button><input id="' + type + '-input" type="number" class="form-control" value="0" min="0" required><button type="submit" class="btn btn-outline-warning" onclick="add(\'' + type + '\')">+</button></div><br><button type="button" class="btn btn-outline-warning" style="margin-top:20px;width:250px;" onclick="modal(\'' + type + '\')" data-bs-toggle="modal" data-bs-target="#modal-cart"> Add to Cart </button></div></div>';
    }
}



