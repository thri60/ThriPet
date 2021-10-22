<template>
  <q-page padding>
    <q-card flat class="q-mt-lg">
      <q-card-section>
        <q-img src="~assets/post3.svg" style="height: 150px; max-width: 80px" />
        <b class="text-h4 text-right text-bold text-grey-9 text-center"
          >New Advert</b
        >
      </q-card-section>
    </q-card>

    <div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-stepper
          flat
          header-nav
          v-model="step"
          active-color="secondary"
          vertical
          color="primary"
          animated
          header-class="text-bold"
        >
          <!-- step 1 -->
          <q-step
            :name="1"
            :header-nav="step > 1"
            :done="step > 1"
            title="Select category"
            icon="settings"
          >
            <div class="q-gutter-lg">
              <div>
                <q-select
                  rounded
                  outlined
                  class="q-gutter-lg"
                  v-model="category"
                  :options="categories"
                  label="Choose Category"
                />
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn
                outline
                rounded
                no-caps
                @click="nextStep"
                icon-right="arrow_right"
                color="primary"
                label="Continue"
              />
            </q-stepper-navigation>
          </q-step>

          <!-- step 2 -->
          <q-step
            :name="2"
            :header-nav="step > 2"
            title="Tell us its Breed Information"
            icon="place"
            :done="step > 2"
          >
            <div class="q-gutter-md">
              <div>
                <q-uploader
                  url="http://localhost:8080/upload"
                  label="Add Photos"
                  accept=".jpg, image/*"
                  auto-upload
                  @rejected="onRejected"
                  @added="onSubmit"
                  multiple
                  style="max-width: 100%"
                />
              </div>

              <!-- gender input -->
              <div>
                <q-tab-panels v-model="category">
                  <!-- thrimate gender input  tab panel -->
                  <q-tab-panel name="ThriMate">
                    <div>Gender?</div>
                    <q-option-group
                      size="lg"
                      v-model="gender"
                      inline
                      :options="genders"
                    />

                    <!-- display based on inner Female selection on thrimate -->
                    <q-tab-panels v-model="gender">
                      <q-tab-panel name="Female">
                        <div class="q-gutter-sm">
                          <q-checkbox
                            color="secondary"
                            v-model="heat"
                            label="Is your Dog on heat?"
                          />
                          <q-btn
                            flat
                            text-color="black"
                            no-caps
                            label="Signs that my Dog is on heat"
                          />

                          <q-input
                            rounded
                            label="When did you observe?"
                            hint="Year/Month/Day"
                            hide-hint
                            v-model="ObservedHeatDate"
                            mask="date"
                            :rules="['date']"
                          >
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy
                                  ref="qDateProxy"
                                  transition-show="scale"
                                  transition-hide="scale"
                                >
                                  <q-date v-model="ObservedHeatDate">
                                    <div class="row items-center justify-end">
                                      <q-btn
                                        v-close-popup
                                        label="Close"
                                        color="primary"
                                        flat
                                      />
                                    </div>
                                  </q-date>
                                </q-popup-proxy>
                              </q-icon>
                            </template>
                          </q-input>
                        </div>
                      </q-tab-panel>
                    </q-tab-panels>
                  </q-tab-panel>

                  <!-- thrisales gender input tab panel-->
                  <q-tab-panel name="ThriSales">
                    <q-option-group
                      size="lg"
                      v-model="gender"
                      inline
                      :options="genders"
                    />
                  </q-tab-panel>
                </q-tab-panels>
              </div>

              <div>
                <q-select
                  rounded
                  outlined
                  v-model="breedName"
                  :options="dogBreeds"
                  label="Breed"
                />
              </div>
              <div>
                <q-select
                  rounded
                  outlined
                  v-model="breedType"
                  :options="breedTypes"
                  label="Breed Type"
                />
              </div>

              <div>
                <q-select
                  rounded
                  outlined
                  v-model="age"
                  :options="agerange"
                  label="Age Range"
                />
              </div>
              <div>
                <q-input
                  counter
                  bottom-slots
                  maxlength="250"
                  autogrow
                  rounded
                  outlined
                  v-model="description"
                  label="Description"
                />
              </div>
            </div>
            <q-stepper-navigation>
              <q-btn
                outline
                rounded
                @click="step = 3"
                icon-right="arrow_right"
                color="primary"
                no-caps
                label="Continue"
              />
              <q-btn
                flat
                @click="step = 1"
                color="primary"
                label="Back"
                no-caps
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

          <!-- step 3 -->
          <q-step
            :name="3"
            :header-nav="step > 3"
            title="Where is it located at?"
            icon="assignment"
            :done="step > 3"
          >
            <div class="q-gutter-md">
              <div>
                <q-select
                  rounded
                  outlined
                  v-model="ModelState"
                  :options="states"
                  label="Located in what State"
                  @input="pushCity"
                />
              </div>
              <div>
                <q-select
                  rounded
                  outlined
                  v-model="Modelcity"
                  :options="city"
                  label="City"
                />
              </div>
            </div>

            <q-stepper-navigation>
              <q-btn
                outline
                icon-right="arrow_right"
                rounded
                @click="step = 4"
                color="primary"
                no-caps
                label="Continue"
              />
              <q-btn
                flat
                @click="step = 2"
                color="primary"
                label="Back"
                no-caps
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="4"
            :header-nav="step > 4"
            title="Promote your ad"
            icon="add_comment"
          >
            <div class="q-pa-md">
              Please, choose one of the following options to post your ad
              <q-option-group
                v-model="boostPlan"
                size="xl"
                :options="[
                  {
                    label: 'Standard Ad',
                    value: 'Standard'
                  },
                  {
                    label: 'Bronze Ad (7 days)',
                    value: 'bronze'
                  },
                  {
                    label: 'Silver Ad (1 Month)',
                    value: 'silver'
                  },
                  {
                    label: 'Gold Ad (1 Month)',
                    value: 'Gold'
                  }
                ]"
              />
              <q-tab-panels
                v-model="boostPlan"
                animated
                class="shadow-2 rounded-borders"
              >
                <q-tab-panel
                  name="Standard"
                  style="border-color: green;  border-style: dotted"
                >
                  <div class="text-h6">Standard</div>
                  Free
                </q-tab-panel>

                <q-tab-panel
                  name="bronze"
                  style="border-color: brown;  border-style: dotted"
                >
                  <div class="text-h6">Bronze Ad (7_days)</div>
                  ₦ 1,999
                </q-tab-panel>

                <q-tab-panel
                  name="silver"
                  style="border-color: grey;  border-style: dotted"
                >
                  <div class="text-h6">Silver Ad (30 days)</div>
                  ₦ 7,999
                </q-tab-panel>
                <q-tab-panel
                  name="Gold"
                  style="border-color: gold;  border-style: dotted"
                >
                  <div class="text-h6">Gold Ad (30 days)</div>
                  ₦ 14,999
                </q-tab-panel>
              </q-tab-panels>
            </div>
            <div class="text-justify">
              By clicking on Post Ad, you accept the Terms of Use, confirm that
              you will abide by the Safety Tips, and declare that this posting
              does not include any Prohibited Items.
            </div>
            <q-stepper-navigation>
              <q-btn
                icon-right="cloud_upload"
                @click="onSubmit"
                rounded
                no-caps
                push
                :loading="loading"
                color="primary"
                type="submit"
                label="Post Ad"
              />
              <q-btn
                flat
                no-caps
                @click="step = 3"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { response } from "@websanova/vue-auth/drivers/auth/bearer";
