<template>
    <router-link to="/products" class="nav-bar-link">
      <div class="nav-bar">
        <div class="logo-wrap">
          <img :src="logo" />
        </div>
        <router-link to="/home" class="about-link">
          <p>Home</p>
        </router-link>
        <router-link to="/about" class="about-link">
          <p>login</p>
        </router-link>
        <router-link to="/cart" class="cart-link">
            <button>Shopping Cart</button>
        </router-link>
      </div>
    </router-link>
  </template>

<script>
import logo from '../assets/logo-hexagon.svg'
    export default {
        name: "NavBar",
        data() {
            return {
                logo,
            }
        },
    }
</script>

<style scoped>

</style>