import { useDispatch } from 'react-redux';

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        console.log({ email, password });
    };

    return {
        //Propiedades
        errorMessage,
        status,
        user,

        //Metodos
        startLogin,
    };
};
