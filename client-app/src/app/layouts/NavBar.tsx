import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'


interface Props {
    openForm: () => void;
}
function NavBar({ openForm}: Props) {
  return (
      <Menu inverted fixed='top'>
          <Container>
              <MenuItem header>
                  <img src="/assets/logo.png" alt="Logo" style={{marginRight: '10px'}} />
                  Reactivities
              </MenuItem>
              <MenuItem name='Acitivties' />
              <MenuItem>
                  <Button onClick={openForm} positive content='Create Activity' />
              </MenuItem>
          </Container>
    </Menu>
  )
}

export default NavBar