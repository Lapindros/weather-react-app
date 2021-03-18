const API_KEY = "fac334256b0fcf5a5f8ac1cbfbffbf6e";

export const Api = {
    async fetch(query) {
        const api_url = await
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`);
        return await api_url.json()
    }
}