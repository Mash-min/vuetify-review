const { createApp, ref, toRaw, reactive, onMounted } = Vue
const { createVuetify } = Vuetify
import Navbar from './components/navbar.js'

const vuetify = createVuetify()

const data = [1, 2, 23, 4, 5, 6]

const app = createApp({
    setup() {
        const title = 'Manage Branch'

        const modelData = reactive({
            users: {
                label: 'Users',
                value: null,
                items: [],
            },
        })

        const selectedItem = {
            id: '',
            name: '',
        }

        const drawer = ref(false)

        const checkbox = false

        const users = [
            {
                id: 1,
                name: 'Mashiyyat Delos Santos',
            },
            {
                id: 2,
                name: 'Merry Grace Delos Santos',
            },
        ]
        function submit() {
            console.log(toRaw(modelData))
        }

        function addItem() {
            modelData['users'].items.push({ id: 5, name: 'Random Name' })
        }

        function searchUser() {
            console.log('Working')
        }

        function search() {}

        return {
            search,
            drawer,
            modelData,
            title,
            users,
            checkbox,
            selectedItem,
            submit,
            addItem,
            modelData,
            searchUser,
        }
    },
    components: {
        navbar: Navbar,
    },
})
    .use(vuetify)
    .mount('#app')
