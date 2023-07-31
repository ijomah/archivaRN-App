export default ApiCalls = (link) => {
    fetch(link).then(response => response.json())
}   