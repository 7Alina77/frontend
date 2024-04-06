/* eslint-disable react/jsx-indent-props */
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../vendor/normalize.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import EmailConfirmationPopup from '../EmailConfirmationPopup/EmailConfirmationPopup';
import Report from '../../pages/Report/Report';
import AuthorisedUserPage from '../../pages/AuthorisedUserPage/AuthorisedUserPage';
// import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';

const App: FC = (): React.ReactElement => {
  const closeAllPopups = () => {
    setIsSignInPopupOpened(false);
    setIsSignUpPopupOpened(false);
    setIsEmailConfirmationPopupOpened(false);
  };

  const onSignInPopup = () => {
    setIsSignInPopupOpened(true);
  };

  const onSignUpPopup = () => {
    setIsSignUpPopupOpened(true);
  };

  const [isSignInPopupOpened, setIsSignInPopupOpened] = React.useState(false);
  const [isSignUpPopupOpened, setIsSignUpPopupOpened] = React.useState(false);
  const [isEmailConfirmationPopupOpened, setIsEmailConfirmationPopupOpened] = React.useState(false);

  return (
    <>
      <Header isSignInPopupOpened={onSignInPopup} isSignUpPopupOpened={onSignUpPopup} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SignUpPopup onClose={closeAllPopups} isPopupOpened={isSignUpPopupOpened} />
              <SignInPopup onClose={closeAllPopups} isPopupOpened={isSignInPopupOpened} />
              <EmailConfirmationPopup
                onClose={closeAllPopups}
                isPopupOpened={isEmailConfirmationPopupOpened}
              />
              <MainPage />
            </>
          }
        />
        <Route path="/report" element={<Report />} />

        <Route
          path="/registereduser"
          element={<AuthorisedUserPage />}
          // element={<ProtectedRouteElement element={<AuthorisedUserPage />} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
