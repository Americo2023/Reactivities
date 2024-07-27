import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import { useStore } from '../store/store'


function NavBar() {
    const { activityStore } = useStore();
    
    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem header>
                    <img src="/assets/logo.png" alt="Logo" style={{ marginRight: '10px' }} />
                    Reactivities
                </MenuItem>
                <MenuItem name='Acitivties' />
                <MenuItem>
                    <Button onClick={() => activityStore.openForm()} positive content='Create Activity' />
                </MenuItem>
            </Container>
        </Menu>
    )
}

export default NavBar