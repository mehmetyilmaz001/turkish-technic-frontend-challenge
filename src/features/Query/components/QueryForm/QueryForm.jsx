import React, { useState, useEffect } from 'react'
import { Form, Button, Modal } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import CitySearch from './components/CitySearch/CitySearch';
import IconOrigin from '../../../../assets/images/icon-origin.svg';
import IconDestination from '../../../../assets/images/icon-destination.svg';
import CabinPassengerSelect from './components/CabinPassengerSelect/CabinPassengerSelect';
import DatePicker from './components/DatePicker/DatePicker';
import useSelectedFlight from './hooks/useSelectedFlight';

import './QueryForm.styles.scss';

export default function QueryForm({onFinish}) {
    const [form] = Form.useForm();
    const [submittable, setSubmittable] = useState(false);
    const selectedFlight = useSelectedFlight();
    
    // Watch all values
    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setSubmittable(true);
            },
            () => {
                setSubmittable(false);
            },
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values]);

    const error = () => {
        Modal.error({
            title: 'Hata',
            content: 'Hava alanı Bulunamadı!',
        });
    };

    return (
        <Form
            name="query-form"
            className="query-form"
            onFinish={onFinish}
            layout='vertical'
            form={form}
            initialValues={selectedFlight || {
                cabinAndPassenger: {
                    cabin: 0,
                    passenger: 1
                },
                dest: null,
                origin: null
            }}
        >
            <Form.Item
                name="origin"
                rules={[{ required: true }]}
            >
                <CitySearch data-testid="input-origin" placeholder="Nereden" onFail={error} suffixIcon={<img src={IconOrigin} alt='origin' />} />
            </Form.Item>

            <Form.Item
                name="dest"
                rules={[{ required: true }]}
            >
                <CitySearch data-testid="input-dest" placeholder="Nereye" onFail={error} suffixIcon={<img src={IconDestination} alt='origin' />} />
            </Form.Item>
            <DatePicker label="Tarih" />
            <Form.Item
                name="cabinAndPassenger"
                rules={[{ required: true }]}
            >
                <CabinPassengerSelect label="Kabin ve Yolcu Seçimi" />
            </Form.Item>
            <Button type="primary" htmlType="submit" size='large' disabled={!submittable} data-testid="btn-submit">
                <RightOutlined />
            </Button>
        </Form>
    )
}