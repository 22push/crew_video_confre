import store from "../../store/store";
import { setLocalsteam, setcallstate } from "../../store/actions/useraction";
const defaultConstrains = {
  video: {
    width: 840,
    height: 560
  },
  audio: true
};
// const defaultConstrains1 = {
//   video: false,
//   audio: false
// };

export const getLocalStream = () => {
  navigator.mediaDevices.getUserMedia(defaultConstrains)
    .then(stream => {
      store.dispatch(setLocalsteam(stream));
      store.dispatch(setcallstate(true));
    })
    .catch(err => {
      console.log('error occured when trying to get an access to get local stream');
      console.log(err);
    });
};