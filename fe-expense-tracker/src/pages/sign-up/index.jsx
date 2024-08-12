import { LogoIcon } from '@/components/icon/LogoIcon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useRef } from 'react';
const styles = {
  container: 'grid grid-cols-2 w-full h-screen',
  contentContainer: 'flex flex-col justify-center items-center gap-10',
  headTextContainer: 'flex flex-col items-center gap-2',
  header: 'text-2xl leading-8 font-semibold text-[#0F172A]',
  headerp: 'text-base font-normal leading-6 text-[#334155]',
  inputContainer: 'w-[384px] flex flex-col gap-4',
  button: 'w-full rounded-3xl bg-[#0166FF] h-12 text-xl leading-7 font-normal',
  input: 'p-4 items-center bg-[#F3F4F6] text-[#A3A3A3] h-12',
  bottomTextContainer: 'flex items-center',
  routerButton: 'bg-white text-[#0166FF] hover:bg-white',
};
const SignupPage = () => {
  const router = useRouter();
  const BASE_URL = 'http://localhost:8000';
  const formRef = useRef(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.post(BASE_URL + '/api/signup', {
      name: formRef.current[0].value,
      email: formRef.current[1].value,
      password: formRef.current[2].value,
    });
    if (data) {
      router.push('/sign-up-step');
    }
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.contentContainer}
        onSubmit={onSubmit}
        ref={formRef}
      >
        <LogoIcon />
        <div className={styles.headTextContainer}>
          <h1 className={styles.header}>Create Geld account</h1>
          <p className={styles.headerp}>
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className={styles.inputContainer}>
          <Input className={styles.input} type="text" placeholder="Name" />
          <Input className={styles.input} type="email" placeholder="Email" />
          <Input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <Input
            className={styles.input}
            type="email"
            placeholder="Re-password"
          />
          <Button className={styles.button} type="submit">
            Sign up
          </Button>
        </div>
        <div className={styles.bottomTextContainer}>
          <p>Already have account?</p>
          <Button
            className={styles.routerButton}
            onClick={() => router.push('/sign-in')}
          >
            Login
          </Button>
        </div>
      </form>
      <div className="bg-[#0166FF]"></div>
    </div>
  );
};

export default SignupPage;
