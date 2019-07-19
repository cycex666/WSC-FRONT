export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    divider: true
  },
  {
    name: 'Scheduler',
    url: '/scheduler',
    icon: 'fa fa-calendar',
    children: [
      {
        name: 'Callendar',
        url: '/scheduler',
        icon: 'fa fa-angle-right'
      },
      {
        name: 'New job',
        url: '/scheduler',
        icon: 'fa fa-angle-right'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Contractors',
    icon: 'icon-people',
    url: '/contractors',
    children: [
      {
        name: 'Contractors list',
        icon: 'fa fa-angle-right',
        url: '/contractors'
      },
      {
        name: 'New Contractor',
        icon: 'fa fa-angle-right',
        url: '/contractors/create',
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Cars',
    icon: 'fa fa-automobile ',
    url: '/cars',
    children: [
      {
        name: 'Cars list',
        icon: 'fa fa-angle-right',
        url: '/cars'
      },
      {
        name: 'New Car',
        icon: 'fa fa-angle-right',
        url: '/cars/create',
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Invoices',
    icon: 'fa fa-file-archive-o',
    url: '/cars',
    children: [
      {
        name: 'Invoices list',
        icon: 'fa fa-angle-right',
        url: '/cars'
      },
      {
        name: 'New Invoice',
        icon: 'fa fa-angle-right',
        url: '/cars/create',
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'Storeroom',
    icon: 'fa fa-shopping-basket',
    url: '/cars',
    children: [
      {
        name: 'Invoices list',
        icon: 'fa fa-angle-right',
        url: '/cars'
      },
      {
        name: 'New Invoice',
        icon: 'fa fa-angle-right',
        url: '/cars/create',
      }
    ]
  },
  {
    name: 'Analytics',
    icon: 'fa fa-line-chart',
    url: '/cars',
    children: [
      {
        name: 'Item 1',
        icon: 'fa fa-angle-right',
        url: '#'
      },
      {
        name: 'Item 2',
        icon: 'fa fa-angle-right',
        url: '#'
      },
      {
        name: 'Item 3',
        icon: 'fa fa-angle-right',
        url: '#'
      }]
  },
  {
    name: 'Administration',
    icon: 'fa fa-cogs',
    url: '/administration',
    children: [
      {
        name: 'Employees',
        icon: 'fa fa-angle-right',
        url: '#'
      },
      {
        name: 'Workshop settings',
        icon: 'fa fa-angle-right',
        url: '#'
      },
      {
        name: 'System settings',
        icon: 'fa fa-angle-right',
        url: '#'
      }
    ]
  },
  {
    divider: true
  },
  {
    name: 'TEMPLATE',
    url: '#',
    children: [
      {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
      },
      {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
      },
      {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'Cards',
            url: '/base/cards',
            icon: 'icon-puzzle'
          },
          {
            name: 'Carousels',
            url: '/base/carousels',
            icon: 'icon-puzzle'
          },
          {
            name: 'Collapses',
            url: '/base/collapses',
            icon: 'icon-puzzle'
          },
          {
            name: 'Forms',
            url: '/base/forms',
            icon: 'icon-puzzle'
          },
          {
            name: 'Pagination',
            url: '/base/paginations',
            icon: 'icon-puzzle'
          },
          {
            name: 'Popovers',
            url: '/base/popovers',
            icon: 'icon-puzzle'
          },
          {
            name: 'Progress',
            url: '/base/progress',
            icon: 'icon-puzzle'
          },
          {
            name: 'Switches',
            url: '/base/switches',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tables',
            url: '/base/tables',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tabs',
            url: '/base/tabs',
            icon: 'icon-puzzle'
          },
          {
            name: 'Tooltips',
            url: '/base/tooltips',
            icon: 'icon-puzzle'
          }
        ]
      },
      {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor'
          },
          {
            name: 'Dropdowns',
            url: '/buttons/dropdowns',
            icon: 'icon-cursor'
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor'
          }
        ]
      },
      {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
      },
      {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
          {
            name: 'CoreUI Icons',
            url: '/icons/coreui-icons',
            icon: 'icon-star',
            badge: {
              variant: 'success',
              text: 'NEW'
            }
          },
          {
            name: 'Flags',
            url: '/icons/flags',
            icon: 'icon-star'
          },
          {
            name: 'Font Awesome',
            url: '/icons/font-awesome',
            icon: 'icon-star',
            badge: {
              variant: 'secondary',
              text: '4.7'
            }
          },
          {
            name: 'Simple Line Icons',
            url: '/icons/simple-line-icons',
            icon: 'icon-star'
          }
        ]
      },
      {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
          {
            name: 'Alerts',
            url: '/notifications/alerts',
            icon: 'icon-bell'
          },
          {
            name: 'Badges',
            url: '/notifications/badges',
            icon: 'icon-bell'
          },
          {
            name: 'Modals',
            url: '/notifications/modals',
            icon: 'icon-bell'
          }
        ]
      },
      {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
      {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
          {
            name: 'Login',
            url: '/login',
            icon: 'icon-star'
          },
          {
            name: 'Register',
            url: '/register',
            icon: 'icon-star'
          },
          {
            name: 'Error 404',
            url: '/404',
            icon: 'icon-star'
          },
          {
            name: 'Error 500',
            url: '/500',
            icon: 'icon-star'
          }
        ]
      },
      {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        badge: {
          variant: 'secondary',
          text: 'NEW'
        },
        attributes: { disabled: true },
      }
    ]
  }
];
