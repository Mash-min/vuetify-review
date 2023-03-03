export default {
    template: `
        <v-toolbar class="bg-green-darken-1">
            <v-app-bar-nav-icon @click="$emit('toggle')">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </v-app-bar-nav-icon>

            <v-toolbar-title>{{ title }}</v-toolbar-title>

            <p class="ma-1">({{ currentHost }})</p>
        </v-toolbar>

    `,
    name: 'Navbar',
    methods: {
        toggleSidebar() {
            console.log('Working')
        },
    },
    data() {
        return {
            currentHost: window.location.host,
            drawer: null,
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
    },
}
