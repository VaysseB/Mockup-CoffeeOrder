<template>
  <div id="app">
    <header>
      <page-nav-bar></page-nav-bar>
    </header>
    <main>
      <order-banner></order-banner>
      <div class="container">
        <div class="row">
          <coffee-card
             v-for="(coffee, index) in coffees"
             key="coffee.guid"
             :mode="index % 2 == 0 ? 'image-on-top' : 'name-on-top'"
             :no-description="true"
             :coffee="coffee">
          </coffee-card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// strongly inspired from http://getbootstrap.com/docs/4.0/examples/album/
import PageNavBar from './components/PageNavBar'
import CoffeeCard from './components/CoffeeCard'
import OrderBanner from './components/OrderBanner'
import { fetchCoffees } from './api'

export default {
  name: 'app',
  data () { return { coffees: fetchCoffees() } },
  components: {
    PageNavBar,
    CoffeeCard,
    OrderBanner
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #a65f4b;
  background-image: url('/static/roasted_coffee_beans_2.jpg');
  background-repeat: repeat-y;
  background-position: top;
  background-origin: content-box;
  padding-bottom: 50px;
}
</style>
