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
            <h3>Create Post</h3>
          </div>
          <form name="myForm" v-on:submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Title:</label>
              <input
                type="text"
                ref="title"
                v-model="post.title"
                v-validate="'required'"
                id="title"
                name="title"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('title') }"
              >
              <div
                v-if="submitted && errors.has('title')"
                class="invalid-feedback"
              >{{ errors.first('title') }}</div>
            </div>

            <div class="form-group">
              <label>Img:</label>
              <input type="text" class="form-control" v-model="post.img">
            </div>
            <div class="form-group">
              <label>Video:</label>
              <input type="file" name="file" ref="file" value v-on:change="handleFileUpload()">
              <!-- <input type="text" class="form-control" v-model="post.video"> -->
              <div class="container">
                <vue-progress-bar></vue-progress-bar>
              </div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="text"
                name="textarea"
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
                placeholder="Text 2"
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
                id="textarea"
                class="form-control"
                name="textarea"
                placeholder="Text 3"
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
            <!--  
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
            </div>-->

            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Create Post">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
</template>
<script>
import { Validator } from "simple-vue-validator";
import { async } from 'q';
export default {
  components: {
    name: "createPost"
  },
  data() {
    return {
      post: {},
      author: {},
      authors: [],
      selected: null,
      file: "",
      title: "",
      msg:'',
      submitted: false
    };
  },
  created: function() {
    this.getAuthors();
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.$Progress.start();
      alert("Wait until upload is done!");
      //this.file=document.getElementsByName('file').value;
      console.log(this.file);
    },
    createPost() {
      let uri = "http://localhost:3000/api/posts";
      this.axios.post(uri, this.post).then(response => {
        console.log(response.data);
      });
    },
    getAuthors() {
      let uri = "http://localhost:3000/api/authors";
      this.axios.get(uri, this.post).then(response => {
        this.authors = response.data;
      });
    },
     sendToYoutube() {
      let uri = "http://localhost:3000/yt";
      this.axios.get(uri, this.msg).then(response => {
        this.msg = response.data;
      });
    },
      handleSubmit(e) {
      var val = document.getElementById("textarea").value;
      console.log("val jeeeee " + val);
      let formData = new FormData();

      /*
                Add the form data we need to submit
            */
      formData.append("title", this.title);
      formData.append("file", this.file);
      console.log(formData);

      /*
          Make the request to the POST /single-file URL
        */
      this.axios
        .post("http://localhost:3000/upload", formData)
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (!valid) {
          alert("Fill required fields - title and text!");
        } else {
          this.sendToYoutube();
          this.createPost();
          https: this.$notification.show(
            "Post created",
            {
              body: "Your post is successfully created!"
            },
            {}
          );
          event.target.reset();
          this.$router.push("admin");
        }
      });
    }
  }
};
</script>