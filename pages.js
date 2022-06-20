const pages = [
    {
        page: 'dashboard',
        layout: 'default',
        menuitems: {
            title: 'Dashboard',
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
            actions: [['Depozite', 'rapoarte'], ['Subcontractori', 'infraSubc'], ['Utilizatori', 'infraUtiliz'], ['Știri', 'infraStiri'], ['Requests for change', 'infraReq']]
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
            actions: [['Scannere', 'invScannere'], ['Imprimante mobile', 'invPrintere'], ['Echipamente birou', 'invEchipamente'], ['Service', 'invService']]
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
            actions: [['Echipamente', 'solicEchip'], ['Consumabile', 'solicCons']]
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
            actions: [['Scanner', 'cautScanner'], ['Imprimantă mobilă', 'cautPrinter']]
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
            actions: [['Adăugare', 'penAdaug'], ['Căutare', 'penCaut'], ['Export', 'penExport']]
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
            actions: [['Raport de dimineață', 'rapDimineata'], ['Raport de seară', 'dapSeara'], ['Verificări rapoarte', 'rapVerif']]
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
        },
        type: '1col',
        content: {
            body: '1 column page documentatii'
        }
    }
]

export { pages }