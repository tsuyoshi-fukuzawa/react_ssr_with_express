import Html from '../components/pages/layouts/html';
import Home from '../components/pages/home';
import SampleIndex from '../components/pages/sample';

const Routes = [
  {
    component: Html,
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