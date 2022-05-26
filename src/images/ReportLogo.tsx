import { useMediaQuery } from '@chakra-ui/react';

type Props = {
  color: string;
};
const ReportLogo = (props: Props) => {
  const [isLargeScreen] = useMediaQuery('(min-width: 1024px)');
  return (
    <div>
      <svg
       width={isLargeScreen ? '1.8vw' : '20'}
       height={isLargeScreen ? '1.8vw' : '24'}
        viewBox='0 0 19 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.6667 5.83333H15.3883C14.8621 4.92069 14.1362 4.13895 13.265 3.54667L15.1667 1.645L13.5217 0L10.99 2.53167C10.4533 2.40333 9.905 2.33333 9.33333 2.33333C8.76167 2.33333 8.21333 2.40333 7.68833 2.53167L5.145 0L3.5 1.645L5.39 3.54667C4.52667 4.14167 3.80333 4.92333 3.27833 5.83333H0V8.16667H2.43833C2.38 8.55167 2.33333 8.93667 2.33333 9.33333V10.5H0V12.8333H2.33333V14C2.33333 14.3967 2.38 14.7817 2.43833 15.1667H0V17.5H3.27833C4.49167 19.5883 6.74333 21 9.33333 21C11.9233 21 14.175 19.5883 15.3883 17.5H18.6667V15.1667H16.2283C16.2867 14.7817 16.3333 14.3967 16.3333 14V12.8333H18.6667V10.5H16.3333V9.33333C16.3333 8.93667 16.2867 8.55167 16.2283 8.16667H18.6667V5.83333ZM14 10.5V14C14 14.2567 13.965 14.5483 13.9183 14.8167L13.8017 15.575L13.37 16.3333C12.53 17.78 10.99 18.6667 9.33333 18.6667C7.67667 18.6667 6.13667 17.7683 5.29667 16.3333L4.865 15.5867L4.74833 14.8283C4.69805 14.555 4.67073 14.2779 4.66667 14V9.33333C4.66667 9.065 4.70167 8.77333 4.74833 8.51667L4.865 7.75833L5.29667 7C5.64667 6.39333 6.13667 5.86833 6.70833 5.47167L7.37333 5.01667L8.23667 4.80667C8.95985 4.62031 9.71848 4.62031 10.4417 4.80667L11.235 4.99333L11.9467 5.48333C12.53 5.88 13.0083 6.39333 13.3583 7.01167L13.8017 7.77L13.9183 8.52833C13.965 8.785 14 9.07667 14 9.33333V10.5ZM7 12.8333H11.6667V15.1667H7V12.8333ZM7 8.16667H11.6667V10.5H7V8.16667Z'
          fill={props.color}
        />
      </svg>
    </div>
  );
};

export default ReportLogo;
