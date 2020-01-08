import Server from '../components/layouts/server';
import Home from '../components/home';
import SampleIndex from '../components/sample';
import SampleShow from '../components/sample/show';

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