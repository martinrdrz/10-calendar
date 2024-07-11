import { useForm } from '../../hooks';
import './LoginPage.css';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
};

const registerFormFields = {
    regiterName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
};

export const LoginPage = () => {
    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    //const { regiterName, registerEmail, registerPassword, registerPassword2, onInputChange } = useForm(registerFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        console.log({ loginEmail, loginPassword });
    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="email" className="form-control" placeholder="Correo" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="password" className="form-control" placeholder="Contraseña" />
                        </div>

                        <div className="form-group mb-2">
                            <input type="password" className="form-control" placeholder="Repita la contraseña" />
                        </div>

                        <div className="d-grid gap-2">
                            <input type="submit" className="btnSubmit" value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
