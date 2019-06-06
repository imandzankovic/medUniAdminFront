<template>
<body>
  <div id="app">
    <nav
      class="navbar navbar-light navbar-expand-lg fixed-top"
      id="mainNav"
      style="background-color: #155159;"
    >
      <div class="container">
           <router-link class="navbar-brand" :to="{name: 'admin'} ">MedUni</router-link>
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
            <!-- <li class="nav-item" role="presentation">
              <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'about'}">About</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'contact'}">Contact</router-link>
            </li> -->
             <!-- <li class="nav-item" role="presentation">
              <router-link :to="{name: 'createPost'}">Create Post</router-link>
            </li>  -->
            <li class="nav-item" role="presentation">
              <router-link :to="{name: 'admin'}">Admin Manager</router-link>
            </li> 
              <!-- <li class="nav-item" role="presentation">
              <router-link :to="{name: 'posts'}">List Posts</router-link>
            </li>  -->
             <li class="nav-item" role="presentation">
              <router-link :to="{name: 'login'}">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</body>
</template>
<style>


@import "./assets/bootstrap/css/bootstrap.min.css";
@import "./assets/fonts/font-awesome.min.css";
@import "./assets/fonts/ionicons.min.css";
@import "./assets/css/Features-Boxed.css";
@import "./assets/css/Login-Form-Clean.css";
@import "./assets/css/Footer-Basic.css";
@import "./assets/css/Login-Form-Clean.css";
@import "./assets/css/Contact-Form-Clean.css";
@import "./assets/css/Navigation-with-Search.css";
@import "./assets/css/Team-Boxed.css";

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"');
@import url('https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic');
</style>

 <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/clean-blog.js"></script>
<script>

export default {
  name: "app"
 
 
};
</script>
