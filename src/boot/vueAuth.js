import axios from 'axios';
import VueAxios from 'vue-axios';

export default async({ app, router, Vue }) => {
    Vue.router = router;
    Vue.use(VueAxios, axios);
    Vue.prototype.router = router;

    Vue.use(require('@websanova/vue-auth'), {
        auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
        http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
        router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
        tokenDefaultName: 'access_token',
        tokenStore: ['localStorage'],
        authRedirect: { path: '/login' },
        notFoundRedirect: { path: '/404' },
        rolesVar: 'role',
        parseUserData: function(data) {
            return data.user;
        }
    });
}