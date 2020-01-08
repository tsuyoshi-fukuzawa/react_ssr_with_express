import Home from "../components/pages/home";
import About from "../components/pages/about";
import Contact from "../components/pages/contact";
import SsrHtml from '../components/pages/layouts/ssrHtml'

const routes = [
  {
    component: SsrHtml,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/contact',
        component: Contact
      },
    ]
  }
];

export default routes;
