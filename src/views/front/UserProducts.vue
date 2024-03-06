<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70"/>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder">Our Products</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-dark hover-nav fw-bold">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <div class="row my-5">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <div class="d-none d-md-block">
            <div class="list-group text-start">
              <button
              type="button"
              class="list-group-item list-group-item-action fw-bold"
              aria-current="true"
              @click="getAllProducts" :class="{'active': typeName === '全部'}">
              <i class="bi bi-cup-hot-fill me-2"></i>
              All
              </button>
              <button
              type="button"
              class="list-group-item list-group-item-action fw-bold"
              @click="getCategory('Coffee', '咖啡')" :class="{'active': typeName === '咖啡'}">
              <i class="bi bi-cup-hot-fill me-2"></i>
              Coffee
              </button>
              <button
              type="button"
              class="list-group-item list-group-item-action fw-bold"
              @click="getCategory('Macaron', '馬卡龍')" :class="{'active': typeName === '馬卡龍'}">
              <i class="bi bi-cup-hot-fill me-2"></i>
              Macaron
              </button>
              <button
              type="button"
              class="list-group-item list-group-item-action fw-bold"
              @click="getCategory('Cheesecake', '蛋糕')" :class="{'active': typeName === '蛋糕'}">
              <i class="bi bi-cup-hot-fill me-2"></i>
              CheeseCake
              </button>
            </div>
          </div>
          <div class="dropdown d-block d-md-none w-100">
            <button class="btn btn-secondary dropdown-toggle w-100 fw-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </button>
            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
              <li @click="getAllProducts" :class="{'active': typeName === '全部'}"><button class="dropdown-item fw-bold" type="button"><i class="bi bi-cup-hot-fill me-2 "></i>All</button></li>
              <li @click="getCategory('Coffee', '咖啡')" :class="{'active': typeName === '咖啡'}"><button class="dropdown-item fw-bold" type="button"><i class="bi bi-cup-hot-fill me-2"></i>Coffee</button></li>
              <li @click="getCategory('Macaron', '馬卡龍')" :class="{'active': typeName === '馬卡龍'}"><button class="dropdown-item fw-bold" type="button"><i class="bi bi-cup-hot-fill me-2"></i>Macaron</button></li>
              <li @click="getCategory('Cheesecake', '蛋糕')" :class="{'active': typeName === '蛋糕'}"><button class="dropdown-item fw-bold" type="button"><i class="bi bi-cup-hot-fill me-2"></i>CheeseCake</button></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col mb-4" v-for="item in filterProducts" :key="item.id">
              <div class=" card product-card w-100 h-100" style="width: 18rem">
                <router-link :to="`/product/${item.id}`">
                  <div class="product-img cursor-pointer" @click="getProduct(item.id)">
                    <img
                    style=" height: 180px; background-position: center"
                    :src="item.imageUrl"
                    class="card-img-top object-fit-cover"
                    alt="productImages"/>
                    <span class="seemore-text d-flex justify-content-center align-items-center text-white fw-bold">
                      <i class="bi bi-search pe-1"></i>
                        See More
                    </span>
                  </div>
                  <div class="card-body p-3">
                    <div class="d-flex justify-content-between text-primary fw-bold">
                      <p><i class="bi bi-cup-hot-fill me-2"></i>{{ item.category }}</p>
                      <a href="#" title="Favorite" @click.prevent="addFavorite(item.id)">
                        <i class="bi bi-heart text-primary fs-4" v-if="favoriteData.indexOf(item.id) === -1"></i>
                        <i class="bi bi-heart-fill text-primary fs-4" v-else></i>
                      </a>
                    </div>
                    <h5 class="card-title fw-bolder text-primary mb-3 ">{{ item.title }}</h5>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <div class="h5 text-secondary" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }}</div>
                      <del class="h6 text-secondary" v-if="item.price">NTD {{ $filters.currency(item.origin_price) }}</del>
                      <div class="h5 text-primary fw-bold" v-if="item.price"> NTD {{ $filters.currency(item.price) }}</div>
                    </div>
                  </div>
                </router-link>
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
          <Pagination
          v-if="pageShow"
          :pages="pagination"
          @emit-pages="getAllProducts" />
        </div>
      </div>
    </div>
    <ScrollTop />
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import Pagination from '@/components/PaginationComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  components: {
    Navbar,
    Pagination,
    Footer,
    ScrollTop
  },
  data () {
    return {
      product: {},
      products: [],
      pagination: {},
      pageShow: false,
      isLoading: false,
      categoryName: '',
      typeName: '全部',
      id: '',
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getAllProducts (page = 1) {
      this.typeName = '全部'
      this.categoryName = ''
      this.pageShow = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.products = response.data.products
          this.pagination = response.data.pagination
        }
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    getProducts () {
      this.pageShow = false
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.products = response.data.products
        }
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    getCategory (categoryName, typeName) {
      this.getProducts()
      this.typeName = typeName
      this.categoryName = categoryName
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
          this.emitter.emit('update-cart')
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
      this.emitter.emit('update-favorite')
    }
  },
  computed: {
    filterProducts () {
      return this.products.filter((item) => item.category.match(this.categoryName))
    }
  },
  created () {
    this.getAllProducts()
  }
}
</script>
