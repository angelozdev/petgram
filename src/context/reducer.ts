export const ACTIVE_AUTH: string = 'ACTIVE_AUTH';
export const DISABLE_AUTH: string = 'DISABLE_AUTH';

interface IAction {
   type: string,
   payload?: boolean
}

interface IState {
   isAuth?: boolean
}

export const reducer = (state: IState = {}, {type, payload}: IAction) => {
   switch (type) {
      case ACTIVE_AUTH:
         return {
            ...state,
            isAuth: true
         }
      case DISABLE_AUTH:
         return {
            ...state,
            isAuth: false
         }
      default:
         return state;
   }
}