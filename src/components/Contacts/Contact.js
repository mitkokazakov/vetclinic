import style from './Contact.module.css';

function Contact() {

    return (
        <div className={style.contacts}>
            <h1>Contact Us</h1>
            <div className={style.contactsHr}></div>
            <div className={style.contactContainer}>
                <div className={style.contactAddress}>
                    <h4>Pet Care.</h4>
                    <p>12345 NewYork, Street 125</p>
                    <p>United States 94107</p>
                    <p>P: (123) 456-7890</p>
                </div>

                <div className={style.contactHours}>
                    <h4>Walk-in Hours</h4>
                    <table>
                        <tr>
                            <td className={style.nameDay}>Monday & Tuesday</td>
                            <td>7am-8pm</td>
                        </tr>

                        <tr>
                            <td className={style.nameDay}>Wednesday</td>
                            <td>9am-8pm</td>
                        </tr>

                        <tr>
                            <td className={style.nameDay}>Thursday</td>
                            <td>7am-8pm</td>
                        </tr>

                        <tr>
                            <td className={style.nameDay}>Friday</td>
                            <td>7am-8pm</td>
                        </tr>

                        <tr>
                            <td className={style.nameDay}>Saturday</td>
                            <td>7am-8pm</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contact;