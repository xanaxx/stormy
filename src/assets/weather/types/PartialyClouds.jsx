import React from 'react'

const PartialyClouds = () => {
  let hours = new Date().getHours()
  return hours > 6 && hours < 20 ? <CloudsDay /> : <CloudsNight />
}

const CloudsDay = () => {
  return (
    <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect opacity='0.0229128' x='0.5' y='0.5' width='98.0099' height='99' stroke='#2B2B2B' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M84.2155 53.447C83.1609 53.447 82.108 53.5608 81.0788 53.7866C77.7867 46.0587 70.1074 40.9029 61.7977 40.9029C51.4278 40.9029 42.8055 48.3099 41.0884 58.5961C41.0648 58.5961 41.0411 58.5961 41.0158 58.5961C34.2355 58.5961 28.7194 64.1899 28.7194 71.0672C28.7194 77.9411 34.2355 83.5332 41.0158 83.5332H84.2155C92.3934 83.5332 99.0469 76.785 99.0469 68.4901C99.0469 60.1953 92.3934 53.447 84.2155 53.447V53.447ZM96.064 68.4901C96.064 75.1229 90.749 80.5198 84.2155 80.5198H41.0158C35.8799 80.5198 31.7022 76.279 31.7022 71.0672C31.7022 65.8519 35.8799 61.6094 41.0158 61.6094C41.3588 61.6094 41.734 61.6366 42.1954 61.6943L43.7113 61.8845L43.8634 60.3498C44.798 50.982 52.5094 43.918 61.7977 43.918C69.3959 43.918 76.2167 48.809 78.7703 56.092L79.2519 57.4671L80.6259 57.024C81.7937 56.6505 83.0004 56.4621 84.2155 56.4621C90.749 56.4621 96.064 61.8573 96.064 68.4901V68.4901Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.3958 34.1937C23.9856 34.8592 25.0098 34.9203 25.6722 34.3295C26.3364 33.737 26.3972 32.7082 25.8074 32.0427L16.3316 21.3219C15.7435 20.6564 14.7194 20.5953 14.0552 21.1878C13.3927 21.7786 13.3319 22.8074 13.92 23.4746L23.3958 34.1937'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.2636 60.7063L11.816 70.4713C11.1671 71.0791 11.1299 72.1079 11.7332 72.7615C12.3383 73.4134 13.3641 73.4507 14.013 72.843L24.4606 63.0779C25.1096 62.4719 25.1467 61.4414 24.5434 60.7895C23.9384 60.1376 22.9126 60.1002 22.2636 60.7063'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M64.2177 23.4661C63.6127 22.8142 62.5869 22.7768 61.9379 23.3829L51.4904 33.1479C50.8414 33.7557 50.8042 34.7845 51.4092 35.4381C52.0126 36.09 53.0384 36.1273 53.6874 35.5196L64.1349 25.7546C64.7839 25.1485 64.8211 24.118 64.2177 23.4661'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M39.5252 29.7814C40.409 29.851 41.1881 29.1805 41.2574 28.2926L42.3711 14.0016C42.4404 13.1137 41.7729 12.3293 40.889 12.2597C40.0051 12.1901 39.2243 12.8607 39.1551 13.7486L38.043 28.0396C37.9737 28.9292 38.6396 29.7118 39.5252 29.7814'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.8165 46.619V46.619C19.8976 45.7328 19.2419 44.94 18.3597 44.8568L4.15019 43.5292C3.26632 43.4477 2.47709 44.1047 2.39597 44.9926C2.31316 45.8805 2.96888 46.6733 3.85106 46.7548L18.0606 48.0824C18.9444 48.1655 19.7336 47.5069 19.8165 46.619'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.9292 47.1402C26.5156 40.577 32.3072 35.7165 38.8408 36.3056C42.1413 36.6044 45.0059 38.2376 46.9595 40.6262C47.671 39.9233 48.4467 39.2545 49.2883 38.6399C46.8328 35.6588 43.2432 33.6216 39.1128 33.2498C30.9028 32.5096 23.624 38.6178 22.8872 46.8651C22.4106 52.1958 24.7901 57.1225 28.743 60.1494C29.1892 59.3787 29.7908 58.5367 30.5902 57.7116C27.4451 55.3026 25.5506 51.381 25.9292 47.1402'
        fill='white'
      />
    </svg>
  )
}

const CloudsNight = () => {
  return (
    <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect opacity='0.0229128' x='0.5' y='0.5' width='97.0392' height='99' stroke='#2B2B2B' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M31.1149 77.0895C28.5026 77.2012 25.8302 77.0117 23.0851 76.4273C17.7784 75.2988 13.4947 72.2679 9.79291 68.3126C9.24736 67.7297 8.72871 67.121 8.13731 66.4539C20.7954 67.8188 31.3552 63.9007 38.9374 53.44C46.4754 43.0441 47.2992 31.5958 42.5348 19.6197C42.6028 19.6327 42.6851 19.6311 42.7499 19.6635C50.0997 23.4326 55.5709 28.9746 58.2543 36.9856C59.1177 36.7282 60.057 36.5015 61.0073 36.3655C60.914 36.0806 60.835 35.7973 60.7353 35.5123C57.1332 25.2589 49.5193 18.9575 39.7708 15.1463C39.1177 14.8921 38.4963 14.9925 38.0361 15.5673C37.576 16.1372 37.5886 16.7621 37.9665 17.3838C38.0756 17.5619 38.1816 17.7416 38.2859 17.9214C41.6493 23.6803 43.3049 29.9023 42.4684 36.5857C41.0374 48.0114 35.2436 56.4045 25.0238 61.3248C18.6987 64.3702 12.0415 64.4868 5.32105 62.7771C4.36912 62.5342 3.70341 62.6816 3.30492 63.3033C2.90328 63.9315 2.94755 64.5321 3.60537 65.3384C5.09019 67.1647 6.51492 69.0574 8.14205 70.7428C14.9637 77.8083 23.1942 80.9865 32.9191 79.9503C33.0804 79.9212 33.2433 79.8969 33.4061 79.8694C32.5933 79.1019 31.798 78.192 31.1149 77.0895'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M85.155 52.8248C84.1667 52.8248 83.1816 52.9333 82.2186 53.1486C79.1398 45.7771 71.9545 40.8616 64.1794 40.8616C54.4766 40.8616 46.409 47.9255 44.8024 57.7353C44.7802 57.7353 44.7565 57.7353 44.7344 57.7353C38.3903 57.7353 33.229 63.0701 33.229 69.6273C33.229 76.1844 38.3903 81.5175 44.7344 81.5175H85.155C92.8068 81.5175 99.0307 75.0818 99.0307 67.1712C99.0307 59.2605 92.8068 52.8248 85.155 52.8248V52.8248ZM96.2398 67.1712C96.2398 73.4968 91.2682 78.6437 85.155 78.6437H44.7344C39.9289 78.6437 36.02 74.5993 36.02 69.6273C36.02 64.6535 39.9289 60.6092 44.7344 60.6092C45.0554 60.6092 45.4048 60.6351 45.8365 60.6885L47.2549 60.8714L47.3973 59.4078C48.2733 50.4723 55.4871 43.7354 64.1794 43.7354C71.2888 43.7354 77.6708 48.4015 80.0585 55.3473L80.5108 56.6571L81.7964 56.2361C82.8874 55.8783 84.0181 55.6986 85.155 55.6986C91.2682 55.6986 96.2398 60.8439 96.2398 67.1712V67.1712Z'
        fill='white'
      />
    </svg>
  )
}

export default PartialyClouds