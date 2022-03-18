import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Button, Input, Spacer, Text, Link } from '@nextui-org/react';
import ThemeSwitcher from '../components/ThemeSwitcher';

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
        <Button>Play</Button>
        <Spacer />
        <Button>Pause</Button>
        <Spacer />
        <Button>Toggle</Button>
        <Spacer />
        <Button>Vol +</Button>
        <Spacer />
        <Button>Vol -</Button>
        <Spacer />
        <Input clearable labelPlaceholder="Other command" />
        <Spacer />
        <ThemeSwitcher />
      </Container>
    </div>
  );
}
