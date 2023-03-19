const nestedMenuItems = [
  {
    id: '1',
    title: 'User',
    icon: 'bi bi-person',
    subItems: [
      { title: 'Profile', link: 'profile/account' },
      { title: 'Billing', link: 'profile/billing' },
      { title: 'Data Bind', link: 'profile/data-bind' },
    ],
  },
  {
    id: '2',
    title: 'Auth',
    icon: 'bi bi-mortarboard',
    subItems: [
      { title: 'login', link: 'auth/login' },
      { title: 'forgot-password', link: 'auth/forgot-password' },
    ],
  },
  {
    id: '3',
    title: 'modal',
    icon: 'bi bi-clipboard-check',
    subItems: [
      { title: 'Modal', link: './modal' },
    ]
  },
  // Add more menu items here
];

export default nestedMenuItems;
