<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-primary"
      v-if="
        !$route.fullPath.includes('/thrisales') &&
          !$route.fullPath.includes('/thrimate') &&
          !$route.fullPath.includes('/login')
      "
    >
      <q-toolbar>
        <q-input
          rounded
          outlined
          input-class="text-black"
          dense
          v-model="searchText"
          type="search"
          label="Make your search here"
          v-if="$route.fullPath.includes('/thrimate')"
          class="q-pb-sm q-pt-sm full-width text-bold"
        >
          <template v-slot:prepend>
            <q-btn icon="arrow_back" flat round to="/" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="searchText ? 'clear' : 'search'"
              class="cursor-pointer"
              @click.stop="searchText = null"
            />
          </template>
        </q-input>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          v-if="
            !$route.fullPath.includes('/details') &&
              !$route.fullPath.includes('/post') &&
              !$route.fullPath.includes('/thrisales') &&
              !$route.fullPath.includes('/thrimate') &&
              !$route.fullPath.includes('/thrivets') &&
              !$route.fullPath.includes('/vetdetail') &&
              !$route.fullPath.includes('/vetProfile') &&
              !$route.fullPath.includes('/userProfile') &&
              !$route.fullPath.includes('/fav') &&
              !$route.fullPath.includes('/msg')

          "
        />
        <q-btn
          flat
          dense
          round
          replace
          icon="keyboard_return"
          to="/"
          v-if="$route.fullPath.includes('/details')"
        />
        <q-btn
          flat
          dense
          round
          replace
          icon="keyboard_return"
          to="/"
          v-if="$route.fullPath.includes('/post')"
        />
        <q-btn
          flat
          dense
          round
          replace
          icon="keyboard_return"
          to="/"
          v-if="$route.fullPath.includes('/userProfile')"
        />
        <q-btn
          flat
          dense
          round
          replace
          icon="keyboard_return"
          to="/"
          v-if="$route.fullPath.includes('/thrivets')"
        />
        <q-btn
          flat
          dense
          round
          replace
          icon="keyboard_return"
          to="/thrivets"
          v-if="$route.fullPath.includes('/vetdetail')"
        />
        <q-btn
          flat
          dense
          round
          replace
          icon="keyboard_return"
          to="/"
          v-if="$route.fullPath.includes('/vetProfile')"
        />

        <q-toolbar-title>
          <b>{{ title }}</b>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          class="float-right"
          icon="more_vert"
          to=""
          v-if="$route.fullPath.includes('/userProfile')"
        >
          <q-menu
            transition-show="scale"
            transition-hide="scale"
          >
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section> Share App</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Help &amp; Support</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      behavior="mobile"
      :breakpoint="2000"
      class="text-grey-9"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item exact clickable v-ripple replace :to="{ name: 'homepage' }">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item exact clickable v-ripple :to="{ name: 'fav' }">
            <q-item-section avatar>
              <q-icon name="favorite" />
            </q-item-section>

            <q-item-section>
              Favorites
            </q-item-section>
          </q-item>
          <q-item exact clickable v-ripple :to="{ name: 'fav' }">
            <q-item-section avatar>
              <q-icon name="fas fa-ad" />
            </q-item-section>

            <q-item-section>
              My Ads
            </q-item-section>
          </q-item>
          <q-item exact clickable v-ripple :to="{ name: 'msg' }">
            <q-item-section avatar>
              <q-icon name="mail" />
            </q-item-section>

            <q-item-section>
              Messages
            </q-item-section>
          </q-item>
          <q-item exact clickable v-ripple :to="{ name: 'msg' }">
            <q-item-section avatar>
              <q-icon name="notifications" />
            </q-item-section>

            <q-item-section>
              Notifications
            </q-item-section>
          </q-item>

          <q-separator />
          <q-banner class="text-primary">
            Services
          </q-banner>
          <q-item exact clickable v-ripple replace :to="{ name: 'thrimate' }">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              ThriMate
            </q-item-section>
          </q-item>

          <q-item exact clickable v-ripple :to="{ name: 'thrisales' }">
            <q-item-section avatar>
              <q-icon name="money" />
            </q-item-section>

            <q-item-section>
              ThriSales
            </q-item-section>
          </q-item>

          <q-item exact clickable v-ripple replace :to="{ name: 'thrivets' }">
            <q-item-section avatar>
              <q-img
                src="~assets/thrivet.svg"
                style="height: 30px; max-width: 30px"
              />
            </q-item-section>

            <q-item-section>
              ThriVets
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple replace :to="{ name: 'thriblog' }">
            <q-item-section avatar>
              <q-icon name="fas fa-blog" />
            </q-item-section>

            <q-item-section>
              ThriBlog
            </q-item-section>
          </q-item>

          <q-separator />

          <div>
            <q-banner class="text-primary">
              Profile
            </q-banner>

            <q-item exact clickable v-ripple replace :to="{ name: 'userProfile' }">
              <q-item-section avatar>
                <q-icon name="fas fa-user" />
              </q-item-section>

              <q-item-section>
                My Profile
              </q-item-section>
            </q-item>
            <q-item exact clickable v-ripple :to="{ name: 'dogProfile' }">
              <q-item-section avatar>
                <q-icon name="fas fa-dog" />
              </q-item-section>

              <q-item-section>
                My Dog Profile
              </q-item-section>
            </q-item>
            <q-item exact clickable v-ripple @click="vetConfirmDialog= true">
              <q-item-section avatar>
                <q-img
                  src="~assets/vetProfileicon.svg"
                  style="height: 30px; max-width: 25px"
                />
              </q-item-section>

              <q-item-section>
                Veterinarian Profile
              </q-item-section>
            </q-item>
          </div>

          <q-separator />
          <q-banner class="text-primary">
            Settings
          </q-banner>
          <q-item exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>

            <q-item-section>
              Settings
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div class="absolute-top" style="height: 150px">
        <div class="absolute-bottom q-pa-md">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="~assets/person.svg" />
          </q-avatar>
          <q-expansion-item
            expand-separator
            class="text-weight-bold"
            label="Michael Iheajumbu"
          >
            <q-item clickable v-ripple :to="{ name: 'userProfile' }">
              <q-item-section avatar>
                <q-icon color="primary" name="person" />
              </q-item-section>
              <q-item-section>Profile</q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'login' }">
              <q-item-section avatar>
                <q-icon color="primary" name="fas fa-sign-out-alt" />
              </q-item-section>
              <q-item-section>Sign Out</q-item-section>
            </q-item>
          </q-expansion-item>
          <q-separator />
        </div>
      </div>
    </q-drawer>

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
            :to="{ name: 'vetProfile' }"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- app footer  -->
    <div>
      <q-footer
        v-if="
          !$route.fullPath.includes('/register') &&
            !$route.fullPath.includes('/login')
        "
        reveal
        class="bg-white text-primary"
      >
        <q-tabs
          no-caps

          align="justify"
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          narrow-indicator
        >
          <q-route-tab
            exact
            to="/"
            dense
            replace
            name="1"
            icon="home"

            style="width: 100%"
          />
          <q-route-tab
            exact
            name="2"
            replace
            alert="red"
            to="/fav"
            icon="favorite"

            style="width: 100%"
          />
          <q-route-tab
            exact
            to="/post"
            name="3"
            replace
            class="flex flex-center inset-shadow-down inset-shadow "
            content-class="text-secondary"
            icon="add_a_photo"
            label="Post"
            style="width: 100%; border-radius: 100%;  border: 3px solid #eee; "
          />
          <q-route-tab
            exact
            name="4"
            replace
            icon="mail"
               alert="red"
            to="/msg"
            style="width: 100%"
          />
          <q-route-tab
            exact
            name="5"
            replace
            icon="person"
            to="/userProfile"
            style="width: 100%"
          />
        </q-tabs>
      </q-footer>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      text: "",
      searchText: null,
      tab: 1,
      vetConfirmDialog: false
    };
  },
  computed: {
    title() {
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "THRI60";
      if (currentPath == "/details") return "Details";
      if (currentPath == "/post") return "Post New Ad";
      if (currentPath == "/thrivets") return "ThriVets";
      if (currentPath == "/vetdetail") return "Doctor Profile";
      if (currentPath == "/userProfile") return "My Profile";
      if (currentPath == "/vetProfile") return "ThriVet Doctor";
    }
  }
};
</script>
