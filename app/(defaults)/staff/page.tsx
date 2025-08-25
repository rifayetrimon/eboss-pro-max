import ComponentsStaffDatatable from '@/components/staff/datatable/component-staff-datatable';
import IconBell from '@/components/icon/icon-bell';
import React from 'react';
import Link from 'next/link';

export default function StaffDataTable() {
    return (
        <>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Staff</span>
                </li>
            </ul>

            <div>
                {/* <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                </div> */}
                <ComponentsStaffDatatable />
            </div>
        </>
    );
}

// import ComponentsDatatablesAltPagination from '@/components/datatables/components-datatables-alt-pagination';
// import IconBell from '@/components/icon/icon-bell';
// import { Metadata } from 'next';
// import React from 'react';

// export const metadata: Metadata = {
//     title: 'Alternative Pagination Table',
// };

// const AltPagination = () => {
//     return (
//         <div>
//             <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
//                 <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
//                     <IconBell />
//                 </div>
//                 <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
//                 <a href="https://www.npmjs.com/package/mantine-datatable" target="_blank" className="block hover:underline" rel="noreferrer">
//                     https://www.npmjs.com/package/mantine-datatable
//                 </a>
//             </div>
//             <ComponentsDatatablesAltPagination />
//         </div>
//     );
// };

// export default AltPagination;
