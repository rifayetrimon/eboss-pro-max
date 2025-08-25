'use client';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import IconArrowLf from '@/components/icon/icon-arrow-lf';
import IconArrowRt from '@/components/icon/icon-arrow-rg';

type Staff = {
    id: number;
    name: string;
    staffId: string;
    email: string;
    phone: string;
    position: string;
    status: 'active' | 'inactive';
    division: string;
    avatar: string;
};

const staffData: Staff[] = [
    {
        id: 1,
        name: 'Caroline Jensen',
        staffId: 'STF001',
        email: 'carolinejensen@zidant.com',
        phone: '+1 (821) 447-3782',
        position: 'Manager',
        status: 'active',
        division: 'Finance',
        avatar: '/assets/images/profile-1.jpeg',
    },
    {
        id: 2,
        name: 'Celeste Grant',
        staffId: 'STF002',
        email: 'celestegrant@polarax.com',
        phone: '+1 (838) 515-3408',
        position: 'Executive',
        status: 'inactive',
        division: 'HR',
        avatar: '/assets/images/profile-2.jpeg',
    },
    {
        id: 3,
        name: 'Lucas Ramirez',
        staffId: 'STF003',
        email: 'lucasramirez@orbalix.com',
        phone: '+1 (925) 611-2890',
        position: 'Analyst',
        status: 'active',
        division: 'IT',
        avatar: '/assets/images/profile-3.jpeg',
    },
    {
        id: 4,
        name: 'Sophie Chen',
        staffId: 'STF004',
        email: 'sophiechen@cygnix.com',
        phone: '+1 (743) 812-9043',
        position: 'Assistant',
        status: 'inactive',
        division: 'Admin',
        avatar: '/assets/images/profile-4.jpeg',
    },
    {
        id: 5,
        name: 'Michael Brown',
        staffId: 'STF005',
        email: 'michaelbrown@zentix.com',
        phone: '+1 (632) 559-1820',
        position: 'Manager',
        status: 'active',
        division: 'Operations',
        avatar: '/assets/images/profile-5.jpeg',
    },
    {
        id: 6,
        name: 'Amelia Wilson',
        staffId: 'STF006',
        email: 'ameliawilson@voltrix.com',
        phone: '+1 (931) 702-4478',
        position: 'Executive',
        status: 'inactive',
        division: 'Marketing',
        avatar: '/assets/images/profile-6.jpeg',
    },
    {
        id: 7,
        name: 'Ethan Miller',
        staffId: 'STF007',
        email: 'ethanmiller@aerovia.com',
        phone: '+1 (854) 390-1185',
        position: 'Supervisor',
        status: 'active',
        division: 'Production',
        avatar: '/assets/images/profile-7.jpeg',
    },
    {
        id: 8,
        name: 'Olivia Davis',
        staffId: 'STF008',
        email: 'oliviadavis@nebula.com',
        phone: '+1 (762) 211-4459',
        position: 'Executive',
        status: 'inactive',
        division: 'Finance',
        avatar: '/assets/images/profile-8.jpeg',
    },
    {
        id: 9,
        name: 'William Johnson',
        staffId: 'STF009',
        email: 'williamjohnson@krypton.com',
        phone: '+1 (803) 917-2753',
        position: 'Analyst',
        status: 'active',
        division: 'R&D',
        avatar: '/assets/images/profile-9.jpeg',
    },
    {
        id: 10,
        name: 'Emma Martinez',
        staffId: 'STF010',
        email: 'emmamartinez@hybridex.com',
        phone: '+1 (710) 441-3852',
        position: 'Coordinator',
        status: 'active',
        division: 'HR',
        avatar: '/assets/images/profile-10.jpeg',
    },
    {
        id: 11,
        name: 'James Anderson',
        staffId: 'STF011',
        email: 'jamesanderson@orbitex.com',
        phone: '+1 (932) 819-4720',
        position: 'Executive',
        status: 'inactive',
        division: 'Finance',
        avatar: '/assets/images/profile-11.jpeg',
    },
    {
        id: 12,
        name: 'Mia Thompson',
        staffId: 'STF012',
        email: 'miathompson@quantum.com',
        phone: '+1 (746) 288-5092',
        position: 'Supervisor',
        status: 'active',
        division: 'Operations',
        avatar: '/assets/images/profile-12.jpeg',
    },
    {
        id: 13,
        name: 'Benjamin White',
        staffId: 'STF013',
        email: 'benjaminwhite@astralis.com',
        phone: '+1 (867) 902-3729',
        position: 'Manager',
        status: 'active',
        division: 'Sales',
        avatar: '/assets/images/profile-13.jpeg',
    },
    {
        id: 14,
        name: 'Isabella Garcia',
        staffId: 'STF014',
        email: 'isabellagarcia@optivex.com',
        phone: '+1 (933) 622-8170',
        position: 'Analyst',
        status: 'inactive',
        division: 'Finance',
        avatar: '/assets/images/profile-14.jpeg',
    },
    {
        id: 15,
        name: 'Daniel Martinez',
        staffId: 'STF015',
        email: 'danielmartinez@ventrix.com',
        phone: '+1 (801) 379-1840',
        position: 'Executive',
        status: 'active',
        division: 'IT',
        avatar: '/assets/images/profile-15.jpeg',
    },
    {
        id: 16,
        name: 'Charlotte Taylor',
        staffId: 'STF016',
        email: 'charlottetaylor@ultrax.com',
        phone: '+1 (844) 216-7945',
        position: 'Coordinator',
        status: 'active',
        division: 'Admin',
        avatar: '/assets/images/profile-16.jpeg',
    },
    {
        id: 17,
        name: 'Henry Clark',
        staffId: 'STF017',
        email: 'henryclark@xenova.com',
        phone: '+1 (923) 521-9082',
        position: 'Supervisor',
        status: 'inactive',
        division: 'Production',
        avatar: '/assets/images/profile-17.jpeg',
    },
    {
        id: 18,
        name: 'Grace Lewis',
        staffId: 'STF018',
        email: 'gracelewis@omnix.com',
        phone: '+1 (865) 497-6201',
        position: 'Executive',
        status: 'active',
        division: 'Marketing',
        avatar: '/assets/images/profile-18.jpeg',
    },
    {
        id: 19,
        name: 'Alexander Walker',
        staffId: 'STF019',
        email: 'alexanderwalker@aether.com',
        phone: '+1 (955) 773-1320',
        position: 'Manager',
        status: 'inactive',
        division: 'Finance',
        avatar: '/assets/images/profile-19.jpeg',
    },
    {
        id: 20,
        name: 'Harper Young',
        staffId: 'STF020',
        email: 'harperyoung@velora.com',
        phone: '+1 (722) 134-2841',
        position: 'Analyst',
        status: 'active',
        division: 'HR',
        avatar: '/assets/images/profile-20.jpeg',
    },
];

