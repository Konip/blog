
export interface modalState {
  modal: boolean,
  typeModal: string,
}

const initialState: modalState = {
  modal: false,
  typeModal: '',
}

export function modalReducer(state = initialState, { type, payload }: any): modalState {
  switch (type) {
    case 'CLOSE_POPUP': {
      return {
        ...state,
        modal: false,
        typeModal: ''
      }
    }
    case 'SET_POPUP': {
      return {
        ...state,
        modal: true,
        typeModal: payload
      }
    }
    default: return state
  }
}