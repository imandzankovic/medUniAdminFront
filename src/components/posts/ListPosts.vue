<template>
  <div>
    <div>
      <br>
      <br>
    </div>
    <div class="header">
      <br>
      <br>
      <h1 style="margin-left:300px;">Posts Manager</h1>
      <br>
      <br>
    </div>
    <div class="container">
      <router-link :to="{name: 'createPost'}" class="btn btn-success">Add</router-link>
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
          <tr v-for="(post,key) in posts" :key="post._id">
            <td>{{ post.title }}</td>
            <td>{{ post.title2 }}</td>
            <td>
              <router-link
                :to="{name: 'editPost', params: { id: post._id }}"
                class="btn btn-primary"
              >Edit</router-link>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deletePost(post._id,key)">Delete</button>
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
      posts: [],
      staza: end.VUE_APP_BASE_URI
    };
  },
  created: function() {
    this.fetchPosts();
  },

  methods: {
    fetchPosts() {
      let uri = this.staza + "posts";
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    deletePost(id, index) {
      let uri = this.staza + "posts/" + id;
      this.axios.delete(uri).then(response => {
        this.posts.splice(index, 1);
      });
    }
  }
};
</script>