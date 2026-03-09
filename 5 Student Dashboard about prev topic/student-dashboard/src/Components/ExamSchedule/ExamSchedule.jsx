import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/style.css";

const ExamSchedule = () => {
    const [selected, setSelected] = useState();

  return (
    <div className="p-2">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        // Tailwind classes to help it blend into your dashboard
        className="mx-auto"
      />
    </div>
)};

export default ExamSchedule;