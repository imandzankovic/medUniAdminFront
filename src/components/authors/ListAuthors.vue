<template>
  <div>
    <div>
      <br>
      <br>
    </div>
    <div class="header">
      <br>
      <br>
      <h1 style="margin-left:300px;">Authors Manager</h1>
      <br>
      <br>
    </div>
    <div class="container">
      <router-link :to="{name: 'createAuthor'}" class="btn btn-success">Add</router-link>
      <br>
      <br>
      <table class="table">
        <thead class="thead">
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <td>Actions</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(author,key) in authors" :key="author._id">
            <td>{{ author.name }}</td>
            <td>{{ author.surname }}</td>
            <td>
              <router-link
                :to="{name: 'editAuthor', params: { id: author._id }}"
                class="btn btn-primary"
              >Edit</router-link>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deleteAuthor(author._id,key)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { constants } from "crypto";
export default {
  data() {
    var end = require("../../../dev.env");
    return {
      authors: [],
      staza: end.VUE_APP_BASE_URI
    };
  },
  created: function() {
    this.fetchAuthors();
  },

  methods: {
    fetchAuthors() {
        console.log(this.staza)
      let uri = this.staza + "authors";
      this.axios.get(uri).then(response => {
        this.authors = response.data;
      });
    },
    deleteAuthor(id, index) {
      let uri = this.staza + "authors/" + id;
      this.axios.delete(uri).then(response => {
        this.authors.splice(index, 1);
      });
    }
  }
};
</script>