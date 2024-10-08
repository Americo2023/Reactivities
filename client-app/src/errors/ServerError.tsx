import { useStore } from '../app/store/store'
import { observer } from 'mobx-react-lite'
import { Container, Header, Segment } from 'semantic-ui-react'

function ServerError() {
    const { commonStore } = useStore()
    return (
        <Container>
            <Header as='h1' content='Server Error' />
            <Header as='h5' color='red' content={commonStore.error?.message} />
            {commonStore.error?.details && (
                <Segment>
                    <Header as='h4' content='Stack trace' color='teal' />
                    <code style={{ marginTop: '10px' }}>{commonStore.error.details}</code>
                </Segment>
            )}
        </Container>
    )
}

export default observer(ServerError)