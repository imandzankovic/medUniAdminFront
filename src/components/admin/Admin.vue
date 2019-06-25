<template>
<html>
  <body>
    <div class="features-boxed">
      <div class="container">
        <div class="intro">
          <br>
          <br>
          <h2 class="text-center">Manager</h2>
          <p class="text-center">~ Welcome to Admin page ~</p>
        </div>
        <div class="row justify-content-center features">
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <div class="box">
              <i class="fa fa-map-marker fa fa-address-card-o icon"></i>
              <h3 class="name">Manage Posts</h3>
              <p class="description">Click to manage posts</p>
              <router-link :to="{name: 'posts'}">Manage Posts</router-link>
            </div>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <div class="box">
              <i class="fa fa-list-alt fa fa-mortar-board icon"></i>
              <h3 class="name">Manage Authors</h3>
              <p class="description">Click to manage authors</p>
              <router-link :to="{name: 'authors'}">Manage Authors</router-link>
            </div>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <div class="box">
              <i class="fa fa-phone icon"></i>
              <h3 class="name">Contacts</h3>
              <p class="description">See who contacted you</p>
              <a class="learn-more" href="#">Learn more »</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item">
            <div class="box">
              <i class="fa fa-clock-o fa fa-hashtag icon"></i>
              <h3 class="name">Manage About you</h3>
              <p class="description">Click to manage about you</p>
              <a class="learn-more" href="#">Learn more »</a>
            </div>
          </div>
          <div class="col-sm-6 col-md-5 col-lg-4 item"></div>
          <div class="col-sm-6 col-md-5 col-lg-4 item"></div>
        </div>
      </div>
    </div>
  </body>
</html>
</template>

 
<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/clean-blog.js"></script> 



<script>
export default {};
</script>