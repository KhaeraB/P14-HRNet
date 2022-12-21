import { useSelector } from 'react-redux'
import { selectEmployeeById } from './employeesApiSlice'

const Employee = ({ employeeId }) => {
    const employee= useSelector(state => selectEmployeeById(state, employeeId))

    if (employee) {
       

        return (
            <tr className="table__row ">
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.birthDate}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
          
            </tr>
        )

    } else return null
}
export default Employee