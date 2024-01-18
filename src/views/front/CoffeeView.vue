<template>
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#594844'" :width="70" :height="70"/>
  <div class="container px-0">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col mb-4" v-for="item in products" :key="item.id">
        <div class=" card product-card w-100 h-100" style="width: 18rem">
          <div class="product-img cursor-pointer" @click="getProduct(item.id)">
            <img
            style=" height: 180px; background-position: center"
            :src="item.imageUrl"
            class="card-img-top object-fit-cover"
            alt="coffeePictures"/>
            <span class="seemore-text d-flex justify-content-center align-items-center text-white fw-bold">
              <i class="bi bi-search pe-1"></i>
                See More
            </span>
          </div>
          <div class="card-body p-3">
            <div class="d-flex justify-content-between text-primary fw-bold">
              <p><i class="bi bi-cup-hot-fill me-2"></i>{{ item.category }}</p>
              <a href="#" title="我的最愛" @click.prevent="addFavorite(item.id)">
                <i class="bi bi-heart text-primary fs-4" v-if="favoriteData.indexOf(item.id) === -1"></i>
                <i class="bi bi-heart-fill text-primary fs-4" v-else></i>
              </a>
            </div>
            <h5 class="card-title fw-bolder mb-3">{{ item.title }}</h5>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="h5 text-secondary" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }}</div>
              <del class="h6 text-secondary" v-if="item.price">NTD {{ $filters.currency(item.origin_price) }}</del>
              <div class="h5 text-primary fw-bold" v-if="item.price"> NTD {{ $filters.currency(item.price) }}</div>
            </div>
            <div class="card-footer border-0 bg-transparent pt-0 pb-3">
              <button type="button" class="btn btn-outline-primary w-100"
              :disabled="this.status.loadingItem === item.id"
              @click="addCart(item.id)">
                <div v-if="this.status.loadingItem === item.id"
                class="spinner-border text-primary spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <i class="bi bi-cart-fill"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      products: [],
      product: {},
      isLoading: false,
      id: '',
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          response.data.products.forEach((item) => {
            if (item.category === 'Coffee') {
              this.products.push(item)
            }
          })
          this.isLoading = false
        }
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart })
        .then((response) => {
          this.$httpMessageState(response, 'added to cart')
          this.emitter.emit('updatecart')
          this.status.loadingItem = ''
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
    this.getProducts()
  }
}
</script>
