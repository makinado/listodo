<template>
  <v-app id="inspire" :dark="setTheme">
    <Menu />
    <AppBar />
    <Content />
    <Footer />
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["appConfig"]),
    setTheme() {
      if (this.appConfig.dark == true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    }
  },
  components: {
    Menu: () => import("./components/layout/Menu"),
    AppBar: () => import("./components/layout/AppBar"),
    Content: () => import("./components/layout/Content"),
    Footer: () => import("./components/layout/Footer")
  }
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

html {
  overflow-y: auto;
  overflow-x: hidden;
}

body {
  margin: 0;
}

.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>