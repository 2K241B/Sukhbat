import { Footer, Navbar } from '../components';

const styles = {
  container:
    'flex flex-col justify-center items-center gap-[100px] max-w-[1217px]',
};
export const BasicLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
