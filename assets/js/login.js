const { createApp, ref, toRaw, reactive, onMounted } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify()
createApp({
    setup() {
        const currentHost = ref(window.location.host)
        const user = reactive({
            username: {
                hasErrors: false,
                value: '',
            },
            password: {
                hasErrors: false,
                value: '',
            },
        })

        function login() {
            console.log(toRaw(user))
        }

        return {
            currentHost,
            user,
            login,
        }
    },
})
    .use(vuetify)
    .mount('#app')
