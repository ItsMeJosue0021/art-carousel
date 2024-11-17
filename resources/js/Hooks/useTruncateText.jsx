import { useCallback } from 'react';

const useTruncateText = () => {
    const truncateTextByWords = useCallback((text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    }, []);

    return { truncateTextByWords };
};

export default useTruncateText;
