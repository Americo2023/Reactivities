import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem header as={NavLink} to='/'>
                    <img src="/assets/logo.png" alt="Logo" style={{ marginRight: '10px' }} />
                    Reactivities
                </MenuItem>
                <MenuItem name='Acitivties' as={NavLink} to='/activities' />
                <MenuItem name='Errors' as={NavLink} to='/errors' />
                <MenuItem>
                    <Button
                        as={NavLink}
                        to='/createActivity'
                        positive content='Create Activity' />
                </MenuItem>
            </Container>
        </Menu>
    )
}

export default NavBar