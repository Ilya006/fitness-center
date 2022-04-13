<template>
  <div class="empty">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style>
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #838383;
  width: 100%;
  min-height: 100vh;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 100%;
  padding: 50px 0;
  background-color: aliceblue;
}
</style>