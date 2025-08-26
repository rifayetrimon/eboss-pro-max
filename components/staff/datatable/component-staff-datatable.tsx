'use client';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import IconArrowLf from '@/components/icon/icon-arrow-lf';
import IconArrowRt from '@/components/icon/icon-arrow-rg';
import IconSend from '@/components/icon/icon-send';
import IconPrinter from '@/components/icon/icon-printer';
import { ChevronDown, Mail, MessageSquare, Printer } from 'lucide-react';
import Dropdown from '@/components/dropdown';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import IconExcel from '@/components/icon/icon-excel';
import Tippy from '@tippyjs/react';

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
    const [showMore, setShowMore] = useState(false);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

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

    // helper function
    // helper function
    const handlePrint = () => {
        // define which columns we want to print (keys from Staff)
        const columns: (keyof Staff)[] = ['name', 'email', 'phone', 'position', 'status', 'division'];

        let rowhtml = '<p>Staff Listing</p>';
        rowhtml +=
            '<table style="width: 100%;" cellpadding="0" cellspacing="0">' + '<thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact;">';

        // table headers
        columns.forEach((col) => {
            const header = col.charAt(0).toUpperCase() + col.slice(1); // capitalize
            rowhtml += `<th>${header}</th>`;
        });

        rowhtml += '</tr></thead><tbody>';

        // table rows
        records.forEach((item) => {
            rowhtml += '<tr>';
            columns.forEach((col) => {
                let val: any = item[col];
                if (col === 'status') {
                    // nice formatting for status
                    val = item.status === 'active' ? `<span style="color:green;font-weight:600;">Active</span>` : `<span style="color:red;font-weight:600;">Inactive</span>`;
                }
                rowhtml += `<td>${val ?? ''}</td>`;
            });
            rowhtml += '</tr>';
        });

        rowhtml +=
            '<style>body{font-family:Arial;color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{border-collapse:collapse;border-spacing:0;width:100%;}th,td{font-size:12px;text-align:left;padding:4px;border:1px solid #ddd;}th{padding:8px 4px;}td{padding:4px;}tr:nth-child(2n-1){background:#f7f7f7;}</style>';
        rowhtml += '</tbody></table>';

        const winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
        winPrint.document.write('<title>Staff Listing</title>' + rowhtml);
        winPrint.document.close();
        winPrint.focus();
        winPrint.print();
    };

    return (
        <div className="panel mt-6">
            {/* Header */}
            <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex gap-3">
                    {/* Search */}
                    <input type="text" className="form-input w-[300px] max-w-full" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

                    {/* Dropdown 1 */}
                    <div className="dropdown">
                        <Dropdown
                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                            btnClassName="flex items-center justify-between gap-2 rounded-lg bg-white-light/40 px-3 py-2 
                                            hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60 w-[180px]"
                            button={
                                <>
                                    <span>All</span>
                                    <ChevronDown className="w-4 h-4" />
                                </>
                            }
                        >
                            <ul className="!min-w-[180px]">
                                <li>
                                    <button type="button" onClick={() => console.log('Awfatech')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        Awfatech
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('HQ')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        HQ
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('School Awfa')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        School Awfa
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>

                    {/* Dropdown 2 */}
                    <div className="dropdown">
                        <Dropdown
                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                            btnClassName="flex items-center justify-between gap-2 rounded-lg bg-white-light/40 px-3 py-2 
                                            hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60 w-[180px]"
                            button={
                                <>
                                    <span>All Division</span>
                                    <ChevronDown className="w-4 h-4" />
                                </>
                            }
                        >
                            <ul className="!min-w-[180px]">
                                <li>
                                    <button type="button" onClick={() => console.log('Awfatech')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        Awfatech
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('HQ')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        HQ
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('School Awfa')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        School Awfa
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>

                    {/* 🔘 More / Less toggle */}
                    <button type="button" onClick={() => setShowMore(!showMore)} className="text-blue-600 font-semibold text-start mb-0 pb-0 hover:underline">
                        {showMore ? 'Less' : 'More'}
                    </button>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-3 md:ml-auto">
                    {/* Add New */}
                    <Tippy content="Register new staff" theme="white-light">
                        <button type="button" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition w-full sm:w-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add New
                        </button>
                    </Tippy>
                    {/* Download excel */}
                    <Tippy content="Download Excel" theme="white-light">
                        <button className="block rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                            <IconExcel className="w-4 h-4" />
                        </button>
                    </Tippy>

                    {/* Print dropdown */}
                    <Tippy content="Print Data" theme="white-light">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="block rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                                button={<IconPrinter className="w-4 h-4" />}
                            >
                                <ul className="!min-w-[170px]">
                                    <li>
                                        <button type="button" onClick={handlePrint} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-dark/60">
                                            <Printer className="w-4 h-4 text-gray-600" />
                                            <span>Normal</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={() => console.log('Print Landscape')}
                                            className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-dark/60"
                                        >
                                            <Printer className="w-4 h-4 text-gray-600" />
                                            <span>Landscape</span>
                                        </button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </Tippy>

                    {/* Send dropdown */}
                    <Tippy content="Send Messages" theme="white-light">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="block rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                                button={<IconSend className="w-4 h-4" />}
                            >
                                <ul className="!min-w-[170px]">
                                    <li>
                                        <button type="button" onClick={() => console.log('Send Email')} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-dark/60">
                                            <Mail className="w-4 h-4 text-blue-600" />
                                            <span>Email</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" onClick={() => console.log('Send SMS')} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 dark:hover:bg-dark/60">
                                            <MessageSquare className="w-4 h-4 text-green-600" />
                                            <span>SMS</span>
                                        </button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </Tippy>
                </div>
            </div>

            {/* 🔹 Dropdown Row (animated) */}
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showMore ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center">
                    {/* Dropdown 1 */}
                    <div className="dropdown">
                        <Dropdown
                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                            btnClassName="flex items-center justify-between gap-2 rounded-lg bg-white-light/40 px-3 py-2 
                    hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60 w-[180px]"
                            button={
                                <>
                                    <span>All Position</span>
                                    <ChevronDown className="w-4 h-4" />
                                </>
                            }
                        >
                            <ul className="!min-w-[180px]">
                                <li>
                                    <button type="button" onClick={() => console.log('Awfatech')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        Awfatech
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('HQ')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        HQ
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('School Awfa')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        School Awfa
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>

                    {/* Dropdown 2 */}
                    <div className="dropdown">
                        <Dropdown
                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                            btnClassName="flex items-center justify-between gap-2 rounded-lg bg-white-light/40 px-3 py-2 
                    hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60 w-[180px]"
                            button={
                                <>
                                    <span>All Status</span>
                                    <ChevronDown className="w-4 h-4" />
                                </>
                            }
                        >
                            <ul className="!min-w-[180px]">
                                <li>
                                    <button type="button" onClick={() => console.log('Active')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        Active
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('Inactive')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        Inactive
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>

                    {/* Dropdown 3 */}
                    <div className="dropdown">
                        <Dropdown
                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                            btnClassName="flex items-center justify-between gap-2 rounded-lg bg-white-light/40 px-3 py-2 
                    hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60 w-[180px]"
                            button={
                                <>
                                    <span>Gender</span>
                                    <ChevronDown className="w-4 h-4" />
                                </>
                            }
                        >
                            <ul className="!min-w-[180px]">
                                <li>
                                    <button type="button" onClick={() => console.log('Male')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        Male
                                    </button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => console.log('Female')} className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-dark/60">
                                        Female
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>

                    {/* ✅ Checkboxes */}
                    <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="form-checkbox text-primary" />
                            <span>Show inactive</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="form-checkbox text-primary" />
                            <span>Show Deleted</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="form-checkbox text-primary" />
                            <span>Search All</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[700px]">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                            <th className="px-4 py-2 text-left cursor-pointer w-[20%]" onClick={() => toggleSort('name')}>
                                User
                            </th>
                            <th className="px-4 py-2 cursor-pointer w-[25%]" onClick={() => toggleSort('email')}>
                                Email
                            </th>
                            <th className="px-4 py-2 cursor-pointer w-[20%]" onClick={() => toggleSort('phone')}>
                                H/P
                            </th>
                            <th className="px-4 py-2 cursor-pointer w-[12%]" onClick={() => toggleSort('position')}>
                                Position
                            </th>
                            <th className="px-4 py-2 cursor-pointer w-[10%]" onClick={() => toggleSort('status')}>
                                Status
                            </th>
                            <th className="px-4 py-2 cursor-pointer w-[13%]" onClick={() => toggleSort('division')}>
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
                {/* Left */}
                <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>
                        Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, staffData.length)} of {staffData.length} entries
                    </span>

                    {/* Page size dropdown */}
                    <select
                        className="border rounded px-2 py-1 text-sm text-center"
                        style={{
                            backgroundColor: document.documentElement.classList.contains('white') ? '#1f2937' : 'white',
                            color: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#1f2937',
                            appearance: 'none',
                            WebkitAppearance: 'none', // Safari
                            MozAppearance: 'none', // Firefox
                        }}
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setPage(1);
                        }}
                    >
                        {[5, 10, 20, 30, 50, 100].map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Right */}
                <div className="flex flex-wrap items-center gap-2">
                    <button className="flex items-center justify-center w-8 h-8 rounded-full border disabled:opacity-50" disabled={page === 1} onClick={() => setPage(page - 1)}>
                        <IconArrowLf className="w-4 h-4" />
                    </button>

                    {Array.from({ length: Math.ceil(staffData.length / pageSize) }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${p === page ? 'bg-blue-500 text-white' : 'border text-gray-700 dark:text-gray-300'}`}
                            onClick={() => setPage(p)}
                        >
                            {p}
                        </button>
                    ))}

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
