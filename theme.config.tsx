import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const useSeoProps = () => {
  const { asPath } = useRouter();
  if (asPath !== '/') {
    return {
      titleTemplate: '%s - dixxel.io',
    };
  }
};

const useHead = () => {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();

  const url = `https://docs.dixxel.io/${asPath}`;
  const desc = frontMatter.description || 'Documentation for dixxel.io releases';

  return (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' type='image/x-icon' href='/icon.png' />
      <meta httpEquiv='Content-Language' content='en' />
      <meta name='description' content={desc} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={desc} />
      <meta name='og:url' content={url} />
    </>
  );
};

const nextraConfig: DocsThemeConfig = {
  logo: (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt='dixxel'
      src='https://imagedelivery.net/3ecvmLCFkS-FijMWb0qFvQ/1051182d-c69e-4b50-bd3a-34d24ab8f800/w=100'
      width={100}
    />
  ),
  useNextSeoProps: useSeoProps,
  project: {
    link: 'https://github.com/dixxel/dixxel-docs',
  },
  chat: {
    link: 'https://discord.gg/x8JgyuHgj8',
  },
  footer: {
    text: '2023 dixxel.io',
  },
  head: useHead,
  docsRepositoryBase: 'https://github.com/dixxel/dixxel-docs/blob/main',
};

export default nextraConfig;
