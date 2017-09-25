<template>
  <div id="posts
  ">
    <strong>Posts</strong>
    <ul v-if="posts && posts.length">
      <li v-for="post in posts" v-bind:key="post.id">
        <p>
          <strong>{{post.title}}</strong>
        </p>
        <p>{{post.content}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error in errors" v-bind:key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'posts',
  data: () => ({
    posts: [],
    errors: []
  }),

  created () {
    axios.get(`http://localhost:9090/api/v1/posts`)
      .then(response => {
        this.posts = response.data.posts
        console.log(response.data.posts)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
