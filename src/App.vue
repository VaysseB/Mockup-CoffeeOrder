<template>
  <div id="app">
    <order-banner></order-banner>
    <div class="container">
      <div class="row">
        <coffee-card
           v-for="coffee in coffees"
           key="coffee.guid"
           :coffee="coffee">
        </coffee-card>
      </div>
    </div>
  </div>
</template>

<script>
import CoffeeCard from './components/CoffeeCard'
import OrderBanner from './components/OrderBanner'
import { fetchCoffees } from './api'

export default {
  name: 'app',
  data () { return { coffees: fetchCoffees() } },
  components: {
    CoffeeCard,
    OrderBanner
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #a65f4b;
  background-image: url('/static/roasted_coffee_beans_2.jpg');
  background-repeat: repeat-y;
  background-position: top;
  background-origin: content-box;
}
</style>
