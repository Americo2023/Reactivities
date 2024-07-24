import { Grid } from 'semantic-ui-react'
import { Activity } from '../../../app/models/acitivty'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

function AcitvityDashboard({ activities, selectActivity,
    selectedActivity, cancelSelectActivity, editMode, openForm, closeForm, createEdit, deleteActivity }: Props) {
  return (
      <Grid>
          <Grid.Column width='10'>
              <ActivityList deleteActivity={deleteActivity} activities={activities} selectActivity={selectActivity} />
          </Grid.Column>
          <Grid.Column width='6'>
              {selectedActivity && !editMode &&
                  <ActivityDetails
                  activity={selectedActivity}
                  cancelSelectActivity={cancelSelectActivity}
                  openForm={openForm}
              />
              }
              {editMode && 
                  <ActivityForm  createEdit={createEdit} closeForm={closeForm} activity={selectedActivity} />
              }
              
          </Grid.Column>
    </Grid>
  )
}

export default AcitvityDashboard