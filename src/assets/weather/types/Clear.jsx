import React from 'react';

const Clear = () => {
    const hours = new Date().getHours();
    return hours > 6 && hours < 20 ? <ClearDay /> : <ClearNight />;
};

const ClearDay = () => {
    return (
        <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect opacity='0.0229128' x='0.5' y='0.5' width='99' height='99' stroke='#2B2B2B' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M74.9506 74.8615L64.0325 64.7978C63.355 64.174 63.321 63.1179 63.9597 62.4529C64.5985 61.7895 65.677 61.7578 66.3562 62.3832L77.2743 72.4453C77.9518 73.0707 77.9842 74.1252 77.3454 74.7902C76.7083 75.4552 75.6298 75.4869 74.9506 74.8615'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M33.238 36.6652L22.3198 26.6031C21.6407 25.9777 21.6083 24.9232 22.2471 24.2582C22.8858 23.5932 23.9627 23.5615 24.6419 24.1869L35.56 34.2506C36.2391 34.876 36.2715 35.9305 35.6328 36.5955C34.994 37.2589 33.9155 37.2906 33.238 36.6652'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M24.5109 74.7364L34.5316 63.8146C35.1541 63.1369 36.2311 63.0799 36.9248 63.6895C37.6185 64.2991 37.6751 65.3536 37.0525 66.0328L27.0318 76.9547C26.4093 77.6323 25.3323 77.6893 24.6402 77.0797C23.9465 76.4702 23.8883 75.4157 24.5109 74.7364'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M62.54 33.0156L72.5607 22.0938C73.1832 21.4161 74.2601 21.3591 74.9539 21.9687C75.6459 22.5783 75.7041 23.6328 75.0816 24.312L65.0609 35.2338C64.4384 35.9115 63.3614 35.9685 62.6677 35.3589C61.9756 34.7493 61.9174 33.6948 62.54 33.0156'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M48.8277 84.9568L48.6563 70.2762C48.6466 69.3642 49.4001 68.6089 50.3315 68.5994C51.2629 68.5883 52.0342 69.3262 52.0456 70.2382L52.217 84.9188C52.2267 85.8324 51.4731 86.5861 50.5417 86.5972C49.6103 86.6082 48.839 85.8704 48.8277 84.9568'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M47.99 29.043L47.8186 14.3623C47.8073 13.4488 48.5608 12.6951 49.4922 12.684C50.4236 12.6729 51.1949 13.4108 51.2063 14.3243L51.3777 29.005C51.389 29.917 50.6338 30.6723 49.7024 30.6818C48.771 30.6928 47.9997 29.955 47.99 29.043'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.9695 47.9591L28.9642 48.0066C29.8956 48.0098 30.6556 48.7587 30.6523 49.6707C30.6507 50.5827 29.8859 51.3268 28.9528 51.3237L13.9598 51.2778C13.0268 51.2746 12.2668 50.5257 12.27 49.6137C12.2733 48.7001 13.0381 47.9559 13.9695 47.9591'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M71.0811 47.9575L86.0757 48.0034C87.0071 48.0066 87.7671 48.7555 87.7639 49.6675C87.7607 50.5811 86.9958 51.3252 86.0644 51.3221L71.0698 51.2746C70.1384 51.2714 69.3784 50.5225 69.3816 49.6105C69.3848 48.6985 70.1497 47.9543 71.0811 47.9575'
                fill='#FFFFFE'
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M49.5974 34.2585C40.9366 34.2585 33.8896 41.1587 33.8896 49.639C33.8896 58.1209 40.9366 65.0211 49.5974 65.0211C58.2598 65.0211 65.3068 58.1209 65.3068 49.639C65.3068 41.1587 58.2598 34.2585 49.5974 34.2585V34.2585ZM62.097 49.639C62.097 56.3872 56.4891 61.8782 49.5974 61.8782C42.7056 61.8782 37.0994 56.3872 37.0994 49.639C37.0994 42.8908 42.7056 37.3998 49.5974 37.3998C56.4891 37.3998 62.097 42.8908 62.097 49.639V49.639Z'
                fill='#FFFFFE'
            />
        </svg>
    );
};

const ClearNight = () => {
    return (
        <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect opacity='0.0229128' x='0.5' y='0.5' width='99' height='99' stroke='#2B2B2B' />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M49.0319 80.0265C39.2534 81.0306 30.9804 77.9459 24.1222 71.0882C22.4864 69.4523 21.054 67.6153 19.5596 65.8443C18.8999 65.0602 18.8554 64.4788 19.2592 63.8675C19.6598 63.2641 20.3291 63.1211 21.2861 63.3568C28.0425 65.0162 34.7353 64.9046 41.0943 61.9488C51.3688 57.1716 57.1936 49.0253 58.6324 37.9373C59.4733 31.4489 57.8089 25.4115 54.4275 19.8203C54.321 19.6459 54.216 19.4715 54.1064 19.2986C53.7248 18.6952 53.7137 18.0902 54.1747 17.5355C54.6389 16.9792 55.2621 16.8802 55.9187 17.1285C65.7194 20.8261 73.3756 26.9436 76.9971 36.8939C81.539 49.3726 79.0208 60.6193 69.6604 70.1893C65.0645 74.8895 59.3859 77.8375 52.9506 79.3319C51.6597 79.6321 50.3387 79.7986 49.0319 80.0265V80.0265ZM24.1174 66.9255C24.712 67.5729 25.2318 68.1653 25.7803 68.7295C29.5035 72.5685 33.8085 75.5118 39.1453 76.6071C48.2688 78.4786 56.6849 76.6353 64.2171 71.2831C75.0019 63.6208 78.5836 50.9063 74.7412 38.9493C72.1293 30.8251 66.5064 25.2701 58.9153 21.5112C58.8502 21.4798 58.7675 21.4813 58.6991 21.4688C63.489 33.0926 62.6592 44.2042 55.0825 54.2943C47.458 64.4489 36.8433 68.2502 24.1174 66.9255V66.9255Z'
                fill='#FFFFFE'
            />
        </svg>
    );
};

export default Clear;
