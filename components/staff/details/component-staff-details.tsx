'use client';
import IconFacebook from '@/components/icon/icon-facebook';
import IconGithub from '@/components/icon/icon-github';
import IconHome from '@/components/icon/icon-home';
import IconLinkedin from '@/components/icon/icon-linkedin';
import IconPhone from '@/components/icon/icon-phone';
import IconTwitter from '@/components/icon/icon-twitter';
import IconUser from '@/components/icon/icon-user';
import DatePicker from '@/components/ui/date-picker';
import { basePath } from '@/lib/basePath';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ComponentStaffDetails() {
    const [tabs, setTabs] = useState<string>('system-information');
    const [date, setDate] = useState<Date[] | null>(null);
    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    return (
        <div className="pt-5">
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">Staff Details</h5>
            </div>
            {/* options */}
            <div>
                <ul className="mb-5 overflow-y-auto whitespace-nowrap border-b border-[#ebedf2] font-semibold dark:border-[#191e3a] sm:flex">
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('system-information')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'system-information' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconHome />
                            System Information
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('personal')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'personal' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconUser className="h-5 w-5" />
                            Personal
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('address')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'address' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconUser className="h-5 w-5" />
                            Address
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('occupation')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'occupation' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconPhone />
                            Occupation
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('academic')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'academic' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconPhone />
                            Academic
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('working-experience')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'working-experience' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconPhone />
                            Working Experience
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('family-information')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'family-information' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconPhone />
                            Family Information
                        </button>
                    </li>
                </ul>
            </div>
            {tabs === 'system-information' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-6 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-6 text-lg font-bold">System Information</h6>
                        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6">
                            {/* Profile Image */}
                            <div className="w-full sm:w-2/12 flex justify-center sm:justify-start">
                                <Image src={`${basePath}/assets/images/profile-34.jpeg`} alt="img" width={80} height={80} className="h-20 w-20 rounded-full object-cover md:h-32 md:w-32" />
                            </div>

                            {/* Form Grid */}
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" placeholder="Jimmy Turner" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="systemLevel">System Level</label>
                                    <select id="systemLevel" className="form-select text-white-dark" defaultValue="Admin">
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="icNumber">Ic Number</label>
                                    <input id="icNumber" type="text" placeholder="New York" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="systemAccess">System Access</label>
                                    <select id="systemAccess" className="form-select text-white-dark" defaultValue="ALL">
                                        <option>All</option>
                                        <option>Limited</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" type="text" placeholder="+60 (162) 531-588" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="startDate">Start Date</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" placeholder="Jimmy@gmail.com" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="status">Status</label>
                                    <select id="status" className="form-select text-white-dark" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>

                                {/* Checkbox full width */}
                                <div className="sm:col-span-2">
                                    <label className="inline-flex items-center cursor-pointer space-x-2">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="text-white-dark">Make this my default address</span>
                                    </label>
                                </div>

                                {/* Button aligned consistently */}
                                <div className="sm:col-span-2">
                                    <button type="button" className="btn btn-primary w-full sm:w-auto">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <form className="rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">Social</h6>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconLinkedin className="h-5 w-5" />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconTwitter className="h-5 w-5" />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconFacebook className="h-5 w-5" />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconGithub />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'personal' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">Personal Information</h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="country">Race</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Race">
                                        <option value="All Countries">Race</option>
                                        <option value="United States">United States</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Religion</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Islam">
                                        <option value="All Countries">Islam</option>
                                        <option value="United States">United States</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Gender</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Male</option>
                                        <option value="United States">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Nationality</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Malaysia</option>
                                        <option value="United States">China</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Birth Place</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Selangor</option>
                                        <option value="United States">Johor</option>
                                        <option value="United States">Kedah</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="number">Tel. Home</label>
                                    <input id="number" type="text" placeholder="+60 (162) 531-588" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="profession">Birth Date</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'address' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">Permanent Address</h6>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {/* ✅ Address spans 2 columns */}
                            <div className="sm:col-span-2">
                                <label htmlFor="ctnTextarea">Address</label>
                                <textarea id="ctnTextarea" rows={3} className="form-textarea w-full" placeholder="Enter Address" required></textarea>
                            </div>

                            {/* ✅ State */}
                            <div>
                                <label htmlFor="state">State</label>
                                <select id="state" className="form-select text-white-dark" name="state" defaultValue="Select">
                                    <option value="Select" disabled>
                                        Select
                                    </option>
                                    <option value="Selangor">Selangor</option>
                                    <option value="Johor">Johor</option>
                                    <option value="Kedah">Kedah</option>
                                </select>
                            </div>

                            {/* ✅ Country */}
                            <div>
                                <label htmlFor="country">Country</label>
                                <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                    <option value="Select" disabled>
                                        Select
                                    </option>
                                    <option value="United States">United States</option>
                                    <option value="Malaysia">Malaysia</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-10">
                            <label className="inline-flex cursor-pointer">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="relative text-white-dark checked:bg-none">Please Check If Mailing Address Same As Above</span>
                            </label>
                        </div>

                        <h6 className="mb-5 mt-10 text-lg font-bold">Present Address</h6>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {/* ✅ Address spans 2 columns */}
                            <div className="sm:col-span-2">
                                <label htmlFor="ctnTextarea">Address</label>
                                <textarea id="ctnTextarea" rows={3} className="form-textarea w-full" placeholder="Enter Address" required></textarea>
                            </div>

                            {/* ✅ State */}
                            <div>
                                <label htmlFor="state">State</label>
                                <select id="state" className="form-select text-white-dark" name="state" defaultValue="Select">
                                    <option value="Select" disabled>
                                        Select
                                    </option>
                                    <option value="Selangor">Selangor</option>
                                    <option value="Johor">Johor</option>
                                    <option value="Kedah">Kedah</option>
                                </select>
                            </div>

                            {/* ✅ Country */}
                            <div>
                                <label htmlFor="country">Country</label>
                                <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                    <option value="Select" disabled>
                                        Select
                                    </option>
                                    <option value="United States">United States</option>
                                    <option value="Malaysia">Malaysia</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'occupation' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">Occupation Information</h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="country">Qualification</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Qualification">
                                        <option value="All Countries">Qualification</option>
                                        <option value="United States">PHD</option>
                                        <option value="India">Bachelor</option>
                                        <option value="India">Masters</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Religion</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Islam">
                                        <option value="All Countries">Islam</option>
                                        <option value="United States">United States</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Gender</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Male</option>
                                        <option value="United States">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Nationality</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Malaysia</option>
                                        <option value="United States">China</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Birth Place</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Selangor</option>
                                        <option value="United States">Johor</option>
                                        <option value="United States">Kedah</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="number">Tel. Home</label>
                                    <input id="number" type="text" placeholder="+60 (162) 531-588" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="profession">Birth Date</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'danger-zone' ? (
                <div className="switch">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Purge Cache</h5>
                            <p>Remove the active resource from the cache without waiting for the predetermined cache expiry time.</p>
                            <button className="btn btn-secondary">Clear</button>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Deactivate Account</h5>
                            <p>You will not be able to receive messages, notifications for up to 24 hours.</p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox7" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Delete Account</h5>
                            <p>Once you delete the account, there is no going back. Please be certain.</p>
                            <button className="btn btn-danger btn-delete-account">Delete my account</button>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}
