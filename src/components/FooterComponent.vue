<template>
  <section class="bg-primary">
    <div class="container">
      <footer class="py-4">
        <div class="border-bottom pb-3 mb-3">
          <ul class="nav justify-content-center">
            <li class="nav-item"><RouterLink to="/"  class="nav-link px-2 text-white fw-bold hover-nav"
          >Home</RouterLink></li>
            <li class="nav-item"><RouterLink to="/about"  class="nav-link px-2 text-white fw-bold hover-nav"
          >About</RouterLink></li>
            <li class="nav-item"><RouterLink to="/products"  class="nav-link px-2 text-white fw-bold hover-nav"
          >Products</RouterLink></li>
            <li class="nav-item"><RouterLink to="/favorite"  class="nav-link px-2 text-white fw-bold hover-nav"
          >Favorites</RouterLink></li>
          </ul>
          <ul class="list-unstyled d-flex justify-content-center pt-2">
            <li class="nav-item"><a class="text-white hover-nav" href="#" @click.prevent=""><i style="font-size: 24px" class="bi bi-facebook"></i></a></li>
            <li class="nav-item ms-3"><a class="text-white hover-nav" href="#" @click.prevent=""><i style="font-size: 24px" class="bi bi-github"></i></a></li>
            <li class="nav-item ms-3"><a class="text-white hover-nav" href="#" @click.prevent="goToLogin" title="Admin Login"><i style="font-size: 24px" class="bi bi-person-circle"></i></a></li>
          </ul>
        </div>
        <p class="text-center text-white">© Funnie Cafe - Only for Self Learning Purpose</p>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
