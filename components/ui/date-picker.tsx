'use client';
import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

interface DatePickerProps {
    value: Date[] | null;
    onChange: (date: Date[]) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
    return (
        <div className="mb-5">
            <Flatpickr value={value || []} options={{ dateFormat: 'Y-m-d' }} className="form-input border px-3 py-2 rounded-md" onChange={onChange} />
        </div>
    );
}
