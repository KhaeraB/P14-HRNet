
import { AddEmployee } from '../Form/AddEmployee'
import { ContentForm, ContainerBg, TitleForm, Main } from './index.styles'


/**
 * Description Home Page With Form
 * @returns {Form: AddEmployee}
 */
const Home = () => {
 
    const content = (
      <Main>
        <ContainerBg fluid>
          <ContentForm>
            <TitleForm>Create Employee</TitleForm>
            <AddEmployee />
          </ContentForm>
        </ContainerBg>
      </Main>
    )
    return content
  }

  

export default Home
