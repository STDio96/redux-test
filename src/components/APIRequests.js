export default class APIRequests {
    static baseURL = "https://jsonplaceholder.typicode.com";

    static fetchPhotos = (page, options/* limit = 6, albumId = undefined */) => {
        let limit = options?.limit ?? 6;
        let albumRequest = '';

        if (options?.albumId) {
            albumRequest = `&albumId=${options?.albumId}`;
        }

        return fetch(`${this.baseURL}/photos?_page=${page}&_limit=${limit}${albumRequest}`)
            .then((response) => response.json());
    }

    static fetchSinglePhoto = (id) =>
        fetch(`${this.baseURL}/photos/${id}?_expand=album`)
            .then((response) => response.json());

    static fetchUser = (albumId) =>
        fetch(`${this.baseURL}/albums/${albumId}?_expand=user`)
            .then((response) => response.json());
}