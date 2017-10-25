<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="dark"
    :sticky="true">
    
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    
    <b-navbar-brand href="#">Medtech Portal</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#" variant="primary">Coffee</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item-dropdown text="Lang - FR" Right>
          <b-dropdown-item href="#">FR</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item-dropdown Right>
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Disconnect</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
}
</script>
