import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import { useStore } from '../../../app/store/store'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import Loading from '../../../app/layouts/Loading'
import ActivityFilters from './ActivityFilter'

function AcitvityDashboard() {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if(activityRegistry.size <= 1) loadActivities();
    }, [loadActivities, activityRegistry.size]);

    if (activityStore.loadingInitial) return <Loading content='Loading activities...' />
    
  return (
      <Grid>
          <Grid.Column width='10'>
              <ActivityList  />
          </Grid.Column>
          <Grid.Column width='6'>
              <ActivityFilters />
          </Grid.Column>
    </Grid>
  )
}

export default observer( AcitvityDashboard)