export default function StaffTable() {
    const PAGE_SIZES = [5, 10, 20];
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
    const [records, setRecords] = useState<Staff[]>([]);
    const [search, setSearch] = useState('');
    const [sortKey, setSortKey] = useState<keyof Staff>('name');
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

    // filtering
    useEffect(() => {
        let filtered = staffData.filter(
            (s) =>
                s.name.toLowerCase().includes(search.toLowerCase()) ||
                s.email.toLowerCase().includes(search.toLowerCase()) ||
                s.staffId.toLowerCase().includes(search.toLowerCase()) ||
                s.position.toLowerCase().includes(search.toLowerCase()) ||
                s.division.toLowerCase().includes(search.toLowerCase()),
        );

        let sorted = sortBy(filtered, sortKey);
        if (sortDir === 'desc') sorted = sorted.reverse();

        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords(sorted.slice(from, to));
    }, [page, pageSize, search, sortKey, sortDir]);

    const toggleSort = (key: keyof Staff) => {
        if (sortKey === key) {
            setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDir('asc');
        }
        setPage(1);
    };

    return (
        <div className="panel mt-6">
            {/* Header */}
            <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
                <h5 className="text-lg font-semibold dark:text-white-light">Staff Listing</h5>
                <div className="ltr:ml-auto rtl:mr-auto">
                    <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse table-fixed">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="px-4 py-2 text-left cursor-pointer" onClick={() => toggleSort('name')}>
                                User
                            </th>
                            <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('email')}>
                                Email
                            </th>
                            <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('phone')}>
                                H/P
                            </th>
                            <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('position')}>
                                Position
                            </th>
                            <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('status')}>
                                Status
                            </th>
                            <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('division')}>
                                Division
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((s) => (
                            <tr key={s.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-4 py-3 flex items-center">
                                    <img src={s.avatar} className="h-10 w-10 rounded-full object-cover mr-3" alt={s.name} />
                                    <div>
                                        <div className="font-medium">{s.name}</div>
                                        <div className="text-sm text-gray-500">{s.staffId}</div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">{s.email}</td>
                                <td className="px-4 py-3">{s.phone}</td>
                                <td className="px-4 py-3">{s.position}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 text-xs rounded-full ${s.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{s.status}</span>
                                </td>
                                <td className="px-4 py-3">{s.division}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                {/* Left: Showing entries + page size selector */}
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>
                        Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, staffData.length)} of {staffData.length} entries
                    </span>

                    {/* Page size dropdown */}
                    {/* Page size dropdown */}
                    <select
                        className="border rounded px-2 py-1 text-sm appearance-none"
                        style={{
                            backgroundColor: document.documentElement.classList.contains('dark') ? '#1f2937' : 'white', // dark:bg-gray-800 vs white
                            color: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#1f2937', // dark:text-gray-200 vs gray-800
                        }}
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setPage(1);
                        }}
                    >
                        {[5, 10, 20, 30, 50, 100].map((size) => (
                            <option
                                key={size}
                                value={size}
                                style={{
                                    backgroundColor: document.documentElement.classList.contains('dark') ? '#1f2937' : 'white',
                                    color: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#1f2937',
                                }}
                            >
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Right: Pagination */}
                <div className="flex items-center gap-2">
                    {/* Prev */}
                    <button className="flex items-center justify-center w-8 h-8 rounded-full border disabled:opacity-50" disabled={page === 1} onClick={() => setPage(page - 1)}>
                        <IconArrowLf className="w-4 h-4" />
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: Math.ceil(staffData.length / pageSize) }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${p === page ? 'bg-blue-500 text-white' : 'border text-gray-700 dark:text-gray-300'}`}
                            onClick={() => setPage(p)}
                        >
                            {p}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        className="flex items-center justify-center w-8 h-8 rounded-full border disabled:opacity-50"
                        disabled={page * pageSize >= staffData.length}
                        onClick={() => setPage(page + 1)}
                    >
                        <IconArrowRt className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

// for api

// export default function StaffTable() {
//     const PAGE_SIZES = [5, 10, 20];
//     const [page, setPage] = useState(1);
//     const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
//     const [records, setRecords] = useState<Staff[]>([]);
//     const [allStaff, setAllStaff] = useState<Staff[]>([]); // API data storage
//     const [search, setSearch] = useState('');
//     const [sortKey, setSortKey] = useState<keyof Staff>('name');
//     const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

//     // 1. Fetch API data once
//     useEffect(() => {
//         async function fetchStaff() {
//             try {
//                 const res = await fetch('/api/staff'); // replace with your API endpoint
//                 const data = await res.json();
//                 setAllStaff(data); // store the data
//             } catch (err) {
//                 console.error('Failed to fetch staff:', err);
//             }
//         }
//         fetchStaff();
//     }, []);

//     // 2. Filtering, sorting, pagination
//     useEffect(() => {
//         let filtered = allStaff.filter(
//             (s) =>
//                 s.name.toLowerCase().includes(search.toLowerCase()) ||
//                 s.email.toLowerCase().includes(search.toLowerCase()) ||
//                 s.staffId.toLowerCase().includes(search.toLowerCase()) ||
//                 s.position.toLowerCase().includes(search.toLowerCase()) ||
//                 s.division.toLowerCase().includes(search.toLowerCase()),
//         );

//         let sorted = sortBy(filtered, sortKey);
//         if (sortDir === 'desc') sorted = sorted.reverse();

//         const from = (page - 1) * pageSize;
//         const to = from + pageSize;
//         setRecords(sorted.slice(from, to));
//     }, [allStaff, page, pageSize, search, sortKey, sortDir]);

//     const toggleSort = (key: keyof Staff) => {
//         if (sortKey === key) {
//             setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortKey(key);
//             setSortDir('asc');
//         }
//         setPage(1);
//     };

//     return (
//         <div className="panel mt-6">
//             {/* Header */}
//             <div className="mb-5 flex flex-col gap-5 md:flex-row md:items-center">
//                 <h5 className="text-lg font-semibold dark:text-white-light">Staff Listing</h5>
//                 <div className="ltr:ml-auto rtl:mr-auto">
//                     <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
//                 </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//                 <table className="w-full border-collapse table-fixed">
//                     <thead>
//                         <tr className="bg-gray-100 dark:bg-gray-800">
//                             <th className="px-4 py-2 text-left cursor-pointer" onClick={() => toggleSort('name')}>
//                                 User
//                             </th>
//                             <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('email')}>
//                                 Email
//                             </th>
//                             <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('phone')}>
//                                 H/P
//                             </th>
//                             <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('position')}>
//                                 Position
//                             </th>
//                             <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('status')}>
//                                 Status
//                             </th>
//                             <th className="px-4 py-2 cursor-pointer" onClick={() => toggleSort('division')}>
//                                 Division
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {records.map((s) => (
//                             <tr key={s.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
//                                 <td className="px-4 py-3 flex items-center">
//                                     <img src={s.avatar} className="h-10 w-10 rounded-full object-cover mr-3" alt={s.name} />
//                                     <div>
//                                         <div className="font-medium">{s.name}</div>
//                                         <div className="text-sm text-gray-500">{s.staffId}</div>
//                                     </div>
//                                 </td>
//                                 <td className="px-4 py-3">{s.email}</td>
//                                 <td className="px-4 py-3">{s.phone}</td>
//                                 <td className="px-4 py-3">{s.position}</td>
//                                 <td className="px-4 py-3">
//                                     <span className={`px-2 py-1 text-xs rounded-full ${s.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>{s.status}</span>
//                                 </td>
//                                 <td className="px-4 py-3">{s.division}</td>
//                             </tr>
//                         ))}
//                         {records.length === 0 && (
//                             <tr>
//                                 <td colSpan={6} className="text-center py-4 text-gray-500 dark:text-gray-400">
//                                     No data found
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-between items-center mt-4">
//                 {/* Left: Showing entries + page size selector */}
//                 <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
//                     <span>
//                         Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, allStaff.length)} of {allStaff.length} entries
//                     </span>

//                     <select
//                         className="border rounded px-2 py-1 text-sm"
//                         value={pageSize}
//                         onChange={(e) => {
//                             setPageSize(Number(e.target.value));
//                             setPage(1);
//                         }}
//                     >
//                         {PAGE_SIZES.map((size) => (
//                             <option key={size} value={size}>
//                                 {size}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Right: Pagination */}
//                 <div className="flex items-center gap-2">
//                     <button className="flex items-center justify-center w-8 h-8 rounded-full border disabled:opacity-50" disabled={page === 1} onClick={() => setPage(page - 1)}>
//                         <IconArrowForward className="w-4 h-4" />
//                     </button>

//                     {Array.from({ length: Math.ceil(allStaff.length / pageSize) }, (_, i) => i + 1).map((p) => (
//                         <button
//                             key={p}
//                             className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${p === page ? 'bg-blue-500 text-white' : 'border text-gray-700 dark:text-gray-300'}`}
//                             onClick={() => setPage(p)}
//                         >
//                             {p}
//                         </button>
//                     ))}

//                     <button
//                         className="flex items-center justify-center w-8 h-8 rounded-full border disabled:opacity-50"
//                         disabled={page * pageSize >= allStaff.length}
//                         onClick={() => setPage(page + 1)}
//                     >
//                         <IconArrowForward className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
