<template>
  <div class="comments">
    <div
      v-for="comment in comments"
      :key="`comment_${comment.id}`"
      class="comment"
    >
      <p>
        <span> {{ comment.id }} </span>
        <span> - {{ comment.name }} </span>
        <span> - {{ comment.email }} </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  async asyncData({ $httpClient }) {
    try {
      const response = await $httpClient.get('/api/test')
      return {
        comments: response.data,
      }
    } catch (error) {}
  },
}
</script>
<style>
.comments {
  border: solid black 1px;
  width: 50%;
  margin: 0 auto;
}
.comment {
  padding: 10px;
  border-bottom: solid black 1px;
}
.comment:last-child {
  border-bottom: 0;
}
.comment p {
  margin: 0;
}
</style>
