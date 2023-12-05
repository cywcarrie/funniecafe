<template>
  <Navbar />
  <LoadingVue :active="isLoading">
    <LoadingComponent></LoadingComponent>
  </LoadingVue>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder">Checkout Process</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <div class="row text-center px-3 my-5">
        <div class="col-4 d-flex flex-column p-3 fw-bold mb-0 bg-secondary text-primary pay-header">
          <span class="mb-2">STEP 1</span>
          <span>Order Information</span>
        </div>
        <div class="col-4 d-flex flex-column p-3 fw-bold mb-0 bg-secondary text-primary pay-header" :class="{'active': order.is_paid === false}">
          <span class="mb-2">STEP 2</span>
          <span>Payment Confirmation</span>
        </div>
        <div class="col-4 d-flex flex-column p-3 fw-bold mb-0 bg-secondary text-primary pay-header" :class="{'active': order.is_paid === true}">
          <span class="mb-2">STEP 3</span>
          <span>Order Complete</span>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10">
          <div class="d-flex justify-content-center align-items-center" v-if="order.is_paid === true">
            <i class="bi bi-check-circle-fill fs-1 pe-2" style="color:#594844;"></i>
            <h2 class="fw-bold mb-0 text-primary fs-1"> Thank You !</h2>
          </div>
          <h6 class="fw-bold mt-4 mb-5 text-center" v-if="order.is_paid === true">A confirmation as been sent to your email !</h6>
          <div class="my-5 row justify-content-center">
            <h3 class="text-center fw-bold mb-4">Order Details</h3>
            <form class="col-lg-6" @submit.prevent="payOrder">
              <table class="table align-middle table-light table-borderless mb-4">
                <thead class="text-center bg-light">
                <th class="text-nowrap">Product</th>
                <th class="text-center text-nowrap">Qty</th>
                <th class="text-nowrap">Price</th>
                </thead>
                <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td class="text-center text-primary fw-bold">{{ item.product.category }} | {{ item.product.title }}</td>
                  <!-- <td class="text-center text-primary fw-bold">{{ item.product.title }}</td> -->
                  <td class="text-center text-nowrap">{{ item.qty }}</td>
                  <!-- <td class="text-center text-nowrap">{{ item.qty }}/{{ item.product.unit }}</td> -->
                  <td class="text-center text-nowrap" >{{ item.final_total }}</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                  <td colspan="2" class="text-end text-nowrap">Total</td>
                  <td class="fs-5 text-primary fw-bold text-nowrap">{{ order.total }}</td>
                </tr>
                </tfoot>
              </table>
              <h3 class="text-center fw-bold mb-4">Customer Details</h3>
              <table class="table table-light table-borderless mb-4">
                <tbody>
                <tr class="table-nowrap">
                  <th width="100" class="text-nowrap">Email</th>
                  <td class="text-nowrap">{{ order.user.email }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th class="text-nowrap">Name</th>
                  <td class="text-nowrap">{{ order.user.name }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th class="text-nowrap">Phone</th>
                  <td class="text-nowrap">{{ order.user.tel }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th>Address</th>
                  <td class="text-nowrap">{{ order.user.address }}</td>
                </tr>
                <tr class="table-nowrap">
                  <th class="text-nowrap">Payment Status</th>
                  <td>
                    <span v-if="!order.is_paid" class="text-nowrap">Not Yet Paid</span>
                    <span v-else class="text-primary fw-bold text-nowrap">Payment Completed</span>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="text-end" v-if="order.is_paid === false">
                <button class="btn btn-primary ms-auto">Confirm Payment<i class="bi bi-caret-right-fill"></i></button>
              </div>
              <div class="text-end" v-if="order.is_paid === true">
                <router-link to="/user/all" class="btn btn-primary ms-auto">Continue Shopping<i class="bi bi-cart4 ps-1 fs-5"></i></router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  components: {
    Navbar,
    LoadingComponent,
    Footer
  },
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order
            // console.log(this.order)
          }
        }).catch(error => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `${error.response.data.message}`
          })
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url)
        .then((res) => {
          // console.log(res)
          if (res.data.success) {
            this.getOrder()
          }
        }).catch(error => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `${error.response.data.message}`
          })
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    // console.log(this.orderId)
    this.getOrder()
  }
}
</script>
