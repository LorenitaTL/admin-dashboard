<template>
  <div>
    <div
      class="
        bg-success
        check
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <i class="fas fa-check text-white"></i>
    </div>
    <div>
      <p class="fw-bold mb-0 mt-3">Cambios guardados</p>
      <p>Tu administrador se ha guardado correctamente</p>
    </div>
    <button
      class="btn btn-secondary text-white"
      @click="$router.push({ name: 'admin' })"
    >
      Regresar a mis administradores
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.check {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>