// @flow
import { useMediaQuery } from '@chakra-ui/react';

type Props = {
  color: string;
};
const UserAccount = (props: Props) => {
    const [isLargeScreen] = useMediaQuery('(min-width: 1024px)')
  return (
    <div>
      <svg
         width={isLargeScreen ? '1.8vw' : '20'}
         height={isLargeScreen ? '1.8vw' : '24'}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.6667 0C5.22667 0 0 5.22667 0 11.6667C0 18.1067 5.22667 23.3333 11.6667 23.3333C18.1067 23.3333 23.3333 18.1067 23.3333 11.6667C23.3333 5.22667 18.1067 0 11.6667 0ZM5.915 18.9933C6.41667 17.9433 9.47333 16.9167 11.6667 16.9167C13.86 16.9167 16.9283 17.9433 17.4183 18.9933C15.8317 20.2533 13.8367 21 11.6667 21C9.49667 21 7.50167 20.2533 5.915 18.9933ZM19.0867 17.3017C17.4183 15.2717 13.37 14.5833 11.6667 14.5833C9.96333 14.5833 5.915 15.2717 4.24667 17.3017C3.00726 15.6845 2.33486 13.7042 2.33333 11.6667C2.33333 6.52167 6.52167 2.33333 11.6667 2.33333C16.8117 2.33333 21 6.52167 21 11.6667C21 13.79 20.2767 15.7383 19.0867 17.3017ZM11.6667 4.66667C9.40333 4.66667 7.58333 6.48667 7.58333 8.75C7.58333 11.0133 9.40333 12.8333 11.6667 12.8333C13.93 12.8333 15.75 11.0133 15.75 8.75C15.75 6.48667 13.93 4.66667 11.6667 4.66667ZM11.6667 10.5C10.6983 10.5 9.91667 9.71833 9.91667 8.75C9.91667 7.78167 10.6983 7 11.6667 7C12.635 7 13.4167 7.78167 13.4167 8.75C13.4167 9.71833 12.635 10.5 11.6667 10.5Z'
          fill={props.color}
        />
      </svg>
    </div>
  );
};

export default UserAccount;