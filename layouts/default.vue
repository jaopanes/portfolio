<template>
  <div>
    <the-header />

    <div class="container">
      <Nuxt />
    </div>

    <the-footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  margin: 0 auto;
  max-width: 540px;
}

@media (max-width: 539px) {
  .container {
    padding: 0 30px;
  }
}
</style>