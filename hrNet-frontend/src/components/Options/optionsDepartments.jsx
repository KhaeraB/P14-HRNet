import {departments} from '../../config/departments'

const OptionsDepartments = () => {

  const option = departments.map((department) => {
    return (
      <option key={department.id} value={department.id}>
        {' '}
        {department.name}
      </option>
    )
  })
 
  const content = option

  return content
}

export default OptionsDepartments
