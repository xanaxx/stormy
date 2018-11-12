import React from 'react'

const MostlyClouds = () => {
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
        d='M84.0974 50.74C83.0017 50.74 81.9076 50.86 80.8383 51.095C77.4191 43.0233 69.4423 37.64 60.8102 37.64C50.038 37.64 41.0809 45.375 39.2987 56.1183C39.2723 56.1183 39.2475 56.1183 39.2228 56.1183C32.1799 56.1183 26.4489 61.9617 26.4489 69.1417C26.4489 76.3217 32.1799 82.1633 39.2228 82.1633H84.0974C92.5924 82.1633 99.5033 75.115 99.5033 66.4517C99.5033 57.7883 92.5924 50.74 84.0974 50.74V50.74ZM96.4043 66.4517C96.4043 73.38 90.8828 79.015 84.0974 79.015H39.2228C33.8878 79.015 29.5479 74.5867 29.5479 69.1417C29.5479 63.6967 33.8878 59.265 39.2228 59.265C39.5792 59.265 39.967 59.2933 40.4472 59.3533L42.0215 59.5533L42.1799 57.95C43.1518 48.165 51.1617 40.7867 60.8102 40.7867C68.703 40.7867 75.7888 45.8967 78.439 53.5033L78.9406 54.9383L80.368 54.4767C81.5809 54.0867 82.835 53.8883 84.0974 53.8883C90.8828 53.8883 96.4043 59.5233 96.4043 66.4517V66.4517Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.2772 35.2683C21.8449 35.895 22.8168 35.9383 23.4373 35.365C24.0577 34.79 24.1006 33.8083 23.533 33.1817L14.3944 23.1017C13.8267 22.475 12.8531 22.4317 12.2343 23.0067C11.6138 23.58 11.5709 24.5617 12.1386 25.1883L21.2772 35.2683'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.5858 60.56L10.8201 70.0217C10.2128 70.61 10.1914 71.5917 10.7739 72.205C11.3564 72.8183 12.33 72.8383 12.9373 72.25L22.7029 62.79C23.3085 62.2017 23.33 61.2183 22.7475 60.605C22.165 59.9933 21.1914 59.9717 20.5858 60.56'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36.5049 30.8267C37.3449 30.88 38.0743 30.23 38.1271 29.3833L38.9769 15.7417C39.0297 14.8933 38.3861 14.1567 37.5479 14.1033C36.7079 14.05 35.9785 14.7 35.9257 15.5483L35.0759 29.1883C35.0231 30.0367 35.6667 30.7733 36.5049 30.8267'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.061 47.1667V47.1667C18.127 46.32 17.4934 45.5733 16.6551 45.5067L3.16333 44.45C2.32505 44.3833 1.58578 45.0233 1.51977 45.87C1.45541 46.7167 2.08743 47.4633 2.92736 47.53L16.4191 48.5867C17.2574 48.6533 17.9967 48.0133 18.061 47.1667'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M41.9307 36.1267C40.2046 35.1633 38.2591 34.2967 36.1666 34.14C28.3713 33.5533 21.5561 39.4833 20.9769 47.3567C20.6023 52.4433 22.929 57.1067 26.7195 59.935C27.1336 59.1933 27.6914 58.3817 28.4356 57.5833C25.4191 55.3317 23.566 51.6217 23.8647 47.5733C24.3267 41.3083 29.7492 36.59 35.9505 37.0567C37.1666 37.1483 36.8366 36.8333 37.9059 37.2783L38.3201 37.4367C38.3201 37.4367 39.6204 36.0883 41.9307 36.1267'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M91.6766 46.175C91.6766 39.2383 86.1436 33.595 79.3416 33.595C78.4637 33.595 77.5875 33.69 76.731 33.8783C73.995 27.415 67.6073 23.1033 60.6947 23.1033C52.071 23.1033 44.8977 29.2983 43.4703 37.9C43.4505 37.9 43.429 37.9 43.4092 37.9C37.7706 37.9 33.1815 42.5783 33.1815 48.3283C33.1815 50.045 33.6023 51.6567 34.3267 53.0833C34.9059 52.7933 35.7178 52.5033 36.764 52.3367C36.0759 51.16 35.6634 49.7967 35.6634 48.3283C35.6634 43.9683 39.1386 40.42 43.4092 40.42C43.6947 40.42 44.0066 40.4433 44.3894 40.4917L45.6502 40.65L45.7772 39.3667C46.5561 31.5333 52.9686 25.625 60.6947 25.625C67.0149 25.625 72.6881 29.7167 74.8119 35.8067L75.2129 36.9567L76.3564 36.5867C77.3267 36.2733 78.33 36.115 79.3416 36.115C84.7756 36.115 89.1964 40.6283 89.1964 46.175C89.1964 46.74 89.1419 47.2917 89.0528 47.8317C89.7343 47.9933 90.5875 48.275 91.4043 48.75C91.5759 47.9183 91.6766 47.0583 91.6766 46.175'
        fill='white'
      />
    </svg>
  )
}

