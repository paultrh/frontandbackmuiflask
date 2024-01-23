// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Dataframe Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'sample-page2',
      title: 'Dataframe Page 2',
      type: 'item',
      url: '/sample-page2',
      icon: icons.ChromeOutlined
    },
    {
      id: 'sample-page3',
      title: 'Dataframe Page 3',
      type: 'item',
      url: '/sample-page3',
      icon: icons.ChromeOutlined
    }
  ]
};

export default support;
