import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Head from 'next/head';
import Home from '@/components/Home/Home';
import MainLayout from '@/layouts/MainLayout';
import PokemonDetail from '@/components/PokemonDetail/PokemonDetail';
import Topnav from '@/components/Topnav/Topnav';
import TrainerDetail from '@/components/TrainerDetail/TrainerDetail';
import { trainerStore } from '@/context/trainerContext';

export default function Index() {
  const trainer = useContext(trainerStore);
  return (
    <Router>
      <Topnav trainer={trainer?.state} />
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
          <Route path="/trainer">
            <TrainerDetail />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}
