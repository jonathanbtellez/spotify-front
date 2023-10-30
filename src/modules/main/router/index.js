export default {
    name: "main",
    component: () =>
        import(
             /* webpackChunkName: 'main layout' */ "@/modules/main/layout/MainLayout.vue"
        ),
    children: [
        {
            path: "",
            name: "main",
            component: () =>
                import(
                /* webpackChunkName: 'main view' */ "@/modules/main/views/MainView.vue"
                ),
        },
        // {
        //     path: "register",
        //     name: "register",
        //     component: () =>
        //         import(
        //         /* webpackChunkName: 'register view' */ "@/modules/auth/views/RegisterView.vue"
        //         ),
        // },
    ]
}