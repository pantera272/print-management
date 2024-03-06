import shortid from 'shortid';

export const getAllPapers = (state) => state.papers;

const createActionName = actionName => `app/papers/${actionName}`;
const ADD_PAPER = createActionName('ADD_PAPER');

export const addPaper = payload => ({ type: ADD_PAPER, payload });

const papersReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_PAPER:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default papersReducer;