<template>
  <q-page>
    <q-list class="rounded-borders">
      <q-expansion-item
        icon="dns"
        expand-separator
        label="Search by Service Type "
        group="states"
        class="text-secondary shadow-1 overflow-hidden"
        style="border-radius: 30px"
        default-opened
      >
        <q-card class="bg-grey-1">
          <q-card-section>
            <div class=" q-gutter-sm q-pa-sm">
              <!-- <q-card class="col">
                <q-card-section class="text-secondary text-bold">
                  Meet Doctor
                </q-card-section>
                <q-card-section>
                  Book an appointment with a veternarian Doctor
                </q-card-section>
              </q-card>

              <q-card class="col">
                <q-card-section class="text-secondary text-bold">
                  Consult Doctor
                </q-card-section>
                <q-card-section>
                  Have a Private Chat with with a veternarian Doctor
                </q-card-section>
              </q-card> -->
              <div class="row q-gutter-xs">
                <q-btn
                  rounded
                  dense
                  no-caps
                  color="red-8"
                  text-color="white"
                  icon="book_online"
                  label="Booking"
                  class="col"
                />
                <q-btn
                  rounded
                  dense
                  no-caps
                  color="teal"
                  icon="quickreply"
                  text-color="white"
                  label="Consultation"
                  class="col"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        group="states"
        expand-separator
        icon="place"
        label="Search by City"
        class="text-secondary shadow-1 overflow-hidden"
        style="border-radius: 30px"
      >
        <q-card class="bg-grey-1">
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
                  <q-item-label caption>Chikun</q-item-label>
                </q-item-section>
              </q-item>

              <q-expansion-item
                group="lga"
                expand-separator
                :label="local.state.name"
                v-for="local in locations"
                :key="local.state.id"
                @click="state = local.state.name"
                :content-inset-level="1"
                header-class="bg-white text-black"
                class="shadow-1 overflow-hidden"
                style="border-radius: 30px"
              >
                <q-list separator>
                  <q-item
                    style="border-radius: 30px"
                    class="q-mb-md bg-white shadow-1 overflow-hidden"
                    clickable
                    v-ripple
                    @click="selected_state"
                  >
                    <q-item-section avatar>
                      <q-icon color="secondary" name="place" />
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
                  <q-item
                    clickable
                    v-ripple
                    class="bg-white text-secondary shadow-1 overflow-hidden"
                    @click="selected_lg"
                    v-for="lg in local.state.locals"
                    :key="lg.id"
                    style="border-radius: 30px"
                  >
                    <q-item-section avatar>
                      <q-icon color="secondary" name="place" />
                    </q-item-section>
                    <q-item-section>{{ lg.name }}</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

    <!-- dialogs -->
    <div>
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
                v-for="(sort, index) in searchdialog.sorts"
                :key="index"
              >
                <q-item-section>
                  <q-item-label>{{ sort }}</q-item-label>
                </q-item-section>
              </q-item>
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
          <q-header elevated class="bg-white text-primary">
            <q-toolbar>
              <q-btn dense flat icon="arrow_back" v-close-popup />
              <q-toolbar-title>Filter Results</q-toolbar-title>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding>
              <div class=" full-width q-gutter-md">
                <div class="">
                  <q-select
                    behavior="default"
                    rounded
                    v-model="searchdialog.service"
                    :options="searchdialog.services"
                    label="Choose Service Type"
                    color="orange"
                  />
                </div>
                <div class="">
                  <q-select
                    behavior="default"
                    rounded
                    v-model="searchdialog.state"
                    :options="options"
                    label="Choose State"
                    color="orange"
                  />
                </div>
                <div class="">
                  <q-select
                    behavior="default"
                    rounded
                    v-model="searchdialog.city"
                    :options="options"
                    label="Choose City"
                    color="orange"
                  />
                </div>
                <div class="">
                  <q-select
                    behavior="default"
                    rounded
                    v-model="searchdialog.gender"
                    :options="searchdialog.genders"
                    label="Choose Gender"
                    color="orange"
                  />
                </div>
                <div class="">
                  <q-select
                    behavior="default"
                    rounded
                    color="orange"
                    v-model="searchdialog.sort"
                    :options="searchdialog.sorts"
                    label="Choose Sort Order"
                  >
                    <template v-slot:prepend>
                      <q-icon color="orange" name="import_export" />
                    </template>
                  </q-select>
                </div>
              </div>
              <div>
                <q-space class="q-pa-md" />
                <q-page-sticky expand position="bottom">
                  <q-toolbar class=" text-white">
                    <q-btn
                      class="full-width"
                      rounded
                      no-caps
                      color="secondary"
                      text-color="white"
                      label="Show Ads"
                    />
                  </q-toolbar>
                </q-page-sticky>
              </div>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </div>

    <!-- listng -->
    <div>
      <div class="q-gutter-sm">
        <div padding class="q-pt-sm q-pb-sm text-primary bg-grey-1">
          <div class="q-ml-md">
            Found <b>15</b> in <b>Kaduna State</b>
            <q-btn
              rounded
              no-caps
              flat
              dense
              label="Sort"
              text-color="secondary"
              icon="import_export"
              @click="sortDialog = true"
              class="text-center text-bold q-ml-md"
            />
            <q-btn
              rounded
              no-caps
              flat
              dense
              icon="tune"
              text-color="secondary"
              label="Filter"
              @click="filterDialog = true"
              class="text-center  text-bold q-ml-md"
            />
          </div>
        </div>
      </div>
      <q-list separator  class="q-ma-sm" v-for="n in 10" :key="n">
        <q-item
          to="/vetdetail"
          clickable
          v-ripple
          style="border-radius:10px;  border-bottom:  5px solid #555"
        >
          <q-item-section avatar>
            <q-avatar size="80px">
              <q-img
                spinner-color="primary"
                transition="rotate"
                src="~assets/vetDoc2.jpg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Dr. Praise Austin</q-item-label>
            <q-item-label>Specialization</q-item-label>
            <q-item-label><q-icon name="place" /> Kaduna</q-item-label>
            <q-rating
              v-model="ratingModel"
              color="orange"
              readonly
              icon="star"
              icon-half="star_half"
            />
          </q-item-section>

          <q-item-section side>
            <q-icon name="keyboard_arrow_right" color="primary" />
            <q-item-label caption>Book Now</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>


  </q-page>
</template>

<script>
import location from "assets/location.json";

export default {
  // name: 'PageName',

  data() {
    return {
      locations: location,
      state: "",
      localGovt: "",
      locationsearchText: "",
      ratingModel: 4.5,
      searchdialog: {
        category: "Dog sales",
        state: null,
        city: null,
        gender: "All",
        sort: "Relevant",
        service: "All",
        genders: ["All", "Male", "Female"],
        sorts: [
          "Relevant",
          "Highest Reviews",
          "Most Recent",
          "Top Qualification"
        ],
        services: ["All", "Booking", "Consultation"]
      },
      sortDialog: false,
      filterDialog: false,
      options: ["a", "b", "c", "d", "e"]
    };
  },
  methods: {
    // open_vet_details() {
    //   this.$router.push({ name: "vetdetail" });
    // },

    selected_state() {
      this.$q.notify({
        message: "whole " + this.state,
        color: "purple"
      });
    },
    selected_lg() {
      this.$q.notify({
        message: this.lg,
        color: "purple"
      });
    }
  }
};
</script>

