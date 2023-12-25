<template>
  <Navbar />
  <LoadingVue :active="isLoading">
    <LoadingComponent></LoadingComponent>
  </LoadingVue>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder">Product</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="Previous" class="text-secondary hover-nav fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start d-none d-md-block">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-primary hover-nav fw-bold">Home</router-link></li>
          <li class="breadcrumb-item"><router-link to="/user/all" class="text-primary hover-nav fw-bold">Products</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row d-flex justify-content-center mb-5 mt-4 mt-md-0">
        <article class="col-lg-7">
          <img :src="product.imageUrl" alt="" class="img-fluid mb-3 bg-cover bg-center rounded-2">
        </article>
        <div class="col-lg-5 ps-lg-5 ">
          <div class="d-flex justify-content-start text-secondary fw-bold mt-4 mt-md-0">
            <p class="mb-4 fs-4"><i class="bi bi-cup-hot-fill me-2"></i>{{ product.category }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h2 class="m-0 fw-bold fs-1 text-primary">{{ product.title }}</h2>
            <a href="#" title="我的最愛" @click.prevent="addFavorite(product.id)" class="ps-3 ps-md-0">
              <i class="bi bi-heart text-primary fs-3" v-if="favoriteData.indexOf(product.id) === -1"></i>
              <i class="bi bi-heart-fill text-primary fs-3" v-else></i>
            </a>
          </div>
          <div class="mt-4 text-primary fs-5">
            {{ product.description }}
          </div>
          <div class="mt-4 text-primary">
            <p class="mb-2 fw-bold"><i class="bi bi-check-circle-fill pe-2"></i>Free Delivery Over NTD 500</p>
            <!-- <p class="mb-2 fw-bold"><i class="bi bi-check-circle-fill pe-2"></i>Get a macaron for every NTD 500 purchase</p> -->
          </div>
          <div class="d-flex justify-content-end align-items-center mt-4 pt-5">
            <div class="fs-4 text-secondary" v-if="!product.price">NTD {{  $filters.currency(product.origin_price) }}</div>
            <del class="fs-5 text-secondary" v-if="product.price">NTD {{ $filters.currency(product.origin_price) }}</del>
          </div>
          <div class="d-flex justify-content-end align-items-center mb-3">
            <div class="fs-4 ms-2 text-primary fw-bold" v-if="product.price"><span class="text-secondary">Now Sales:</span> NTD {{ $filters.currency(product.price) }}</div>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <div class="input-group mb-5" style="width:220px">
              <input type="number" class="form-control border-primary" v-model.number="qty" min="1">
              <button type="button" class="btn btn-primary" @click="addToCart(product.id, qty)">
                <i class="bi bi-cart-fill pe-1"></i>Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Swiper卡片-->
    <div class=" mt-5 bg-white py-5">
      <div class="container">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">Hot Products</h2>
        <Swiper />
      </div>
    </div>
    <!--ScrollTop-->
    <ScrollTop></ScrollTop>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import Swiper from '@/components/SwiperComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  components: {
    Navbar,
    LoadingComponent,
    Swiper,
    Footer,
    ScrollTop
  },
  data () {
    return {
      product: {},
      products: [],
      cart: {},
      qty: 1,
      id: '',
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false
    }
  },
  watch: {
    $route () {
      if (this.$route.params.productId !== undefined) {
        this.id = this.$route.params.productId
        this.getProduct()
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, 'added to cart')
        this.emitter.emit('updatecart')
        // this.$router.push('/user/all')
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    addFavorite (id) {
      this.isLoading = true
      const favoriteId = this.favoriteData.indexOf(id)
      if (favoriteId === -1) {
        this.favoriteData.push(id)
        this.emitter.emit('push-message', {
          style: 'primary',
          title: 'Added to My Favorites'
        })
      } else {
        this.favoriteData.splice(favoriteId, 1)
        this.emitter.emit('push-message', {
          style: 'secondary',
          title: 'Removed From My Favorites'
        })
      }
      setTimeout(() => {
        this.isLoading = false
      }, 300)
      localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
      this.emitter.emit('updatefavorite')
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
