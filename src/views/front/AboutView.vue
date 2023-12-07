<template>
  <Navbar />
  <LoadingVue :active="isLoading">
    <LoadingComponent></LoadingComponent>
  </LoadingVue>
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
      <div class="row d-flex align-items-center mt-4 py-5">
        <div class="col-md-6 p-4">
          <img src="https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80" alt="aboutfieldpicture">
        </div>
        <div class="col-md-6 mt-3">
          <p class="fs-5 lh-lg px-3">At <span class="fw-bold fs-4 text-primary"> Funnie Cafe, </span> we offer fresh drinks and dessert based on high quality ingredients. A portion of great drinks and dessert should make you feel like you are wrapped in a warm blanket.<br>Forget about the daily stress and come relax with us. After tasting any of our menu items, you will never want to leave!</p>
        </div>
      </div>
      <!--聯繫我們-->
      <div class="mt-5">
        <h2 class="text-center fw-bold text-primary">Contact Us</h2>
        <div class="row mt-4 py-5">
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p class="mb-4 fs-5 fw-bold text-secondary">Address :<span class="text-primary"> Anping District, Tainan City</span></p>
            <p class="mb-4 fs-5 fw-bold text-secondary">Opening Hours :<span class="text-primary"> Mon.- Sun. 8:00-20:00</span></p>
            <p class="mb-4 fs-5 fw-bold text-secondary">Call Us : <a href="tel:+886-6-1234567" class="text-primary"> 123-4567</a></p>
            <div class="mb-4">
              <a href="#" @click.prevent=""><i class="bi bi-facebook me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-twitter me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-instagram me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-wechat fs-4 text-primary hover-nav"></i></a>
            </div>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.62760899453!2d120.1590699748154!3d23.00071737918911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7603ffffffff%3A0xe8fc95e1f2a8e820!2z5a6J5bmz6ICB6KGX!5e0!3m2!1szh-TW!2stw!4v1697270857683!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <!--寶貴意見-->
      <div class="mt-5">
        <div class="row d-flex justify-content-center py-5">
          <div class="col-md-6">
            <h2 class="text-center text-primary fw-bold mb-4">We'd Love to Hear From You</h2>
            <p class="fw-bold mb-4">For feedback and everything else, please complete the form below and a Funnie Cafe team member will be right with you.</p>
            <FormVue class="row g-3 needs-validation" v-slot="{ errors }" @submit="submitFrom">
              <div class="col-md-12">
                <label for="name" class="form-label">Name <small class="ps-1 text-danger">(Required)</small></label>
                <FieldVue type="text" class="form-control"  name="Name" id="name" :class="{ 'is-invalid': errors['Name'] }" placeholder="Please enter your name" rules="required"></FieldVue>
                <ErrorMessage name="Name" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="col-md-12">
                <label for="email" class="form-label">Email <small class="ps-1 text-danger">(Required)</small></label>
                <FieldVue type="email" class="form-control" id="email" name="Email" :class="{ 'is-invalid': errors['Email'] }" placeholder="Please enter your email" rules="email|required"></FieldVue>
                <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="col-md-12">
                <label for="tel" class="form-label">Phone <small class="ps-1 text-danger">(Required)</small></label>
                <FieldVue type="tel" class="form-control" :class="{ 'is-invalid': errors['Phone number'] }" name="Phone number" id="tel" placeholder="Please enter your phone number" rules="required"></FieldVue>
                <ErrorMessage name="Phone number" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="col-md-12">
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="textarea" style="height: 150px" required></textarea>
                  <label for="textarea">Please enter content</label>
                </div>
                <div class="valid-feedback">
                  Entered correctly
                </div>
              </div>
              <div class="col-12 d-flex justify-content-center mt-4">
                <button class="btn btn-primary px-4" type="submit">Send</button>
              </div>
            </FormVue>
          </div>
        </div>
      </div>
    </div>
    <ScrollTop></ScrollTop>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  components: {
    Navbar,
    LoadingComponent,
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
