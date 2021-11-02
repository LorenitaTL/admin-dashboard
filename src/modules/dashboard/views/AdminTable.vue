<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-4">
        <form class="d-flex">
          <input
            class="form-control"
            type="text"
            placeholder="Buscar"
            v-model="term"
          />
          <button class="btn btn-info mx-2">BUSCAR</button>
          <button class="btn btn-secondary">
            <i class="fas fa-filter text-white"></i>
          </button>
        </form>
      </div>

      <div class="col-4">
        <div class="d-flex justify-content-end">
          <button class="btn btn-outline-secondary text-primary mx-2">
            Descargar
          </button>
          <button
            class="btn btn-secondary text-white"
            @click="
              $router.push({
                name: 'new-admin',
              })
            "
          >
            Agregar nuevo admin
          </button>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <th scope="col">Administradores</th>
          <th scope="col">Área</th>
          <th scope="col">Correo</th>
          <th scope="col">Estatus</th>
          <th scope="col">Detalles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="admin in adminsByTerm" :key="admin.id">
          <th scope="row">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </th>
          <td class="fw-bold">
            <img class="avatar" :src="admin.picture" />{{
              `${admin.name} ${admin.last_name}`
            }}
          </td>
          <td>{{ admin.area }}</td>
          <td>{{ admin.email }}</td>
          <td
            class="fw-bold"
            :class="admin.active ? 'text-success' : 'text-danger'"
          >
            {{ admin.active ? "ACTIVO" : "INACTIVO" }}
          </td>
          <td>
            <i
              class="mx-2 pointer fas fa-edit text-secondary"
              @click="
                $router.push({ name: 'edit-admin', params: { id: admin.id } })
              "
            ></i>
            <i class="mx-2 pointer far fa-trash-alt text-danger"></i>
            <i
              class="mx-2 pointer far fa-eye"
              @click="
                $router.push({
                  name: 'admin-details',
                  params: { id: admin.id },
                })
              "
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("admins", ["getAdminsByTerm"]),
    adminsByTerm() {
      return this.getAdminsByTerm(this.term);
    },
  },
  data() {
    return {
      term: "",
    };
  },
};
</script>

<style>
</style>