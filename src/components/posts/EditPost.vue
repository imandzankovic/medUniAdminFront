<template>
<body>
  <div class="container">
    <div class="contact">
      <div class="card">
        <div class="card-header">
          <br>
          <br>
        </div>
        <div class="card-body">
          <div class="card-header">
            <h3>Edit Post</h3>
          </div>

          <form v-on:submit.prevent="updatePost">
            <div class="form-group">
              <label>Title:</label>
              <input type="text" class="form-control" v-model="post.title">
            </div>
            <div class="form-group">
              <label>Img:</label>
              <input type="text" class="form-control" v-model="post.img">
            </div>
            <div class="form-group">
              <label>Video:</label>
              <input type="text" class="form-control" v-model="post.video">
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="text"
                placeholder="Text"
                rows="14"
                v-model="post.text"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Title 2:</label>
              <input type="text" class="form-control" v-model="post.title2">
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="text"
                placeholder="Text"
                rows="14"
                v-model="post.text2"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Title 3:</label>
              <input type="text" class="form-control" v-model="post.title3">
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="text"
                placeholder="Text"
                rows="14"
                v-model="post.text3"
              ></textarea>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Author</label>
              </div>

              <select class="custom-select" id="inputGroupSelect01" v-model="post.author">
                <option v-for="author in authors" v-bind:value="author._id">{{author.name}}</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Category</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Edit Post">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
</template>


<script>
export default {
  data() {
    return {
      post: {},
      authors: [],
    };
  },

  created: function() {
    this.getPost();
    this.getAuthors();
  },

  methods: {
    getPost() {
      let uri = "http://localhost:3000/api/posts/" + this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.post = response.data;
      });
    },
    getAuthors() {
      let uri = "http://localhost:3000/api/authors";
      this.axios.get(uri, this.post).then(response => {
        this.authors = response.data;
      });
    },

    updatePost() {
      let uri = "http://localhost:3000/api/posts/" + this.$route.params.id;
      this.axios.put(uri, this.post).then(response => {
        this.$router.push({ name: "posts" });
      });
    }
  }
};
</script>