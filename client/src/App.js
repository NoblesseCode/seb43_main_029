import styled, { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import MyPage from './pages/myPage/MyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Search from './pages/search/Search';
import Restaurant from './pages/restaurant/Restaurant';
import Registration from './pages/registration/Registration';
import Favorites from './pages/favorites/FavoritesListPage';
import Header from './components/Header';
import HeaderLogged from './components/HeaderLogged';
import Footer from './components/Footer';
import Login from './pages/registration/Login';

import { Provider } from 'react-redux';
import store from './redux/store.js';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
${reset}
`;

const GlobalLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .App {
    flex: 1;
  }
`;

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsUserLoggedIn(true);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <GlobalLayout>
            {isUserLoggedIn ? (
              <HeaderLogged onLogout={handleLogout} />
            ) : (
              <Header onLogin={handleLogin} />
            )}
            <Routes>
              <Route exact path="/" Component={Login} />
            </Routes>
            <div className="App">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/mypage/:id" element={<MyPage />} />
                <Route path="/search" element={<Search />} />
                <Route path="/restaurant/:id" element={<Restaurant />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/mypage/:id/bookmarks" element={<Favorites />} />
              </Routes>
            </div>
            <Footer className="footer" />
          </GlobalLayout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
