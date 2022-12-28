import Employee from "./Employee";
import {  useGetEmployeesQuery } from "./employeesApiSlice";
import { Container } from "react-bootstrap";




const EmployeesList = () => {
 
  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetEmployeesQuery();
 

  let content;
  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = employees;

    const tableContent = ids?.length
      ? 
          <Employee />    
      
      : null;

    content = (
      <Container>
      
              {tableContent}
         
      </Container>
    );
  }

  return content;
};
export default EmployeesList;
