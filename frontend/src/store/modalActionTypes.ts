export const SET_POPUP = 'SET_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'

export function openPopUp(payload: string) {
    return {
      type: SET_POPUP,
      payload
    };
  }

  export function closePopUp() {
    return {
      type: CLOSE_POPUP
    };
  }