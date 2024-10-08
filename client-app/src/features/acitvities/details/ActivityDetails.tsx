import { Card, CardContent, CardHeader, CardMeta, CardDescription, Image, Button, Grid } from 'semantic-ui-react'
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '../../../app/layouts/Loading';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';

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
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar />
      </Grid.Column>
    </Grid>
  )
}

export default observer( ActivityDetails)