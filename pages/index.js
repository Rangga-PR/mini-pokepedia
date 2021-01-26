import React, { useContext } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Head from 'next/head';
import Home from '@/components/Home/Home';
import MainLayout from '@/layouts/MainLayout';
import PageNotFound from '@/components/PageNotFound/PageNotFound';
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
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
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
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}
