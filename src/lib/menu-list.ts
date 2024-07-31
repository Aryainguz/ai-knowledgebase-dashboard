import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Folder,
  Bot
} from 'lucide-react'

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList (pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname.includes('/dashboard'),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '',
          label: 'Project Files',
          active: pathname.includes('/posts'),
          icon: Folder,
          submenus: [
            {
              href: '/posts',
              label: 'New document',
              active: pathname === '/posts'
            },
            {
              href: '/posts/new',
              label: 'New spreadsheet',
              active: pathname === '/posts/new'
            },
            {
              href: '/posts/new',
              label: 'New Project',
              active: pathname === '/posts/new'
            }
          ]
        },
        {
          href: '/prompts',
          label: 'Prompts',
          active: pathname.includes('/prompts'),
          icon: Bot,
          submenus: []
        },
        {
          href: '/tags',
          label: 'Tags',
          active: pathname.includes('/tags'),
          icon: Tag,
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/users',
          label: 'Users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: []
        },
        {
          href: '/account',
          label: 'Account',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ]
}
