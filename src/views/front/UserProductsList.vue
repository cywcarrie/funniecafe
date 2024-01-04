<template>
  <Navbar />
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder">Our Products</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-primary hover-nav fw-bold">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <div class="row my-5">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <div class="list-group text-start fw-bold">
            <router-link to="all" class="list-group-item list-group-item-action">
              <i class="bi bi-cup-hot-fill me-2 "></i>
              All
            </router-link>
            <router-link to='/user/coffee' class="list-group-item list-group-item-action">
              <i class="bi bi-cup-hot-fill me-2 "></i>
              Coffee
            </router-link>
            <router-link to='/user/macaron' class="list-group-item list-group-item-action">
              <i class="bi bi-cup-hot-fill me-2 "></i>
              Macaron
            </router-link>
            <router-link to='/user/cheesecake' class="list-group-item list-group-item-action">
              <i class="bi bi-cup-hot-fill me-2 "></i>
              CheeseCake
            </router-link>
          </div>
        </div>
        <div class="col-lg-9">
          <router-view/>
        </div>
      </div>
    </div>
    <ScrollTop />
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  components: {
    Navbar,
    Footer,
    ScrollTop
  }
}
</script>
