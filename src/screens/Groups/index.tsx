import { Header } from '@components/Header'
import { Container, } from './styles'
import { HighLight } from '@components/HighLight'
import { GroupCard } from '@components/GroupCard'

export function Groups() {
    return (
        <Container>
            <Header />
            <HighLight
                title='Tumars'
                subTitle='Jogue com a sua turma'
            />
            <GroupCard title='Galera do Ignite' />

        </Container>
    )
}