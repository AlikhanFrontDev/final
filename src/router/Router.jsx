import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutingAdmin from './ProtectedRoutingAdmin'
import SuperAdminProtectedRouting from './SuperAdminProtectedRouting'
import ProtectedRouteCashier from './ProtectedRouteCashier'

import Rooms from '../pages/Rooms'
import GroupPage from '../pages/GroupPage'
import StudentPage from '../pages/StudentPage'
import TeacherPage from '../pages/TeacherPage'
import SchedulePage from '../pages/SchedulePage'
import LoginPage from '../pages/LoginPage'
import SingleTeacher from '../pages/SingleTeacher'
import SingleGroup from '../pages/SingleGroup'
import SingleStudent from '../pages/SingleStudent'
import Dashboard from '../pages/SuperAdminPages/Dashboard'
import AdminsPage from '../pages/SuperAdminPages/AdminsPage'
import ReportsPage from '../pages/SuperAdminPages/ReportsPage'
import CashierPage from '../pages/SuperAdminPages/CashierPage'
import Employee from '../pages/SuperAdminPages/Employee'
import SingleAdmin from '../pages/SingleAdmin'
import TeacherС from '../pages/TeacherC'
import SingleCashier from '../pages/SingleCashier'
import TeacherC from '../pages/TeacherC'
import StudentC from '../pages/StudentC'
import AdminC from '../pages/AdminC'
import CashierC from '../pages/CashierC'
import EmployeesC from '../pages/EmployeeC'
import DeptorsC from '../pages/DeptorsC'
import Lid from '../pages/Lid'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='/final' exact element={<LoginPage />} />

                <Route path='/final' exact element={<ProtectedRouteCashier />}>
                    <Route path='/final/teachers' element={<TeacherC />} />
                    <Route path='/final/students' element={<StudentC />} />
                    <Route path='/final/admins' element={<AdminC />} />
                    <Route path='/final/cashiers' element={<CashierC />} />
                    <Route path='/final/employees' element={<EmployeesC />} />
                    <Route path='/final/debtors' element={<DeptorsC />} />
                </Route>
                <Route path='/final' exact element={<SuperAdminProtectedRouting />}>
                    <Route path='/final/dashboard' element={<Dashboard />} />
                    <Route path='/final/admin' element={<AdminsPage />} />
                    <Route path='/final/admin/:id' element={<SingleAdmin />} />
                    <Route path='/final/report' element={<ReportsPage />} />
                    <Route path='/final/cashier' element={<CashierPage />} />
                    <Route path='/final/cashier/:id' element={<SingleCashier />} />
                    <Route path='/final/employee' element={<Employee />} />
                </Route>
                <Route path='/final' exact element={<ProtectedRoutingAdmin />}>
                    <Route path='/final/group' element={<GroupPage />} />
                    <Route path='/final/group/:id' element={<SingleGroup />} />
                    <Route path='/final/teacher' element={<TeacherPage />} />
                    <Route path='/final/teacher/:id' element={<SingleTeacher />} />
                    <Route path='/final/schedule' element={<SchedulePage />} />
                    <Route path='/final/student' element={<StudentPage />} />
                    <Route path='/final/student/:id' element={<SingleStudent />} />
                    <Route path='/final/room' element={<Rooms />} />
                    <Route path='/final/lid' element={<Lid />} />
                </Route>
            </Routes>
        </div>
    )
}
