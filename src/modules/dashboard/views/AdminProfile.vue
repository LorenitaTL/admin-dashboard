<template>
  <div class="m-3 w-75">
    <img
      class="avatar"
      :src="admin.picture"
    />
    <h5 class="fw-bold mb-5 mt-3">{{ `${admin.name} ${admin.last_name} ` }}</h5>
    <div class="row">
      <div class="col-4">
        <p class="text-opacity">NOMBRE (S)</p>
        <p class="fw-bold">{{ admin.name }}</p>
      </div>
      <div class="col-4">
        <p class="text-opacity">APELLIDOS</p>
        <p class="fw-bold">{{ admin.last_name }}</p>
      </div>
      <div class="col-4">
        <p class="text-opacity">CORREO ELECTRÓNICO</p>
        <p class="fw-bold">{{ admin.email }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <p class="text-opacity">ÁREA</p>
        <p class="fw-bold">{{ admin.area }}</p>
      </div>
      <div class="col-4">
        <p class="text-opacity">ESTATUS</p>
        <p class="fw-bold">{{ admin.active ? "Activo" : "Inactivo" }}</p>
      </div>
    </div>
    <hr />
    <button class="btn btn-secondary text-white">Editar administrador</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: "1",
    },
  },
  data() {
    return {
      admin: null,
    };
  },
  computed: {
    ...mapGetters("admins", ["getAdminById"]),
  },

  methods: {
    loadAdmin() {
      const admin = this.getAdminById(this.id);

      this.admin = admin;
    },
  },

  created() {
    this.loadAdmin();
  },

  watch: {
    id() {
      this.loadAdmin();
    },
  },
};
</script>


<style lang="scss" scoped>
.text-opacity {
  opacity: 64%;
}
</style>