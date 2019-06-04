<template>
  <div class="container">

<form class="fileupload" action="upload" method="post" enctype="multipart/form-data">
      <h1>Upload File Here</h1>
      <p name="title">klklklkl </p>
      <input type="file" name="file" ref="file" value="" v-on:change="handleFileUpload()">
      <!-- <input type="submit" /> -->
			<br>
			<div class ="container"><vue-progress-bar></vue-progress-bar></div>
			
       <button v-on:click="submitFile()">Submit</button>
    </form>

    <!-- <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div> -->
  </div>
</template>
 
<script>
//import axios from 'axios';
  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        file: '',
        forms:null
      }
    },

    methods: {
      /*
        Submits the file to the server
      */
      submitFile(){
        /*
                Initialize the form data
            */
            let formData = new FormData();

            /*
                Add the form data we need to submit
            */
            formData.append('title', 'kesa');
            formData.append('file', this.file);
            console.log(formData)

        /*
          Make the request to the POST /single-file URL
        */
            this.axios.post( "http://localhost:3000/upload",
                formData,
              //   {
              //   headers: {
              //       'Content-Type': 'multipart/form-data'
              //   }
              // }
             
            ).then(function(){
          console.log('SUCCESS!!')
        })
        .catch(function(){
          // alert("OVO JE PRICAAAAA O NAMA 2");
          console.log('FAILURE!!');
       
        });
      //     let uri = "http://localhost:3000/upload";
      // this.axios.post(uri, formData).then(response => {
      //   this.forms = response.data;
      //    //event.target.reset();
      //     //this.$router.push("admin");
      // });
      },

      /*
        Handles a change on the file upload
      */
      handleFileUpload(){
				this.file = this.$refs.file.files[0];
				 this.$Progress.start()
				 alert('cekaj')
        //this.file=document.getElementsByName('file').value;
        console.log(this.file)
      }
    }
  }
</script>