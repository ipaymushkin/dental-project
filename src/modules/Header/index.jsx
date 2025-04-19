import { HomeTwoTone } from '@ant-design/icons';
import { Breadcrumb, Typography, Steps,   } from 'antd';
import styles from './style.module.css';
import { useFormApp } from '../../stores/app';
import { stepTitles } from '../../config/consts';


const { Title } = Typography;

export const Header = () => {
    const { step, setStep } = useFormApp();

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
                <Title level={4}>Пациент</Title>
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