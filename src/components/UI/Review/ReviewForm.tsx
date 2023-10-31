'use client'

import Form from '../../Form/Form';
import { Col, Row, message } from 'antd';
//@ts-ignore
import ReactStars from 'react-rating-stars-component';
import FormTextArea from '../../Form/FormTextArea';
import { useAddReviewMutation } from '@/redux/api/reviewApi';
import { getUserInfo, isLoggedIn } from '@/services/auth.services';
import { useState } from 'react';

interface ReviewProps {
    newsId: string
}

const ReviewForm: React.FC<ReviewProps> = ({ newsId }) => {
    const [star, setStar] = useState(0);
    const [addReview] = useAddReviewMutation();
    const userLoggedIn = isLoggedIn();

    const onSubmit = async (data: any) => {
        if (!userLoggedIn) {
            return message.error("You are not Authorized! Please Login");
        }
        message.loading("Creating...");
        const userInfo = getUserInfo() as any;
        const userId = userInfo?.userId;
        data.userId = userId;
        data.serviceId = newsId;
        data.rating = star
        try {
            const res = await addReview(data);
            if (res) {
                return message.success("Review Sent Successfully!");
            }
        } catch (err: any) {
            message.error(err.message);
        }
    }

    return (
        <div className='mt-5'>
            <Form submitHandler={onSubmit} >
                <div className="p-10 mb-5 relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-sm">
                    <h1 className="text-lg font-bold mb-5">Write a Review</h1>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col
                            className="gutter-row mb-4"
                            span={24}
                        >
                            <ReactStars
                                count={5}
                                size={24}
                                value={star}
                                onChange={(newRating: number) => setStar(newRating)}
                                activeColor="#ffd700"
                            />
                        </Col>
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
                    </Row>
                    <button className="bg-[#0f337a] text-white p-2 bg-clip-border shadow-md rounded font-semibold" type="submit">Submit Review</button>
                </div>
            </Form>
        </div>
    );
};

export default ReviewForm;

