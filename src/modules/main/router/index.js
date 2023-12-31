export default {
    name: "main",
    component: () =>
        import(
             /* webpackChunkName: 'main layout' */ "@/modules/main/layout/MainLayout.vue"
        ),
    children: [
        {
            path: "",
            name: "home",
            component: () =>
                import(
                /* webpackChunkName: 'main view' */ "@/modules/main/views/MainView.vue"
                ),
        },
        {
            path: "playlist/:id",
            name: "showPlaylist",
            component: () =>
                import(
                    /* webpackChunkName: 'playlist view' */ "@/modules/main/views/PlaylistView.vue"
                ),
            props: route => ({ idPlaylist: route.params.id })
        },
    ]
}