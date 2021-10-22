<template>
  <div>
    <div>
      <div class="q-mb-md q-mt-md">
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section>Edit My Thrivet Profile</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" color="black" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Upgrade my Qualification Portfolio</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" color="black" />
            </q-item-section>
          </q-item>
        </q-list>

        <div class="text-center q-mt-sm">
          <q-btn
            class=""
            rounded
            no-caps
            color="red"
            text-color="white"
            label="Deactivate my ThriVet Profile"
            icon-right="delete"
          />
        </div>
      </div>

      <div>
        <div class="q-mb-xl q-ml-sm">
          <q-banner inline-actions rounded class="bg-primary text-white">
            Vetting and Confirmation may take up to 36 hours. Kindly bear with
            us.
          </q-banner>
        </div>

        <q-stepper
          v-model="step"
          vertical
          color="primary"
          flat
          animated
          header-class="text-bold"
          active-color="secondary"
          header-nav
        >
          <q-step
            :name="1"
            title="Personal Details"
            icon="person"
            :done="step > 1"
            :header-nav="step > 1"
          >
            <div>
              <q-card flat>
                <q-form class="q-gutter-md">
                  <div>
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
                    <q-input
                      dense
                      rounded
                      outlined
                      v-model="email"
                      type="email"
                      label="Email"
                    >
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
                      hint="Only you can see your DOB*"
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
                            <q-date
                              v-model="dob"
                              years-in-month-view
                              navigation-min-year-month="1914/01"
                              navigation-max-year-month="2005/01"
                            >
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
                    <q-input
                      rounded
                      dense
                      outlined
                      v-model="nationality"
                      label="Nationality"
                    />
                    <div class="row q-gutter-xs">
                      <q-select
                        dense
                        class="col"
                        rounded
                        outlined
                        v-model="state_of_origin"
                        :options="states"
                        label="State of Origin"
                        @input="pushLGA"
                      />
                      <q-select
                        dense
                        class="col"
                        rounded
                        outlined
                        v-model="lga_of_origin"
                        :options="city"
                        label="LGA"
                      />
                    </div>
                  </div>
                </q-form>
              </q-card>
            </div>

            <q-stepper-navigation>
              <q-btn
                @click="step = 2"
                color="primary"
                label="Continue"
                rounded
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Office Address"
            icon="place"
            :done="step > 2"
            :header-nav="step > 2"
          >
            <div class="q-gutter-md">
              <q-select
                dense
                rounded
                outlined
                v-model="office_state"
                :options="states"
                label="Enter State Located"
                @input="pushCity"
              />
              <q-select
                dense

                rounded
                outlined
                v-model="Office_city"
                :options="city"
                label="Enter City"
              />

              <q-input
                autogrow
                rounded
                dense
                outlined
                v-model="office_address"
                label="Enter Office Address"
              />
            </div>

            <q-stepper-navigation>
              <q-btn
                @click="step = 3"
                color="primary"
                label="Continue"
                rounded
              />
              <q-btn
                flat
                @click="step = 1"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="3"
            title="Qualification, Specification and Certifications"
            icon="create_new_folder"
            :done="step > 3"
            :header-nav="step > 3"
          >
            <div>
              <q-select
                :options="qualifications"
                dense
                rounded
                outlined
                v-model="qualification"
                label="Highest Qualification"
              />
            </div>

            <q-stepper-navigation>
              <q-btn
                @click="step = 4"
                color="primary"
                label="Continue"
                rounded
              />
              <q-btn
                flat
                @click="step = 2"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="4"
            title="Ad Promotion"
            icon="add_comment"
            :header-nav="step > 4"
          >
            Try out different ad text to see what brings in the most customers,
            and learn how to enhance your ads using features like ad extensions.
            If you run into any problems with your ads, find out how to tell if
            they're running and how to resolve approval issues.

            <q-stepper-navigation>
              <q-btn color="primary" label="Finish" rounded />
              <q-btn
                flat
                @click="step = 3"
                color="primary"
                label="Back"
                class="q-ml-sm"
              />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import locations from "assets/location.json";

export default {
  name: "vetProfile",
  components: {
    PictureInput
  },
  data() {
    return {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "op1",
      dob: "",
      nationality: "Nigerian",
      state_of_origin: null,
      office_state: null,
      states: [],
      lga_of_origin: null,
      Office_city: null,
      city: [],
      location: locations,
      home_Address: "",
      office_address: "",
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
      ],
      qualification: "",
      qualifications: ["Degree", "Diploma", "Hnd", "Others"]
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
      this.Office_city = null;
      const isnameAdd = element => element.state.name == this.office_state;
      const index = this.location.findIndex(isnameAdd);
      this.city = [];
      this.location[index].state.locals.forEach(element => {
        const name = element.name;
        this.city.push(name);
      });
    },

    pushLGA() {
      this.lga_of_origin = null;
      const isnameAdd = element => element.state.name == this.state_of_origin;
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
