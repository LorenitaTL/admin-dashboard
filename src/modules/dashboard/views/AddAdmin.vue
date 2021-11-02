<template>
  <div>
    <AdminForm />
    <div>
      <button class="btn btn-outline-secondary text-primary">Cancelar</button>
      <button class="btn btn-secondary text-white mx-3" @click="saveAdmin">
        Agregar administrador
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from "vuex"; // computed!!!

export default {
  components: {
    AdminForm: defineAsyncComponent(() =>
      import("../components/AdminForm.vue")
    ),
  },
  methods: {
    ...mapActions("admins", ["createAdmin"]),

    saveAdmin() {
      this.createAdmin({
        id: "100",
        name: "Lorena",
        last_name: "Trujillo",
        area: "TI",
        email: "correo@gmail.com",
        active: false,
        picture:
          "https://specials-images.forbesimg.com/imageserve/5df3d3c64e291700078306e5/416x416.jpg?background=000000&cropX1=35&cropX2=4124&cropY1=30&cropY2=4119",
      });
      this.$router.push({ name: "success" });
    },
  },
};
</script>

<style>
</style>