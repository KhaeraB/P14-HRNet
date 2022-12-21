import { AddEmployee } from '../Form/AddEmployee'
import { ContentForm, ContainerBg, ButtonSubmit, TitleForm, Main } from './index.styles'


const Home = () => {
  const content = (
    <Main>
      <ContainerBg fluid={true}>
        <ContentForm>
          <TitleForm>Create Employee</TitleForm>
          <AddEmployee />
          <ButtonSubmit className='mt-2 btn' >Save</ButtonSubmit>
        </ContentForm>
        <div id="confirmation" className="modal">Employee Created!</div>
      </ContainerBg>
    </Main>
  )
  return content
}

export default Home
