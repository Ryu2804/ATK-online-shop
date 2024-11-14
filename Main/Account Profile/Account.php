<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Account</title>
    <link rel="stylesheet" href="account.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="icon" type="image/png" href="../../Asset/R.png">
</head>

<body data-bs-theme="dark" id="mainBody" onload="loadState()">
    <div class="container text-center absolute-center">
        <div class="row">
            <div class="center">
                <div class="card center" style="width: 50rem; ">
                    <br><br>
                    <img src="../Asset/User.jpg" class="div-circle " alt="...">
                    <div class="card-body" style="position:relative; width:100%">
                        <h1 class="card-title">Username</h1>
                        <br>
                        <div class="list">
                            <div class="card" style="width:100%">
                                <h5 class="card-header">Statistics</h5>
                                <div id="statisticBody" class="card-body"></div>
                            </div>
                        </div>
                        <br><br><br>
                        <button style="position: absolute; bottom:20px; left:20px; width:23rem" class="btn btn-outline-warning" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cartModal" onclick="showCart()"> My Cart</button>
                        <button style="position: absolute; bottom:20px; right:20px; width:23rem" class="btn btn-outline-warning" type="button" class="btn btn-primary" onclick="backToStore()"> Back To Store</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div id="modalHeader" class="modal-header"></div>
                <div id="modalBody" class="modal-body"></div>
                <div id="modalFooter" class="modal-footer" style="text-align:start"></div>
            </div>
        </div>
    </div>

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
                You successfully purchased some items! Thank you for purchasing!
            </div>
        </div>
    </div>

    <script type="module" src="../cart.js"></script>
    <script type="module" src="account.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>