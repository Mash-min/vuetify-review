const { ref, h, reactive, onMounted, toRaw, computed, watch } = Vue
const { NButton } = naive
export default {
    template: `
    <div class="mt-5">
        <h4>{{ title }}</h4>

        <n-data-table :columns="columns" :data="data" :pagination="false" :bordered="false" />

        <n-modal
            v-model:show="showModal"
            class="custom-card"
            preset="card"
            :mask-closable="false"
            :style="{ width: '90%' }"
            title="Branch"
            :bordered="false"
            size="huge"
        >
            <div class="pa-1">
                <pre>
                    {{ modalData }}
                </pre>
                <n-input v-model:value="modalData['sample']" type="text" placeholder="Basic Input" />
            </div>

            <template #footer>
                <n-button class="ma-1" @click="closeModal">Close</n-button>
                <n-button class="ma-1">Save</n-button>
            </template>
        </n-modal>
    </div>
    `,
    props: {
        title: {
            type: String,
        },
        columns: {
            type: Array,
            default: () => [],
        },
        url: {
            type: String,
        },
        model: {
            type: String,
        },
    },
    setup(props) {
        const pagination = ref(false)

        const modalData = reactive({})

        const columns = computed(() => [
            ...props.columns,
            {
                title: 'Action',
                key: 'actions',
                render(row) {
                    return [
                        h(
                            NButton,
                            {
                                strong: true,
                                tertiary: true,
                                size: 'small',
                                onClick: () => editRow(row),
                            },
                            { default: () => 'Edit' },
                        ),
                        h(
                            NButton,
                            {
                                strong: true,
                                tertiary: true,
                                size: 'small',
                                onClick: () => deleteRow(row),
                            },
                            { default: () => 'Delete' },
                        ),
                    ]
                },
            },
        ])

        const baseUrl = computed(() => props.url)

        const data = ref([])

        const showModal = ref(false)

        function editRow(data) {
            Object.assign(modalData, { ...data })
            showModal.value = true
        }

        function deleteRow(data) {
            console.log(toRaw(data), props.title)
        }

        function closeModal() {
            showModal.value = false
        }

        function paginateModel() {
            console.log('Working')
            $.ajax({
                type: 'GET',
                url: baseUrl.value,
                dataType: 'JSON',
            }).then((response) => {
                console.log(response)
                data.value = response[props.model]
            })
        }

        onMounted(() => paginateModel())

        // watch(
        //     () => props.model,
        //     () => {
        //         data.value = []
        //         paginateModel()
        //     },
        // )

        return {
            pagination,
            showModal,
            closeModal,
            modalData,
            columns,
            data,
            editRow,
            deleteRow,
        }
    },
    name: 'ManageBranch',
}
