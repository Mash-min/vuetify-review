export default {
    template: `
        <v-btn class="bg-green-darken-1 ma-1" variant="flat" size="small" v-for="item in items">Sample Button {{ item.id }}</v-btn>
    `,
    name: 'DataTable',
    data() {
        return {
            items: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                },
            ],
        }
    },
}
