<template>
  <div class=" full-width q-gutter-md">
    <div class="">
      <q-select
        behavior="default"
        dense
        rounded
        outlined
        v-model="category"
        :options="categories"
        label="Choose Category"
        color="orange"
      />
    </div>
    <div class="">
      <q-select
        rounded
        dense
        outlined
        v-model="breedName"
        :options="dogBreeds"
        label="Choose Breed"
        color="orange"
      />
    </div>
    <div>
      <q-select
        rounded
        outlined
        dense
        v-model="breedtype"
        :options="breedtypes"
        label="Choose Breed Type"
        color="orange"
      />
    </div>
    <div class="">
      <q-select
        rounded
        dense
        outlined
        v-model="gender"
        :options="genders"
        label="Choose Gender"
        color="orange"
      />
    </div>
    <div class="row q-gutter-md">
      <q-select
        rounded
        outlined
        dense
        v-model="ModelState"
        :options="states"
        label="Choose State"
        color="orange"
        class="col"
        @input="pushCity"
      />
      <q-select
        rounded
        dense
        outlined
        v-model="Modelcity"
        :options="city"
        label="Choose City"
        color="orange"
        class="col"
      />
    </div>
    <div class="row q-gutter-md text-grey-9">
      <div class="col">
        <q-input
          rounded
          dense
          type="number"
          outlined
          v-model="minPrice"
          label="Min Price"
          prefix="₦"
        />
      </div>
      <div class="col">
        <q-input
          rounded
          dense
          type="number"
          outlined
          v-model="maxPrice"
          label="Max Price"
          prefix="₦"
        />
      </div>
    </div>
    <div class="">
      <q-select
        behavior="default"
        outlined
        dense
        rounded
        color="orange"
        v-model="sort"
        :options="sorts"
        label="Choose Sort Order"
      >
        <template v-slot:prepend>
          <q-icon color="orange" name="import_export" />
        </template>
      </q-select>
    </div>
    <q-space class="q-pa-md" />

    <div>
            <q-btn
          class="full-width"
          rounded
          no-caps
          color="secondary"
          text-color="white"
          label="Show Ads"
        />
    </div>
  </div>
</template>

<script>
import breeds from "assets/breeds.json";
import locations from "assets/location.json";
export default {
  name: "searchfilter",
  data() {
    return {
      breed: breeds,
      breedName: "All",
      dogBreeds: [],
      location: locations,
      ModelState: null,
      states: [],
      Modelcity: null,
      city: [],
      category: "ThriMate",
      region: null,
      breedtype: "All",
      age: "",
      gender: "All",
      minPrice: null,
      maxPrice: null,
      sort: "Relevant",
      categories: ["ThriMate", "ThriSales"],
      breedtypes: ["All", "Pure Breed", "Mixed Breed"],
      genders: ["All", "Male", "Female"],
      agerange: [
        "0-1 Month",
        "1-3 Months",
        "3-6 Months",
        "6-12 Months",
        "1-3 Years",
        "3-6 Years",
        "6+ Years"
      ],
      sorts: ["Relevant", "Most Recent", "Lowest Price", "Highest Price"],

      options: ["a", "b", "c", "d", "e"]
    };
  },

  methods: {
    pushCity() {
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
  }
};
</script>
