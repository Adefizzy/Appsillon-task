import { IconType } from 'react-icons/lib';


export interface NavProps {
    name: string,
    icon: ((props: {color: string}) => React.ReactElement),
    url: string,
    color: string,
  }