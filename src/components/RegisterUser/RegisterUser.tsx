const RegisterUser = () => {
  return (
    <section className="register-visitor">
      <div className="container">
        <div className="register-visitor__inner">
          <a className="register-visitor__logo logo" href="#">
            <img
              src="img/logo.svg"
              alt="Логотип ресторана"
              width="135"
              height="59"
            />
          </a>
          <form className="register-form" action="#">
            <div className="register-form__inner">
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="name">
                  Имя
                </label>
                <input
                  className="register-form__input input-reset"
                  id="name"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="surname">
                  Фамилия
                </label>
                <input
                  className="register-form__input input-reset"
                  id="surname"
                  type="text"
                  name="surname"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="tel">
                  Телефон
                </label>
                <input
                  className="register-form__input input-reset"
                  id="tel"
                  type="tel"
                  name="tel"
                  required
                />
              </div>
              <div className="register-form__group">
                <label className="register-form__label" htmlFor="email">
                  Электронная почта
                </label>
                <input
                  className="register-form__input input-reset"
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <button className="register-form__btn main-btn btn-reset">
              Зарегистрироваться
            </button>
            <p className="register-form__text">
              Нажимая «Зарегистрироваться», вы соглашаетесь с 
              <a href="#">Условиями использования</a>
              и подтверждаете прочтение
              <a href="#">Политики конфиденциальности.</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterUser;
