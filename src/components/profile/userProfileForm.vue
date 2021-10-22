<template>
  <q-layout view="Lhh lpR fff" container class="bg-white">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-btn dense flat icon="arrow_back" v-close-popup>
          <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
        </q-btn>
        <q-toolbar-title> My Profile Details</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <div>
          <q-card flat class="q-my-md q-pa-sm">
            <q-form class="q-gutter-sm">
              <div class="q-pa-md">
                <picture-input
                  ref="pictureInput"
                  width="100"
                  plain
                  height="100"
                  margin="16"
                  radius="50"
                  :zIndex="0"
                  accept="image/jpeg,image/png"
                  size="10"
                  button-class=" text-white bg-primary rounded-borders"
                  :custom-strings="{
                    upload: '<h1>Bummer!</h1>',
                    drag: 'Drag a 😺 GIF or GTFO'
                  }"
                  @change="onChange"
                >
                </picture-input>
              </div>

              <div class="q-gutter-md q-mb-md">
                <q-input
                  dense
                  rounded
                  outlined
                  v-model="firstName"
                  label="First Name"
                />
                <q-input
                  dense
                  rounded
                  outlined
                  v-model="lastName"
                  label="Last Name"
                />
                <q-input dense rounded outlined v-model="email" label="Email">
                  <template v-slot:prepend>
                    <q-icon name="mail" color="secondary" />
                  </template>
                </q-input>

                <q-input
                  dense
                  rounded
                  outlined
                  type="tel"
                  v-model="phone"
                  label="Phone Number"
                >
                  <template v-slot:prepend>
                    <q-icon name="call" color="secondary" />
                  </template>
                </q-input>

                <q-input
                  dense
                  rounded
                  outlined
                  label="Date of Birth"
                  v-model="dob"
                  hint="YYYY/MM/DD"
                  hide-hint
                  mask="date"
                  :rules="['date']"
                >
                  <template v-slot:append>
                    <q-icon
                      name="event"
                      class="cursor-pointer"
                      color="secondary"
                    >
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="dob">
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

                <div class="q-pa-xs">
                  <q-option-group
                    v-model="gender"
                    :options="genderoptions"
                    color="secondary"
                    inline
                    dense
                  />
                </div>
                <div class="row q-gutter-xs">
                  <q-select
                    dense
                    rounded
                    class="col"
                    outlined
                    @input="pushCity"
                    v-model="ModelState"
                    :options="states"
                    label="Enter State"
                  />
                  <q-select
                    dense
                    rounded
                    class="col"
                    outlined
                    v-model="Modelcity"
                    :options="city"
                    label="Enter city"
                  />
                </div>

                <q-input
                  rounded
                  dense
                  autogrow
                  outlined
                  v-model="Address"
                  label="Address"
                />
              </div>
              <div class="text-center">
              <q-btn
                class="full-width"
                rounded
                no-caps
                color="orange"
                text-color="white"
                label="Save"
              />
              </div>
            </q-form>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import PictureInput from "vue-picture-input";
import locations from "assets/location.json";

export default {
  name: "userProfileForm",
  components: {
    PictureInput
  },
  data() {
    return {
      location: locations,
      ModelState: null,
      states: [],
      Modelcity: null,
      city: [],
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "op1",
      dob: "",
      Address: "",
      showAddress: true,
      genderoptions: [
        {
          label: "Male",
          value: "op1"
        },
        {
          label: "Female",
          value: "op2"
        }
      ]
    };
  },
  methods: {
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
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
  }
};
</script>
