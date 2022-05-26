import { useMediaQuery } from '@chakra-ui/react';


type Props = {
    color: string
};
 const CompanyLogo = (props: Props) => {
    const [isLargeScreen] = useMediaQuery('(min-width: 1024px)')
  return (
    <div>
      <svg
        width={isLargeScreen? '1.5vw' :'20'}
        height={isLargeScreen? '1.5vw' :'24'}
        viewBox='0 0 20 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.061 4.306V19.67C19.061 20.208 18.904 20.6857 18.59 21.103C18.2753 21.521 17.8577 21.8043 17.337 21.953L10.449 23.927C10.3583 23.9517 10.2613 23.97 10.158 23.982C10.0547 23.9947 9.95733 24.001 9.866 24.001C9.60133 24.001 9.36133 23.966 9.146 23.896C8.93133 23.8253 8.71233 23.728 8.489 23.604L3.984 21.06C3.81867 20.9687 3.68833 20.8467 3.593 20.694C3.49767 20.5407 3.45 20.369 3.45 20.179C3.45 19.8897 3.55133 19.6437 3.754 19.441C3.95667 19.2377 4.203 19.136 4.493 19.136H10.325V4.964L5.945 6.527C5.589 6.65167 5.30333 6.871 5.088 7.185C4.87333 7.49967 4.766 7.843 4.766 8.215V16.294C4.766 16.6247 4.68333 16.9287 4.518 17.206C4.352 17.4833 4.12433 17.7003 3.835 17.857L1.763 18.987C1.57233 19.0857 1.382 19.135 1.192 19.135C0.860667 19.135 0.579333 19.0193 0.348 18.788C0.116 18.5567 0 18.2753 0 17.944V6.564C0 6.15067 0.11 5.754 0.33 5.374C0.548667 4.99267 0.84 4.69867 1.204 4.492L8.601 0.285C8.76633 0.194333 8.94433 0.124333 9.135 0.075C9.325 0.025 9.515 0 9.705 0C9.84633 0 9.973 0.0103333 10.085 0.031C10.1963 0.0516667 10.318 0.0826667 10.45 0.124L17.338 2.023C17.594 2.097 17.8273 2.20667 18.038 2.352C18.2493 2.49667 18.4317 2.67 18.585 2.872C18.7383 3.07533 18.856 3.29867 18.938 3.542C19.0213 3.78667 19.063 4.04133 19.063 4.306H19.061ZM17.474 19.67V4.306C17.474 4.124 17.4203 3.96467 17.313 3.828C17.205 3.692 17.0643 3.599 16.891 3.549L13.503 2.619C13.2383 2.54433 12.9737 2.46767 12.709 2.389C12.4443 2.31033 12.1797 2.238 11.915 2.172V21.853L16.891 20.426C17.0643 20.3767 17.205 20.2833 17.313 20.146C17.4203 20.01 17.474 19.851 17.474 19.669V19.67Z'
          fill={props.color}
        />
      </svg>
    </div>
  );
};

export default CompanyLogo;
