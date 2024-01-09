const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('pages/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('pages/AboutPage.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('pages/ProjectsPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
