// Login.vue

<template>
<body>
  <div class="login-clean">
    <form method="post">
      <h2 class="sr-only">Login Form</h2>
      <div class="text-info illustration">
        <i class="icon ion-ios-navigate border rounded-0"></i>
      </div>
      <div class="form-group">
        <input class="form-control" type="email" name="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input class="form-control" type="password" name="password" placeholder="Password">
      </div>
      <div class="form-group text-secondary">
        <button class="btn btn-primary btn-block bg-info" type="submit">Log In</button>
      </div>
      <a class="forgot" href="#">Forgot your email or password?</a>
    </form>
  </div>
  <nav
    class="navbar navbar-light navbar-expand-lg fixed-top"
    id="mainNav"
    style="background-color: #155159;"
  >
    <div class="container">
      <a class="navbar-brand" href="index.html">MedUni</a>
      <button
        data-toggle="collapse"
        data-target="#navbarResponsive"
        class="navbar-toggler"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars"></i>
      </button>
     <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav navbar-nav ml-auto">
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'about'}">About</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'contact'}">Contact</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'post', params: {id: 2}}">Post</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'login'}">Login</router-link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</body>
</template>
 <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/clean-blog.js"></script>
<script>
export default {};
</script>