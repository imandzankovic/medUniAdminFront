<template>



    

<div id="accordion">
     <br>
     <br>
    <div  v-for="(contact,key) in contacts" :key="contact._id">
   <br>
   <br>

 
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         {{contact.name}}
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        E-mail : {{contact.email}}
        <br>
        Message: {{contact.msg}}
      </div>
    </div>
  </div>

   </div>
    
</div>


</template>
<script>
import { constants } from "crypto";
export default {
  data() {
    var end = require("../../../dev.env");
    return {
      contacts: [],
      staza: end.VUE_APP_BASE_URI
    };
  },
  created: function() {
    this.fetchContacts();
  },

  methods: {
    fetchContacts() {
        console.log(this.staza)
      let uri = this.staza + "contacts";
      this.axios.get(uri).then(response => {
        this.contacts = response.data;
      });
    }
   
  }
};
</script>