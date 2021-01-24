import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Head from 'next/head';
import Home from '@/components/Home/Home';
import MainLayout from '@/layouts/MainLayout';
import PokemonDetail from '@/components/PokemonDetail/PokemonDetail';

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Pokepedia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pokemon/:name">
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </MainLayout>
  );
}
