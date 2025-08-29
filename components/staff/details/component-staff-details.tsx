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

type Experience = {
    position: string;
    grade: string;
    division: string;
    employer: string;
    startDate: Date | null;
    endDate: Date | null;
};

type Child = {
    name: string;
    icNumber: string;
    maritalStatus: string;
    occupation: string;
    birthDate: Date | null;
};

export default function ComponentStaffDetails() {
    const [tabs, setTabs] = useState<string>('system-information');
    const [date, setDate] = useState<Date[] | null>(null);
    const toggleTabs = (name: string) => {
        setTabs(name);
    };
    const [experiences, setExperiences] = useState<Experience[]>([{ position: '', grade: '', division: '', employer: '', startDate: null, endDate: null }]);

    const addExperience = () => {
        setExperiences([...experiences, { position: '', grade: '', division: '', employer: '', startDate: null, endDate: null }]);
    };

    const [children, setChildren] = useState<Child[]>([{ name: '', icNumber: '', maritalStatus: '', occupation: '', birthDate: null }]);

    // ✅ properly typed handleChange
    const handleChange = <K extends keyof Experience>(index: number, field: K, value: Experience[K]) => {
        const updated = [...experiences];
        updated[index][field] = value;
        setExperiences(updated);
    };

    // ✅ properly typed children
    const handleChildChange = (index: number, field: keyof Child, value: any) => {
        const newChildren = [...children];
        newChildren[index][field] = value;
        setChildren(newChildren);
    };

    const addChild = () => {
        setChildren([...children, { name: '', icNumber: '', maritalStatus: '', occupation: '', birthDate: null }]);
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
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="United States">PHD</option>
                                        <option value="India">Bachelor</option>
                                        <option value="India">Masters</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Occupation</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="United States">Guru Besar</option>
                                        <option value="India">Ketua Unit SPBT</option>
                                        <option value="India">Masters</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Division</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Support</option>
                                        <option value="United States">Academic</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Status</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">Tetap</option>
                                        <option value="United States">Kontrak</option>
                                        <option value="United States">Sandaran</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Grade</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="All Countries">A</option>
                                        <option value="United States">B</option>
                                        <option value="United States">C</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="country">Branch</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="profession">Confirm Date</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                                <div>
                                    <label htmlFor="profession">End Date</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                                <div>
                                    <label htmlFor="profession">Visa Expiry</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                                <div>
                                    <label htmlFor="profession">Permit Expiry</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                                <div>
                                    <label htmlFor="profession">Contract Expiry</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                                <div>
                                    <label htmlFor="profession">Passport Expiry</label>
                                    <DatePicker value={date} onChange={setDate} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'academic' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">Academic Degree</h6>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-6">
                            {/* ✅ Qualification (1 column) */}
                            <div className="sm:col-span-1">
                                <label htmlFor="qualification">Qualification</label>
                                <input id="qualification" type="text" className="form-input w-full" placeholder="Enter Degree" required />
                            </div>

                            {/* ✅ Institute Name (big width → 3 columns) */}
                            <div className="sm:col-span-4">
                                <label htmlFor="institute">Institute Name</label>
                                <input id="institute" type="text" className="form-input w-full" placeholder="Enter Institute Name" required />
                            </div>

                            {/* ✅ Passing Year (1 column) */}
                            <div className="sm:col-span-1">
                                <label htmlFor="passingYear">Passing Year</label>
                                <input id="passingYear" type="text" className="form-input w-full" placeholder="YYYY" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mt-5 gap-5 sm:grid-cols-6">
                            {/* ✅ Qualification (1 column) */}
                            <div className="sm:col-span-1">
                                {/* <label htmlFor="qualification">Qualification</label> */}
                                <input id="qualification" type="text" className="form-input w-full" placeholder="Enter Degree" required />
                            </div>

                            {/* ✅ Institute Name (big width → 3 columns) */}
                            <div className="sm:col-span-4">
                                {/* <label htmlFor="institute">Institute Name</label> */}
                                <input id="institute" type="text" className="form-input w-full" placeholder="Enter Institute Name" required />
                            </div>

                            {/* ✅ Passing Year (1 column) */}
                            <div className="sm:col-span-1">
                                {/* <label htmlFor="passingYear">Passing Year</label> */}
                                <input id="passingYear" type="text" className="form-input w-full" placeholder="YYYY" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mt-5 gap-5 sm:grid-cols-6">
                            {/* ✅ Qualification (1 column) */}
                            <div className="sm:col-span-1">
                                {/* <label htmlFor="qualification">Qualification</label> */}
                                <input id="qualification" type="text" className="form-input w-full" placeholder="Enter Degree" required />
                            </div>

                            {/* ✅ Institute Name (big width → 3 columns) */}
                            <div className="sm:col-span-4">
                                {/* <label htmlFor="institute">Institute Name</label> */}
                                <input id="institute" type="text" className="form-input w-full" placeholder="Enter Institute Name" required />
                            </div>

                            {/* ✅ Passing Year (1 column) */}
                            <div className="sm:col-span-1">
                                {/* <label htmlFor="passingYear">Passing Year</label> */}
                                <input id="passingYear" type="text" className="form-input w-full" placeholder="YYYY" required />
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'working-experience' ? (
                <div>
                    {experiences.map((exp, index) => (
                        <form key={index} className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                            <h6 className="mb-5 text-lg font-bold">Working Experience {index + 1}</h6>
                            <div className="flex flex-col sm:flex-row">
                                <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label>Position</label>
                                        <input type="text" placeholder="Enter Position" className="form-input" value={exp.position} onChange={(e) => handleChange(index, 'position', e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Grade</label>
                                        <input type="text" placeholder="Enter Grade" className="form-input" value={exp.grade} onChange={(e) => handleChange(index, 'grade', e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Division</label>
                                        <input type="text" placeholder="Enter Division" className="form-input" value={exp.division} onChange={(e) => handleChange(index, 'division', e.target.value)} />
                                    </div>
                                    <div>
                                        <label>Employer</label>
                                        <input type="text" placeholder="Enter Employer" className="form-input" value={exp.employer} onChange={(e) => handleChange(index, 'employer', e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="profession">Start Date</label>
                                        <DatePicker value={date} onChange={setDate} />
                                    </div>
                                    <div>
                                        <label htmlFor="profession">End Date</label>
                                        <DatePicker value={date} onChange={setDate} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    ))}

                    {/* Add More Button */}
                    <button type="button" onClick={addExperience} className="btn btn-primary w-full sm:w-auto">
                        + Add More
                    </button>
                </div>
            ) : (
                ''
            )}
            {tabs === 'family-information' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">Family Information</h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name">Father&apos;s Name</label>
                                    <input id="name" type="text" placeholder="Jimmy Turner" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="name">Mother&apos;s Name</label>
                                    <input id="name" type="text" placeholder="Aysha Turner" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" type="text" placeholder="+60 (162) 531-588" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="country">Marital status</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="Select">
                                        <option value="Select" disabled>
                                            Select
                                        </option>
                                        <option value="United States">Married</option>
                                        <option value="India">Unmarried</option>
                                        <option value="India">Divorced</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="name_spouse">Name(Spouse)</label>
                                    <input id="name_spouse" type="text" placeholder="Jane Doe" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="ic_spouse">IC Number(Spouse)</label>
                                    <input id="ic_spouse" type="text" placeholder="319349841" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="phone_spouse">Phone(Spouse)</label>
                                    <input id="phone_spouse" type="text" placeholder="+60 (162) 531-588" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="occupation_spouse">Occupation(Spouse)</label>
                                    <input id="occupation_spouse" type="text" placeholder="Software Engineer" className="form-input" />
                                </div>
                            </div>
                        </div>
                        <h6 className="mb-5 mt-6 text-lg font-bold">Children Information</h6>

                        {children.map((child, index) => (
                            <div key={index} className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                                <h6 className="mb-4 text-md font-semibold">Child {index + 1}</h6>
                                <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor={`name_child_${index}`}>Child Name</label>
                                        <input
                                            id={`name_child_${index}`}
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="form-input"
                                            value={child.name}
                                            onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`ic_child_${index}`}>IC Number (Child)</label>
                                        <input
                                            id={`ic_child_${index}`}
                                            type="text"
                                            placeholder="319349841"
                                            className="form-input"
                                            value={child.icNumber}
                                            onChange={(e) => handleChildChange(index, 'icNumber', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor={`status_child_${index}`}>Marital Status</label>
                                        <select
                                            id={`status_child_${index}`}
                                            className="form-select text-white-dark"
                                            value={child.maritalStatus}
                                            onChange={(e) => handleChildChange(index, 'maritalStatus', e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option value="Married">Married</option>
                                            <option value="Unmarried">Unmarried</option>
                                            <option value="Divorced">Divorced</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor={`occupation_child_${index}`}>School/College/Job</label>
                                        <input
                                            id={`occupation_child_${index}`}
                                            type="text"
                                            placeholder="Student / Engineer"
                                            className="form-input"
                                            value={child.occupation}
                                            onChange={(e) => handleChildChange(index, 'occupation', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="profession">Birth Date</label>
                                        <DatePicker value={date} onChange={setDate} />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add More Children Button */}
                        <button type="button" onClick={addChild} className="btn btn-primary w-full sm:w-auto">
                            + Add More Child
                        </button>
                    </form>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}
