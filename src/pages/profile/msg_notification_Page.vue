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
          style="width: 100%"
          align="justify"
          narrow-indicator
        >
          <q-tab name="messages" label="Messages" no-caps icon="mail" />
          <q-tab name="notification" label="Notification" no-caps icon="notifications" />
        </q-tabs>
      </q-header>
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="messages">
          <div class="text-center fixed-center">
            <p>
              <q-img
                src="~assets/chats.svg"
                disabled
                spinner-color="white"
                style="height: 140px; max-width: 180px"
              />
            </p>
            <span>You've got no Messages at the moment</span>
          </div>
        </q-tab-panel>

        <q-tab-panel name="notification">
          <div class="text-center fixed-center">
            <p>
              <q-img
                src="~assets/notify.svg"
                disabled
                spinner-color="white"
                class="text-center"
                style="height: 140px; max-width: 180px"
              />
            </p>
            <span>You've got no Notifications at the moment</span>
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
      tab: "messages"
    };
  }
};
</script>
