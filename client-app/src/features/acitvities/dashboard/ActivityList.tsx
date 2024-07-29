import { Header } from 'semantic-ui-react'
import { useStore } from '../../../app/store/store';
import { observer } from 'mobx-react-lite';
import AcitivityListItem from './AcitivityListItem';
import { Fragment } from 'react/jsx-runtime';

function ActivityList() {
    const { activityStore } = useStore();
    const { groupedActivities } = activityStore;

    return (
        <>
            {groupedActivities.map(([group, activities]) => (
                <Fragment key={group}>
                    <Header sub color='teal'>
                        {group}
                    </Header>
                    {activities.map((activity) => (
                        <AcitivityListItem key={activity.id} activity={activity} />
                    ))}

                </Fragment>
            ))}
        </>
    )
}

export default observer(ActivityList)