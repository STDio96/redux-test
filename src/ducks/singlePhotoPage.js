import APIRequests from "../components/APIRequests";

const REQUEST_SENT = 'photo/request_sent';
const REQUEST_DONE = 'photo/request_done';
const COMPONENT_UNMOUNT = 'photo/unmounted';

const photoRequested = () => ({
  type: REQUEST_SENT,
});

const photoReceived = (photoInfo) => ({
  type: REQUEST_DONE,
  payload: photoInfo
});

const unmounted = () => ({
  type: COMPONENT_UNMOUNT,
});

export const loadPhoto = (id) => (dispatch) => {
  dispatch(photoRequested());
console.log(111)
  // TODO: dispatch (or do something else) even if request fails
  APIRequests.fetchSinglePhoto(id)
    .catch((err) => console.error('error', err))
    .then((response) => {
      dispatch(photoReceived(response));
    });
}

export const unmountPhotoPage = () => (dispatch) => {
  dispatch(unmounted());
}

const initialState = {
  isLoaded: false,
  photoInfo: {},
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
        isLoaded: true,
        photoInfo: action.payload,
      }
    case COMPONENT_UNMOUNT:
      return initialState
    default:
      return state
  }
}

export default reducer;