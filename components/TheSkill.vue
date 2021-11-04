<template>
  <div class="skill">
    <p class="name">{{ name }}</p>

    <div class="progress-bar" :style="{ width: `${percentage}%` }"></div>
  </div>
</template>

<script>
export default {
  name: 'TheSkill',
  props: {
    name: {
      type: String,
      required: true,
      description: 'skill name',
    },
    percentage: {
      type: Number,
      required: true,
      description: 'skill knowledge percentage',
    },
  },
}
</script>

<style lang="scss" scoped>
.skill {
  width: 100%;
  padding: 16px;
  background-color: $white;
  border-radius: 10px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06);
  position: relative;
  transition: box-shadow 0.2s ease;
  cursor: pointer;

  > .name {
    font-size: 1rem;
    font-weight: 600;
    line-height: 100%;
  }

  > .progress-bar {
    margin-top: 16px;
    height: 8px;
    background: linear-gradient(90deg, #ec048d 0%, #fc6868 100%);
    border-radius: 4px;
  }

  &:hover {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.12);
  }
}
</style>