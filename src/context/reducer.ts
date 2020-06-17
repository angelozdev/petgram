export const ACTIVE_AUTH: string = 'ACTIVE_AUTH';

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
      default:
         return state;
   }
}