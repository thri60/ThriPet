<template>
  <div>
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-btn v-if="addDogForm" dense flat icon="arrow_back" v-go-back="'/'">
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
        <q-btn
          @click="addDogForm = !addDogForm"
          v-if="!addDogForm"
          dense
          flat
          icon="arrow_back"
        />

        <q-toolbar-title v-if="addDogForm"> My Dog Profile</q-toolbar-title>
        <q-toolbar-title v-if="!addDogForm"> Add Dog Profile</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div>
      <div>
        <q-slide-transition :duration="500">
          <div v-show="addDogForm">
            <!-- dog card -->
            <div v-if="dogcard" class="q-my-md">
              <q-list separator bordered>
                <q-item
                  clickable
                  v-ripple
                  @click="editdogProfile"
                  v-for="(dog, index) in dogs"
                  :key="index"
                  style="border-radius:10px;  border-bottom:  5px solid #555"
                >
                  <q-item-section avatar>
                    <q-avatar rounded size="100px">
                      <q-img
                        spinner-color="primary"
                        transition="rotate"
                        src="~assets/dog2.jpg"
                      />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section class="text-bold">
                    <q-item-label
                      > {{ dog.breedType }} {{dog.breed}}</q-item-label
                    >
                    <q-item-label>{{ dog.gender }}</q-item-label>
                    <q-item-label>{{ dog.age }} old</q-item-label>
                    <q-item-label>
                      <q-icon name="place" /> {{ dog.place }}</q-item-label
                    >
                    <q-item-label>
                      <q-icon name="money" />$ {{ dog.price }}</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="primary" />
                    <q-item-label caption> Edit Profile </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <!-- add dog card -->
            <div v-if="dogcard">
              <q-card class="q-ma-md">
                <q-card-section>
                  <div class="text-center">
                    <p>
                      <q-icon name="fas fa-dog" class="text-grey-4" size="xl" />
                    </p>
                    <q-btn
                      @click="addDogForm = !addDogForm"
                      rounded
                      outline
                      no-caps
                      icon="fas fa-plus"
                      color="primary"
                      text-color="primary"
                      label="Add Dog"
                    />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-slide-transition>

        <!-- edit dog form dialog-->
        <div>
          <q-dialog
            v-model="editdogProfileDialog"
            persistent
            maximized
            transition-show="slide-left"
            transition-hide="slide-right"
          >
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-header elevated class="bg-white text-primary">
                <q-toolbar>
                  <q-btn dense flat icon="arrow_back" v-close-popup>
                    <q-tooltip content-class="bg-white text-primary"
                      >Close</q-tooltip
                    >
                  </q-btn>
                  <q-toolbar-title> Edit Dog Profile</q-toolbar-title>
                </q-toolbar>
              </q-header>

              <q-page-container>
                <q-page padding>
                  <!-- edit dog  buttons -->
                  <q-card
                    flat
                    class="bg-grey-1 border q-my-md"
                    v-show="!editDogForm"
                  >
                    <q-list>
                      <q-item clickable v-ripple>
                        <q-item-section avatar>
                          <q-icon color="black" name="fas fa-dog" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>View Dog Detail</q-item-label>
                        </q-item-section>

                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" color="black" />
                        </q-item-section>
                      </q-item>

                      <q-separator spaced inset />

                      <q-item clickable v-ripple @click="editDogForm = true">
                        <q-item-section avatar>
                          <q-icon color="black" name="edit" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>Edit Dog Profile</q-item-label>
                        </q-item-section>

                        <q-item-section side>
                          <q-icon name="keyboard_arrow_right" color="black" />
                        </q-item-section>
                      </q-item>
                    </q-list>
                    <q-separator spaced inset />
                    <q-btn
                      class="full-width q-my-md"
                      no-caps
                      rounded
                      color="red"
                      icon-right="delete_outlined"
                      @click="confirm_Delete(dogs)"
                      text-color="white"
                      label="Delete Dog Profile?"
                    />
                  </q-card>

                  <!-- edit dog form -->
                  <q-card class="text-center" v-show="editDogForm">
                    <q-form @submit="submiteditform" class="q-gutter-md">
                      <q-card-section class="q-gutter-md">
                        <q-input
                          dense
                          rounded
                          autogrow
                          outlined
                          ref="editform.description"
                          v-model="editform.description"
                          label="Enter Dog description"
                        />
                        <q-select
                          dense
                          rounded
                          outlined
                          ref="editform.breed"
                          v-model="editform.dogBreed"
                          label="Select breed"
                          :options="dogBreeds"
                        />
                        <q-select
                          dense
                          rounded
                          outlined
                          ref="editform.breedType"
                          v-model="editform.breedType"
                          :options="editform.breedTypes"
                          label="Select BreedType"
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) ||
                              'Please select a breed type '
                          ]"
                        />
                        <q-select
                          dense
                          rounded
                          outlined
                          ref="editform.age"
                          v-model="editform.age"
                          label="Select Age"
                          :options="editform.agerange"
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) ||
                              'An age range is required'
                          ]"
                        />
                        <q-select
                          dense
                          rounded
                          outlined
                          ref="editform.health"
                          v-model="editform.health"
                          :options="editform.healthstatus"
                          label="Select Health Status"
                          lazy-rules
                          :rules="[
                            val =>
                              (val && val.length > 0) ||
                              'Health Status is required'
                          ]"
                        />
                        <div class="q-pa-xs">
                          <q-option-group
                            ref="editform.gender"
                            v-model="editform.gender"
                            :options="editform.genderoptions"
                            color="secondary"
                            inline
                            dense
                            lazy-rules
                            :rules="[
                              val =>
                                (val && val.length > 0) ||
                                'Gender range is required'
                            ]"
                          />
                        </div>
                        <q-checkbox
                          v-model="editform.useLocation"
                          label="Use my location"
                        />
                        <div
                          v-if="!editform.useLocation"
                          class="row q-gutter-xs"
                        >
                          <q-select
                            dense
                            rounded
                            outlined
                            v-model="ModelState"
                            :options="states"
                            label="Enter State"
                            @input="pushCity"
                            class="col"
                          />
                          <q-select
                            dense
                            rounded
                            outlined
                            v-model="Modelcity"
                            :options="city"
                            label="City"
                            class="col"
                          />
                        </div>
                      </q-card-section>
                      <q-card-section>
                        <q-btn
                          rounded
                          color="primary"
                          text-color="white"
                          label="Save Dog Information"
                          no-caps
                          type="submit"
                          style="width:60%"
                        />
                        <q-space />
                        <q-btn
                          @click="editDogForm = false"
                          no-caps
                          flat
                          dense
                          text-color="black"
                          label="Cancel"
                        />
                      </q-card-section>
                    </q-form>
                  </q-card>
                </q-page>
              </q-page-container>
            </q-layout>
          </q-dialog>
        </div>

        <!-- add dog form -->
        <div class="q-mt-md q-mr-xs q-ml-xs" v-if="!addDogForm">
          <q-card class="text-center">
            <q-form class="q-gutter-md">
              <q-card-section class="q-gutter-md">
                <q-input
                  dense
                  rounded
                  autogrow
                  outlined
                  type="number"
                  v-model="addform.price"
                  label="Enter Dog Price(example)"
                />
                <q-select
                  dense
                  rounded
                  outlined
                  :options="dogBreeds"
                  label="Select breed"
                  v-model="addform.dogbreed"
                  :rules="[
                    val => (val && val.length > 0) || 'breed is required '
                  ]"
                />
                <q-select
                  dense
                  rounded
                  outlined
                  ref="addform.breedType"
                  v-model="addform.breedType"
                  label="Select BreedType"
                  :options="addform.breedTypes"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Breed type is required '
                  ]"
                />
                <q-select
                  dense
                  rounded
                  outlined
                  ref="addform.age"
                  v-model="addform.age"
                  :options="addform.agerange"
                  label="Select Age"
                  :rules="[
                    val =>
                      (val && val.length > 0) || 'An age range is required '
                  ]"
                />
                <q-select
                  dense
                  rounded
                  outlined
                  ref="addform.heath"
                  v-model="addform.health"
                  :options="addform.healthstatus"
                  label="Select Health Status"
                  :rules="[
                    val =>
                      (val && val.length > 0) || 'Health status is required '
                  ]"
                />
                <div class="q-pa-xs">
                  <q-option-group
                    v-model="addform.gender"
                    :options="addform.genderoptions"
                    color="secondary"
                    ref="addform.gender"
                    inline
                    dense
                    :rules="[
                      val => (val && val.length > 0) || 'Gender is required '
                    ]"
                  />
                </div>

                <q-checkbox
                  v-model="addform.useLocation"
                  label="Use my location"
                />

                <div v-if="!addform.useLocation" class="row q-gutter-xs">
                  <q-select
                    rounded
                    outlined
                    dense
                    v-model="ModelState"
                    :options="states"
                    label="Located in what State"
                    @input="pushCity"
                    class="col"
                  />
                  <q-select
                    rounded
                    dense
                    outlined
                    v-model="Modelcity"
                    :options="city"
                    label="Enter City"
                    class="col"
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <q-btn
                  rounded
                  color="primary"
                  text-color="white"
                  label="Save Dog Information"
                  no-caps
                  @click="addDogProfile"
                  style="width:60%"
                />
                <q-space />
                <q-btn
                  @click="addDogForm = !addDogForm"
                  no-caps
                  flat
                  dense
                  text-color="black"
                  label="Cancel"
                />
              </q-card-section>
            </q-form>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import locations from "assets/location.json";
