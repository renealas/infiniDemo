import { REGISTER } from '../actions/registro';

const initialState = {
    availableUsers: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                availableUsers: [...state.availableUsers, action.user],
            };
    }
    return state;
};