<template>
  <div>
    <AdminForm :admin="admin" />
    <div>
      <button class="btn btn-outline-secondary text-primary">Cancelar</button>
      <button class="btn btn-secondary text-white mx-3">Guardar cambios</button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    AdminForm: defineAsyncComponent(() =>
      import("../components/AdminForm.vue")
    ),
  },
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

<style>
</style>