import breeds from "assets/breeds.json";
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
      addDogForm: true,
      editDogForm: false,
      dogcard: true,
      dogprofile_tab: true,
      dogRating: 3.5,
      dogs: [
        {
          price: 1,
          breed: "German Shephard",
          breedType: "Pure breed",
          gender: "male",
          age: "1-3 Months",
          place: "Kaduna"
        },
        {
          price: 2,
          breed: "Boerboel",
          breedType: "Pure breed",
          gender: "male",
          age: "1-3 Months",
          place: "Kaduna"
        }
      ],
      addform: {
        price: "",
        dogbreed: null,
        breedType: null,
        gender: null,
        age: null,
        health: null,
        trainersNote: "",
        useLocation: false,

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
        genderoptions: [
          {
            label: "Male",
            value: "Male"
          },
          {
            label: "Female",
            value: "Female"
          }
        ]
      },
      editform: {
        description: "",
        dogBreed: "German Shephard",
        breedType: "Pure Breed",
        gender: "Male",
        age: "1-3 Months",
        health: "Good",
        breedTypes: ["All", "Pure Breed", "Mixed Breed"],
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
        trainersNote: "",
        useLocation: false,
        genderoptions: [
          {
            label: "Male",
            value: "Male"
          },
          {
            label: "Female",
            value: "Female"
          }
        ]
      },
      editdogProfileDialog: false,
    };
  },

  methods: {
    addDogProfile() {
      let newDog = {
        price: this.addform.price,
        breed: this.addform.dogbreed,
        breedType: this.addform.breedType,
        gender: this.addform.gender,
        age: this.addform.age,
        place: this.ModelState
      };

      this.dogs.push(newDog);

      // to close the div after submittion
      this.addDogForm = !this.addDogForm;

      // to notify the user
      this.$q.notify({
        icon: "done",
        color: "positive",
        message: "Submitted"
      });

      // to fill the editDogForm after submitting

      this.addform.price = this.editform.price;
      this.addform.dogbreed = this.editform.dogbreed;
      this.addform.health = this.editform.health;
      this.addform.breedType = this.editform.breedType;
      this.addform.gender = this.editform.gender;
      this.addform.age = this.editform.age;
      this.ModelState = this.ModelState;

      // to reset the add Dog form
      this.addform.price = null;
      this.addform.dogbreed = null;
      this.addform.health = null;
      this.addform.breedType = null;
      this.addform.gender = null;
      this.addform.age = null;
      this.ModelState = null;
    },

    confirm_Delete(dog) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure you want to delete this profile?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
         let dogprofile = dog.index
         let dog_Index = this.dogs.findIndex(dog => dog.index = dogprofile)
         this.dogs.splice(dog_Index),
          console.log("index", dog_Index);

          this.editdogProfileDialog = false


        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },

