import { Card, CardContent, CardHeader, CardMeta, CardDescription, Image, Button } from 'semantic-ui-react'
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';

function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity: activity, cancelSelectedActivity } = activityStore;
  
  if (!activity) {
    return;
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
            onClick={() => activityStore.openForm(activity.id)}
            basic
            color='blue'
            content='Edit' />
          <Button
            onClick={cancelSelectedActivity}
            basic
            color='grey'
            content='Cancel' />
        </Button.Group>
      </CardContent>
    </Card>
  )
}

export default observer( ActivityDetails)