<template>
  <v-main>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-main>
</template>

<script>
export default {
  name: "Content"
};
</script>