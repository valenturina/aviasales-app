export const GET_CHECKERS = 'GET_CHECKERS';

export const getCheckers = (id, checked) => ({
    type: GET_CHECKERS,
    id,
    checked
})