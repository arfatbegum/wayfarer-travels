'use client'

import { Col, Row, message } from 'antd';
import { getUserInfo } from '@/services/auth.services';
import FormTextArea from '@/components/Form/FormTextArea';
import Form from '@/components/Form/Form';
import { useAddFeedbackMutation } from '@/redux/FeedbackApi';


const FeedbackForm = () => {
    const [addFeedback] = useAddFeedbackMutation();

    const onSubmit = async (data: any) => {
        message.loading("Creating...");
        const userInfo = getUserInfo() as any;
        const userId = userInfo?.userId;
        data.userId = userId;
        try {
            const res = await addFeedback(data);
            if (res) {
                message.success("Feedback Sent Successfully!");
            }
        } catch (err: any) {
            message.error(err.message);
        }
    }

    return (
        <div className='mt-5'>
            <Form submitHandler={onSubmit} >
                <div className="w-8/12 p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <h1 className="text-lg font-bold mb-5">Write a Feedback</h1>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col
                            className="gutter-row mb-4"
                            span={24}
                        >
                            <FormTextArea
                                name="comment"
                                label="Comment"
                                rows={5}
                            />
                        </Col>
                        <Col
                            className="gutter-row mb-4"
                            span={24}
                        >
                            <FormTextArea
                                name="suggestions"
                                label="Suggestions"
                                rows={5}
                            />
                        </Col>
                    </Row>
                    <button className="bg-[#13357b] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Submit Feedback</button>
                </div>
            </Form>
        </div>
    );
};

export default FeedbackForm;

