const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('pages/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('pages/AboutPage.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('pages/ProjectsPage.vue'),
  },
  {
    path: '/projects/:id/:slug',
    name: 'projects.show',
    component: () => import('pages/ProjectInfo.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
