import APIRequests from "../components/APIRequests";

const REQUEST_SENT = 'album/request_sent';
const REQUEST_DONE = 'album/request_done';
const COMPONENT_UNMOUNT = 'album/unmounted';
const ALBUMINFO_REQUEST_SENT = 'album/info_request_sent';
const ALBUMINFO_REQUEST_DONE = 'album/info_request_done';

const photosRequested = () => ({
  type: REQUEST_SENT,
});

const photosReceived = (photos, pageToLoad) => ({
  type: REQUEST_DONE,
  payload: {
    pageToLoad: pageToLoad + 1,
    photos,
  }
});

const albumInfoRequested = () => ({
  type: ALBUMINFO_REQUEST_SENT,
});

const albumInfoReceived = (data) => ({
  type: ALBUMINFO_REQUEST_DONE,
  payload: data
});

const unmounted = () => ({
  type: COMPONENT_UNMOUNT,
});

export const loadPhotos = (albumId) => (dispatch, getState) => {
  dispatch(photosRequested());
  let pageToLoad = getState().albumPage.pageToLoad;

  APIRequests.fetchPhotos(pageToLoad, { albumId: albumId })
    .catch((err) => console.error('error', err))
    .then((response) => {
      dispatch(photosReceived(response, pageToLoad));
    });
}

export const loadAlbumInfo = (albumId) => (dispatch) => {
  dispatch(albumInfoRequested());

  APIRequests.fetchAlbumInfo(albumId)
    .catch((err) => {
      console.warn(err);
      if (err === '404') {
        dispatch(albumInfoReceived({}));
      }
    })
    .then((response) => {
      dispatch(albumInfoReceived(response));
    });
}

export const unmountAlbumPage = () => (dispatch) => {
  dispatch(unmounted());
}

const initialState = {
  isLoaded: false,
  pageToLoad: 1,
  isAlbumInfoLoaded: false,
  albumInfo: {},
  photos: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SENT:
      return {
        ...state,
        isLoaded: false,
      }
    case REQUEST_DONE:
      return {
        ...state,
        isLoaded: true,
        pageToLoad: action.payload.pageToLoad,
        photos: [...state.photos, ...action.payload.photos],
      }
    case ALBUMINFO_REQUEST_SENT:
      return {
        ...state,
        isAlbumInfoLoaded: false,
      };
    case ALBUMINFO_REQUEST_DONE:
      return {
        ...state,
        isAlbumInfoLoaded: true,
        albumInfo: action.payload
      };
    case COMPONENT_UNMOUNT:
      return initialState
    default:
      return state
  }
}

export default reducer;