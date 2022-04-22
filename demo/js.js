import {Environment, XMLParser} from "mpts-core"

document.querySelector('.code').oninput = e => {
    refresh()
};
document.querySelector('.variables').oninput = e => {
    refresh()
};

function refresh() {
    try {
        let parsed = XMLParser.Parse(document.querySelector('.code').value);
        let env = new Environment();
        env.variables = eval('(' + document.querySelector('.variables').value + ')')
        let dom = parsed.execute(env);
        document.querySelector('.result').innerHTML = '';
        document.querySelector('.result').append(dom);
        document.querySelector('.resultCode').textContent = document.querySelector('.result').innerHTML;
    } catch (ex) {
        document.querySelector('.result').textContent = ex;
    }
}

document.querySelector('.code').value = '<:foreach collection=items item=name>\n    <p>Name of item: {{name}}</p>\n</:foreach>';
document.querySelector('.variables').value = '{items:["first", "second", "third"]}'
refresh();