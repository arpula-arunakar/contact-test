import React from 'react';

interface AvatarProps {
    fullName: string;
}



const Avatar: React.FC<AvatarProps> = ({ fullName }) => {
    const getInitials = (name: string) => {
        const names = name.split(' ');
        return names.map((n) => n[0]).join('');
    };

    const getColorBasedOnName = (name: string) => {
        const nameCharCodeSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const colorIndex = nameCharCodeSum % 5; // Assuming 5 colors
        return getColorByIndex(colorIndex);
    };

    
    const getColorByIndex = (index: number) => {
        switch (index) {
            case 0:
                return 'red';
            case 1:
                return 'green';
            case 2:
                return 'blue';
            case 3:
                return 'yellow';
            case 4:
                return 'purple';
            default:
                return 'transparent';
        }
    };
    const backgroundColor = getColorBasedOnName(fullName);

    const avatarStyle: React.CSSProperties = {
        backgroundColor,
    };

    return (
        <div className="avatar" style={avatarStyle}>
            <span>{getInitials(fullName)}</span>
        </div>
    );
};

export default Avatar;