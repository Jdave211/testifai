import React from 'react';

const Remark = (percentageGrade) => {

    const getRemark = (percentageGrade) => {
        if (percentageGrade >= 90) {
            return "Excellent work!";
        } else if (percentageGrade >= 80) {
            return "Good job!";
        } else if (percentageGrade >= 70) {
            return "Nice effort!";
        } else if (percentageGrade >= 60) {
            return "Keep trying!";
        } else {
            return "Needs improvement.";
        }
    }

    return (
        <h2>{getRemark(percentageGrade)}</h2>
    );
}

export default Remark;