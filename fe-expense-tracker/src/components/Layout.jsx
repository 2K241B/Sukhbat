import DashboardLogo from './icon/DashboardLogo';
import { Button } from './ui/button';
import Image from 'next/image';
const styles = {
  ChildrenStyle: 'flex flex-col gap-6 w-[1200px] h-screen',
  ChildrenStyle2: 'flex flex-row gap-6 w-[1200px] h-screen',
};
const content = ['Dashboard', 'Records'];
export const Layout = ({ children, ChildStyle = false }) => {
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6] gap-6">
      <div className="bg-white flex justify-center w-full">
        <div className="flex justify-between items-center py-[16px] w-[1200px]">
          <div className="flex items items-center gap-6">
            <DashboardLogo />
            {content.map((el) => (
              <p>{el}</p>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Button className="rounded-[20px] px-3 bg-[#0166FF]">
              + Record
            </Button>
            <Image src="/profile.png" width={40} height={40} alt="Avatar" />
          </div>
        </div>
      </div>
      <div
        className={ChildStyle ? styles.ChildrenStyle2 : styles.ChildrenStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
