import { Card, CardContent, CardHeader, CardMeta, CardDescription, Image, Button } from 'semantic-ui-react'
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '../../../app/layouts/Loading';

function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity])

  if (loadingInitial || !activity) {
    return <Loading />;
  }
  
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>
          {activity.description}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <Button.Group widths='2'>
          <Button
            as={Link}
            to={`/manage/${id}`}
            basic
            color='blue'
            content='Edit' />
          <Button
            as={Link}
            to='/activities'
            basic
            color='grey'
            content='Cancel' />
        </Button.Group>
      </CardContent>
    </Card>
  )
}

export default observer( ActivityDetails)