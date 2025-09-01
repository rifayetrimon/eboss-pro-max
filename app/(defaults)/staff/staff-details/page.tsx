'use client';

import ComponentStaffDetails from '@/components/staff/details/component-staff-details';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import IconClose from '@/components/icon/icon-close';

// export const metadata: Metadata = {
//     title: 'Account Setting',
// };

export default function StaffDetails() {
    const router = useRouter();

    return (
        <div>
            {/* Breadcrumb + Button wrapper */}
            <div className="flex items-center justify-between">
                {/* Breadcrumb */}
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="/" className="text-primary hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/staff/staff-list" className="before:content-['/'] ltr:before:mr-2 text-primary hover:underline">
                            Staff
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Staff Details</span>
                    </li>
                </ul>

                {/* Back Button (Close Icon) */}
                <button onClick={() => router.back()} className="p-2 rounded-full hover:bg-gray-100">
                    <IconClose className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Staff Details Component */}
            <ComponentStaffDetails />
        </div>
    );
}

// import ComponentStaffDetails from '@/components/staff/details/component-staff-details';
// import { Metadata } from 'next';
// import Link from 'next/link';
// import React from 'react';

// export const metadata: Metadata = {
//     title: 'Account Setting',
// };

// export default function StaffDetails() {
//     return (
//         <div>
//             <ul className="flex space-x-2 rtl:space-x-reverse">
//                 <li>
//                     <Link href="/" className="text-primary hover:underline">
//                         Dashboard
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/staff/staff-list" className="before:content-['/'] ltr:before:mr-2 text-primary hover:underline">
//                         staff
//                     </Link>
//                 </li>
//                 <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
//                     <span>Staff Details</span>
//                 </li>
//             </ul>
//             <ComponentStaffDetails />
//         </div>
//     );
// }
