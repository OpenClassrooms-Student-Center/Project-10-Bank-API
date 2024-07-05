import PropTypes from 'prop-types';
import Menu from './Menu';
import Footer from './Footer';

/**
 * Application layout.
 * @param {object} props
 * @param {ReactNode} props.children
 * @param {string} props.mainClassName
 * @returns {JSX.Element}
 */
const PageLayout = ({ children, mainClassName }) => {
  return (
    <>
      <Menu />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  mainClassName: PropTypes.string,
};
export default PageLayout;
