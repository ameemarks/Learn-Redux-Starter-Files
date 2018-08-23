// a reducer takes in:
// 1. action (info what happened)
// 2. copy of current state

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;