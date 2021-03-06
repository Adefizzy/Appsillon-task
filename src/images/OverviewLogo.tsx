// @flow
import { useMediaQuery } from '@chakra-ui/react';

type Props = {
  color: string;
};
const OverviewLogo = (props: Props) => {
  const [isLargeScreen] = useMediaQuery('(min-width: 1024px)');
  return (
    <div>
      <svg
        width={isLargeScreen? '1.5vw' :'20'}
        height={isLargeScreen? '1.5vw' :'24'}
        viewBox='0 0 22 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.77778 1H1V8.77778H8.77778V1Z'
          stroke={props.color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M20.9999 1H13.2222V8.77778H20.9999V1Z'
          stroke={props.color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M20.9999 13.2222H13.2222V21H20.9999V13.2222Z'
          stroke={props.color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8.77778 13.2222H1V21H8.77778V13.2222Z'
          stroke={props.color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default OverviewLogo;
