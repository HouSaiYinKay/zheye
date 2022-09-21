<template>
  <div v-for="post in list" :key="post.id" class="text-align-center">
    <div class="card mb-4">
      <div class="card-body">
        <h4 class="card-title">{{ post.title }}</h4>
        <div class="row align-items-center pt-3">
          <div class="col-3" v-if="post.image">
            <img :src="post.image" class="rounded-lg w-100" :alt="post.title" />
          </div>
          <div class="col-9">
            <p class="card-text">{{ post.content }}</p>
          </div>
          <div class="mt-3">
            <p class="text-muted">{{ post.createAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PostProps } from "../testData";
export default defineComponent({
  props: {
    list: {
      type: Array as PropType<PostProps[]>,
      required: true,
    },
  },
});
</script>
<style lang=""></style>
