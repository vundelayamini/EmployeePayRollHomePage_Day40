window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="../assets//profile-images/Ellipse -3.png"></td>
        <td>Sivakumar U</td>
        <td>Male</td>
        <td><div class='dept-label'>HR</div>
            <div class='dept-label'>Finance</div></td>
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
`;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Yamini P',
            _gender: 'female',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '6000000',
            _startDate: '21 Aug 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assests/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Raja Reddy',
            _gender: 'male',
            _department: [
                'Engineering',
                'Sales'
            ],
            _salary: '5000000',
            _startDate: '18 May 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assests/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Swetha N',
            _gender: 'female',
            _department: [
                'Engineering',
                'Hr'
            ],
            _salary: '10000000',
            _startDate: '05 Oct 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../assests/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}