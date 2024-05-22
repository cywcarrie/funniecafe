<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70" />
  <section>
    <div class="home d-flex justify-content-center align-items-center position-relative">
      <div class="text-center text-white-50">
        <h2 class="mb-3 fw-bolder text-nowrap text-uppercase lh-lg" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="50">Welcome To <br><span class="text-white fs-1">Funnie Cafe</span></h2>
      </div>
      <div class="d-flex flex-column align-items-center text-white mt-5 pt-5 more position-absolute">
        <span class="bounce-out-down">
          <i class="bi bi-chevron-double-down fs-1"></i>
        </span>
        <p class="mt-3 fs-5">Scroll</p>
      </div>
    </div>
    <div class="py-5 bg-white">
      <div class="container py-md-5 py-3" data-aos="zoom-in" data-aos-duration="800">
        <div class="row justify-content-center">
          <div class="col text-center">
            <h3 class="fw-bold mb-4 fs-1 d-flex justify-content-center align-items-center open text-primary text-uppercase">Grand Opening</h3>
            <p class="mb-2 fs-3 fw-bold text-capitalize text-dark">Free Delivery on all orders</p>
            <p class="mb-4">Only For 3 days</p>
            <RouterLink to="/products" class="btn btn-lg btn-primary fw-bold">Shop Now</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 about" id="about">
      <div class="container">
        <h2 class="text-center fs-1 fw-bolder my-5 pt-3 text-white">We Are The Best Cafe</h2>
        <div class="text-center text-white px-3 px-md-5">
          <p class="fw-bolder fs-4 lh-lg">We ensure our coffee, cakes and macarons have all the great taste, and we offer fresh drinks and dessert based on high quality. Hoping you will enjoy it.</p>
        </div>
        <div class="text-center py-3 mb-5">
          <RouterLink class="btn btn-outline-secondary btn-lg fw-bold home-about-btn" to="/products">Shop Now</RouterLink>
        </div>
      </div>
    </div>
    <div class="py-5 bg-white">
      <div class="container py-md-5 py-3">
        <div class=" row g-0 align-items-center flex-row-reverse">
          <div class="col-lg-6 text-lg-start px-lg-4 p-0 text-center">
            <h2 class="fs-1 text-primary fw-bolder">20% off</h2>
            <p class="fs-5">
              Using the coupon code
              <span class="fs-4 fw-bolder text-primary"> funniecafe </span> to get a
              <span class="fs-4 fw-bolder text-primary"> 20% </span> discount on your order.
            </p>
            <button @click="copyCouponCode" class="btn btn-outline-primary" type="button">
              <span><i class="bi bi-clipboard-fill pe-2"></i><span>Copy Code</span></span>
            </button>
          </div>
          <div class="col-lg-6 text-lg-end ps-lg-4 p-0 text-center text-bold">
            <div class="code mt-3">
              <span class="code-text fs-4 text-uppercase border-end pe-2 pe-sm-3">Code</span>
              <span class="mx-1 mx-sm-2"></span>
              <span class="code-text fs-4">funniecafe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 bg-light">
      <div class="container py-md-5 py-3">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">Hot Products</h2>
        <Swiper />
        <div class="text-end mt-4">
          <RouterLink to='/products' class="btn btn-primary rounded-pill px-3">
            More Products<i class="bi bi-caret-right-fill"></i>
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="py-5 bg-white">
      <div class="container py-md-5 py-3">
        <h2 class="text-center fw-bold text-primary text-nowrap mb-5">FAQs</h2>
        <FAQs />
      </div>
    </div>
    <div class="py-5 home-subscribe">
      <div class="container">
        <div class="row py-5">
          <div class="col-lg-6">
            <h4 class="fw-bold text-white fs-2">Subscribe to our newsletter</h4>
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
                v-model="subscribe.email" />
                <button class="btn btn-outline-secondary text-nowrap rounded-end" type="submit"
                :disabled="errors['email'] || !subscribe.email">Subscribe</button>
                <ErrorMessage name="email" class="invalid-feedback" />
              </div>
            </FormVue>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import Swiper from '@/components/SwiperComponent.vue'
import FAQs from '@/components/UserFAQs.vue'
import Footer from '@/components/FooterComponent.vue'

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
    FAQs,
    Footer
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
