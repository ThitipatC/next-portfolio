import React from "react";

interface CCACardProps {
    title: string;
    organization: string;
    role: string;
    dates: string;
    description: string;
    Icon: React.ReactNode; // Change this to ElementType for better flexibility
}

const CCACard: React.FC<CCACardProps> = ({
    title,
    organization,
    role,
    dates,
    description,
    Icon // Destructure and rename for clarity
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="mb-4">{Icon}</div> 
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-1"><strong>Organization:</strong> {organization}</p> {/* Fixed the dot */}
            <p className="text-gray-600 mb-1"><strong>Role:</strong> {role}</p>
            <p className="text-gray-600 mb-4"><strong>Dates:</strong> {dates}</p>
            <ul className="list-disc list-inside text-gray-700 text-center">
                {description.split(',').map((text, i) => (
                    <li key={i}>{text.trim()}</li>
                ))}
            </ul>
        </div>
    );
};

export default CCACard;
export type {CCACardProps};