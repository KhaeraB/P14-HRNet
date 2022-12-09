import moment from 'moment'

export const columns = [
    {
        'title': 'First Name ',
        'dataIndex': 'firstName',
        'accessor': 'firstName',
        sorter: (a, b) => a.firstName.localeCompare(b.firstName),
        defaultSortOrder: 'ascend',
        ellipsis: true,
    },
    {
        'title': 'Last Name',
        'dataIndex': 'lastName',
        'accessor': 'lastName',
        sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        defaultSortOrder: 'ascend',
        ellipsis: true,
    },
    {
        'title': 'Start date',
        'dataIndex': 'startDate',
        'accessor': 'startDate',
        defaultSortOrder: 'descend',
        sorter: (a, b) => moment(a.startDate, 'DD-MM-YYYY')  - moment(b.startDate,'DD-MM-YYYY'),
        ellipsis: true,
    },
    {
        'title': 'Department',
        'dataIndex': 'department',
        'accessor': 'department',
        sorter: (a, b) => a.department.localeCompare(b.department),
        defaultSortOrder: 'descend',
        ellipsis: true,
    },
    {
        'title': 'Birthdate',
        'dataIndex': 'birthdate',
        'accessor': 'birthdate',
        defaultSortOrder: 'descend',
        sorter: (a, b) => moment(a.birthdate, 'DD-MM-YYYY')  - moment(b.birthdate,'DD-MM-YYYY'),
        ellipsis: true,
    },
    {
        'title': 'Street',
        'dataIndex': 'street',
        'accessor': 'street',
        sorter: (a, b) => a.street.localeCompare(b.street),
        defaultSortOrder: 'descend',
        ellipsis: true,
    },
    {
        'title': 'City',
        'dataIndex': 'city',
        'key': 'city',
        sorter: (a, b) => a.city.localeCompare(b.city),
        defaultSortOrder: 'descend',
        ellipsis: true,
    },
    {
        'title': 'State',
        'dataIndex': 'state',
        'key': 'state',
        sorter: (a, b) => a.state.localeCompare(b.state),
        defaultSortOrder: 'descend',
        ellipsis: true,
    },
    {
        'title': 'Zip Code',
        'dataIndex': 'zipcode',
        'key': 'zipcode',
        defaultSortOrder: 'descend',
        sorter: (a, b) =>  a.zipcode.localeCompare(b.zipcode),
        ellipsis: true,
    },
  
];