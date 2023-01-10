import { useSelector } from 'react-redux'
import { selectAllStates } from '../../features/datas/statesApiSlice'

const OptionsStates= ({ids}) => {

    const statesData = useSelector((state) => selectAllStates(state, ids))
    const option = statesData.map((state) => {
      // console.log(state.abbreviation)
        return (
          <option value={state.abbreviation} key={state.abbreviation}>
            {' '}
            {state.name}
          </option>
        )
      })
      
  const content = option
  return content
}

export default OptionsStates