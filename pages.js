const pages = [
  {
    page: 'dashboard',
    layout: '2col',
    menuitems: {
      title: 'Dashboard'
    },
    content: {
      left: {
        body: async () => {
          try {
            let response = await fetch('assets/static/scanner.json')
            let content = await response.json()
            let output = Array.from(content).map(
              item =>
                `<div class="row d-flex"><div>${item.id}</div><div>${item.sn}</div><div>${item.assnr}</div><div>${item.tip}</div><div>${item.dach}</div><div>${item.dpr}</div><div>${item.depozit}</div><div>${item.subcontractor}</div><div>${item.tura}</div><div>${item.service}</div></div>`
            )
            return ''.concat(...output)
          } catch (e) {
            console.log('Eroare!')
            console.log(e)
          }
        }
      },
      right: {
        body: () => 'Right page dashboard'
      }
    }
  },
  {
    page: 'infrastructura',
    layout: '1col',
    menuitems: {
      title: 'Infrastructură',
      actions: [
        ['Depozite', 'infraDepo'],
        ['Subcontractori', 'infraSubc'],
        ['Utilizatori', 'infraUtiliz'],
        ['Știri', 'infraStiri'],
        ['Requests for change', 'infraReq']
      ]
    },
    content: {
      body: '1 column page infrastructura'
    }
  },
  {
    page: 'inventar',
    layout: '2col',
    menuitems: {
      title: 'Inventar',
      actions: [
        ['Scannere', 'invScannere'],
        ['Imprimante mobile', 'invPrintere'],
        ['Echipamente birou', 'invEchipamente'],
        ['Service', 'invService']
      ]
    },
    content: {
      left: {
        body: () => 'Left page inventar'
      },
      right: {
        body: () => 'Right page inventar'
      }
    }
  },
  {
    page: 'solicitari',
    layout: '1col',
    menuitems: {
      title: 'Solicitări',
      actions: [
        ['Echipamente', 'solicEchip'],
        ['Consumabile', 'solicCons']
      ]
    },
    content: {
      body: '1 column page solicitari'
    }
  },
  {
    page: 'cautare',
    layout: '1col',
    menuitems: {
      title: 'Căutare',
      actions: [
        ['Scanner', 'cautScanner'],
        ['Imprimantă mobilă', 'cautPrinter']
      ]
    },
    content: {
      body: '1 column page cautare'
    }
  },
  {
    page: 'penalizari',
    layout: '1col',
    menuitems: {
      title: 'Penalizări',
      actions: [
        ['Adăugare', 'penAdaug'],
        ['Căutare', 'penCaut'],
        ['Export', 'penExport']
      ]
    },
    content: {
      body: '1 column page penalizari'
    }
  },
  {
    page: 'rapoarte',
    layout: '1col',
    menuitems: {
      title: 'Rapoarte',
      actions: [
        ['Raport de dimineață', 'rapDimineata'],
        ['Raport de seară', 'rapSeara'],
        ['Verificări rapoarte', 'rapVerif']
      ]
    },
    content: {
      body: '1 column page rapoarte'
    }
  },
  {
    page: 'suport',
    layout: '1col',
    menuitems: {
      title: 'Suport'
    },
    content: {
      body: '1 column page suport'
    }
  },
  {
    page: 'documentatii',
    layout: '1col',
    menuitems: {
      title: 'Documentații'
    },
    content: {
      body: '1 column page documentatii'
    }
  }
]

export { pages }
