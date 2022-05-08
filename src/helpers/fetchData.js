const fetchData = url => {
    return fetch(url).then(data => data.json());
}

export default fetchData;