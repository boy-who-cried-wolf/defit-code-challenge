import { Row, Col, Card, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { AiOutlineUser, AiOutlineClockCircle, AiOutlineGlobal } from 'react-icons/ai';

const { Title, Text } = Typography;

function LoginInfo() {
  const [t] = useTranslation();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const lastLogin = localStorage.getItem("lastLogin") || new Date().toISOString();

  return (
    <Card className="mt-4">
      <Title level={4} className="mb-4">
        <AiOutlineUser className="mr-2" />
        {t('Login Information')}
      </Title>
      
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Text strong>{t('Email')}:</Text> {userInfo?.email}
        </Col>
        <Col span={24}>
          <Text strong>{t('Country')}:</Text> {userInfo?.country || 'Not specified'}
        </Col>
        <Col span={24}>
          <Text strong>{t('Last Login')}:</Text> {new Date(lastLogin).toLocaleString()}
        </Col>
        <Col span={24}>
          <Text strong>{t('Account Type')}:</Text> {userInfo?.role || 'General'}
        </Col>
      </Row>
    </Card>
  );
}

export default LoginInfo; 