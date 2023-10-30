<template>
  <Navbar></Navbar>
  <LoadingVue :active="isLoading">
    <div class="loading-animated" >
      <div class="loading-animated-icon">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
      </div>
    </div>
  </LoadingVue>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder">FAQs</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="Previous" class="text-primary hover-nav fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-primary hover-nav fw-bold">Home</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">FAQs</li>
        </ol>
      </nav>
      <h2 class="text-center fw-bold text-primary mt-5">FAQs</h2>
      <div class="row justify-content-center mt-4 py-5">
        <div class="col-md-8 col-11">
          <!--常見問題-->
          <div class="accordion" id="accordionExample">
            <!--問題1-->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed fs-5 fw-bold px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  How do I cancel/refund my order ?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse px-1" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Please call our store contact number 123-456-789 for assistance.
                </div>
              </div>
            </div>
            <!--問題2-->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed fs-5 fw-bold px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What happens if my food & drinks arrives damaged/incorrect or didn't arrive at all ?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse px-1" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Please call our store contact number 123-456-789 for assistance.
                </div>
              </div>
            </div>
            <!--問題3-->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed fs-5 fw-bold px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What delivery options are available ?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse px-1" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Currently, we only provide delivery to limited area ( Tainan City ).
                </div>
              </div>
            </div>
            <!--問題4-->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed fs-5 fw-bold px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Do you have free Wi-Fi ?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse px-1" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Yes, we have Wi-Fi and it is free.
                </div>
              </div>
            </div>
            <!--問題5-->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed fs-5 fw-bold px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  What is a coupon code ?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse px-1" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  A coupon or promotional code discounts the price on a single item or an entire purchase. You add the code during check-out before you pay.
                </div>
              </div>
            </div>
            <!--問題6-->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed fs-5 fw-bold px-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  How to use coupon code ?
                </button>
              </h2>
              <div id="collapseSix" class="accordion-collapse collapse px-1" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  When you check out on the store's website, type the code, or paste it into the coupon code box, and then click the button to apply it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollTop></ScrollTop>
  </section>
  <Footer></Footer>
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
  data() {
    return {
      isLoading: false
    }
  }
}
</script>
