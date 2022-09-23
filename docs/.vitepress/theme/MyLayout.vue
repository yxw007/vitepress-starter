<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <!-- outline之前的插槽 -->
    <template #aside-outline-before> outline before slot AAA </template>
  </Layout>
</template>
