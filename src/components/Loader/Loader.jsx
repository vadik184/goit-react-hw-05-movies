import { RotatingLines } from 'react-loader-spinner';
import { SpinerStyled } from 'components/Loader/LoaderStyled';
export const Loader = () => {
  return (
    <SpinerStyled>
      <RotatingLines
        strokeColor="#4b0082"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </SpinerStyled>
  );
};
