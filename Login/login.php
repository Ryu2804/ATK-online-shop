  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="../Asset/R.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>RyZ | Home</title>
      <link rel="stylesheet" href="style.css">

      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    </head>
    <body>
      
      <header>
        <div class="logo-wrap">
          <img class="logo" src="../Asset/R.png" alt="">
          <h2 class="logo-text">
            RyZ Website
          </h2>
        </div>
        

        <nav>
          <button class="btn-login">Login</button>
        </nav>
      </header>

      <div class="main">
        <h1 class="typewrite">
          Welcome To RyZ Online Shop!
        </h1>
      </div>

      <section class="container">
        <span class="close-popup">
          <ion-icon name="close" style="color:black"></ion-icon>
        </span>

        <div class="form-box login">
          <h2>Login</h2>
          
          <form action="../Database/_login.php" method="POST">
            <div class="input-box">
              <span class="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="text" id="email" name="email" required>
              <label for="email">Email</label>
            </div>

            <div class="input-box">
              <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" id="password" name="password" required>
              <label for="password">Password</label>
            </div>

            <div class="remember-forgot">
              <label for="remember"> <input type="checkbox" id="remember">Remember Me</label>

              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" style="color:black">Login</button>

            <div class="login-register">
              <p>Don't have an account? <a href="#" class="register-link">Register</a></p>
            </div>
          </form>
        </div>

        <div class="form-box register">
          <h2>Registration</h2>
          
          <form action="../Database/_register.php" method="POST">
            <div class="input-box">
              <span class="icon"><ion-icon name="person"></ion-icon></span>
              <input type="text" id="username" name="username" required>
              <label for="username">Username</label>
            </div>

            <div class="input-box">
              <span class="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="text" id="email" name="email" required>
              <label for="email">Email</label>
            </div>

            <div class="input-box">
              <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" id="password" name="password" required>
              <label for="password">Password</label>
            </div>

            <div class="remember-forgot">
              <label for="remember"> <input type="checkbox" id="remember">I agree to the terms & conditions</label>
            </div>

            <button type="submit" style="color:black">Register</button>

            <div class="login-register">
              <p>Already have an account? <a href="#" class="login-link">Login</a></p>
            </div>
          </form>
        </div>


      </section>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      <script type="module" src="script.js"></script>
    </body>
  </html>