import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import emailLetterImg from '../../assets/images/emailLetter.png';
import s from '../../components/common/styles/Common.module.css';

import styles from './PasswordRecovery.module.css';

import { ForgotPasswordDataRequestType } from 'api/authAPI';
import { PATH } from 'app/routes/RoutesComponent';
import { Button, InputText } from 'components';
import { sendEmailThunk } from 'state/middlewares/forgotPassword';
import { ReturnComponentType } from 'types';

export const PasswordRecovery = (): ReturnComponentType => {
  const [email, setEmail] = useState<string>('');
  const [forgot, setForgot] = useState<boolean>(false);

  const dispatch = useDispatch();

  const dataRequest: ForgotPasswordDataRequestType = {
    email,
    from: 'test-front-admin <ivan.ravinskiy@gmail.com>', // можно указать разработчика фронта)
    message: `<div style="background-color: lime; padding: 15px">	
	                password recovery link: 
	                <a href='https://nirweint.github.io/cards-project/#/set-new-password/$token$'>link</a>
	                </div>`, // хтмп-письмо, вместо $token$ бэк вставит токен
  };

  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const sendEmailHandler = (): void => {
    dispatch(sendEmailThunk(dataRequest));
    setForgot(true);
  };

  return (
    <div className={s.wrapper}>
      <h2>Forgot your password?</h2>
      {!forgot ? (
        <div>
          <div>
            <InputText
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChangeEmailHandler}
            />
            <p>
              Enter your email address and we will send you <br />
              further instructions
            </p>
          </div>
          <div className={styles.emailContainer}>
            <Button className={s.button} onClick={sendEmailHandler}>
              Send instructions
            </Button>
            <p>Did you remember your password?</p>
            <div>
              <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.emailContainer}>
          <img src={emailLetterImg} className={styles.emailLetter} alt="Send" />
          <h2> Check Email </h2>
          <p>
            {' '}
            We&apos;ve sent an Email with instructions to <br /> {email}{' '}
          </p>
        </div>
      )}
    </div>
  );
};
