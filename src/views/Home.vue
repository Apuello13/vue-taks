<template>
  <div>
    <div class="nav">Profile</div>
    <div class="content">
      <div class="sub-content">
        <div class="head">
          <h1 class="title">My Taks</h1>
          <input type="text" style="width: 100%; height: 30px; margin-top: 9px">
          <textarea style="width: 100%; height: 60px !important;"></textarea>
          <button class="btn-taks">Add taks</button>
        </div>
        <hr>
        <div class="body">
          <ul class="list">
            <li v-for="tak of taks.taks" :key="tak.id">
              <i class='bx bx-checkbox taks-btn' id="check" @click="deleteTak(tak.id)"></i>
              {{ tak.nombre }}
              <i class='bx bx-trash-alt taks-btn' id="delete"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: "Home",
  methods: {
    ...mapActions(['getTaks'])
  },
  methods: {
    deleteTak(id){
      console.log(`Id a eliminar: ${id}`)
    }
  },
  computed: {
      ...mapState(['taks'])
  }
};
</script>