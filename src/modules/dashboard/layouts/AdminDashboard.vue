<template>
  <Navbar />

  <div class="container">
    <h5 class="title-font">Administradores de la consola</h5>
    <div class="d-flex">
      <router-view />
    </div>
  </div>
</template>



<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    // AdminTable: defineAsyncComponent(() => import("../views/AdminTable.vue")),
    // AdminProfile: defineAsyncComponent(() => import("../views/AdminProfile.vue")),
    // AddAdmin: defineAsyncComponent(() => import("../views/AddAdmin.vue")),
    //EditAdmin: defineAsyncComponent(() => import("../views/EditAdmin.vue")),
  },
};
</script>