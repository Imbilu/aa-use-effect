import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
    const [cname, setCname] = useState('small');
    const [mesage, setMessage] = useState('');

    useEffect(() => {
        let imgSize;
        switch (size) {
            case 's':
                imgSize = 'small';
                break;
            case 'm':
                imgSize = 'medium';
                break;
            case 'l':
                imgSize = 'large';
                break;
            case 'xl':
                imgSize = 'xlarge';
                break;
            default:
                break;
        }
        setCname(imgSize);
    }, [size]);

    useEffect(() => {
        if (featherCount <= 0) setMessage('Oh my! Your bird is naked!');
        else if (featherCount >= 10) {
            setMessage('Full turkey!');
        } else {
            setMessage('Coming along...');
        }
    }, [featherCount]);

    return <div className={`message ${cname}`}>{mesage}</div>;
}

export default Message;
