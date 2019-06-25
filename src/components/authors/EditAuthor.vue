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
            <h3>Edit Author</h3>
          </div>
          <form name="myForm" v-on:submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Name:</label>
              <input
                type="text"
                ref="name"
                v-model="author.name"
                v-validate="'required'"
                id="name"
                name="name"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('name') }"
              >
              <div
                v-if="submitted && errors.has('name')"
                class="invalid-feedback"
              >{{ errors.first('name') }}</div>
            </div>

            <div class="form-group">
              <label>Surname:</label>
              <input
                type="text"
                ref="surname"
                v-model="author.surname"
                v-validate="'required'"
                id="surname"
                name="surname"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('surname') }"
              >
              <div
                v-if="submitted && errors.has('surname')"
                class="invalid-feedback"
              >{{ errors.first('aurname') }}</div>
            </div>

            <div class="form-group">
              <label>Img:</label>
              <!-- <input type="text" class="form-control" v-model="author.img">  -->
              <input type="file" name="upfile" ref="upfile" value v-on:change="handleImgUpload()">
               <div class="container">
                <vue-progress-bar></vue-progress-bar>
              </div>
            </div>
            <!-- <div class="form-group">
              <label>Img:</label>
              <input type="file" name="file" ref="file" value v-on:change="handleFileUpload()">
            <input type="text" class="form-control" v-model="author.img"> 
              <div class="container">
                <vue-progress-bar></vue-progress-bar>
              </div>
            </div> -->

            <div class="form-group">
              <textarea
                class="form-control"
                id="text"
                name="textarea"
                placeholder="Bio"
                rows="14"
                v-model="author.bio"
              ></textarea>
            </div>

            <div class="form-group">
              <label>Profesion:</label>
              <input type="text" class="form-control" v-model="author.profesion">
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
              <input type="submit" class="btn btn-primary" value="Edit Author">
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
import { async } from "q";
import { constants } from "crypto";
export default {
  components: {
    name: "editAauthor"
  },
  data() {
    var end = require("../../../dev.env");
    let msgImg = "";

    return {
      author: {},
      authors: [],
      selected: null,
      file: "",
      title: "",
      msg: "",
      msg1: "",
      submitted: false,
      upfile: "",
      staza: end.VUE_APP_BASE_URI
    };
  },
  created: function() {
    this.getAuthor();
  },
  methods: {
    parentMethod(valueFromChild) {
      // Do something with the value
      console.log("From the child:", valueFromChild);
    },
    getAuthor() {
      let uri = this.staza + "authors/" + this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.author = response.data;
        console.log(this.author._id)
      });
    },
    handleSubmit(e) {
      //var val = document.getElementById("textarea").value;
      // if (this.file !== "") {
      //   let formData = new FormData();

      //   // Add the form data we need to submit

      //   //formData.append("title", this.title);
      //   formData.append("file", this.file);

      //   //formData.append("upfile", this.upfile);
      //   // console.log(formData);

      //   console.log("uslo u yt");
      //   // Make the request to the POST /single-file URL
      //   let uri = this.staza + "uploads";
      //   this.axios
      //     .post(uri, formData)
      //     .then(function() {
      //       console.log("SUCCESS!!");
      //     })
      //     .catch(function() {
      //       console.log("FAILURE!!");
      //     });
      // }
        if (this.upfile !== "") {
           let formData = new FormData();
           formData.append("upfile", this.upfile);

          let uri = this.staza + "images";
          console.log(uri);
          this.axios
            .post(uri, formData)
            .then(function() {
              console.log("SUCCESS!!");
            })
            .catch(function() {
              console.log("FAILURE!!");
            });
        }

      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (!valid) {
          alert("Fill required fields - title and text!");
        }

        // if (this.file !== "") {
        //   this.sendToGoogle();
        // }
        if (this.upfile !== "") {
          let uri = this.staza + "images";
          this.axios.get(uri, this.msgImg).then(response => {
            this.msg1 = response.data.message;

            console.log("msg je " + this.msg1);
          });
        }

        setTimeout(() => {
          this.editAuthor(this.msg1,this.author._id);
          console.log("IDDDDD");

          this.sendNotification();
        }, 2000);

        event.target.reset();
        this.$router.push("admin");
      });
    },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0];
    //   this.$Progress.start();
    //   alert("Wait until upload is done!");
    //   console.log(this.file);
    // },
    handleImgUpload() {
      this.upfile = this.$refs.upfile.files[0];
      this.$Progress.start();
      alert("Wait until upload is done!");
      console.log(this.upfile);
    },
    editAuthor(msgImg) {
      let uri = this.staza + "authors/" + this.author._id;
      console.log("staya je " + uri);
      if (msgImg != "") {
        this.author.img = msgImg;
      }

      //this.post.video=videoTitle;
      //console.log('videic' + this.post.video)
      console.log("slikica" + this.author.img);

      this.axios.put(uri, this.author).then(response => {
        this.$router.push({ name: "authors" });
      });
    },

    sendToGoogle() {
      let uri = this.staza + "images";
      this.axios.get(uri, this.msg).then(response => {
        this.msg = response.data.message;

        console.log("msg je " + this.msg);
      });
      setTimeout(() => this.$router.push({ path: "/admin" }), 5000);
    },
    sendNotification() {
      https: this.$notification.show(
        "Author edited",
        {
          body: "Your author is successfully edited!"
        },
        {}
      );
    }
  }
};
</script>