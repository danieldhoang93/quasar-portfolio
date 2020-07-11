
const routes = [
  {
    path: '/',
    component: () => import('layouts/Navbar.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
