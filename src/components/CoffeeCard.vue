<template>
  <b-card
     :title="coffee.name"
     :img-src="coffee.img"
     img-alt="coffee illustration"
     class="mb-2 coffee-card">
    <p class="card-text">
      {{ coffee.description }}
    </p>
    <b-button-group>
      <b-button variant="success" @click="takeOne">+</b-button>
      <b-button :variant="[this.order_count > 0 ? 'info' : 'link']">Cart: {{ this.order_count }}</b-button>
      <b-button variant="warning" @click="releaseOne">-</b-button>
    </b-button-group>
  </b-card>
</template>

<script>
export default {
  props: {
    coffee: { required: true }
  },
  data () {
    return { order_count: 0 }
  },
  methods: {
    takeOne () {
      this.order_count = Math.min(this.order_count + 1, 50)
    },
    releaseOne () {
      this.order_count = Math.max(this.order_count - 1, 0)
    }
  }
}
</script>

<style>
.coffee-card {
  float: left;
  width: 33.333%;
  max-width: 180px;
  padding: 0.75em;
  margin-bottom: 0.75em;
  margin-right: 6px;
}

.coffee-card:last-of-type { 
  margin-right: 0;
}

.coffee-card .card-title {
  height: 58px;
}

.coffee-card .card-body {
  padding: 0.5em;
}

.coffee-card .card-text {
  font-size: 85%;
  min-height: 130px;
}

.coffee-card .btn {
  cursor: pointer;
}
</style>
