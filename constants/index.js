import {
  Twitter,
  Home,
  Explore,
  Messages,
  Notification,
  Bookmark,
  Lists,
  Profile,
  More,
  NotificationFill,
  ExplorerFill,
  MessagesFill,
  BookmarkFill,
  ProfileFill,
  HomeFill,
  ListsFill
} from '../components/icons'
export default {
  TABLET_SIZE: 980,
  DESKTOP_SIZE: 1270
}
export const MENU = [
  {
    key: 'twitter',
    path: '/',
    icon: <Twitter style={{ fontSize: '30px', color: 'white' }} />,
    iconSelected: <Twitter style={{ fontSize: '30px', color: 'white' }} />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    path: '/',
    icon: <Home />,
    iconSelected: <HomeFill />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    path: '/explore',
    icon: <Explore />,
    iconSelected: <ExplorerFill />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notifications',
    path: '/notifications',
    icon: <Notification />,
    iconSelected: <NotificationFill />,
    title: 'Notifications',
    notify: 17
  },
  {
    key: 'messages',
    path: '/messages',
    icon: <Messages />,
    iconSelected: <MessagesFill />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmarks',
    path: '/bookmarks',
    icon: <Bookmark />,
    iconSelected: <BookmarkFill />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'lists',
    path: '/lists',
    icon: <Lists />,
    iconSelected: <ListsFill />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    path: '/profile',
    icon: <Profile />,
    iconSelected: <ProfileFill />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    path: '/more',
    icon: <More />,
    iconSelected: <More />,
    title: 'More',
    notify: 0
  }
]
