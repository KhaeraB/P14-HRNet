import Employee from "./Employee"
import { useGetEmployeesQuery } from "./employeesApiSlice"
import {Container} from 'react-bootstrap'
const EmployeesList = () => {

    const {
        data: employees,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetEmployeesQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = employees

        const tableContent = ids?.length
            ? ids.map(employeeId => <Employee key={employeeId} employeeId={employeeId} />)
            : null

        content = (
            <Container>
            <table className="table table-bordered table-hover ">
            <caption>List of employees</caption>
                <thead className="thead-dark ">
                    <tr>
                        <th scope="col" >Fisrt Name</th>
                        <th scope="col" >Last Name</th>
                        <th scope="col" >Start Date</th>
                        <th scope="col" >Department</th>
                        <th scope="col" >Date of Birth</th>
                        <th scope="col" >Street</th>
                        <th scope="col" >City</th>
                        <th scope="col" >State</th>
                        <th scope="col" >Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
            </Container>
        )
    }

    return content
}
export default EmployeesList