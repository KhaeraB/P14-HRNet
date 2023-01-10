import { Table, Input, Spin, Empty, ConfigProvider} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { columns } from '../../config/ColumnsTableData'
import { selectAllEmployees, useGetEmployeesQuery } from '../../features/employees/employeesApiSlice';


const TableEmployees = ({ ids }) => {
    document.title = "Wealth Health - Employees List";
    const [filterData, setFilterData] = useState(null);
    const data= useSelector(state => selectAllEmployees(state, ids))
    
    const {
        isLoading,
      } = useGetEmployeesQuery();

       
        /**
             * global search
             */
     
        const onInputSearch = (value) => {
            const filterEmployee = data.filter((employee) => Object.keys(employee).some((k) => String(employee[k])
                .toLowerCase()
                .includes(value.toLowerCase())));
            setFilterData(filterEmployee);
        };
        return ( <>
            <FormItem style={{display:'flex', justifyContent: 'flex-end', alignItems:'center', margin:'50px 20px 32px 25px'}}>
                <Input.Search 
                    placeholder="Search by..."
                    allowClear
                    style={{ width: 200}}
                    onSearch ={onInputSearch}
                    
                />
            </FormItem>
                <ConfigProvider renderEmpty={() => isLoading ? <Spin style={{height:'1rem'}} size="large" tip="Be patient, datas are coming !"/>:<Empty description="An error occures with database" style={{fontSize:'20px', color:'red'}}/> } style={{height:'5rem'}}>
                    <Table 
                        columns={columns}
                        rowKey={(employee) => employee.id}
                        dataSource={filterData == null ? data : filterData} 
                        size='middle' 
                        pagination={{
                            style:{marginTop:'30px'},
                            defaultPageSize:10, 
                            defaultCurrent:1,
                            showSizeChanger:true,
                            size: 'small',
                            position: ['bottomCenter'],
                            showAllData: (pages, range) => (
                                `Showing ${range[0]} to ${range[1]} of ${pages} entries`
                            )
                        }} 
                        scroll={{y: 500}} 
                    >
                    </Table>
                </ConfigProvider> 
        </>
        
    );
}
export default TableEmployees