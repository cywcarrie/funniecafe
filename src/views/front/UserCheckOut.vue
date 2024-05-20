<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70" />
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid">
  <h2 class="position-absolute text-center text-white fw-bolder">Checkout Process</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <div class="row text-center px-3 my-5">
        <div class="col-4 d-flex flex-column p-3 fw-bold mb-0 bg-secondary bg-gradient bg-opacity-75 text-primary pay-header active">
          <span class="mb-2">STEP 1</span>
          <span>Order Information</span>
        </div>
        <div class="col-4 d-flex flex-column p-3 fw-bold mb-0 bg-secondary bg-gradient bg-opacity-75 text-primary pay-header">
          <span class="mb-2">STEP 2</span>
          <span>Payment Confirmation</span>
        </div>
        <div class="col-4 d-flex flex-column p-3 fw-bold mb-0 bg-secondary bg-gradient bg-opacity-75 text-primary pay-header">
          <span class="mb-2">STEP 3</span>
          <span>Checkout Complete</span>
        </div>
      </div>
      <div class="row my-5 py-5 bg-light rounded-2">
        <div class="col-lg-7">
          <h2 class="text-center fw-bold mb-4">Order Details</h2>
          <div class="table-responsive-md mb-5 mb-lg-0">
            <table class="table align-middle table-light table-borderless">
              <thead class="text-center table-secondary">
                <tr class="table-nowrap">
                  <th>Product</th>
                  <th class="text-nowrap">Qty</th>
                  <th class="text-end">Price</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                  <td class="table-nowrap fw-bold text-primary">{{ item.product.category }} | {{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end text-nowrap">
                    <small v-if="cart.final_total !== cart.total" class="text-success text-end">Special：</small>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="2" class="text-end fs-5">Total</td>
                <td class="text-end fs-5 text-primary fw-bold">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="2" class="text-end text-success fs-5">Special：</td>
                <td class="text-end text-success fs-5 fw-bold">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row col-lg-5">
          <h2 class="text-center fw-bold mb-4">Customer Details</h2>
          <FormVue v-slot="{ errors }"
          @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label">Email<small class="ps-1 text-danger">(Required)</small></label>
              <FieldVue id="email" name="email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="Please enter your email" rules="email|required"
              v-model="form.user.email" />
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">Name<small class="ps-1 text-danger">(Required)</small></label>
              <FieldVue id="name" name="name" type="text" class="form-control"
              :class="{ 'is-invalid': errors['name'] }"
              placeholder="Please enter your name" rules="required"
              v-model="form.user.name" />
              <ErrorMessage name="name" class="invalid-feedback" />
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">Phone<small class="ps-1 text-danger">(Required)</small></label>
              <FieldVue id="tel" name="phone number" type="tel" class="form-control"
              :class="{ 'is-invalid': errors['phone number'] }"
              placeholder="Please enter your phone number" rules="required"
              v-model="form.user.tel" />
              <ErrorMessage name="phone number" class="invalid-feedback" />
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">Address<small class="ps-1 text-danger">(Required)</small></label>
              <FieldVue id="address" name="address" type="text" class="form-control"
              :class="{ 'is-invalid': errors['address'] }"
              placeholder="Please enter your address" rules="required"
              v-model="form.user.address" />
              <ErrorMessage name="address" class="invalid-feedback" />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Comment</label>
              <textarea name="" id="message" class="form-control" cols="30" rows="10"
              v-model="form.message"></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <RouterLink class="btn btn-outline-primary" to="/cart"><i class="bi bi-caret-left-fill"></i>Previous</RouterLink>
              <button type="submit" class="btn btn-primary">Next<i class="bi bi-caret-right-fill"></i></button>
            </div>
          </FormVue>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavbar.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      isLoading: false,
      total: 0,
      final_total: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      coupon_code: ''
    }
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
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((response) => {
          this.$router.push(`/checkorder/${response.data.orderId}`)
        }).catch(error => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `${error.response.data.message}`
          })
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
