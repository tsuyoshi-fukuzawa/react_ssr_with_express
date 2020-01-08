import Server from '../components/pages/layouts/server';
import Home from '../components/pages/home';
import SampleIndex from '../components/pages/sample';
import SampleShow from '../components/pages/sample/show';

const Routes = [
  {
    component: Server,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/sample',
        exact: true,
        component: SampleIndex,
      },
    ],
  },
];

export default Routes;