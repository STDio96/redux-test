import APIRequests from "../components/APIRequests";

const REQUEST_SENT2 = 'album/request_sent';
const REQUEST_DONE2 = 'album/request_done';
const COMPONENT_UNMOUNT2 = 'album/unmounted';

const photosRequested = () => ({
  type: REQUEST_SENT2,
});

const photosReceived = (photos, pageToLoad) => ({
  type: REQUEST_DONE2,
  payload: {
    pageToLoad: pageToLoad + 1,
    photos,
  }
});

const unmounted = () => ({
  type: COMPONENT_UNMOUNT2,
});

export const loadPhotos = (albumId) => (dispatch, getState) => {
  dispatch(photosRequested());
  // console.log('state', getState().pageToLoad)
  let pageToLoad = getState().pageToLoad;

  APIRequests.fetchPhotos(pageToLoad, { albumId: albumId })
    .catch((err) => console.error('error', err))
    .then((response) => {
      dispatch(photosReceived(response, pageToLoad));
    });
}

export const unmountMainPage = () => (dispatch) => {
  dispatch(unmounted());
}

const initialState = {
  isLoaded: false,
  pageToLoad: 1,
  userInfo: {},
  photos: [],
}

const reducer = (state = initialState, action) => {
  // console.log('action', action)
  switch (action.type) {
    case REQUEST_SENT2:
      return {
        ...state,
        isLoaded: false,
      }
    case REQUEST_DONE2:
      return {
        isLoaded: true,
        pageToLoad: action.payload.pageToLoad,
        photos: [...state.photos, ...action.payload.photos],
      }
    case COMPONENT_UNMOUNT2:
      return initialState
    default:
      return state
  }
}

export default reducer;