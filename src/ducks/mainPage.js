import APIRequests from "../components/APIRequests";

const REQUEST_SENT = 'main/request_sent';
const REQUEST_DONE = 'main/request_done';
const COMPONENT_UNMOUNT = 'main/unmounted';

const photosRequested = () => ({
  type: REQUEST_SENT,
});

const photosReceived = (photos, pageToLoad) => ({
  type: REQUEST_DONE,
  payload: {
    pageToLoad: pageToLoad + 1,
    photos
  }
});

const unmounted = () => ({
  type: COMPONENT_UNMOUNT,
});

export const loadPhotos = () => (dispatch, getState) => {
  dispatch(photosRequested());
  let pageToLoad = getState().pageToLoad;

  // TODO: dispatch (or do something else) even if request fails
  APIRequests.fetchPhotos(pageToLoad)
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
  photos: [],
}

const reducer = (state = initialState, action) => {
  // console.log('action', action)
  switch (action.type) {
    case REQUEST_SENT:
      return {
        ...state,
        isLoaded: false,
      }
    case REQUEST_DONE:
      return {
        isLoaded: true,
        pageToLoad: action.payload.pageToLoad,
        photos: [...state.photos, ...action.payload.photos],
      }
    case COMPONENT_UNMOUNT:
      return initialState
    default:
      return state
  }
}

export default reducer;