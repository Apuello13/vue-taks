<template>
  <div class="container">
    <div class="container-login">
      <div class="left">
        <h1 class="title" style="margin-bottom: 15px">Login</h1>
        <div class="form-group">
          <input type="text" placeholder="Username">
          <!-- <i class='bx bxs-user'></i> -->
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password">
          <!-- <i class='bx bxs-lock-alt' ></i> -->
        </div>
        <button class="btn" @click="login()">Log in</button>
        <p class="sub-title"> O inicia sesion con</p>
        <div class="redes">
          <i class='bx bxl-github red'></i>
          <i class='bx bxl-facebook-circle red' style="color: #5DADE2;"></i>
          <i class='bx bxl-instagram red' style="color: #E74C3C;"></i>
        </div>
      </div>
      <div class="right">
        <h1 class="title">Para que nunca se te olviden tus deberes</h1>
        <h3 class="sub-title">Que empiece el mostroseo</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login(){
      this.$router.push('/home')
    }
  }
}
</script>