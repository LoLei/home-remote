import { Button, Container, Input, Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Head from 'next/head';
import Image from 'next/image';
import { BiMinus, BiPause, BiPlay, BiPlus } from 'react-icons/bi';
import ThemeSwitcher from '../components/ThemeSwitcher';
import useApi from '../hooks/useApi';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const { isDark } = useTheme();
  const { play, pause, volInc, volDec } = useApi();

  return (
    <div>
      <Head>
        <title>Home Remote</title>
        <meta name="description" content="Home Remote - Control your devices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        as="main"
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
        className={styles.mainContainer}
      >
        <Spacer />
        {isDark ? (
          // Could use opacity instead as well to avoid the conditional
          <Image src="/remote_dark.svg" alt="Vercel Logo" width={150} height={150} />
        ) : (
          <Image src="/remote_light.svg" alt="Vercel Logo" width={150} height={150} />
        )}
        <Spacer />
        <Text h1 className={styles.textAlignCenter}>
          Welcome to&nbsp;
          <Link
            href="https://github.com/LoLei/home-remote"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home-Remote
          </Link>
        </Text>
        <Spacer />
        <Button.Group color="gradient" ghost rounded size="xl">
          <Button
            icon={<BiPause size={'5em'} className={styles.buttonIconPlayPause} />}
            onClick={pause}
          />
          <Button
            icon={<BiPlay size={'5em'} className={styles.buttonIconPlayPause} />}
            onClick={play}
          />
        </Button.Group>
        <Spacer />

        <Button.Group color="gradient" ghost rounded size="xl">
          <Button
            icon={<BiMinus size={'5em'} className={styles.buttonIconVol} />}
            onClick={volDec}
          />
          <Button
            icon={<BiPlus size={'5em'} className={styles.buttonIconVol} />}
            onClick={volInc}
          />
        </Button.Group>
        <Spacer />
        <Input clearable labelPlaceholder="Other command" />
        <Spacer />
        <ThemeSwitcher />
      </Container>
    </div>
  );
}
