import style from './Register.module.css';

function Register() {

    let registerInputStyles = style.registerInput + ' form-control mt-2';
    let registerButtonStyles = style.registerButton + ' btn';

    return (

        <div className="row">
            <form className="col-md-6 offset-md-3 col-12">

                <div className={style.registerHeader}>
                    <h1 >Register</h1>
                    <div className="mb-4"></div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className={registerInputStyles} id="firstName" aria-describedby="emailHelp" placeholder="First Name..." />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className={registerInputStyles} id="lastName" placeholder="Last Name..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className={registerInputStyles} id="email" placeholder="Email..." />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className={registerInputStyles} id="password"  name="password"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className={registerInputStyles} id="confirmPassword" />
                </div>

                <button type="submit" className={registerButtonStyles}>Register</button>
            </form>
        </div>
    );
}

export default Register;