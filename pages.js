const pages = [
    {
        page: 'dashboard',
        layout: 'default',
        menuitems: {
            title: 'Dashboard',
            accesslevel: 0
        },
        type: '1col',
        content: {
            body: '1 column page dashboard'
        }
    },
    {
        page: 'infrastructura',
        layout: 'default',
        menuitems: {
            title: 'Infrastructură',
            accesslevel: 0,
            actions: ['Depozite', 'Subcontractori', 'Utilizatori', 'Știri', 'Requests for change']
        },
        type: '1col',
        content: {
            body: '1 column page infrastructura'
        }
    },
    {
        page: 'inventar',
        layout: 'default',
        menuitems: {
            title: 'Inventar',
            accesslevel: 0,
            actions: ['Scannere', 'Imprimante mobile', 'Echipamente birou', 'Service']
        },
        type: '2col',
        content: {
            left: {
                body: 'Left page inventar'
            },
            right: {
                body: 'Right page inventar'
            }
        }
    },
    {
        page: 'solicitari',
        layout: 'default',
        menuitems: {
            title: 'Solicitări',
            accesslevel: 0,
            actions: ['Echipamente', 'Consumabile']
        },
        type: '1col',
        content: {
            body: '1 column page solicitari'
        }
    },
    {
        page: 'cautare',
        layout: 'default',
        menuitems: {
            title: 'Căutare',
            accesslevel: 0,
            actions: ['Scanner', 'Imprimantă mobilă']
        },
        type: '1col',
        content: {
            body: '1 column page cautare'
        }
    },
    {
        page: 'penalizari',
        layout: 'default',
        menuitems: {
            title: 'Penalizări',
            accesslevel: 0,
            actions: ['Adăugare', 'Căutare', 'Export']
        },
        type: '1col',
        content: {
            body: '1 column page penalizari'
        }
    },
    {
        page: 'rapoarte',
        layout: 'default',
        menuitems: {
            title: 'Rapoarte',
            accesslevel: 0,
            actions: ['Raport de dimineață', 'Raport de seară', 'Verificări rapoarte']
        },
        type: '1col',
        content: {
            body: '1 column page rapoarte'
        }
    },
    {
        page: 'suport',
        layout: 'default',
        menuitems: {
            title: 'Suport',
            accesslevel: 0,
        },
        type: '1col',
        content: {
            body: '1 column page suport'
        }
    },
    {
        page: 'documentatii',
        layout: 'default',
        menuitems: {
            title: 'Documentații',
            accesslevel: 0,
        },
        type: '1col',
        content: {
            body: '1 column page documentatii'
        }
    }
]

export { pages }