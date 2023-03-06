const { createApp, ref, toRaw, reactive, onMounted } = Vue
const { createVuetify } = Vuetify
import DataTable from './components/DataTable.js'
import Navbar from './components/navbar.js'

const vuetify = createVuetify()

createApp({
    setup() {
        const toggler = reactive({
            drawer: false,
            dialog: false,
        })
        const table = ref(dataTable)
        const modalData = reactive({})

        function openModal(data) {
            for (const [key, value] of Object.entries(table.value.modal.fields)) {
                Object.assign(modalData, {
                    [key]: {
                        value: data[key] ?? null,
                        hasErrors: false,
                        items: [
                            {
                                id: 1,
                                name: 'Mashiyyat Delos Santos',
                            },
                            {
                                id: 2,
                                name: 'Merry Grace Managuit',
                            },
                            {
                                id: 3,
                                name: 'Gen Marc Recana',
                            },
                            {
                                id: 4,
                                name: 'Matthew Aspile',
                            },
                            {
                                id: 5,
                                name: 'Banjo Guevara',
                            },
                        ],
                    },
                })
            }

            toggler.dialog = true
        }

        function submitModal() {
            for (const [key, value] of Object.entries(table.value.modal.fields)) {
                modalData[key].hasErrors = false
                if (value.attributes?.required && !modalData[key].value) {
                    modalData[key].hasErrors = true
                    return
                }
            }

            console.log(toRaw(modalData))
        }

        function filterModel(key) {
            modalData[key].items.push({
                id: 13,
                name: 'Sample User',
            })
        }

        return {
            toggler,
            table,
            modalData,
            openModal,
            submitModal,
            filterModel,
        }
    },
    components: {
        navbar: Navbar,
        EasyDataTable: window['vue3-easy-data-table'],
        DataTable: DataTable,
    },
})
    .use(vuetify)
    .mount('#app')
