<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('home', { version: 'draft' });
console.log(story)
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>