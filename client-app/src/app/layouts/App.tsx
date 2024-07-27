import { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import "./styles.css";
import AcitvityDashboard from '../../features/acitvities/dashboard/AcitvityDashboard';
import Loading from './Loading';
import { useStore } from '../store/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loading content='Loading app' />

  return (
    <>
      <NavBar  />
      <Container style={{ marginTop: '7em' }}>
        <AcitvityDashboard
        />
      </Container>
    </>
  )
}

export default observer( App)
