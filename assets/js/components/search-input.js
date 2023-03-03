export default {
    setup() {
        const title = "Manage Branch"

        const label = "Search Input"

        function search() {
            console.log('Working', data)
        }

        return {
            title,
            label,
            search,
            props
        }
    }, 
    template: `
        <h2>{{ title }}</h2>

        <v-text-field
            density="compact"
            :label="label"
            placeholder="Placeholder"
            @input="search"
            variant="outlined">
        </v-text-field>
    `,
    name: 'SearchInput'
}