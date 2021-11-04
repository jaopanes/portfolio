<template>
  <header class="header">
    <p class="title">
      Prazer, me chamo <br />
      <strong class="name">João Neto</strong>
    </p>

    <div class="base-picture">
      <a href="https://github.com/jaopanes" target="_blank" class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
          />
        </svg>
      </a>

      <img class="picture" src="~/assets/img/picture.png" alt="João Neto" />

      <a
        href="https://www.linkedin.com/in/joaobireloneto/"
        target="_blank"
        class="icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          />
        </svg>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 210px;
  background: $white;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-top: 140px;
  margin-bottom: 132px;

  > .title {
    font-size: 1.25rem;
    line-height: 160%;

    > .name {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  > .base-picture {
    display: flex;
    margin-top: 32px;

    > .picture {
      max-height: 182px;
    }

    > .icon {
      color: $black;
      margin: 40px 16px;
    }
  }
}
</style>