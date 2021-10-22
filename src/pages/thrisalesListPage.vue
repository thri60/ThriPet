<template>
  <div>
    <q-header reveal>
      <q-toolbar>
        <!-- <q-btn flat round dense icon="keyboard_arrow_left" class="q-mr-sm" /> -->

        <q-toolbar-title class="text-font">ThriSales</q-toolbar-title>

        <q-btn flat dense round icon="more_vert" to="">
          <q-menu
            max-width="120px"
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

    <div>
      <div class="border bg-primary">
        <q-card
          class="cardborder divdropdown q-ml-md q-mr-md bg-white text-primary"
        >
          <div class="q-pb-md q-pt-md row q-pa-md">
            <q-toolbar>
              <div class="q-ma-md center horizontalScroll">
                <q-chip
                  clickable
                  size="md"
                  color="secondary"
                  text-color="white"
                  @click="genderDialog = true"
                  :icon-right="
                    genderDialog ? 'arrow_drop_up' : 'arrow_drop_down'
                  "
                  >Gender: {{ dog_Gender }}</q-chip
                >
                <q-chip
                  clickable
                  color="secondary"
                  text-color="white"
                  @click="breedDialog = true"
                  :icon-right="
                    breedDialog ? 'arrow_drop_up' : 'arrow_drop_down'
                  "
                  >Breed: {{ breedName }}</q-chip
                >
                <q-chip
                  clickable
                  color="secondary"
                  text-color="white"
                  @click="filterDialog = true"
                  icon="tune"
                  >Filter</q-chip
                >
              </div>
            </q-toolbar>
          </div>
        </q-card>
      </div>
    </div>

    <!-- dialogs -->
    <div>
      <!-- gender dialog -->
      <q-dialog
        v-model="genderDialog"
        position="bottom"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="full-width">
          <q-card-section class="no-wrap">
            <q-list separator padding>
              <q-item-label header class="text-bold text-h5"
                >Select Gender</q-item-label
              >
              <q-item
                clickable
                v-ripple
                v-for="(gender, index) in search_Dialog.genders"
                :key="index"
                tag="label"
              >
                <q-item-section avatar>
                  <q-radio v-model="dog_Gender" :val="gender" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ gender }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- Breed dialog -->
      <q-dialog
        v-model="breedDialog"
        maximized
        style=" height:100%"
        position="right"
        transition-show="slide-left"
        transition-hide="slide-right"
      >
        <q-card style="width: 300px">
          <q-card-section class="no-wrap">
            <q-list separator>
              <q-item-label header class="text-bold text-h6"
                >Select Breed</q-item-label
              >
              <q-item
                v-for="dog_breed in breed"
                :key="dog_breed.id"
                clickable
                tag="label"
                v-ripple
              >
                <q-item-section avatar>
                  <q-radio
                    v-model="breedName"
                    :val="dog_breed.name"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>{{ dog_breed.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- sort dialog -->
      <q-dialog
        v-model="sortDialog"
        position="bottom"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="full-width">
          <q-card-section class="no-wrap">
            <q-list separator padding>
              <q-item-label header class="text-bold text-h5"
                >Sort Order</q-item-label
              >
              <q-item
                clickable
                v-ripple
                v-for="(sort, index) in search_Dialog.sorts"
                :key="index"
                tag="label"
              >
                <q-item-section avatar>
                  <q-radio
                    v-model="search_Dialog.sort"
                    :val="sort"
                    color="primary"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ sort }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>

      <!-- location dialog -->
     <q-dialog
        v-model="locationDialog"
        maximized
        style=" height:100%"
        position="right"
        transition-show="slide-left"
        transition-hide="slide-right"
      >
        <q-card style="width: 320px" class="bg-grey-1 text-primary">
          <div class="text-bold text-primary q-ml-md q-mt-md">
            Select Region
          </div>
          <q-card-section class="no-wrap">
            <q-input
              rounded
              outlined
              input-class="text-black"
              dense
              v-model="locationsearchText"
              type="search"
              label="Search your location here"
              class="q-pb-sm q-pt-sm full-width text-bold"
            >
              <template v-slot:append>
                <q-icon
                  :name="locationsearchText ? 'clear' : 'search'"
                  class="cursor-pointer"
                  @click.stop="locationsearchText = null"
                />
              </template>
            </q-input>
            <q-list>
              <q-item
                style="border-radius: 30px"
                class="q-mb-md bg-white shadow-1 overflow-hidden"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon color="secondary" name="place" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> My Location:</q-item-label>
                  <q-item-label>{{ city }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-expansion-item
                group="lga"
                expand-separator
                :label="local.state.name"
                v-for="local in locations"
                @click="state = local.state.name"
                :key="local.state.id"
                :content-inset-level="1"
                header-class="bg-white text-black"
                class="shadow-1 overflow-hidden"
                style="border-radius: 30px"
              >
                <q-item
                  style="border-radius: 30px"
                  class="q-mb-md bg-white shadow-1 overflow-hidden"
                  clickable
                  v-ripple
                  tag="label"
                >
                  <q-item-section avatar>
                    <q-radio
                      v-model="city"
                      :val="local.state.name"
                      color="primary"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-bold"
                      >Whole {{ local.state.name }}</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <span class="text-grey-7"
                  >Cities under {{ local.state.name }}</span
                >
                <q-list separator>
                  <q-item
                    clickable
                    v-ripple
                    class="bg-white text-secondary shadow-1 overflow-hidden"
                    v-for="lg in local.state.locals"
                    :key="lg.id"
                    style="border-radius: 30px"
                    tag="label"
                  >
                    <q-item-section avatar>
                      <q-radio v-model="city" :val="lg.name" color="primary" />
                    </q-item-section>
                    <q-item-section>{{ lg.name }}</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!-- search Filter dialog -->
      <q-dialog
        v-model="filterDialog"
        persistent
        maximized
        transition-show="slide-left"
        transition-hide="slide-right"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-white text-primary">
            <q-toolbar>
              <q-btn dense flat icon="arrow_back" v-close-popup />
              <q-toolbar-title>Filter Results</q-toolbar-title>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding> <searchFilter /> </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </div>

    <!-- ALL listing -->
    <div padding style="padding-top: 66px">
      <div padding class="q-pa-sm row text-primary   bg-grey-1">
        <div class="q-mt-sm q-mr-xs col-shrink">Found <b>15</b> ads within</div>
        <div class="horizontalScroll col">
          <q-chip
            clickable
            flat
            color="grey-1"
            text-color="secondary"
            @click="locationDialog = true"
            :icon-right="locationDialog ? 'arrow_drop_up' : 'arrow_drop_down'"
            >{{ city }}</q-chip
          >

          <q-chip
            clickable
            flat
            color="grey-1"
            text-color="secondary"
            @click="sortDialog = true"
            icon="import_export"
            :icon-right="sortDialog ? 'arrow_drop_up' : 'arrow_drop_down'"
            >{{ search_Dialog.sort }}</q-chip
          >
        </div>
      </div>
      <!-- Ads List -->
      <div padding>
        <div v-for="n in 10" :key="n">
          <q-list separator bordered>
            <q-item
              to="/details"
              clickable
              v-ripple
              style="border-radius:10px;  border-bottom:  5px solid #555"
            >
              <q-item-section avatar>
                <q-avatar rounded size="100px">
                  <q-img
                    spinner-color="primary"
                    transition="fade"
                    src="~assets/dog1.jpg"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="text-bold">
                <q-item-label>German Shepherd</q-item-label>
                <q-item-label>Male</q-item-label>
                <q-item-label> <q-icon name="place" /> Kaduna</q-item-label>
                <q-item-label> <q-icon name="money" /> $267</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label>
                  <q-badge outline color="blue">
                    Premuim
                  </q-badge></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
          <q-space class="q-pa-sm" />
        </div>
      </div>

      <!-- other ad list -->
      <div padding>
        <div class="q-pa-md">
          <div
            class="q-pa-md text-primary text-white text-center bg-secondary rounded-borders"
          ></div>
        </div>

        <q-space class="q-pb-md" />

        <div v-for="n in 10" :key="n">
          <q-list separator bordered>
            <q-item
              to="/details"
              clickable
              v-ripple
              style="border-radius:10px;  border-bottom:  5px solid #555"
            >
              <q-item-section avatar>
                <q-avatar rounded size="100px">
                  <q-img
                    spinner-color="primary"
                    transition="scale"
                    src="~assets/dog3.jpg"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="text-bold">
                <q-item-label>German Shepherd</q-item-label>
                <q-item-label>Male</q-item-label>
                <q-item-label> <q-icon name="place" /> Kaduna</q-item-label>
                <q-item-label> <q-icon name="money" /> $267</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label>
                  <q-badge outline color="blue">
                    Premuim
                  </q-badge></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
          <q-space class="q-pa-sm" />
        </div>
      </div>
    </div>

    <q-page-sticky position="top" expand>
      <q-toolbar class="bg-primary">
        <q-input
          rounded
          outlined
          bg-color="white"
          input-class="text-black"
          dense
          v-model="searchText"
          type="search"
          label="Make your search here"
          class="q-pr-sm q-pl-sm full-width text-bold"
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
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>

<script>
import searchFilter from "components/searchfilter.vue";
import location from "assets/location.json";
import breeds from "assets/breeds.json";
export default {
  components: {
    searchFilter
  },
  data() {
    return {
      searchText: "",
      breed: breeds,
      breedName: "All",
      dogBreeds: [],
      locations: location,
      dog_Gender: "All",
      state: "",
      city: "Kaduna",
      localGovt: {},
      locationsearchText: "",
      search_Dialog: {
        minPrice: null,
        maxPrice: null,
        sort: "Relevant",
        categories: ["ThriMate", "ThriSales"],
        breedtypes: ["All", "Pure Breed", "Mixed Breed"],
        genders: ["All", "Male", "Female"],
        sorts: ["Relevant", "Most Recent", "Lowest Price", "Highest Price"]
      },
      genderDialog: false,
      locationDialog: false,
      breedDialog: false,
      sortDialog: false,
      filterDialog: false,
      favoritebtn: false
    };
  },
  methods: {
    selected_state() {
      this.$q.notify({
        message: this.state,
        color: "purple"
      });
    }
  },

  mounted() {
    this.breed.forEach(element => {
      const breedName = element.name;
      this.dogBreeds.push(breedName);
    });
  }
};
</script>

<style lang="css" scoped>
.horizontalScroll {
  display: flex;
  overflow-x: auto;
}

.divdropdown {
  position: relative;
  top: 50px;
}
.border {
  border-radius: 0 0 20px 20px;
}
.cardborder {
  border-radius: 0 20px 0 20px;
}
.text-font {
  font-family: "Baloo Paaji 2", cursive;
}

.center {
  margin: auto;
}
</style>
