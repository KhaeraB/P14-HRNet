import { useSelector } from 'react-redux'
import { selectAllDepartments} from '../../features/datas/departmentsApiSlice'

const OptionsDept= ({deptIds}) => {
    const deptData = useSelector((state) => selectAllDepartments(state, deptIds))
    const option = deptData.map((dept) => {
  
        return (
          <option value={dept.name} key={dept.id}>
            {' '}
            {dept.name}
          </option>
        )
      })
      
  const content = option
  return content
}

export default OptionsDept