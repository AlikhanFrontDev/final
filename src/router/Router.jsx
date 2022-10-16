import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutingAdmin from './ProtectedRoutingAdmin'

import Rooms from '../pages/Rooms'
import GroupPage from '../pages/GroupPage'
import StudentPage from '../pages/StudentPage'
import TeacherPage from '../pages/TeacherPage'
import SchedulePage from '../pages/SchedulePage'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={<ProtectedRoutingAdmin />}>
                    <Route path='/group' element={<GroupPage />} />
                    <Route path='/teacher' element={<TeacherPage />} />
                    <Route path='/schedule' element={<SchedulePage />} />
                    <Route path='/student' element={<StudentPage />} />
                    <Route path='/room' element={<Rooms />} />
                </Route>
            </Routes>
        </div>
    )
}
