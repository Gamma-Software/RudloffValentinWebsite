import React from 'react';
import NavigationDots from '../components/NavigationDots/NavigationDots';
import SocialMedia from '../components/SocialMedia/SocialMedia';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <div className="app__wrapper app__flex">
        <Component />
        <div className="copyright">
          <p className="p-text">@2022 Valentin Rudloff</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;