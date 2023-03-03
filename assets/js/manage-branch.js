const { createApp, ref, toRaw, reactive, onMounted } = Vue
const { createVuetify } = Vuetify
// import searchInput from './components/search-input.js'

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

        function search() {
            console.log('Working')
        }

        function submit() {
            console.log(toRaw(modelData))
        }

        function addItem() {
            modelData['users'].items.push({ id: 5, name: 'Random Name' })
        }

        function searchUser() {
            console.log('Working')
        }

        onMounted(() => {
            $.ajax({
                type: 'GET',
                url: `https://dummyjson.com/users?limit=10`,
                dataType: 'json',
            }).then((response) => {
                modelData['users'].items = response.users.map((user) => ({
                    id: user.id,
                    name: user.firstName + ' ' + user.lastName,
                }))
                console.log(response.users)
            })
        })

        return {
            modelData,
            title,
            users,
            checkbox,
            search,
            selectedItem,
            submit,
            addItem,
            modelData,
            searchUser,
        }
    },
    components: {
        // searchInput: searchInput
    },
})
    .use(vuetify)
    .mount('#app')
