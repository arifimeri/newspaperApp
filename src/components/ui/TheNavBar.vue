<script setup lang="ts">


import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">ZenBlog</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <router-link to="/" class="active">Home</router-link>
          <router-link to="/about">About us</router-link>
          <li><a href="single-post.html">Single Post</a></li>
          <li class="dropdown"><a href="#"><span>Categories</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="category.html">Sport</a></li>
              <li><a href="category.html">Technology 2</a></li>
              <li><a @click="" href="category.html">Health 3</a></li>
              <li><a href="category.html">Fun</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-social-links">
        <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
</template>

<style>

</style>