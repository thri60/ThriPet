<template>
  <div>
    <q-header >
      <q-toolbar>
        <!-- <q-btn flat round dense icon="keyboard_arrow_left" class="q-mr-sm" /> -->

        <q-toolbar-title>ThriBlog</q-toolbar-title>

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
      <div class="border bg-primary full-width">
        <q-card
          class="cardborder divdropdown q-ml-md q-mr-md bg-white text-primary"
        >
          <div class="q-pb-md q-pt-md row q-pa-md text-center">
            <q-toolbar
              >All Breed Information, Photos and Advice on purebred dog breeds.
            </q-toolbar>
          </div>
        </q-card>
      </div>
    </div>

    <div style="padding-top: 66px" class="q-px-md">
      <q-list separator class="rounded-borders q-gutter-sm">
        <q-expansion-item
          expand-separator
          label="Breed Guides"
          caption="Select a breed below"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="text-primary">
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Dog Training"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          label="Health"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Nutrition"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Dog Accessories and Product Reviews"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="First Time Owners"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="When they are Puppies"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Dog Psychology 101"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          label="Dog Fun"
          class="text-primary shadow-1 overflow-hidden"
          style="border-radius: 30px"
        >
          <q-card>
            <q-card-section>
              <q-list separator>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label>Single line item</q-item-label>
                    <q-item-label caption lines="2"
                      >primary line text. Lorem ipsum dolor sit amet,
                      consectetur adipiscit elit.</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section class="text-center">
                    <q-item-label>See More</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" color="grey-9" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
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

    <h4>

    {{ data }}
    </h4>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      searchText: "",
      searchdata: {},
      data: {}
    };
  },

  methods: {
    loading_search(){
      this.axios.post('/thrimate_dogs/search/', { gender: 'male'})
          .then(response =>{
            this.searchdata = response.data
            // response.data.forEach(element => {
            //   this.data = element
            // });
          })
    },
    loading_data(){
      this.axios.get('/thrimate_dogs')
      .then(response=>{
        this.data = response.data
      })
    }
  },

  mounted() {
    this.loading_search()
    this.loading_data()
  },
};
</script>

<style lang="css" scoped>
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


.center {
  margin: auto;
}
</style>
