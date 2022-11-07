<template>
  <div v-if="error">
    <h2>Error: {{ error }}</h2>
  </div>
  <div v-if="loading">
    <h2>Loading data...</h2>
  </div>
  <h2>Users</h2>
  <span><b>Name<b></span><span><b>Username</b></span>
  <ul>
    <li v-for="item in data" :key="item.id">
      <span> {{ item.name }}</span> 
      {{ item.username }}
    </li>
  </ul>
</template>

<script>
import { useFetch } from '../composables/UseFetch.js';

export default {
  setup() {
    const { data, error, loading } = useFetch(
      'https://jsonplaceholder.typicode.com/users',
      {}
    );

    return {
      data,
      error,
      loading,
    };
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  width: 200px;
}
ul {
  list-style-type: square;
}
</style>
