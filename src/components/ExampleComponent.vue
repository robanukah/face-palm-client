<template>
    <div id="example">
        <ul v-if="posts && posts.length">
            <li v-for="post in posts" v-bind:key="post.id">
                <p>
                    <strong>{{post.title}}</strong>
                </p>
                <p>{{post.body}}</p>
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
// import axios from 'axios';

export default {
    el: 'example',
    data: () => ({
        posts: [],
        errors: []
    })
}
</script>
