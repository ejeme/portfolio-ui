import Home from '../views/Components/Home';

var indexRoutes = [
  { path: '/contact', name: 'Contact', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Home },
  { path: '/skills', name: 'Skills', component: Home },
  { path: '/about', name: 'About', component: Home },
  { path: '/', name: 'Home', component: Home }
];

export default indexRoutes;
