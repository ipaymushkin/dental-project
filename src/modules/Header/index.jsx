import { HomeTwoTone } from '@ant-design/icons';
import { Breadcrumb, Typography, Space, Steps, Divider  } from 'antd';
import styles from './style.module.css';
import { useFormApp } from '../../stores/app';
import { stepTitles } from '../../config/consts';
 

const { Title, Text } = Typography;

export const Header = () => {
    const { step, setStep, form } = useFormApp();

    console.log(form)

    return (
        <>
            <div className={styles.container}>
                <Breadcrumb
                    items={[
                        {
                            title: <HomeTwoTone style={{ fontSize: '18px' }} />,
                        },
                        ...stepTitles.slice(0, step + 1).map((title, index, arr) => {
                            const params = {};
                            if (index !== arr.length - 1) {
                                params.href = '';
                                params.onClick = (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setStep(index);
                                };
                            }
                            return {
                                title, ...params
                            }
                        })

                    ]}
                />
                <Space direction='horizontal'>
                <Title level={4}>{form.fio || 'Пациент'}</Title>
                {form.birthday && <Text type="secondary">{new Date(form.birthday).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })}</Text>}
                </Space>
                <Steps
                    current={step}
                    items={stepTitles.map((description, index) => {
                        console.log(description, index, step)
                        let title = 'Ожидание';
                        if (index < step) {
                            title = 'Завершено';
                        } else if (index === step) {
                            title = 'В процессе';
                        }
                        return { title, description }
                    })}
                />
            </div>
            <Divider type="horizontal" />
        </>
    )
}