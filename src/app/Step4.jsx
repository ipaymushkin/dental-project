import styles from './style.module.css';
import {DatePicker, Card, Typography, Button, Modal, Form, Input} from 'antd';
const { Title } = Typography;
import { useState } from 'react';
import { useFormApp } from '../stores/app';
import { EditOutlined } from '@ant-design/icons';


const { RangePicker } = DatePicker;

export const Step4 = () => {
    const [form] = Form.useForm();
    const {form: formState, setFormValues} = useFormApp();

    const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleOk = async () => {
        try {
            await form.validateFields();
            const treatmentPlan = formState.treatmentPlan || [];
            treatmentPlan.push(form.getFieldValue());
            setFormValues({treatmentPlan: treatmentPlan})
            setIsModalOpen(false);
        } catch (e) {
            //
        }
        
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      console.log('formState', formState);
      

    return (
        <>
            <div className={styles.step4Wrapper}>
                <div className={styles.step4TitleRow}>
                    <Title level={4}>План лечения</Title>
                    <Button onClick={() => setIsModalOpen(true)} shape="round" color="primary" variant="outlined">Добавить этап</Button>
                </div>
            </div>
            {
                formState.treatmentPlan?.map((card, idx) => {
                    return <Card key={`card-${idx}`} title={<div className={styles.step4CardTitle}><span>{card.name}</span><EditOutlined /></div>} style={{ width: 300 }}>
                        <Button color="default" variant="outlined" style={{width: '100%'}}>
                            + Добавить услугу
                        </Button>
                    </Card>
                })
            }
            <Modal title="Добавление этапа" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} cancelText={'Закрыть'} okText={"Добавить"} width={'273px'}>
                <Form
                    form={form}
                    name="basic"
                    initialValues={{ 
                        name: '',
                        period: [],
                    }}
                    onFinish={() => null}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="Название этапа"
                        name="name"
                        rules={[{ required: true, message: 'Поле обязательно для заполнения!' }]}
                    >
                        <Input allowClear={true} placeholder="Введите ФИО"/>
                    </Form.Item>
                    <Form.Item
                        label="Временной период этапа"
                        name="period"
                    >
                        <RangePicker style={{ width: '100%' }} allowClear={true} placeholder="Выберите дату"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
    
}