<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dashboard</title>
  <link rel="stylesheet" href="dashboard.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <link rel="icon" type="image/png" href="../../Asset/R.png">
</head>

<body data-bs-theme="dark" id="mainBody" onload="loadState()">
  <nav class="navbar bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <div style="flex:2; display:flex">
        <div style="flex:0.5"></div>
        <div class="logo-wrap">
          <img class="logo" src="../../Asset/R.png" alt="">
          <h2 class="logo-text">
            RyZ Online Shop
          </h2>
        </div>
      </div>
      <div style="flex:2"></div>
      <div  style="flex:4">
        <form class="d-flex" role="search">
          <input id="searchInput" class="form-control me-2" placeholder="Search Your Stuff Here...">
          <button id="searchBtn" class="btn btn-outline-success" type="button" onclick="search('searchInput')" >Search</button>
        </form>
      </div>
      <div style="flex:2"></div>
      <div id="accountPlaceholder" style="flex:2; display:flex;cursor:pointer">
        <div style="flex:1"></div>
        <div style="flex:3.5; text-align:end;position:relative;font-size:20px;margin-top:auto;margin-bottom:auto">Username</div>
        <div style="flex:0.5"></div>
        <div class="div-img">
          <img class = "div-circle" src="../Asset/User.jpg" alt="">
        </div>
        <div style="flex:1"></div>
      </div>
      
    </div>
  </nav>
  <br><br>

  <div class="list" id="dashboardList"></div>

  <!-- Modal -->
  <div class="modal fade" id="modal-cart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure add to cart?</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-cart-body">
          ...
        </div> 
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="updateCart()" data-bs-dismiss="modal" id="liveToastBtn">Save
            changes</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer sticky-bottom sticky-bot bg-black">
    <div class="container text-center" style="height:5vh">
      <span class="text-white" style="font-size:30px;">
        This Website Is Made By RyZ
      </span>
    </div>
  </footer>

  <!-- Notification -->
  <div class="toast-container position-fixed bottom-0 end-0 p-2">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header bg-success">
      <img src="../../Asset/R.png" class="rounded me-2 toastLogo" alt="...">
      <strong class="me-auto">Notification</strong>
      <small>A second ago...</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body bg-success">
      Your product is successfully add to cart!
    </div>
  </div>
</div>

  <script type="module" src="./dashboard.js"></script>
  <script type="module" src="../cart.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
</body>

</html>