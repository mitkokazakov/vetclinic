import style from './Slider.module.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Slider(){

    return(
        <div className={style.mainSlider}>
            
            <div className={style.textContent}>
                    <h2><span className={style.pinkText}>24/7</span> Pets Care</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            </div>
        </div>
    );
}

export default Slider;