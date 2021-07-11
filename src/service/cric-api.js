require("dotenv").config();

const api_key = process.env.REACT_APP_API_KEY;

const getMatches = () => {
    const matches = `https://cricapi.com/api/matches?apikey=${api_key}`;
    return fetch(matches)
        .then(res => res.json())
        .catch(err => console.log(err));
}

const getMatchDetail = (id) => {
    const score = `https://cricapi.com/api/cricketScore?apikey=${api_key}&unique_id=${id}`;
    return fetch(score)
        .then(res => res.json())
        .catch(err => console.log(err));
}

module.exports = {
    getMatches: getMatches,
    getMatchDetail: getMatchDetail
}