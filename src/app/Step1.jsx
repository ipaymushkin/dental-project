import {Typography, Button, Radio, DatePicker, Form, Input} from 'antd';
import styles from './style.module.css';
import { useFormApp } from '../stores/app';
const { Title } = Typography;

export const Step1 = () => {

    const { setStep } = useFormApp();
    const {setFormValues, form} = useFormApp();

    const onFinish = values => {
        setFormValues(values);
        setStep(1);
    };

    return (
        <div className={styles.step1Wrapper}>
            <img src="step1.png" className={styles.step1Img}/>
            <div className={styles.step1Form}>
                <Form
                    name="basic"
                    initialValues={{ 
                        fio: '',
                        birthday: '',
                        phone: '',
                        email: '',
                        sex: 'woman' 
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Title level={5}>Пациент</Title>
                    <Form.Item
                        label="ФИО"
                        name="fio"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения!' }]}
                    >
                        <Input allowClear={true} placeholder="Введите ФИО"/>
                    </Form.Item>
                    <Form.Item
                        label="Дата рождения"
                        name="birthday"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} allowClear={true} placeholder="Выберите дату"/>
                    </Form.Item>
                    <Form.Item
                        label="Телефон"
                        name="phone"
                    >
                        <Input allowClear={true}/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input allowClear={true}/>
                    </Form.Item>
                    <Form.Item label="Пол">
                        <Radio.Group>
                            <Radio value="man">Мужской</Radio>
                            <Radio value="woman">Женский</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <div className={styles.step1Button}>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                Далее
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>    
        </div>
    )
}