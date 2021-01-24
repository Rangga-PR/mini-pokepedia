import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Head from 'next/head';
import Home from '@/components/Home/Home';
import MainLayout from '@/layouts/MainLayout';
import PokemonDetail from '@/components/PokemonDetail/PokemonDetail';
import Topnav from '@/components/Topnav/Topnav';

export default function Index() {
  return (
    <Router>
      <Topnav />
      <MainLayout>
        <Head>
          <title>Pokepedia</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pokemon/:name">
            <PokemonDetail />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}
