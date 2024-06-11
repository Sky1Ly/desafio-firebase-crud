<script>
export default {
  name: 'App'
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Users</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link active">Inicio</router-link>
            <router-link to="/create-user" class="nav-link">Create Users</router-link>
            <router-link to="/delete-user" class="nav-link">Delete Users</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
