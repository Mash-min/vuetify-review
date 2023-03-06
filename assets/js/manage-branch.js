const dummyData = () => {
    const data = []

    for (let x = 1; x < 100; x++) {
        data.push({
            id: x,
            name: `Branch #${x}`,
            address: `Sample Address, BLK ${x} LOT ${x}`,
            pricelist: `PRICELIST-${x}`,
            storecode: `STORECODE-${x}`,
            area: `AREA-${x}`,
            area2: `AREA-${x}-2`,
            supervisor: {
                id: x,
                name: `SAMPLE USER ${x}`,
            },
        })
    }

    return data
}

const dataTable = {
    model: 'branch',
    withModel: [{ text: 'supervisor', field: 'finger', ref: 'sic', row: 'id' }],
    headers: [
        { text: 'ID', value: 'id' },
        { text: 'NAME', value: 'name' },
        { text: 'ADDRESS', value: 'address' },
        { text: 'PRICELIST', value: 'pricelist' },
        { text: 'STORECODE', value: 'storecode' },
        { text: 'AREA1', value: 'area' },
        { text: 'AREA2', value: 'area2' },
        { text: 'ADDRESS', value: 'address' },
        { text: 'SUPERVISOR', value: 'supervisor.name' },
        { text: 'Operation', value: 'operation' },
    ],
    items: dummyData(),
    modal: {
        fields: {
            id: {
                type: 'number',
                attributes: {
                    col: 4,
                    disabled: true,
                    text: 'ID',
                },
            },
            name: {
                type: 'input',
                text: 'NAME',
                attributes: {
                    col: 8,
                    text: 'NAME',
                    required: true,
                },
            },
            supervisor: {
                type: 'combobox',
                attributes: {
                    col: 12,
                    text: 'SUPERVISOR',
                    multiple: false,
                    required: true,
                },
                method: {
                    field: 'finger',
                    row: 'nome',
                    operator: 'LIKE',
                    required: true,
                },
            },
            address: {
                type: 'textarea',
                attributes: {
                    col: 6,
                    text: 'ADDRESS',
                    required: true,
                },
            },
            pricelist: {
                type: 'input',
                attributes: {
                    col: 6,
                    text: 'PRICELIST',
                    required: true,
                },
            },
            storecode: {
                type: 'input',
                attributes: {
                    col: 12,
                    text: 'STORECODE',
                    required: true,
                },
            },
            area: {
                type: 'input',
                attributes: {
                    col: 6,
                    text: 'AREA',
                    required: true,
                },
            },
            area2: {
                type: 'input',
                attributes: {
                    col: 6,
                    text: 'AREA-2',
                    required: true,
                },
            },
        },
    },
}
