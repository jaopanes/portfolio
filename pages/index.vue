<template>
  <main>
    <section class="about">
      <h1 class="title-section">Sobre mim</h1>

      <p class="description">
        Tenho 18 anos e sou apaixonado pelo que faço. Desde pequeno sou um
        entusista de tecnologia, e nos últimos anos tenho tentado converter o
        entusiasmo em uma carreira como programador.
      </p>
    </section>

    <section class="skills">
      <h1 class="title-section">Skills</h1>

      <div class="grid">
        <the-skill name="HTML" :percentage="94" />
        <the-skill name="CSS" :percentage="97" />
        <the-skill name="JavaScript" :percentage="45" />
        <the-skill name="Vue.js" :percentage="40" />
        <the-skill name="MongoDB" :percentage="51" />
        <the-skill name="NodeJS" :percentage="27" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style lang="scss" scoped>
.title-section {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.about {
  margin-bottom: 48px;

  > .description {
    font-size: 1.125rem;
    line-height: 180%;
    text-align: center;
    margin-top: 24px;
  }
}

.skills {
  > .grid {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 539px) {
  .skills {
    > .grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>