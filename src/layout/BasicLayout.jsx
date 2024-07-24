import { Footer, Navbar } from '../components';

const styles = {
  container: 'flex flex-col items-center gap-[100px] max-w-[1216px]',
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
