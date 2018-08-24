// a reducer takes in:
// 1. action (info what happened)
// 2. copy of current state

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            // return the updated state
            const index = action.index;
            return [
                ...state.slice(0,index), // before the one being updated
                {...state[index],
                    likes: state[index].likes + 1},
                ...state.slice(index + 1), // after the one being updated
            ];
        default:
            return state;
    }
}

export default posts;