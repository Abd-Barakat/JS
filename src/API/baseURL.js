export function getBaseURL() {

    return getParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://rocky-river-22560.herokuapp.com/';
}

/**
 * this function get value of passed parameter.
 *
 * @param {*} name of parameter.
 * @param {*} url extra info.
 * @returns
 */
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}