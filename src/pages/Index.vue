<template>
  <div>
    <div>
      <div>
        <div class="text-grey-9">
          <div class="q-pa-md">
            <div class="text-h4 text-bold q-mt-xs">
              Welcome!
              <q-img
                src="~assets/dog-foot-print.svg"
                style="height: 80px; max-width: 80px"
                class="q-mt-lg"
              />
            </div>
            <div class="text-center q-mt-md">
              Sign in for a personalized experience with Thri60
              <div class="row q-gutter-md">
                <q-btn
                  rounded
                  unelevated
                  text-color="primary"
                  outline
                  label="Sign in"
                  :to="{ name: 'login' }"
                  class="col"
                />
                <q-btn
                  rounded
                  unelevated
                  text-color="primary"
                  outline
                  label="Register"
                  :to="{ name: 'register' }"
                  class="col"
                />
              </div>
            </div>
          </div>
          <q-input
            @click="search = true"
            densed
            readonly
            rounded
            outlined
            bordered
            type="search"
            label="Make your search here"
            style="  border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;"
            class="q-pa-md inset-shadow-down rounded-borders text-bold"
          >
            <template v-slot:append>
              <q-icon @click="search = true" name="search" color="primary" />
            </template>
          </q-input>
        </div>
      </div>

      <!-- SEARCH dialog -->
      <q-dialog
        v-model="search"
        persistent
        maximized
        transition-show="slide-left"
        transition-hide="slide-right"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-white text-primary">
            <q-toolbar>
              <q-input
                rounded
                outlined
                input-class="text-black"
                dense
                v-model="searchText"
                type="search"
                label="Make your search here"
                class="q-pb-sm q-pt-sm full-width text-bold"
              >
                <template v-slot:prepend>
                  <q-btn icon="arrow_back" flat round v-close-popup />
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
          </q-header>

          <q-page-container>
            <q-page padding>
              <div class="row justify-end">
                <q-btn
                  flat
                  icon="tune"
                  @click="searchfilter = true"
                  text-color="black"
                  label="filter"
                />
              </div>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>

      <!-- SEARCHFILTER dialog -->
      <q-dialog
        v-model="searchfilter"
        persistent
        maximized
        transition-show="slide-left"
        transition-hide="slide-right"
      >
        <q-layout view="Lhh lpR fff" container class="bg-white">
          <q-header class="bg-white text-primary">
            <q-toolbar>
              <q-btn dense flat icon="arrow_back" v-close-popup> </q-btn>

              <q-toolbar-title>Search Filter</q-toolbar-title>
            </q-toolbar>
          </q-header>

          <q-page-container>
            <q-page padding>
              <searchfilter />
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>
    </div>

    <div>
      <!-- top dog -->
      <div class="q-pa-md">
        <q-card v-ripple class="text-primary" flat bordered>
          <p class="text-h5 text-weight-bolder q-pa-sm text-center">
            Top Dog of the week
          </p>
          <q-card-section horizontal>
            <q-card-section class="q-pt-sm">
              This Dog grabs interest of many
              <q-btn
                no-caps
                dense
                flat
                icon-right="arrow_forward"
                text-color="primary"
                label="Check it out"
              />
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img class="rounded-borders" src="~assets/dog1.jpg" />
            </q-card-section>
          </q-card-section>

          <q-separator />
        </q-card>
      </div>


      <!-- Make Your Choice div -->
      <!-- Trending ads -->
      <div class="q-mt-md">
        <span class="text-bold text-h5 q-ml-md text-primary">
          Categories and Trending Ads
          <q-icon name="whatshot" color="red" size="lg" />
        </span>
        <q-card flat>
          <q-tabs
            v-model="trending"
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            stretch
          >
            <q-tab no-caps  name="thrimate" label="ThriMate" />
            <q-tab no-caps name="thrisales" label="ThriSales" />
            <q-tab no-caps name="thrivets" label="ThriVets" />
          </q-tabs>
          <q-space />

          <q-separator :class="classes" />

          <q-tab-panels animated v-model="trending">
            <!-- Trending Thrimate ads -->
            <q-tab-panel name="thrimate">
              <div class="q-mb-xs">
                <!-- dog thrimate -->
                <q-carousel
                  @click="open_thriMate"
                  animated
                  v-model="thriMate"
                  infinite
                  swipeable
                  transition-prev="scale"
                  transition-next="scale"
                  height="140px"
                  class="text-white rounded-borders shadow-10 q-mb-md"
                >
                  <q-carousel-slide :name="1" img-src="~assets/dogs1.jpg">
                    <div class="absolute-bottom-left q-pa-md">
                      <div class="text-h4 text-bold">ThriMate</div>
                      <div class="">
                        Find a Suitable Mating Partner for your Dog
                      </div>
                    </div>
                  </q-carousel-slide>
                  <q-carousel-slide :name="2" img-src="~assets/dogs5.jpg">
                    <div class="absolute-bottom q-pa-md">
                      <div class="text-h4 text-bold">ThriMate</div>
                      <div class="">Earn Money while your dog Procreates</div>
                    </div>
                  </q-carousel-slide>
                </q-carousel>

                  <b class="text-grey-9 text-bold text-h5 q-pt-md">
                    <q-icon name="location_on" /> ThriMate Around You</b
                  >
                <q-separator :class="classes" size="5px" />

                <div class="horizontalScroll q-pl-sm  q-gutter-sm">

                  <div v-for="n in 10" :key="n">
                    <q-card
                      class="rounded-borders q-pt-xs inset-shadow-down"
                      flat
                      style="width: 210px; border-radius:10px"
                    >
                      <q-img
                        src="~assets/dog1.jpg"
                        spinner-color="primary"
                        @click="open_details"
                      />
                      <q-card-section
                        @click="open_details"
                        class="text-justify"
                      >
                        <div>
                          <q-rating
                            v-model="ratingModel"
                            color="orange"
                            readonly
                            icon="star"
                            icon-half="star_half"
                          />
                        </div>
                        <div class="">
                          <div class="text-bold col">
                            One year old Pure-Breed
                          </div>
                        </div>
                        <div class="">
                          <div class="col">German Shepard</div>
                        </div>
                        <div class="">
                          <div class=" col">Male</div>
                        </div>
                        <div class="row">
                          <div class="col-2"><q-icon name="place" /></div>
                          <div class="col-10">Kaduna</div>
                        </div>
                      </q-card-section>

                      <q-separator inset :class="classes" size="5px" />
                    </q-card>
                  </div>
                </div>

                <div class="q-pt-md">
                  <q-btn
                    dense
                    rounded
                    no-caps
                    to="/thrimate"
                    text-color="white"
                    :class="classes"
                    label="See More"
                    icon-right="keyboard_arrow_right"
                    class="full-width"
                  />
                </div>
              </div>
            </q-tab-panel>

            <!-- Trending ThriSales ads -->
            <q-tab-panel name="thrisales">
              <div class="q-mb-xs">
                <!-- ThriSales -->
                <div>
                  <q-carousel
                    @click="open_thriSales"
                    animated
                    v-model="thriSales"
                    swipeable
                    infinite
                    transition-prev="scale"
                    transition-next="scale"
                    height="140px"
                    class="text-white shadow-10 rounded-borders q-mb-md"
                  >
                    <q-carousel-slide :name="1" img-src="~assets/puppy1.jpeg">
                      <div class="absolute-bottom q-pa-md">
                        <div class="text-h4 text-bold">ThriSales</div>
                        <div class="">
                          Find and Purchase Desired Dogs Breeds around You
                        </div>
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" img-src="~assets/puppy4.jpg">
                      <div class="absolute-bottom q-pa-md">
                        <div class="text-h4 text-bold">ThriSales</div>
                        <div class="">Find the dog of your dreams</div>
                      </div>
                    </q-carousel-slide>
                  </q-carousel>
                </div>



              <b class="text-grey-9 text-bold text-h5 q-pt-md">
                  <q-icon name="location_on" /> ThriSales Around You</b
                >
                <q-separator :class="classes" size="5px" />

                <div class="horizontalScroll q-gutter-sm">
                  <div v-for="n in 10" :key="n">
                    <q-card
                      class="rounded-borders q-pt-xs inset-shadow-down"
                      flat
                      style="width: 210px; border-radius:10px"
                    >
                      <q-img
                        src="~assets/dog2.jpg"
                        spinner-color="primary"
                        @click="open_details"
                      />
                      <q-card-section
                        @click="open_details"
                        class="text-justify"
                      >
                        <div class="">
                          <div class="text-bold col">
                            One year old German Shepard
                          </div>
                        </div>
                        <div class="">
                          <div class="col">Pure-Breed</div>
                        </div>
                        <div class="">
                          <div class="ol">Male</div>
                        </div>
                        <div class="row">
                          <div class="col-2"><q-icon name="place" /></div>
                          <div class="col-10">Kaduna</div>
                        </div>
                      </q-card-section>

                      <q-separator inset :class="classes" size="5px" />
                    </q-card>
                  </div>
                </div>
                <div class="q-pt-md">
                  <q-btn
                    dense
                    rounded
                    no-caps
                    to="/thrimate"
                    text-color="white"
                    :class="classes"
                    label="See More"
                    icon-right="keyboard_arrow_right"
                    class="full-width"
                  />
                </div>
              </div>
            </q-tab-panel>

            <!-- thrivet ads -->
            <q-tab-panel name="thrivets">
              <!-- thrivets  -->
              <div class="q-mb-xs">
                <!-- thrivets  -->
                <div>
                  <q-carousel
                    animated
                    @click="open_thrivets"
                    v-model="DoctorSlide"
                    swipeable
                    infinite
                    transition-prev="scale"
                    transition-next="scale"
                    height="140px"
                    class="text-white q-mb-md shadow-10 rounded-borders"
                  >
                    <q-carousel-slide :name="1" img-src="~assets/vetDoc1.jpg">
                      <div class="absolute-bottom q-pa-md">
                        <div class="text-h4 text-bold">ThriVets</div>
                        <div class="">
                          Dog's Sick? Find Experience veterinarians at your
                          Service
                        </div>
                      </div>
                    </q-carousel-slide>
                  </q-carousel>
                </div>
                <b class="text-grey-9 text-bold text-h5 q-pt-md">
                  <q-icon name="location_on" /> ThriVets Doctors Around You</b
                >
                <q-separator :class="classes" size="5px" />

                <div class="horizontalScroll  q-gutter-xs">
                  <div v-for="n in 10" :key="n">
                    <q-card
                      @click="open_vetdetail"
                      class="rounded-borders q-pt-xs inset-shadow-down"
                      style="width: 200px; border-radius: 10px"
                    >
                      <q-img
                        src="~assets/vetDoc2.jpg"
                        spinner-color="white"
                        @click="open_vetdetail"
                      />
                      <q-card-section class="text-justify">
                        <div class="">
                          <div class="text-bold col">Dr. Gerald Stephen</div>
                        </div>
                        <div class="row">
                          <div class="col-2"><q-icon name="place" /></div>
                          <div class="col-10">Kaduna</div>
                        </div>
                      </q-card-section>

                      <q-separator :class="classes" class="q-pb-xs" />

                      <q-card-actions align="right">
                        <div class="text-bold text-h5 text-primary">
                          Book now
                          <q-icon name="keyboard_arrow_right" size="md" />
                        </div>
                      </q-card-actions>
                    </q-card>
                  </div>
                </div>
              </div>

              <div class="q-pt-md">
                <q-btn
                  dense
                  rounded
                  no-caps
                  :class="classes"
                  to="/thrimate"
                  text-color="white"
                  label="See More"
                  icon-right="keyboard_arrow_right"
                  class="full-width"
                />
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>

    <div>
      <q-list
        :class="classes"
        class="text-white  q-ma-md q-pa-sm"
        style="border-radius: 10px;"
      >
        <q-item
          clickable
          v-ripple
          class="dogProfile"
          :to="{ name: 'dogProfile' }"
        >
          <q-item-section>
            <q-item-label class="text-bold text-h6"
              >Add Your Dog Profile</q-item-label
            >
            <q-item-label
              >You can also add a one-time digital profile of your dog that will
              ease posting and other features</q-item-label
            >
          </q-item-section>

          <q-item-section side>
            <q-icon name="keyboard_arrow_right" color="white" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import searchfilter from "components/searchfilter.vue";

