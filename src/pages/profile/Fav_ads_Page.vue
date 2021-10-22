<template>
  <div class="">
    <q-card flat>
      <q-header elevated class="bg-white">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="favorites" label="My Favorites" no-caps icon="favorite" />
          <q-tab name="ads" label="My Ads" no-caps icon="fas fa-ad"/>
        </q-tabs>
      </q-header>
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="favorites">
          <div class="text-center fixed-center">
            <p>
              <q-img
                src="~assets/love.svg"
                disabled
                spinner-color="white"
                style="height: 140px; max-width: 180px"
              />
            </p>
            <span>You've got no favorite at the moment</span>
            <p class="text-subtitle1 disabled">
              My Favorites helps keeps track of ads that you find captivating
            </p>
          </div>
        </q-tab-panel>

        <q-tab-panel name="ads">
          <div class="text-center fixed-center">
            <p>
              <q-img
                src="~assets/post4.svg"
                disabled
                spinner-color="white"
                style="height: 140px; max-width: 200px"
              />
            </p>
            <span>You have no ads yet...</span>

          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      tab: "favorites"
    };
  }
};
</script>
