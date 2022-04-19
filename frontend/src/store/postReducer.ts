
export interface postState {
  auth: boolean
  fullName: string
  email: string
}

const initialState = {
  auth: false,
  fullName: '',
  email: '',
};

export function postReducer(state = initialState, { type, data }: any): postState {
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