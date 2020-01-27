import reducer from "./reducer";
import {
  setUsePageAC, 
  setPagesAC,
  setCardsStatusAC,
  setListOfCardsAC
} from "./actions";

const state = {
  pages: {
    usePage: null,
    pagesList: null,
  },
}

it("The page was changed correctly", () => {
	let action = setUsePageAC(12);
	let newState = reducer(state, action);
  expect(newState.pages.usePage).toBe(12);
});

// it("The page list was updated correctly", () => {
//   const pages = [1, 2, 3, 4];
// 	let action = setPagesAC(arr);
//   let newState = reducer(state, action);

//   newState

//   expect(newState.pagesList[0].id).toBe(arr[0].id);
// });