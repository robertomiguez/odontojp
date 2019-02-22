<template>
  <div>
    <iframe :src="iframe.url"
            frameborder="0"
            allowfullscreen
            class="resp-iframe" />

  </div>
</template>

<script>
export default {
  data: () => ({
    iframe: {
      url: 'https://www.google.com/maps?q=estrada do mendanha 789&output=embed'
    }
  })
}
</script>

<style>
.resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