import breeds from "assets/breeds.json";
import locations from "assets/location.json";
export default {
  data() {
    return {
      breed: breeds,
      dogBreeds: [],
      location: locations,
      ModelState: null,
      states: [],
      Modelcity: null,
      city: [],
      step: 1,
      category: null,
      gender: null,
      description: "",
      trainersNote: "",
      country: "",
      state: null,
      city: null,
      breedName: null,
      age: null,
      breedType: null,

      heat: false,
      ObservedHeatDate: "",
      boostPlan: "Standard",

      submitting: false,
      breedTypes: ["Pure Breed", "Mixed Breed"],
      agerange: [
        "0-1 Month",
        "1-3 Months",
        "3-6 Months",
        "6-12 Months",
        "1-3 Years",
        "3-6 Years",
        "6+ Years"
      ],
      healthstatus: ["Great", "Good", "Bad", "Very Bad", "Unsure"],

      genders: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" }
      ],
      categories: ["ThriMate", "ThriSales"],

      loading: false
    };
  },

  methods: {
    // async loading_dog_breeds() {
    //   await new Promise(resolve => {
    //     this.axios
    //       .get("https://api.thedogapi.com/v1/breeds?limit=10&page=0'")
    //       .then(response => {
    //         this.dog_breeds = response.data;
    //       });
    //   });
    // },

    onRejected(rejectedEntries) {
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      });
    },

    nextStep() {
      if (this.category === null) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Please select a category"
        });
      } else {
        this.step = 2;
      }
    },

    onSubmit(files) {
      if (files.length < 1) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Please upload 1 image"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });

        this.$router.push({ name: "homepage" });
      }

      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },

    onReset() {
      this.category = null;
      this.country = null;
      this.state = null;
      this.city = null;
      this.gender = null;
      this.description = null;
      this.age = null;
      this.heat = false;
    },

    pushCity() {
      this.Modelcity = null;
      const isnameAdd = element => element.state.name == this.ModelState;
      const index = this.location.findIndex(isnameAdd);
      this.city = [];
      this.location[index].state.locals.forEach(element => {
        const name = element.name;
        this.city.push(name);
      });
    }
  },

  mounted() {
    this.location.forEach(element => {
      const name = element.state.name;
      this.states.push(name);
    });

    this.breed.forEach(element => {
      const breedName = element.name;
      this.dogBreeds.push(breedName);
    });

    // fetch("https://api.thedogapi.com/v1/breeds?limit=10&page=0'")
    //   .then(response => response.json())
    //   .then(data => (this.dog_breeds = data))
    //   .catch(err => console.log(err.message));
  }
};
</script>
