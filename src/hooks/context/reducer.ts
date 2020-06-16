export const reducer = (state = {}, {type, payload}: {type: string, payload: boolean}) => {
   switch (type) {
      case 'ACTIVE_AUTH':
         return {
            ...state,
            isAuth: true
         }
      default:
         return state;
   }
}