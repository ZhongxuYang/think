import { Typography } from '@douyinfe/semi-ui';

import Link from 'next/link';

import styles from './index.module.scss';

const { Text } = Typography;

export const LogoName = process.env.SEO_APPNAME;

export const LogoImage = () => {
  return (
    <Link href={'/'} as={'/'}>
      <a style={{ width: 36, height: 36 }}>
        <img src="/logo.png" />
      </a>
    </Link>
  );
};

export const LogoText = () => {
  return (
    <Link href={'/'} as={'/'}>
      <a className={styles.wrap}>
        <Text>{LogoName}</Text>
      </a>
    </Link>
  );
};
