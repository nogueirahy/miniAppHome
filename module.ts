import React from 'react';

const Home = React.lazy(() => import('./src/Home'));

interface IMethods {
  id: string;
  fn: () => void;
}

interface IComponent {
  id: string;
  Component: React.LazyExoticComponent<(navigation: any) => JSX.Element>;
  methods?: IMethods[];
}

interface IModule {
  prefix: string;
  components: IComponent[];
}

const Container: IModule = {
  prefix: 'miniAppHome',
  components: [
    {
      id: 'Home',
      Component: Home,
    },
  ],
};

export default Container;
