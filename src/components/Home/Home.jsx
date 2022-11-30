import { AddEmployee } from '../Form/AddEmployee'
import { ContentForm, ContainerBg, ButtonSubmit, TitleForm } from './index.styles'


const Home = () => {
  const content = (
    <ContainerBg fluid={true}>
      <ContentForm>
        <TitleForm>Create Employee</TitleForm>
        <AddEmployee />
        <ButtonSubmit className='mt-2 btn' >Save</ButtonSubmit>
      </ContentForm>
      <div id="confirmation" class="modal">Employee Created!</div>
    </ContainerBg>
  )
  return content
}

export default Home
