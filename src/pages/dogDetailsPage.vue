<template>
  <div class="q-gutter-md">
    <q-space />
    <!-- Image Carousel and description -->
    <div>
      <q-responsive :ratio="16 / 9">
        <q-carousel
          class="shadow-2 rounded-borders"
          swipeable
          animated
          v-model="slide"
          infinite
          ref="carousel"
        >
          <q-carousel-slide :name="1" img-src="~assets/dog1.jpg" />
          <q-carousel-slide :name="2" img-src="~assets/dog2.jpg" />
          <q-carousel-slide :name="3" img-src="~assets/vetDoc3.jpg" />
          <q-carousel-slide :name="4" img-src="~assets/vetDoc3.jpg" />

          <template v-slot:control>
            <q-carousel-control
              position="top-right"
              :offset="[18, 18]"
              class="text-white rounded-borders"
              style="background: rgba(0, 0, 0, .3); padding: 4px 8px;"
            >
              <q-icon
                color="red-6"
                :name="favoritebtn ? 'favorite' : 'favorite_border'"
              />
            </q-carousel-control>

            <q-carousel-control
              position="bottom-right"
              :offset="[18, 18]"
              class="q-gutter-xs"
            >
              <q-btn
                push
                round
                dense
                color="primary"
                text-color="white"
                icon="arrow_left"
                @click="$refs.carousel.previous()"
              />
              <q-btn
                push
                round
                dense
                color="primary"
                text-color="white"
                icon="arrow_right"
                @click="$refs.carousel.next()"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-responsive>
      <div class="text-grey-9 text-bold q-pa-md ">
        <div>
          <div class="text-left">
            <p class="text-bold"></p>
            <p class="text-subtitle1 text-grey-9">Description</p>
          </div>
          <div class="text-right">
            <p class="text-bold text-h5">Kaduna</p>
            <b class="text-subtitle1 text-grey-9">Location</b>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <p class="text-bold"></p>
            <p class="text-subtitle1 text-grey-9">Gender</p>
            <p class="text-bold"></p>
            <p class="text-subtitle1 text-grey-9">Age</p>
            <p class="text-bold"></p>
            <p class="text-subtitle1 text-grey-9">health</p>
          </div>
          <div class="col-6">
            <p class="text-bold"></p>
            <p class="text-subtitle1 text-grey-9">Breed</p>
            <p class="text-bold"></p>
            <p class="text-subtitle1 text-grey-9">Breed Type</p>
            <p class="text-bold"></p>
            <p class="text-subtitle1 text-grey-9">Dog Type</p>
          </div>
        </div>
      </div>
    </div>

    <!-- buttons -->
    <div class="q-pa-md">
      <q-btn
        icon="comment"
        color="primary"
        text-color="primary"
        label="Make Offer/Chat"
        class="full-width"
        rounded
        outline
      />
      <q-space class="q-pa-xs" />
      <q-btn
        color="white"
        class="full-width"
        text-color="primary"
        label="Call"
        icon="call"
        rounded
      />
      <q-space class="q-pa-xs" />
      <q-btn
        color="red-9"
        class="full-width"
        text-color="orange"
        label="Request Trainer to Call Back"
        icon="phone_callback"
        @click="callbackprompt = true"
        rounded
        outline
      />
      <q-space class="q-pa-xs" />
      <q-btn
        :color="favoritebtn ? 'red-6' : 'white'"
        class="full-width"
        :text-color="favoritebtn ? 'white' : 'red-6'"
        :label="favoritebtn ? 'Added to Watchlist' : 'Add to Watchlist'"
        :icon="favoritebtn ? 'favorite' : 'favorite_border'"
        rounded
        @click="favorite"
      />

      <q-dialog v-model="callbackprompt" persistent>
        <q-card class="rounded-borders" style="min-width: 350px">
          <q-card-section class="text-center">
            <div class="text-h6">Request Trainer To call you back</div>
            <div class="text-h6 text-secondary">Dog Description</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-gutter-md">
            <q-input
              dense
              v-model="name"
              autofocus
              rounded
              outlined
              label="Your Name"
              hint="Your Contact Name is Required"
            />
            <q-input
              dense
              rounded
              outlined
              v-model="phone"
              type="tel"
              label="Phone Number (digits only)"
              hint="Your Phone Number is Required"
              autofocus
            />
          </q-card-section>
          <q-card-section>
            <div class="text-h6">
              <q-icon name="error_outline" />
              Do Not Make Any Payments Until Both Parties have met
            </div>
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Request" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <!-- Trainer's note -->
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <p>Trainer's Note:</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          deleniti quam aut ex, eos a esse excepturi corrupti cum totam quia ad
          fugit molestias. Veritatis animi molestias inventore? Odio, minus!
        </q-card-section>
      </q-card>
    </div>

    <!-- Trainer's Profile -->
    <div class="q-pa-md">
      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6">Name</q-item-label>
            <q-item-label class="text-subtitle1">
              <q-icon name="how_to_reg" />
              Registered:
            </q-item-label>
            <q-item-label class="text-subtitle1">
              <q-icon name="visibility" />
              Last Seen:
              <q-btn
                class="float-right"
                icon-right="keyboard_arrow_right"
                dense
                no-caps
                flat
                text-color="black"
                label="See all Ads"
                @click="adsdialog = true"
              />
            </q-item-label>

            <!-- see all ads dialog -->
            <q-dialog
              v-model="adsdialog"
              persistent
              maximized
              transition-show="slide-left"
              transition-hide="slide-right"
            >
              <q-layout view="Lhh lpR fff" container class="bg-white">
                <q-header class="bg-white text-primary">
                  <q-toolbar>
                    <q-btn dense flat icon="arrow_back" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary"
                        >Close</q-tooltip
                      >
                    </q-btn>
                    <q-toolbar-title>Ads by</q-toolbar-title>
                  </q-toolbar>
                </q-header>

                <q-page-container>
                  <q-page padding>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi modi minus, nesciunt veniam distinctio, velit vitae
                      quasi id iure ullam alias reiciendis soluta rerum, autem
                      nam. Laudantium reprehenderit voluptatibus et.
                    </p>
                  </q-page>
                </q-page-container>
              </q-layout>
            </q-dialog>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal>
          <q-card-section>
            <q-expansion-item
              expand-separator
              icon="star"
              label="User Reviews and Feedbacks"
              caption="Reviews and Comments"
              header-class="text-secondary"
              style="border-radius: 30px"
            >
              <q-card class="q-mt-md ">
                <q-btn
                  class="float-right"
                  icon-right="keyboard_arrow_right"
                  @click="feedbackdialog = true"
                  dense
                  no-caps
                  flat
                  text-color="black"
                  label="View all feedbacks "
                />
                <div class=" q-pt-md q-gutter-md">
                  <div>
                    <q-card
                      v-for="feedBack in feedBacks"
                      :key="feedBack.date"
                      flat
                      bordered
                      style="border-radius:10px;"
                    >
                      <q-item-section class="q-pt-sm q-ml-sm">
                        <q-rating
                          v-model="feedBack.ratingModel"
                          color="orange"
                          readonly
                          icon="star"
                          icon-half="star_half"
                        />
                      </q-item-section>
                      <q-card-section class="">
                        <div class="text-bold">{{ feedBack.name }}</div>
                        <div>
                          <span v-if="!readMoreActivated"
                            >{{ feedBack.text.slice(0, 50) }}
                          </span>
                          <q-btn
                            flat
                            dense
                            no-caps
                            v-if="!readMoreActivated"
                            @click="activateReadMore(feedBack)"
                            text-color="red"
                            label=" Read more..."
                          />

                          <span v-if="readMoreActivated">{{
                            feedBack.text
                          }}</span>
                        </div>
                        <div class="text-subtitle1">
                          {{ feedBack.date | relativeDate }}
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="q-my-md">
                    <span>Leave Feedback</span>
                    <div class="row">
                      <div class="col">
                        <q-rating
                          v-model="rating"
                          color="orange"
                          icon="star"
                          size="2em"
                          icon-half="star_half"
                        />
                        <q-input
                          autogrow
                          v-model="feedBackText"
                          placeholder="Leave Feedback"
                        />
                      </div>
                      <div class="col-shrink">
                        <q-btn
                          :disable="!feedBackText"
                          @click="addFeedBack"
                          flat
                          text-color="secondary"
                          icon-right="send"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </q-card>
            </q-expansion-item>

            <!-- View all Feedback dialog -->
            <q-dialog
              v-model="feedbackdialog"
              persistent
              maximized
              transition-show="slide-left"
              transition-hide="slide-right"
            >
              <q-layout view="Lhh lpR fff" container class="bg-white">
                <q-header class="bg-white text-primary">
                  <q-toolbar>
                    <q-btn dense flat icon="arrow_back" v-close-popup>
                      <q-tooltip content-class="bg-white text-primary"
                        >Close</q-tooltip
                      >
                    </q-btn>
                    <q-toolbar-title>Feedbacks</q-toolbar-title>
                  </q-toolbar>
                </q-header>

                <q-page-container>
                  <q-page padding>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Animi modi minus, nesciunt veniam distinctio, velit vitae
                      quasi id iure ullam alias reiciendis soluta rerum, autem
                      nam. Laudantium reprehenderit voluptatibus et.
                    </p>
                  </q-page>
                </q-page-container>
              </q-layout>
            </q-dialog>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>

    <!-- report card -->
    <div>
      <div class="text-center q-pa-md">
        <!-- disclaimer -->
        <div
          class="text-bold q-pa-md text-primary text-justify bg-grey-1 shadow-2"
        >
          <p class="text-center">Hi Welcome!</p>
          To fight against frauds, Thri60 kindly suggest not to make payment of
          any sort without meeting face to face! We are here to serve you
          better, Enjoy!
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
                    <q-btn dense flat icon="arrow_back" v-close-popup> </q-btn>
                    <q-toolbar-title>Report Abuse</q-toolbar-title>
                  </q-toolbar>
                </q-header>

                <q-page-container>
                  <q-page padding>
                    <q-card class="rounded-borders q-gutter-sm q-pa-sm" flat>
                      <img
                        src="~assets/dog3.jpg"
                        style="width: 100%; max-width: 200px"
                      />

                      <q-card-section>
                        <div class="row">
                          <div class="text-h6 col">Dog Name:</div>
                          <div class="text-h6 col">Rexx</div>
                        </div>
                      </q-card-section>

                      <q-separator color="orange" class="q-pb-xs" />
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
          to="/post"
          outline
          text-color="secondary"
          label="Post ad like this for free"
        />
      </div>
    </div>

    <!-- similar ads -->
    <div>
      <div class="q-ma-md">
        <p class="q-pl-md text-bold text-h6">Similar Ads:</p>
        <q-scroll-area style="height: 400px; max-width: 100%;">
          <div v-for="n in 10" :key="n" class="q-py-md">
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
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistance } from "date-fns";
export default {
  data() {
    return {
      favoritebtn: false,
      feedBackText: "",
      rating: 0,
      readMoreActivated: false,
      slide: 1,
      callbackprompt: false,
      name: "",
      phone: "",
      reportText: "",
      adsdialog: false,
      feedbackdialog: false,
      reportDialog: false,
      report: null,
      options: [
        "This is illegal/fraudulent",
        "This ad is spam",
        "The price is wrong",
        "Wrong category",
        "Seller asked for prepayment",
        "This is outdated",
        "User is unreachable",
        "Others"
      ],
      feedBacks: [
        {
          name: "Suzan Iheajumbu",
          text:
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis dolor sapiente dolorum sed corrupti architecto nisi, sunt dicta nostrum molestias voluptatibus optio est, aliquam illum incidunt ab reiciendis veniam enim?",
          ratingModel: 3.5,
          date: 1615476650589
        },

        {
          name: "Praise Austine",
          text:
            " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis dolor sapiente dolorum sed corrupti architecto nisi, sunt dicta nostrum molestias voluptatibus optio est, aliquam illum incidunt ab reiciendis veniam enim?",
          ratingModel: 4.0,
          date: 1615476609421
        },
      ]
    };
  },
  methods: {
    addFeedBack() {
      let newFeedBack = {
        text: this.feedBackText,
        ratingModel: this.rating,
        date: Date.now()
      };
      this.feedBackText = ""
      this.rating = 0
      this.feedBacks.unshift(newFeedBack);
      this.$q.notify({
        message: "FeedBack Added",
        color: "green"
      });
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
    },

    activateReadMore(feedBack) {

   let seeMorebtn = feedBack.date
   let index = this.feedBacks.findIndex(feedBack => feedBack.date === seeMorebtn)
     this.readMoreActivated = true;
    }
  },

  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date(), { addSuffix: true });
    }
  }
};
</script>
