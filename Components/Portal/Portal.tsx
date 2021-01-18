import { useEffect } from 'react';
import ReactDOM from 'react-dom'

interface Props {
  children: JSX.Element
};

const Portal = (props: Props) => {
  const {children} = props;

  const element = document.createElement(`div`);

  useEffect(() => {
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    }
  });

  return ReactDOM.createPortal(children, element);
};

export default Portal;