
const initialState = {
  auth: false,
  fullName: '',
  email: '',
};

export function userReducer(state = initialState, { type, data }: any) {
  switch (type) {
    case 'REGISTRATION1': {
      return {
        ...state,
        fullName: 'Som',
        email: 'Som',
      }
    }
    default: return state
  }
}