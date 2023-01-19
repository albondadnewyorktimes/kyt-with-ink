import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import dynamic from 'kyt-runtime/dynamic';
import { Button } from '@nyt-cms/ink';
import * as styles from './styled';
import '@nyt-cms/ink/lib/tokens/typography/fonts';

export const Home = dynamic(() => import(/* webpackChunkName: "home" */ '../Home'));
export const Tools = dynamic(() => import(/* webpackChunkName: "tools" */ '../Tools'));

function App() {
  return (
    <div>
      <i className={styles.logoClass} />
      <ul className={styles.navClass}>
        <li className={styles.navItemClass}>
          <Link className={styles.linkClass} to="/">
            Home
          </Link>
        </li>
        <li className={styles.navItemClass}>
          <Link className={styles.linkClass} to="/tools">
            Tools
          </Link>
        </li>
      </ul>
      <div className={styles.contentClass}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tools" component={Tools} />
        </Switch>
        <br />
        <Button>Hello world!</Button>
      </div>
    </div>
  );
}

export default App;