const colors = ["primary", "secondary", "cyan", "purple", "brown"];

export default {
  components: {
    searchfilter
  },
  data() {
    return {
      text: "",
      trending: "thrimate",
      searchText: "",
      thriMate: 1,
      thriSales: 1,
      DoctorSlide: 1,
      blogSlide: 1,
      search: false,
      searchfilter: false,
      color: colors[0],
      index: 0,
      showbtn: null,
      ratingModel: 3.5
    };
  },
  methods: {
    open_details() {
      this.$router.push({ name: "details" });
    },

    open_thriSales() {
      this.$router.push({ name: "thrisales" });
    },

    open_thriMate() {
      this.$router.push({ name: "thrimate" });
    },

    open_thrivets() {
      this.$router.push({ name: "thrivets" });
    },

    open_vetdetail() {
      this.$router.push({ name: "vetdetail" });
    },

    open_thriblog() {
      this.$router.push({ name: "thriblog" });
    }
  },

  computed: {
    classes() {
      return `bg-${this.color}`;
    }
  },

  mounted() {
    this.timer = setInterval(() => {
      this.index = (this.index + 1) % colors.length;
      this.color = colors[this.index];
    }, 15000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="css" scoped>
.carousel {
  border-radius: 15px;
}

.horizontalScroll {
  display: flex;
  overflow-x: auto;
}
</style>