const CloudsNight = () => {
  return (
    <svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect opacity='0.0229128' x='0.5' y='0.5' width='99' height='99' stroke='#2B2B2B' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M31.7409 56.9285H9.32578C5.5682 56.9285 2.51214 53.5803 2.51214 49.4633C2.51214 45.3447 5.5682 41.9949 9.32578 41.9949C9.57729 41.9949 9.85153 42.0163 10.1879 42.0623L11.297 42.2134L11.4091 41.001C12.094 33.6032 17.7349 28.0241 24.5303 28.0241C30.0894 28.0241 35.0788 31.8881 36.9455 37.6381L37.2985 38.724L38.3046 38.3741C39.1576 38.08 40.0409 37.9305 40.9303 37.9305C41.1061 37.9305 41.2773 37.9469 41.4515 37.9584C41.5364 37.1912 41.6061 36.4059 41.644 35.5894C41.4076 35.573 41.1712 35.55 40.9303 35.55C40.1591 35.55 39.3879 35.6403 38.6349 35.8178C36.2273 29.7162 30.6091 25.6452 24.5303 25.6452C16.944 25.6452 10.6349 31.4938 9.37881 39.6161C9.36214 39.6161 9.34396 39.6161 9.32578 39.6161C4.36517 39.6161 0.330322 44.0337 0.330322 49.4633C0.330322 54.8913 4.36517 59.309 9.32578 59.309H28.2667L28.2379 59.3024C28.2379 59.3024 29.7424 58.5878 31.7409 56.9285'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34.0091 79.0726C31.5061 79.1859 28.9455 78.9921 26.3167 78.4006C21.2303 77.2556 17.1258 74.1801 13.5788 70.1666C13.0561 69.5752 12.5606 68.9559 11.994 68.2806C24.1227 69.6639 34.2394 65.6899 41.5061 55.0754C48.7273 44.5266 49.5167 32.9099 44.953 20.7577C45.0167 20.7709 45.0955 20.7676 45.1576 20.8021C52.2015 24.625 57.4424 30.2501 60.0137 38.379C60.8409 38.1161 61.7409 37.8878 62.6515 37.7481C62.5621 37.459 62.4879 37.1731 62.3909 36.8824C58.9394 26.4798 51.644 20.0841 42.3031 16.2185C41.6773 15.9589 41.0818 16.0624 40.6409 16.644C40.2015 17.2239 40.2121 17.8564 40.5743 18.4889C40.6788 18.668 40.7803 18.8504 40.8803 19.0344C44.103 24.878 45.6894 31.1915 44.8879 37.9732C43.5167 49.5669 37.9652 58.0834 28.1727 63.0761C22.1121 66.1663 15.7334 66.2829 9.29396 64.5481C8.38184 64.3033 7.74396 64.4511 7.36214 65.0836C6.97729 65.7211 7.01972 66.3289 7.65002 67.1487C9.07275 69.0002 10.4379 70.9207 11.997 72.6326C18.5334 79.802 26.4197 83.0253 35.7379 81.9755C35.8924 81.9459 36.0485 81.9196 36.2046 81.8917C35.4258 81.1146 34.6637 80.1897 34.0091 79.0726'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M85.7893 54.4494C84.8439 54.4494 83.8984 54.5595 82.9757 54.778C80.0257 47.2997 73.1409 42.3104 65.6909 42.3104C56.3939 42.3104 48.6636 49.4782 47.1242 59.4339C47.103 59.4322 47.0802 59.4322 47.059 59.4322C40.9802 59.4322 36.0348 64.8471 36.0348 71.5007C36.0348 78.1526 40.9802 83.5658 47.059 83.5658H85.7893C93.1212 83.5658 99.0863 77.0338 99.0863 69.0068C99.0863 60.9814 93.1212 54.4494 85.7893 54.4494V54.4494ZM96.4121 69.0068C96.4121 75.4271 91.6469 80.6481 85.7893 80.6481H47.059C42.4545 80.6481 38.709 76.5442 38.709 71.5006C38.709 66.4538 42.4545 62.3483 47.059 62.3483C47.3666 62.3483 47.7015 62.3746 48.1151 62.4304L49.4742 62.6144L49.6105 61.1293C50.4499 52.064 57.3636 45.2281 65.6908 45.2281C72.503 45.2281 78.6181 49.9628 80.906 57.0106L81.3393 58.3397L82.5712 57.9109C83.6166 57.5495 84.6999 57.3671 85.7893 57.3671C91.6469 57.3671 96.4121 62.5882 96.4121 69.0068V69.0068Z'
        fill='white'
      />
    </svg>
  )
}

export default MostlyClouds