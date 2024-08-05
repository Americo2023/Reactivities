import { Button, Form, Segment, Header } from "semantic-ui-react"
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/store/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/acitivty";
import Loading from "../../../app/layouts/Loading";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";
import * as yup  from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/CategoryOptions";

function ActivityForm() {
    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    const validationSchema = yup.object({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
        category: yup.string().required(),
        date: yup.string().required(),
        venue: yup.string().required(),
        city: yup.string().required(),
    })


    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity])

    const handleFormSubmit = (activity: Activity) => {
        if (!activity.id) {
            activity.id = uuid();
            createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setActivity({ ...activity, [name]: value })
    } 

    if (loadingInitial) return <Loading content="Loading activity..." />

    return (
        <Segment clearing>
            <Header content="Activity details" sub color="teal" />
            <Formik enableReinitialize
                validationSchema={validationSchema}
                initialValues={activity}
                onSubmit={values => handleFormSubmit(values)}
            >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput name="title" placeholder="Title" />
                        
                        <MyTextArea
                            placeholder='Description'
                            name='description'
                            rows={3}
                        />
                        
                        <MySelectInput
                            options={categoryOptions}
                            placeholder='Category'
                            name='category'
                        />
                        <Form.Input
                            placeholder='Date'
                            type="date"
                            value={activity.date}
                            name='date'
                            onChange={handleInputChange}
                        />
                        <Header content='Location details' sub color="teal" />
                        <MyTextInput
                            placeholder='City'
                            name='city'
                        />
                        <MyTextInput
                            placeholder='Venue'
                            name='venue'
                        />
                        <Button
                            loading={loading}
                            floated="right"
                            positive
                            type="submit"
                            content="Submit"
                            disabled={isSubmitting || !dirty || !isValid}
                        />
                        <Button as={Link} to='/activities' floated="right" type="submit" content="Cancel" />
                    </Form>        
                )}
            </Formik>
            
        </Segment>
    )
}

export default observer(ActivityForm)