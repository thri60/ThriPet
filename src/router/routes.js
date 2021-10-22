const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
                path: "",
                component: () =>
                    import ("pages/Index.vue"),
                name: "homepage"
            },
            {
                path: "/details",
                component: () =>
                    import ("src/pages/dogDetailsPage.vue"),
                name: "details"
            },
            {
                path: "/post",
                component: () =>
                    import ("pages/postPage.vue"),
                name: "post"
            },
            {
                path: "/thrisales",
                component: () =>
                    import ("pages/thrisalesListPage.vue"),
                name: "thrisales"
            },
            {
                path: "/thrimate",
                component: () =>
                    import ("pages/thrimateListPage.vue"),
                name: "thrimate"
            },
            {
                path: "/thrivets",
                component: () =>
                    import ("src/pages/thrivetListPage.vue"),
                name: "thrivets"
            },
            {
                path: "/thriblog",
                component: () =>
                    import ("pages/thriblogPage.vue"),
                name: "thriblog"
            },
            {
                path: "/vetdetail",
                component: () =>
                    import ("pages/vetdetailPage.vue"),
                name: "vetdetail"
            },

            //profile pages
            {
                path: "/userProfile",
                component: () =>
                    import ("pages/profile/userProfile.vue"),
                name: "userProfile"
            },
            {
                path: "/dogProfile",
                component: () =>
                    import ("pages/profile/dogProfilePage.vue"),
                name: "dogProfile"
            },
            {
                path: "/vetProfile",
                component: () =>
                    import ("src/pages/profile/vetProfileFormPage.vue"),
                name: "vetProfile"
            },
            {
                path: "/login",
                component: () =>
                    import ("pages/profile/login.vue"),
                name: "login"
            },
            {
                path: "/register",
                component: () =>
                    import ("pages/profile/registerPage.vue"),
                name: "register"
            },
            {
                path: "/fav",
                component: () =>
                    import ("pages/profile/Fav_ads_Page.vue"),
                name: "fav"
            },
            {
                path: "/msg",
                component: () =>
                    import ("pages/profile/msg_notification_Page.vue"),
                name: "msg"
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "*",
        component: () =>
            import ("pages/Error404.vue")
    }
];

export default routes;