import { configureStore } from '@reduxjs/toolkit';
import authentificationSlice, {signIn, signOut} from './authentificationslice';
import userInformationSlice, {setUserInformation, editUserNameInformation} from './userinformationslice';


const store = configureStore({
    reducer: {
        authentification: authentificationSlice,
        userInformation: userInformationSlice,
    },
});

export {signIn, signOut, setUserInformation, editUserNameInformation}
export default store;