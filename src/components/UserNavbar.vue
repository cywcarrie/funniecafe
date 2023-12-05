<template>
  <LoadingVue :active="isLoading">
    <LoadingComponent></LoadingComponent>
  </LoadingVue>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand"
          ><h1 class="logo text-primary fw-bolder me-3">Fun<span class="text-secondary">nie</span></h1></router-link>
      <div class="d-flex d-lg-none d-md-block">
        <router-link to="/cart"  class="nav-link text-primary hover-nav position-relative">
          <i class="bi bi-cart-fill fs-3"></i>
          <span class="badge text-primary bg-secondary bg-opacity-75 position-absolute" style="top:-11px; right:-8px;" v-if="cart.final_total > 0">$ {{ $filters.currency(cart.final_total) }}</span>
        </router-link>
      </div>
      <div class="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link to="/about"  class="nav-link fs-5"
        >About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/all"  class="nav-link fs-5"
        >Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorite"  class="nav-link fs-5"
        >Favorites</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faqs"  class="nav-link fs-5"
        >FAQs</router-link>
          </li>
        </ul>
        <div class="d-flex d-none d-lg-block">
          <router-link to="/cart"  class="nav-link text-primary hover-nav position-relative fs-5"
          >Cart<i class="bi bi-cart-fill fs-3 ps-1"></i>
          <span class="badge text-primary bg-secondary bg-opacity-75 position-absolute" style="top:-11px; right:-15px;" v-if="cart.final_total > 0">$ {{ $filters.currency(cart.final_total) }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue'

export default {
  components: {
    LoadingComponent
  },
  data () {
    return {
      isLoading: false,
      cart: {},
      collapse: {}
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        // console.log(response)
        this.cart = response.data.data
        this.isLoading = false
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    }
  },
  mounted () {
    this.getCart()
    this.emitter.on('updatecart', () => {
      this.getCart()
    })
  },
  unmounted () {
    this.emitter.off('updatecart')
  }
}
</script>
