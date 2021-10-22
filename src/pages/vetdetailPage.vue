<template>
  <q-page padding>
    <div>
      <!-- Vet Pic, Name and rating card -->
      <div style="padding-top: 55px">
        <div class="main-top bg-grey-1">
          <q-avatar size="100px" class="avatar">
            <img src="~assets/me.jpg" alt="profile_picture" />
          </q-avatar>
        </div>
        <div
          class="bg-grey-1"
          style="min-height: 100px;  border-radius: 0 0 20px 0;"
        >
          <div class="text-center text-h5 text-font text-bold">
            Dr. Gerald Stephen
          </div>
          <div class="text-center text-font">Specialization</div>
          <div class="text-center">
            <q-icon name="star" size="2em" color="orange" /> 4.5 (3 Reviews)
          </div>
        </div>
      </div>


      <!-- buttons -->
      <div class="q-mt-sm q-ml-sm q-gutter-md">
        <q-btn
          icon="comment"
          color="primary"
          text-color="primary"
          label="Consult Doctor via Chat"
          class="full-width"
          no-caps
          rounded
          outline
        />

        <q-btn
          color="white"
          class="full-width"
          text-color="primary"
          label="Book Apointment"
          icon="book_online"
          no-caps
          rounded
        />

        <q-btn
          :color="favoritebtn ? 'red-6' : 'white'"
          class="full-width"
          :text-color="favoritebtn ? 'white' : 'red-6'"
          :label="favoritebtn ? 'Added to Watchlist' : 'Add to Watchlist'"
          :icon="favoritebtn ? 'favorite' : 'favorite_border'"
          rounded
          @click="favorite"
        />
      </div>

      <!-- About doctor  -->
      <div class="q-mt-md q-gutter-md">
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Biography"
          caption="About the Doctor"
          header-class="text-secondary"
          class="shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card class="my-card">
            <q-card-section>
              <div class="text-bold">About</div>
              <q-separator />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eius
              corporis dignissimos sapiente eligendi asperiores obcaecati sed
              quos non modi recusandae veniam, rerum autem repudiandae
              reprehenderit qui ab? Repudiandae, id.
            </q-card-section>
            <q-card-section>
              <div class="text-bold">Qualification</div>
              <q-separator />
              Lorem ipsum dolor sit amet
            </q-card-section>
            <q-card-section>
              <div class="text-bold">Specialization</div>
              <q-separator />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eius
            </q-card-section>
            <q-card-section>
              <div class="text-bold">Experience</div>
              <q-separator />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eius
              corporis dignissimos sapiente eligendi asperiores obcaecati sed
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>

      <!-- reviews and comments -->
      <div>
        <q-expansion-item
          expand-separator
          icon="star"
          label="User Reviews and Feedbacks"
          caption="Reviews and Comments"
          header-class="text-secondary"
          class="shadow-1 "
          style="border-radius: 30px"
        >
          <q-card class="q-mt-md">
            <div class="horizontalScroll q-pa-md q-gutter-md">
              <div v-for="n in 7" :key="n">
                <q-card flat bordered style="max-width:100% ; width: 250px; border-radius:10px; ">
                  <q-item-section class="q-pt-sm q-ml-sm">
                    <q-rating
                      v-model="ratingModel"
                      color="orange"
                      readonly
                      icon="star"
                      icon-half="star_half"
                    />
                  </q-item-section>
                  <q-card-section class="">
                    <div class="text-bold">Michael Iheajumbu</div>
                    <div>
                      <span v-if="!readMoreActivated"
                        >{{ longText.slice(0, 50) }}
                      </span>
                      <q-btn
                        flat
                        dense
                        no-caps
                        v-if="!readMoreActivated"
                        @click="activateReadMore"
                        text-color="red"
                        label=" Read more..."
                      />
                      <span v-if="readMoreActivated" v-html="longText"></span>
                    </div>
                    <div class="text-subtitle1">
                      Jan 3, 2021
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-card>
        </q-expansion-item>
      </div>

      <!-- report card -->
      <div>
        <div class="text-center q-pa-md">
          <!-- disclaimer -->
          <div class="text-bold q-pa-md text-primary bg-grey-1">
            <p class="text-center">Hi Welcome!</p>
            To fight against frauds, Thri60 kindly suggest Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.
            <q-btn
              class="full-width q-pt-md"
              flat
              icon="report"
              text-color="red"
              label="Report Abuse"
              @click="reportDialog = true"
            />
            <!-- report card dialog -->
            <div>
              <q-dialog
                v-model="reportDialog"
                persistent
                maximized
                transition-show="slide-left"
                transition-hide="slide-right"
              >
                <q-layout view="Lhh lpR fff" container class="bg-white">
                  <q-header class="bg-red text-white">
                    <q-toolbar>
                      <q-btn dense flat icon="arrow_back" v-close-popup>
                      </q-btn>
                      <q-toolbar-title>Report Abuse</q-toolbar-title>
                    </q-toolbar>
                  </q-header>

                  <q-page-container>
                    <q-page padding>
                      <q-card
                        flat
                        style="border-radius: 10%"
                        class="text-center my-card"
                      >
                        <q-card-section>
                          <q-avatar class="text-center" size="120px">
                            <img src="~assets/vetDoc1.jpg" />
                          </q-avatar>
                        </q-card-section>

                        <q-item-section class="col-9">
                          <q-item-label class="text-h5 text-bold">
                            Dr. Gerald Stephen
                          </q-item-label>
                          <q-item-label>Specialization</q-item-label>
                        </q-item-section>
                      </q-card>
                      <q-separator color="orange" class="q-pb-xs" />
                      <q-card class="rounded-borders q-gutter-sm q-pa-sm" flat>
                        <q-card-section>
                          <div class="text-center q-gutter-md">
                            <div class="text-h5 text-bold q-pb-md">
                              What would you like to report
                            </div>
                            <q-select
                              rounded
                              outlined
                              v-model="report"
                              :options="options"
                              label="Choose report reason..."
                            />
                            <q-input
                              type="textarea"
                              rounded
                              outlined
                              v-model="reportText"
                              label="Kindly describe your issue..."
                            />
                            <q-btn
                              rounded
                              color="red-12"
                              text-color="white"
                              label="Submit Report"
                            />
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-page>
                  </q-page-container>
                </q-layout>
              </q-dialog>
            </div>
          </div>
        </div>
        <div class="q-pa-md">
          <q-btn
            class="full-width"
            no-caps
            rounded
            to=""
            outline
            text-color="secondary"
            label="Are you a Veterinarian? Join Thri60 Vets "
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',

  data() {
    return {
      readMoreActivated: false,
      favoritebtn: false,
      reportText: "",
      ratingModel: 4.5,
      feedbackdialog: false,
      reportDialog: false,
      adsmaximizedToggle: true,
      feedbackmaximizedToggle: true,
      reportMaximizedToggle: true,
      report: null,
      options: [
        "This is illegal/fraudulent",
        "Vet Doctor is unreachable",
        "complaint 2",
        "complaint 3",
        "complaint 4",
        "Others"
      ],
      longText: `Brown skin girl
Your skin just like pearls
The best thing in the world
Never trade you for anybody else
Singin' brown skin girl
Your skin just like pearls
The best thing in the world
I never trade you for anybody else, singin'
She said she really grew up poor like me
yeah
So while I may not pretty boy, your heart is amiss
Play it like a villain 'cause she caught in a wave
Tonight I am walkin' away`
    };
  },

  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    },

    favorite() {
      this.favoritebtn = !this.favoritebtn;
      if (this.favoritebtn == false) {
        this.$q.notify(
          {
            timeout: 2500,
            progress: true,
            message: "Removed from watchlist.",
            icon: "favorite",
            type: "negative",
            actions: [
              {
                label: "Dismiss",
                color: "white",
                handler: () => {
                  /* ... */
                }
              }
            ]
          },
          2000
        );
      } else {
        this.$q.notify(
          {
            position: "top",
            timeout: 2500,
            progress: true,
            message: "Added to watchlist.",
            icon: "favorite",
            type: "positive",
            actions: [
              {
                label: "Dismiss",
                color: "white",
                handler: () => {
                  /* ... */
                }
              }
            ]
          },
          2000
        );
      }
    }
  }
};
</script>

<style lang="css" scoped>

.horizontalScroll {
  display: flex;
  overflow-x: auto;
}

.avatar {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.5);
}

.main-top {
  position: relative;
  height: 60px;
  border-radius: 20px 0 0 0;
  box-shadow: -10px -10px 20px -10px rgba(0, 0, 0, 0.2);
}


.text-font {
  font-family: "Baloo Paaji 2", cursive;
}
</style>
