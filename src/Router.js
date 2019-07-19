import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Index from './views/index/index';
import Content from './views/content'
import About from './views/about'

import ThemeWordOne from './views/themeWordOne/index'
import ThemeWordTwo from './views/themeWordTwo/index'
import ThemeWordThree from './views/themeWordThree/index'
import ThemeWordFour from './views/themeWordFour/index'
import ThemeWordFive from './views/themeWordFive/index'
import ThemeWordSix from './views/themeWordSix/index'
import ThemeWordSeven from './views/themeWordSeven/index'
import ThemeWordEight from './views/themeWordEight/index'
import ThemeWordNine from './views/themeWordNine/index'
import ThemeWordTen from './views/themeWordTen/index'
import ThemeWordEleven from './views/themeWordEleven/index'
import ThemeWordTwelve from './views/themeWordTwelve/index'

import Theme from './views/themes';
import Game1 from './views/game1'
import Game2 from './views/game2'
import Game3 from './views/game3'
import Game4 from './views/game4'
import Game5 from './views/game5'
import Blog from './views/blog';

function ThemeComponent(props) {
  const { topicNumber } = props.match.params

  const mapThemes = [
    ThemeWordOne,
    ThemeWordTwo,
    ThemeWordThree,
    ThemeWordFour,
    ThemeWordFive,
    ThemeWordSix,
    ThemeWordSeven,
    ThemeWordEight,
    ThemeWordNine,
    ThemeWordTen,
    ThemeWordEleven,
    ThemeWordTwelve,
  ];

  const Component =  mapThemes[topicNumber - 1]
  return <Component />
}

const Router = () => (
  <Switch>
    <Route
      path="/"
      component={Index}
      exact
    />
     <Route
      path="/curso"
      component={Content}
      exact
    />

    <Route
      path="/sobreNosotros"
      component={About}
      exact
    />

     <Route
      exact
      path="/theme/Word/:topicNumber"
      component={ThemeComponent}
    />
    <Route
      path="/theme/:id"
      component={Theme}
      exact
    />
    <Route
      path="/gameOne"
      component={Game1}
      exact
    />
    <Route
      path="/gameTwo"
      component={Game2}
      exact
    />
      <Route
      path="/gameThree"
      component={Game3}
      exact
    />
    <Route
      path="/gameFour"
      component={Game4}
      exact
    />
     <Route
      path="/gameFive"
      component={Game5}
      exact
    />
    <Route
      path="/blog"
      component={Blog}
      exact
    />
  </Switch>
);

export default Router;
