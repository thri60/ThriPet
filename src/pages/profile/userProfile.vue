<template>
  <q-page padding>
    <div>
      <!-- Vet Pic, Name and rating card -->
      <div style="padding-top: 70px">
        <div class="main-top bg-grey-2">
          <q-avatar size="100px" class="avatar">
            <img src="~assets/me.jpg" alt="profile_picture" />
          </q-avatar>
          <q-btn
            class="float-right"
            @click="editProfileDialog = true"
            flat
            text-color="grey-9"
            icon="fas fa-user-edit"
          />
        </div>
        <div
          class="bg-grey-2"
          style="min-height: 100px;  border-radius: 0 0 20px 20px;"
        >
          <div class="text-center text-h5 text-font">Michael Iheajumbu</div>

          <div class="text-center q-py-md">
            <div class="row">
              <div class="text-font col relative-position" v-ripple style=" border-radius: 20px 20px 20px 20px;">
                <p class="text-bold text-grey-9">0</p>
                <p style="transform: translateY(-10px)">Feedbacks</p>
              </div>
              <div class="text-font col relative-position"  style=" border-radius: 20px 20px 20px 20px;" v-ripple>
                <p class="text-bold text-grey-9">0</p>
                <p style="transform: translateY(-10px)">Ads</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- dog profile -->
      <div class="q-pt-md q-pb-md">
        <q-card flat class="bg-grey-1 border">
          <q-list>
            <q-item clickable v-ripple  :to="{ name: 'dogProfile' }">
              <q-item-section avatar>
                <q-icon color="secondary" name="fas fa-dog" />
              </q-item-section>
              <q-item-section>
                <q-item-label>My Dog Profile</q-item-label>
              </q-item-section>

              <q-item-section side >
                <q-icon name="keyboard_arrow_right" color="black" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Vet profile -->
      <div class="q-pt-md q-pb-md">
        <q-card flat class="bg-grey-1 border">
          <q-list>
            <q-item clickable v-ripple @click="vetConfirmDialog = true">
              <q-item-section avatar>
                <q-icon color="secondary" name="fas fa-stethoscope" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Veterinarian Doctor</q-item-label>
              </q-item-section>

              <q-item-section side >
                <q-icon name="keyboard_arrow_right" color="black" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>


      <!-- Balance and Premium Services  -->
      <div class="q-pt-md q-pb-md">
        <q-card flat class="bg-grey-1 border">
          <q-list>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="secondary" name="fas fa-wallet" />
              </q-item-section>
              <q-item-section>
                <q-item-label>My Balance</q-item-label>
              </q-item-section>

              <q-item-section side >
                <q-icon name="keyboard_arrow_right" color="black" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- NOtifications and Referral -->
      <div class="q-pt-md q-pb-md">
        <q-card flat class="bg-grey-1 border">
          <q-list>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="secondary" name="redeem" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Invite Friends and Earn</q-item-label>
              </q-item-section>

              <q-item-section side >
                <q-icon name="keyboard_arrow_right" color="black" />
              </q-item-section>
            </q-item>

          </q-list>
        </q-card>
      </div>

      <!--Profile, Dog Profile... DIALOGS in general-->
      <div>
        <!-- edit user dialog -->
        <q-dialog
          v-model="editProfileDialog"
          persistent
          maximized
          transition-show="slide-left"
          transition-hide="slide-right"
        >
          <profile-form></profile-form>
        </q-dialog>



        <!-- vet doctor confirmation dialog -->
        <q-dialog v-model="vetConfirmDialog" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar
                icon="fas fa-stethoscope"
                color="primary"
                text-color="white"
              />
              <span class="q-ml-sm"
                >Are you really a <b>Certified Veterinarian Doctor?</b></span
              >
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="No" color="primary" v-close-popup />
              <q-btn
                flat
                no-caps
                label="Yes, I am"
                color="primary"
                v-close-popup
                :to="{name: 'vetProfile'}"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

      </div>
    </div>
  </q-page>
</template>

<script>
import profileForm from "components/profile/userProfileForm.vue";

export default {
  components: {
    profileForm,
  },
  data() {
    return {
      editProfileDialog: false,
      dogProfileDialog: false,
      vetConfirmDialog: false,
      vetProfileDialog: false,
    };
  }
};
</script>

<style lang="css" scoped>
.body {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.border {
  border-radius: 15px;
}

.main-top {
  position: relative;
  height: 60px;
  border-radius: 20px 20px 0 0;
  box-shadow: -10px -10px 20px -10px rgba(0, 0, 0, 0.2);
}

/* .text-font {
  font-family: "Baloo Paaji 2", cursive;
} */

.avatar {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.5);
}
</style>
