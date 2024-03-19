const BASE_URL = 'https://opentdb.com/api.php?amount=5';

export default async function fetchToken() {
    const fetchGetToken = await fetch('https://opentdb.com/api_token.php?command=request');
    const jsonToken = await fetchGetToken.json();
    return jsonToken;
}
  