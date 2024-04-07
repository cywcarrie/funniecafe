<template>
  <button type="button" class="btn btn-secondary top rounded-circle" v-show="scY > 500" @click.prevent="goTop">
    <i class="bi bi-caret-up-fill"></i>
    </button>
</template>

<script>
export default {
  data () {
    return {
      scTimer: 0,
      scY: 0
    }
  },
  methods: {
    handleScroll () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    goTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>
<style lang="scss">
.top{
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index:99;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.3);
    opacity: 0.9;
    i{
      font-size: 24px;
      color: #6c584c;
    }
  }

@media screen and (max-width:767px){
  .top{
    bottom: 15px;
    right: 15px;
    i{
      font-size: 20px;
    }
  }
}
</style>
