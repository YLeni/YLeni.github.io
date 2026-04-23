<template>
  <nav class="navbar fixed-top">
    <div class="nav-container">
      <!-- Your name to the left -->
      <div class="nav-brand">Leni Yang</div>
      <!-- Navigation links to the right -->
      <ul class="nav-list float-right">
        <li class="nav-item float-right"><router-link to="/">Home</router-link></li>
        <li class="nav-item float-right"><a href="./pdfs/CV_Leni_Yang_2025_11.pdf" target="_blank">CV</a></li>
      </ul>
    </div>
  </nav>
  <router-view />

  <div id="right-claim">
    <hr />
    Copyright @ Leni Yang. Last updated: April 2026
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@font-face {
    font-family: damion;
    src: url('@/assets/fonts/Damion-Regular.ttf');
}
@font-face {
    font-family: meddon;
    src: url('@/assets/fonts/Meddon-Regular.ttf');
}
@font-face {
    font-family: roboto-mono;
    src: url('@/assets/fonts/RobotoMono-VariableFont_wght.ttf');
}
.font-title{
  font-family: roboto-mono;
}
.font-name{
  font-family: damion;
}
.nav-brand{
  font-family: damion;
  color: white;
  font-weight: bold;
}
.sec-title {
  font-family: roboto-mono;
  font-weight: bold;
  font-size: 30px;
}
.nav-container{
  font-size: 24px;
}
.main-text{
  font-size: 24px;
}

@media (max-width:3000px) {
    .main-text {
      font-size: 28px; 
    }
    .sec-title{
      font-size: 30px;
    }
}

@media (max-width:2400px) {
    .main-text {
        font-size: 24px; 
    }
    .sec-title{
      font-size: 24px;
    }
}

@media (max-width:2000px) {
    .main-text {
        font-size: 18px; 
    }
    .sec-title{
      font-size: 20px;
    }
}

@media (max-width:500px) {
    .main-text {
        font-size: 14px; 
    }
    .sec-title{
      font-size: 18px;
    }
}

#right-claim {
  margin-top: 10vh;
  padding-bottom:2vh;
  text-align: center;
}

#app {
  /* font-family: Optima, sans-serif; */
  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.navbar {
  background-color: cadetblue;
  color: white;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Ensure the navbar is above other items */
}

.pseudo-partial-border{
  position: relative;
  height: 100%;
}
.pseudo-partial-border::before,
.pseudo-partial-border::after{
  position: absolute;
  width: 10px;
  height: 10px;
  content: "";
}
.pseudo-partial-border::before {
  border-radius: 3px 0 0 0;
  left: 0;
  top: 0;
  border-left: 2px solid cadetblue;
  border-top: 2px solid cadetblue;
  z-index: 100;
 }
 .pseudo-partial-border::after {
  border-radius: 0 0 3px 0;
  right: 0;
  bottom: 0;
  border-right: 2px solid cadetblue;
  border-bottom: 2px solid cadetblue;
  z-index: 100;
 }

.nav-container {
  display: flex;
  align-items: center;
  padding: 0 9vw; /* Adjusted padding to be inside the nav-container */
  width: 100%;
}


.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  /* Ensure list items are grouped to the right */
  margin-left: auto;
}

.nav-item {
  margin-left: 20px;
  font-weight: bold;
}

.nav-item a {
  color: white;
  text-decoration: none;
}

.nav-item a:hover {
  color: #959da5;
}

</style>
