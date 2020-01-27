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
  cards: {
    spinner: true,
    listOfCards: null,
  }
}

it("The page was changed correctly", () => {
	let action = setUsePageAC(12);
	let newState = reducer(state, action);
  expect(newState.pages.usePage).toBe(12);
});

it("The page list was updated correctly", () => {
  const pages = [1, 2, 3, 4];
	let action = setPagesAC(pages);
  let newState = reducer(state, action);
  for (let i = 0; i < pages.length; i+= 1) {
    expect(newState.pages.pagesList[i]).toBe(pages[i]);
  }
  expect(newState.pages.pagesList.length).toBe(pages.length);
});

it("The spinner (in card) status was changed correctly", () => {
  const newStatus = !state.cards.spinner;
	let action = setCardsStatusAC(newStatus);
	let newState = reducer(state, action);
  expect(newState.cards.spinner).toBe(newStatus);
});

it("The listOfCards was updated correctly", () => {
  const newList = [{x: 5, y: null}, {x: null, y: 101}];
	let action = setListOfCardsAC(newList);
	let newState = reducer(state, action);
  expect(newState.cards.listOfCards[0].x).toBe(5);
  expect(newState.cards.listOfCards[0].y).toBe(null);
  expect(newState.cards.listOfCards[1].x).toBe(null);
  expect(newState.cards.listOfCards[1].y).toBe(101);
});