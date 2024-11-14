import { convertToRupiah } from "./convertToRupiah.js";

export function statistic(){
    try{
        var totalSpent = parseInt(localStorage.getItem("Total Spent"));
        if(totalSpent==null || isNaN(totalSpent)) totalSpent = 0;
    } catch(error){
        totalSpent = 0;
    }
    totalSpent = convertToRupiah(totalSpent);

    try{
        var totalPurchase = localStorage.getItem("Counter");
        if(totalPurchase==null) totalPurchase = 0;
    } catch(error){
        totalPurchase = 0;
    }

    try{
        var firstPurchase = JSON.parse(localStorage.getItem("1"))["Date"];
        if(firstPurchase==null) firstPurchase = "-";
    } catch(error){
        firstPurchase = "-";
    }

    try{
        var lastPurchase = JSON.parse(localStorage.getItem(totalPurchase))["Date"];
        if(lastPurchase==null) lastPurchase = "-";
    } catch(error){
        lastPurchase = "-";
    }
    
    statisticBody.innerHTML = '<ul style="list-style-type: none;"><li>With ' + totalPurchase + ' Number of Purchases, You Already Spent ' + totalSpent + '</li><li>First Purchase Date: ' + firstPurchase + '</li><li>Last Purchase Date: ' + lastPurchase + '</li></ul><a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cartModal" onclick="showHistory()">Purchase History</a>';
}
