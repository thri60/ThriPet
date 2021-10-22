<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <!-- <div style="font-size: 30vh">
        404
      </div> -->

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here... Probably coming up soon
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        rounded
        replace
        to="/"
        label="return to main view"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
