import { IconLikeHeart } from '@douyinfe/semi-icons';
import { Space, Typography } from '@douyinfe/semi-ui';

const { Text } = Typography;

export const Author = () => {
  return (
    <div style={{ padding: '16px 0', textAlign: 'center' }}>
      <Text>
        <Space>
          Develop by
          <Text link={{ href: 'https://github.com/ZhongxuYang/think' }}>Group 8</Text>
          with <IconLikeHeart style={{ color: 'red' }} />
        </Space>
      </Text>
    </div>
  );
};
