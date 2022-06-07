const pages = [
    {
        page: "home",
        layout: "default",
        type: "1col",
        content: {
            body: "1 column page"
        }
    },
    {
        page: "inventar",
        layout: "default",
        type: "2col",
        content: {
            left: {
                body: "Left page content"
            },
            right: {
                body: "Right page content"
            }
        }
    }
]

export { pages }