<template>
  <q-page class="content text-primary">
    <q-header class="content text-primary">
      <q-toolbar class="">
        <q-btn
          icon="arrow_back"
          flat
          round
          v-if="!form_div"
          @click="form_div = !form_div"
        />
        <q-btn icon="close" flat round v-if="form_div" to="/" />
        <q-toolbar-title class="text-bold">Sign Up</q-toolbar-title>
        <div class="back-circle"></div>
      </q-toolbar>
    </q-header>
    <div>
      <div>
        <div class="q-mb-md">
          <p class="text-h4 text-bold q-ml-md q-pt-md">Hello</p>
          <p class="text-h5 text-bold q-ml-md">Lets Get Started!</p>
          <p class="text-h5 q-ml-md q-mr-md" v-if="form_div">
            You can either use your email, or continue with your social account.
          </p>
        </div>

        <!-- background svg -->
        <div>
          <svg
            class="back-blob"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#8295A3"
              d="M26.6,-30.4C31.8,-21.4,31.4,-10.7,37.7,6.3C43.9,23.2,56.8,46.4,51.6,59.4C46.4,72.4,23.2,75.1,2,73.1C-19.2,71,-38.3,64.3,-48.4,51.3C-58.5,38.3,-59.4,19.2,-57.1,2.3C-54.8,-14.6,-49.3,-29.1,-39.2,-38.1C-29.1,-47.1,-14.6,-50.5,-1.9,-48.6C10.7,-46.6,21.4,-39.4,26.6,-30.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <!-- form div -->
        <div>
          <div v-if="!form_div" class="full-width">
            <q-form @submit="onSubmit" class="q-gutter-md q-pa-md q-mt-xl">
              <div>
                <q-input
                  rounded
                  label-color="primary"
                  bg-color="white"
                  outlined
                  v-model="form.firstname"
                  label="First Name"
                />
              </div>
              <div>
                <q-input
                  label-color="primary"
                  bg-color="white"
                  rounded
                  outlined
                  v-model="form.surname"
                  label="Surname Name"
                />
              </div>
              <div>
                <q-input
                  rounded
                  label-color="primary"
                  bg-color="white"
                  outlined
                  v-model="form.email"
                  type="email"
                  label="Email"
                />
              </div>
              <div>
                <q-input
                  label-color="primary"
                  bg-color="white"
                  rounded
                  outlined
                  v-model="form.phone"
                  type="tel"
                  label="Phone"
                />
              </div>
              <div>
                <q-input
                  label-color="primary"
                  bg-color="white"
                  rounded
                  outlined
                  v-model="form.password"
                  :type="isPwd ? 'password' : 'text'"
                  label="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>

                <passwordStrength
                  v-model="form.password"
                  :strength-meter-only="true"
                />
              </div>
              <div>
                <q-toggle v-model="form.accept" label="I accept the" />
                <q-btn
                  flat
                  dense
                  no-caps
                  text-color="blue"
                  label="Terms and Conditions"
                />
              </div>

              <div class="text-center">
                <q-space />
                <q-btn
                 :loading="loading"
                    :percentage="loading_progress"
                  rounded
                  no-caps
                  type="submit"
                  class="full-width"
                  color="primary"
                  text-color="white"

                >
              Create an Account
                    <template v-slot:loading>
                      <q-spinner-ball class="on-left" />
                    Creating Account...
                    </template>
                  </q-btn>
              </div>
            </q-form>
          </div>

          <div
            v-if="form_div"
            class="q-gutter-md absolute-bottom text-center q-mb-md"
          >
            <q-btn
              @click="form_div = !form_div"
              rounded
              no-caps
              style="width:80%"
              color="white"
              text-color="primary"
              label="Sign up with Email and Phone"
            />
            <q-btn
              icon="fab fa-facebook-f"
              rounded
              no-caps
              style="width:80%"
              color="indigo-7"
              text-color="white"
              label="Sign up with Facebook"
            />
            <q-btn
              icon="fab fa-google"
              rounded
              no-caps
              style="width:80%"
              color="red-8"
              text-color="white"
              label="Sign up with Gmail"
            />
          </div>
        </div>
      </div>
    </div>

    <q-footer class="content text-primary">
      <q-toolbar class="c">
        <q-toolbar-title class="text-center text-bold text-h6"
          >Already have an account?<q-btn
            to="/login"
            flat
            dense
            no-caps
            class="text-bold text-h6"
            text-color="red"
            label="Sign In"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import passwordStrength from "vue-password-strength-meter";
export default {
  components: { passwordStrength },
  data() {
    return {
      isPwd: true,
      loading: false,
      loading_progress: 0,
      form: {
        firstname: "",
        surname: "",
        email: "",
        phone: "",
        Password: "",
        accept: false
      },
      form_div: true
    };
  },
  methods: {
    onSubmit() {
      if (this.form.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
      this.loading = true;
      this.loading_progress = 0;

      this.interval = setInterval(() => {
        this.loading_progress += Math.floor(Math.random() * 8 + 10);
        if (this.loading_progress >= 100) {
          clearInterval(this.interval);
          this.loading = false;
        }
      }, 700);
      }


    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss" scoped>
.back-circle {
  z-index: -1;
  width: 200px;
  height: 200px;
  background: rgba(167, 177, 183, 0.784);
  position: absolute;
  border-radius: 50%;
  margin-left: -100px;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  background: #dfe6eae0;
}
.back-blob {
  z-index: -1;
  position: absolute;
  left: -40%;
  top: 0;
}
</style>
