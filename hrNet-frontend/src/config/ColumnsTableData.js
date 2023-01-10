import moment from 'moment'

export const columns = [
    {
        'title': 'First Name ',
        'dataIndex': 'firstName',
        'accessor': 'firstName',
        sorter: (employeeA, employeeB) => employeeA.firstName.localeCompare(employeeB.firstName),
        defaultSortOrder: 'ascend',
        
    },
    {
        'title': 'Last Name',
        'dataIndex': 'lastName',
        'accessor': 'lastName',
        sorter: (employeeA, employeeB) => employeeA.lastName.localeCompare(employeeB.lastName),
        defaultSortOrder: 'ascend',
        
    },
    {
        'title': 'Start date',
        'dataIndex': 'startDate',
        'accessor': 'startDate',
        sorter: (employeeA, employeeB) => moment(employeeA.startDate, 'DD-MM-YYYY')  - moment(employeeB.startDate,'DD-MM-YYYY'),
        defaultSortOrder: 'ascend',
    },
    {
        'title': 'Department',
        'dataIndex': 'department',
        'accessor': 'department',
        sorter: (employeeA, employeeB) => employeeA.department.localeCompare(employeeB.department),
        defaultSortOrder: 'ascend',
        
    },
    {
        'title': 'Birthdate',
        'dataIndex': 'birthDate',
        'accessor': 'birthDate',
        sorter: (employeeA, employeeB) => moment(employeeA.birthDate, 'DD-MM-YYYY')  - moment(employeeB.birthdate,'DD-MM-YYYY'),
        defaultSortOrder: 'ascend',
    },
    {
        'title': 'Street',
        'dataIndex': 'street',
        'accessor': 'street',
        sorter: (employeeA, employeeB) => employeeA.street.localeCompare(employeeB.street),
        defaultSortOrder: 'ascend',
        
    },
    {
        'title': 'City',
        'dataIndex': 'city',
        'key': 'city',
        sorter: (employeeA, employeeB) => employeeA.city.localeCompare(employeeB.city),
        defaultSortOrder: 'ascend',
        
    },
    {
        'title': 'State',
        'dataIndex': 'state',
        'key': 'state',
        sorter: (employeeA, employeeB) => employeeA.state.localeCompare(employeeB.state),
        defaultSortOrder: 'ascend',
        
    },
    {
        'title': 'Zip Code',
        'dataIndex': 'zipCode',
        'key': 'zipCode',
        sorter: (employeeA, employeeB) =>  employeeA.zipCode.localeCompare(employeeB.zipcode),
        defaultSortOrder: 'ascend',
    },
  
];