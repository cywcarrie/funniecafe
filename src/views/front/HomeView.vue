<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#594844'" :width="70" :height="70"/>
  <section>
    <div class="home d-flex justify-content-center align-items-center position-relative">
      <div class="text-center text-light">
        <h2 class="mb-3 fw-bolder text-nowrap text-uppercase lh-lg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50">Welcome To <br><span class="text-secondary fs-1">Funnie Cafe</span></h2>
      </div>
      <div class="d-flex flex-column align-items-center text-white mt-5 pt-5 more position-absolute">
        <span class="bounce-out-down">
          <i class="bi bi-chevron-double-down fs-1"></i>
        </span>
        <p class="mt-3 fs-5">Scroll</p>
      </div>
    </div>
    <div class="py-5 bg-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 px-0">
            <router-link to="/user/coffee" class="mx-4 mx-md-0 homebtn-img homebtn-img1 d-flex align-items-center justify-content-center">
              <h2 class="text-light position-absolute fw-bold">
                Coffee
              </h2>
            </router-link>
          </div>
          <div class="col-md-4 px-0">
            <router-link to="/user/macaron" class="mx-4 mx-md-0 homebtn-img homebtn-img2 d-flex align-items-center justify-content-center">
              <h2 class="text-light position-absolute fw-bold">
                Macaron
              </h2>
            </router-link>
          </div>
          <div class="col-md-4 px-0">
            <router-link to="/user/cheesecake" class="mx-4 mx-md-0 homebtn-img homebtn-img3 d-flex align-items-center justify-content-center">
              <h2 class="text-light position-absolute fw-bold">
                CheeseCake
              </h2>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 about" id="about">
      <div class="container">
        <h2 class="text-center fs-1 fw-bolder my-5 pt-3 text-secondary text-nowrap">We Are The Best Cafe</h2>
        <div class="text-center text-white px-3 px-md-5">
          <p class="fw-bolder fs-4 lh-lg">We ensure our coffee, cakes and macarons have all the great taste, and we offer fresh drinks and dessert based on high quality. Hoping you will enjoy it.</p>
        </div>
        <div class="text-center py-3 mb-5">
          <router-link class="btn btn-outline-secondary btn-lg fw-bold" to="/user">Shop Now</router-link>
        </div>
      </div>
    </div>
    <div class="py-5 bg-light">
      <div class="container py-3">
        <div class=" row g-0 align-items-center flex-row-reverse">
          <div class="col-lg-6 text-lg-start px-lg-4 p-0 text-center">
            <h2 class="fs-1 text-primary fw-bolder">20% off</h2>
            <p class="fs-5">
              Use the coupon code
              <span class="fs-4 fw-bolder text-primary"> funniecafe </span> to get a
              <span class="fs-4 fw-bolder text-primary"> 20% </span> discount on your order.
            </p>
            <button @click="copyCouponCode" class="btn btn-outline-primary" type="button">
              <span><i class="bi bi-clipboard-fill pe-2"></i><span>Copy Code</span></span>
            </button>
          </div>
          <div class="col-lg-6 text-lg-end text-start ps-lg-4 p-0 text-center">
            <div class="code mt-3">
              <span class="code-text fs-4 text-uppercase border-end pe-4">Code</span>
              <span class="mx-3"></span>
              <span class="code-text fs-4">funniecafe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" mt-5 bg-white">
      <div class="container py-3">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">Hot Products</h2>
        <Swiper />
        <div class="text-end mt-4">
          <router-link to='/user/all' class="btn btn-primary rounded-pill px-3">
            More Products<i class="bi bi-caret-right-fill"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="py-5 mt-5 about">
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-6">
            <h4 class="fw-bold text-secondary fs-2">Subscribe to our newsletter</h4>
            <p class="fw-bold text-white pt-2">Monthly digest of what's new and exciting from us.</p>
          </div>
          <div class="col-lg-6 pt-3">
            <FormVue  v-slot="{ errors }"
              @submit="subscribeUs"
              ref="subscribeForm"
              class="flex-fill">
              <div class="input-group">
                <FieldVue id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] , 'is-valid': !errors['email'] && subscribe.email !== ''}"
                placeholder="Please enter your email Email" rules="email|required"
                v-model="subscribe.email"></FieldVue>
                <button class="btn btn-outline-secondary text-nowrap rounded-end" type="submit"
                :disabled="errors['email'] || !subscribe.email">Subscribe</button>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
            </FormVue>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="d-flex flex-column align-items-center">
              <span class="fs-1 text-secondary"><i class="bi bi-truck"></i></span>
              <h4 class="text-primary fw-bold pt-2">Free Delivery</h4>
              <p>Free Delivery Over NTD 500</p>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="d-flex flex-column align-items-center">
              <span class="fs-1 text-secondary"><i class="bi bi-check-circle"></i></span>
              <h4 class="text-primary fw-bold pt-2">Free Macaron</h4>
              <p> Get a macaron for every NTD 1000 purchase</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex flex-column align-items-center">
              <span class="fs-1 text-secondary"><i class="bi bi-bag-check"></i></span>
              <h4 class="text-primary fw-bold pt-2">20% Off</h4>
              <p>Use Coupon Code to save 20% on your order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollTop />
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import Swiper from '@/components/SwiperComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  data () {
    return {
      isLoading: false,
      subscribe: { email: '' }
    }
  },
  components: {
    Navbar,
    Swiper,
    Footer,
    ScrollTop
  },
  inject: ['emitter'],
  methods: {
    copyCouponCode () {
      const copyText = document.createElement('input')
      const text = 'funniecafe'
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      navigator.clipboard.writeText(text)
        .then(() => {
          this.emitter.emit('push-message', {
            style: 'primary',
            title: 'Successfully Copied'
          })
        })
    },
    subscribeUs () {
      this.emitter.emit('push-message', {
        style: 'primary',
        title: 'Thanks for Subscribing'
      })
      this.subscribe.email = ''
      this.$refs.subscribeForm.resetForm()
    }
  }
}
</script>
