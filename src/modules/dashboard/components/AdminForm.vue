<template>
  <div class="d-flex flex-column">
    <p>Sube una fotografía con un peso menor a 2MB</p>

    <form>
      <div class="card col-6 mb-3">
        <div
          class="
            card-body
            d-flex
            flex-column
            justify-content-center
            align-content-center
          "
        >
          <div
            class="
              mx-auto
              d-flex
              flex-column
              justify-content-center
              align-items-center
              upload-file
            "
          >
            <i class="fas fa-file-image text-white"></i>
          </div>
          <small>Arrastra tu archivo o</small>
          <button href="#" class="btn btn-outline-secondary text-primary">
            Selecciona
          </button>
        </div>
      </div>

      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre (s)</label>
        <input
          v-model="adminData.name"
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre(s)"
        />
      </div>
      <div class="mb-3">
        <label for="apellidos" class="form-label">Apellidos</label>
        <input
          v-model="adminData.last_name"
          type="text"
          class="form-control"
          id="apellidos"
          placeholder="Apellidos(s)"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Área"
          v-model="adminData.email"
        />
      </div>

      <div class="mb-3">
        <label for="area" class="form-label">Área</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="adminData.area"
        >
          <option
            v-for="area in areas"
            :key="area.value"
            v-bind:value="area.value"
          >
            {{ area.text }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Estatus</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="adminData.active"
        >
          <option v-for="st in status" :key="st.value" v-bind:value="st.value">
            {{ st.text }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    admin: {
      type: Object,
    },
  },
  data() {
    return {
      adminData: this.admin || {
        name: "",
        last_name: "",
        email: "",
        area: "",
        active: false,
        picture: null,
      },
      areas: [
        { text: "Recursos humanos", value: "Recursos humanos" },
        { text: "TI", value: "TI" },
        { text: "Marketing", value: "Marketing" },
      ],
      status: [
        { text: "Activo", value: true },
        { text: "Inactivo", value: false },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.upload-file {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: gray;
}
</style>