// edit Dog profile dialog
editdogProfile() {
  this.editdogProfileDialog = true
  this.editDogForm = false
},


    submitAddform() {
      this.$refs.addform.breedType.validate();
      this.$refs.addform.gender.validate();
      this.$refs.addform.age.validate();
      this.$refs.addform.health.validate();

      if (
        this.$refs.addform.breed.hasError ||
        this.$refs.addform.breedType.hasError ||
        this.$refs.addform.gender.hasError ||
        this.$refs.addform.age.hasError ||
        this.$refs.addform.health
      ) {
        this.formHasError = true;

        this.$q.notify({
          color: "negative",
          message: "invalid Parameters entered/selected"
        });
      } else {
        this.$q.notify({
          icon: "done",
          color: "positive",
          message: "Submitted"
        });
      }

      // LocalStorage.setItem("StoredBreed", this.addform.breed);
    },

    submiteditform() {
      this.$refs.editform.breed.validate();
      this.$refs.editform.breedType.validate();
      this.$refs.editform.gender.validate();
      this.$refs.editform.age.validate();
      this.$refs.editform.health.validate();

      if (
        this.$refs.editform.breed.hasError ||
        this.$refs.editform.breedType.hasError ||
        this.$refs.editform.gender.hasError ||
        this.$refs.editform.age.hasError ||
        this.$refs.editform.health
      ) {
        this.formHasError = true;

        this.$q.notify({
          color: "negative",
          message: "invalid Parameters entered/selected"
        });
      } else {
        this.$q.notify({
          icon: "done",
          color: "positive",
          message: "Submitted"
        });
      }
    },

    open_details() {
      this.$router.push({ name: "details" });
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

    // fetch("https://api.thedogapi.com/v1/breeds")
    //   .then(response => response.json())
    //   .then(data => (this.addform.breeds = data))
    //   .then(data => (this.editform.breeds = data))
    //   .catch(err => console.log(err.message));
  }
};
</script>

<style lang="css" scoped>
.border {
  border-radius: 15px;
}
</style>
