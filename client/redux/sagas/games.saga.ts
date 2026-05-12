import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchAllGames(): Generator<any, void, any> {
  try {
    const games = yield axios.get("/api/games");
    yield put({ type: "SET_GAMES", payload: games.data });
  } catch (error) {
    console.error("Error Fetching Games ", error);
  }
}

// function* fetchYarnDetails(action) {
//   try {
//     const yarnDetails = yield axios.get(/api/yarn/${action.payload});
//     yield put({ type: 'SET_YARN_DETAILS', payload: yarnDetails.data[0] ?? {} });
//   } catch (error) {
//     console.log('fetchYarnDetails error', error);
//   }
// }

// function* addYarn(action) {
//   try {
//     yield axios.post('/api/yarn', action.payload);
//     yield put({ type: 'FETCH_YARNS' });
//   } catch (error) {
//     console.log('error adding new yarn', error);
//   }
// }

// function* deleteYarn(action) {
//   try {
//     yield axios.delete(/api/yarn/${action.payload});
//     yield put({ type: 'FETCH_YARNS' });
//   } catch (error) {
//     console.log('error deleting yarn', error);
//   }
// }

// function* editYarn(action) {
//   try {
//     yield axios.put(/api/yarn/${action.payload.yarnId}, action.payload.details);
//     yield put({ type: 'FETCH_YARN_DETAILS', payload: action.payload.yarnId });
//     yield put({ type: 'CLEAR_YARN_DETAILS' });
//   } catch (error) {
//     console.log('error editing yarn', error);
//   }
// }

function* gamesSaga() {
  yield takeLatest("FETCH_GAMES", fetchAllGames);
  //   yield takeLatest("FETCH_YARN_DETAILS", fetchYarnDetails);
  //   yield takeLatest("ADD_YARN", addYarn);
  //   yield takeLatest("DELETE_YARN", deleteYarn);
  //   yield takeLatest("EDIT_YARN", editYarn);
}

export default gamesSaga;
