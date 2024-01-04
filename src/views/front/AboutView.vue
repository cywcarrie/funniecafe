<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#594844'" :width="70" :height="70"/>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder">About Us</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="回上一頁" class="text-secondary hover-nav fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-primary hover-nav fw-bold">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">About Us</li>
        </ol>
      </nav>
      <h2 class="text-center fw-bold text-primary mt-5">About <span class="fw-bolder fs-1 text-secondary ps-2"> Funnie Cafe</span></h2>
      <div class="row d-flex align-items-center mt-4 py-5" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
        <div class="col-md-6 p-4">
          <img src="https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" alt="aboutfieldpicture1">
        </div>
        <div class="col-md-6 mt-3 mt-md-0">
          <p class="fs-5 lh-lg px-3">At <span class="fw-bold fs-4 text-primary"> Funnie Cafe, </span> we offer fresh drinks and dessert based on high quality ingredients. A portion of great drinks and dessert should make you feel like you are wrapped in a warm blanket.<br>Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never want to leave!</p>
        </div>
      </div>
      <div class="row d-flex flex-column-reverse flex-md-row py-5" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
        <div class="col-md-6 d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0">
          <p class="mb-4 fs-5 fw-bold text-dark"><i class="bi bi-wifi fs-2 text-secondary pe-3"></i>Free Wi-Fi</p>
          <p class="mb-4 fs-5 fw-bold text-dark"><i class="bi bi-check-lg fs-2 text-secondary pe-3"></i>Pet Friendly</p>
          <p class="mb-4 fs-5 fw-bold text-dark"><i class="bi bi-basket3 fs-2 text-secondary pe-3"></i>Offers Takeout</p>
          <p class="mb-4 fs-5 fw-bold text-dark"><i class="bi bi-shop-window fs-2 text-secondary pe-3"></i>Outdoor Seating</p>
          <p class="fs-5 fw-bold text-dark"><i class="bi bi-bag-x fs-2 text-secondary pe-3"></i>No Outside Food or Drinks</p>
        </div>
        <div class="col-md-6 p-4">
          <img src="https://images.unsplash.com/photo-1571168136613-46401b03904e?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="aboutfieldpicture2">
        </div>
      </div>
      <div class="mt-5" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200">
        <h2 class="text-center fw-bold text-primary">Contact Us</h2>
        <div class="row mt-4 py-5">
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p class="mb-4 fs-5"><span class="fw-bold text-secondary">Address :</span> East District, Tainan City</p>
            <p class="mb-4 fs-5"><span class="fw-bold text-secondary">Opening Hours :</span> 8:00 ~ 20:00</p>
            <p class="mb-4 fs-5"><span class="fw-bold text-secondary">Call Us :</span><a href="tel:+886-6-1234567" class="text-dark"> 123-4567</a></p>
            <div class="mb-4">
              <a href="#" @click.prevent=""><i class="bi bi-facebook me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-twitter me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-instagram me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-wechat fs-4 text-primary hover-nav"></i></a>
            </div>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7264064327333!2d120.21298322111788!3d22.997086123783774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e768cf38caa09%3A0xc3e9a28e4fd2ac46!2z5Y-w5Y2X6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1704293947293!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  components: {
    Navbar,
    Footer,
    ScrollTop
  },
  data () {
    return {
      isLoading: false
    }
  }
}

</script>
