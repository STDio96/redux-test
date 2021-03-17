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

    static fetchAlbumInfo = (id) =>
        fetch(`${this.baseURL}/albums/${id}?_expand=user`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status)
                } else {
                    return response.json();
                }
            });

    static fetchSinglePhoto = (id) =>
        fetch(`${this.baseURL}/photos/${id}?_expand=album`)
            .then((response) => response.json());
}