<template>
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70" />
  <div class="fixed-top">
    <div class="bg-secondary py-1">
      <div class="container">
        <Vue3Marquee
        class="container text-dark text-center fw-bold"
        :pause-on-hover="true">
          <span class="navbar-marquee">
            Using the coupon code<span class="text-white"> funniecafe </span>to get a<span class="text-white"> 20% </span> discount on your order.
          </span>
          <span class="navbar-marquee">
            Using the coupon code<span class="text-white"> funniecafe </span>to get a<span class="text-white"> 20% </span> discount on your order.
          </span>
        </Vue3Marquee>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <RouterLink to="/" class="navbar-brand"
            ><h1 class="logo text-primary fw-bolder me-3">Fun<span class="text-secondary">nie</span></h1></RouterLink>
        <div class="d-flex d-lg-none d-md-block">
          <RouterLink to="/cart"  class="nav-link text-primary hover-nav position-relative">
            <i class="bi bi-cart-fill fs-3"></i>
            <span class="badge text-white bg-danger position-absolute navbar-badge-position" v-if="cart.final_total > 0">$ {{ $filters.currency(cart.final_total) }}</span>
          </RouterLink>
        </div>
        <div class="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link fs-5"
          >About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link fs-5"
          >Products</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/favorite" class="nav-link fs-5"
          >Favorites</RouterLink>
            </li>
          </ul>
          <div class="d-flex d-none d-lg-block">
            <RouterLink to="/cart" class="nav-link text-primary hover-nav position-relative fs-5"
            >Cart<i class="bi bi-cart-fill fs-3 ps-1"></i>
            <span class="badge text-white bg-danger position-absolute navbar-badge-position" v-if="cart.final_total > 0">$ {{ $filters.currency(cart.final_total) }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
  data () {
    return {
      isLoading: false,
      cart: {},
      collapse: {}
    }
  },
  components: {
    Vue3Marquee
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
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
    this.emitter.on('update-cart', () => {
      this.getCart()
    })
  },
  unmounted () {
    this.emitter.off('update-cart')
  }
}
</script>
