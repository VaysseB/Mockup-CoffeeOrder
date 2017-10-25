<template>
  <b-card no-body class="mb-2 coffee-card">
    <b-card-header v-if="mode === 'name-on-top'">
      {{ coffee.name }}
    </b-card-header>
    
    <b-card-img
      :src="coffee.img"
      alt="coffee illustration">
    </b-card-img>
    
    <b-card-header v-if="mode === 'image-on-top'">
      {{ coffee.name }}
    </b-card-header>
    
    <b-card-body v-if="!noDescription">
      <p class="card-text">
        {{ coffee.description }}
      </p>
    </b-card-body>
    
    <b-card-footer>
      <b-button-group>
        <b-button variant="success" @click="takeOne">+</b-button>
        <b-button :variant="[this.order_count > 0 ? 'info' : 'link']">Cart: {{ this.order_count }}</b-button>
        <b-button variant="warning" @click="releaseOne">-</b-button>
      </b-button-group>
    </b-card-footer>
  </b-card>
</template>

<script>
  export default {
    props: {
      coffee: { required: true },
      mode: { required: false, default: 'image-on-top', type: String },
      'no-description': { required: false, default: false, type: Boolean }
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
  text-align: center;
}

.coffee-card .card-text {
  font-size: 85%;
  min-height: 130px;
  text-align: justify;
}

.coffee-card .btn {
  cursor: pointer;
}
</style>
