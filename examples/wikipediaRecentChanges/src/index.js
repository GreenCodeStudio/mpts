import changeTemplate from "../src/change.mpts"

async function refresh() {
    const data = await (await fetch('json.php')).json();
    for (const change of [...data.query.recentchanges].reverse()) {
        if (!document.querySelector('[data-rcid="' + change.rcid + '"]'))
            document.body.prepend(changeTemplate({change}))
    }
}

setInterval(refresh, 10000)