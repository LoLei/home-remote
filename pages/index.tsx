import { Button, Container, Input, Link, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head';
import Image from 'next/image';
import { BiMinus, BiPause, BiPlay, BiPlus } from 'react-icons/bi';
import ThemeSwitcher from '../components/ThemeSwitcher';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
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
        <Image src="/logo.svg" alt="Vercel Logo" width={200} height={200} />
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
          <Button icon={<BiPause size={'5em'} className={styles.buttonIconPlayPause} />} />
          <Button icon={<BiPlay size={'5em'} className={styles.buttonIconPlayPause} />} />
        </Button.Group>
        <Spacer />

        <Button.Group color="gradient" ghost rounded size="xl">
          <Button icon={<BiMinus size={'5em'} className={styles.buttonIconVol} />} />
          <Button icon={<BiPlus size={'5em'} className={styles.buttonIconVol} />} />
        </Button.Group>
        <Spacer />
        <Input clearable labelPlaceholder="Other command" />
        <Spacer />
        <ThemeSwitcher />
      </Container>
    </div>
  );
}
