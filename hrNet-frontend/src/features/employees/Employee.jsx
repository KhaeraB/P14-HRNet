import { Table, Input, Spin, Empty, ConfigProvider} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { columns } from '../../datas/ColumnsTableData'
import { selectAllEmployees, useGetEmployeesQuery} from './employeesApiSlice'

const Employee = ({ ids }) => {
    const [filterTable, setFilterTable] = useState(null);
    const data= useSelector(state => selectAllEmployees(state, ids))
    
    const {
        isLoading,
      } = useGetEmployeesQuery();

    console.log(data)
       
        /**
             * global search
             */
     
        const onInputSearch = (value) => {
            const filterData = data.filter((employee) => Object.keys(employee).some((k) => String(employee[k])
                .toLowerCase()
                .includes(value.toLowerCase())));
            setFilterTable(filterData);
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

            <div style={{margin: 20}}> 
                <ConfigProvider renderEmpty={() => isLoading ? <Spin style={{height:'1rem'}} size="large" tip="Be patient, datas are coming !"/>:<Empty description="An error occures with database" style={{fontSize:'20px', color:'red'}}/> } style={{height:'5rem'}}>
                    <Table 
                        columns={columns}
                        rowKey={(employee) => employee.id}
                        dataSource={filterTable == null ? data : filterTable} 
                        size='middle' 
                        pagination={{
                            style:{marginTop:'30px'},
                            defaultPageSize:10, 
                            defaultCurrent:1,
                            showSizeChanger:true,
                            size: 'small',
                            position: ['bottomCenter'],
                            showTotal: (total, range) => (
                                `Showing ${range[0]} to ${range[1]} of ${total} entries`
                            )
                        }} 
                        scroll={{y: 500}} 
                    >
                    </Table>
                </ConfigProvider> 
            </div>
        </>
        
    );
}
export default Employee