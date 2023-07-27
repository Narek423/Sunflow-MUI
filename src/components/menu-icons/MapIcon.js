const mapIcon = (colorSwitcher) => {
  const fillColor = colorSwitcher ? "white" : "url(#paint0_diamond_1_264)";
  return (
    <svg
      width='23'
      height='19'
      viewBox='0 0 23 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginLeft: 6 }}
    >
      <path
        d='M21.875 0.6875C21.7969 0.6875 21.7188 0.726562 21.6406 0.765625L15 3.1875L8.28125 0.84375C8.00781 0.765625 7.73438 0.726562 7.46094 0.6875C7.22656 0.6875 6.95312 0.765625 6.67969 0.84375L0.78125 2.875C0.3125 3.07031 0 3.53906 0 4.04688V17.5625C0 17.9531 0.273438 18.1875 0.585938 18.1875C0.664062 18.1875 0.742188 18.1875 0.820312 18.1484L7.5 15.6875L14.2188 18.0703C14.4531 18.1484 14.7266 18.1875 15 18.1875C15.2734 18.1875 15.5078 18.1484 15.7812 18.0703L21.6797 16.0391C22.1484 15.8438 22.5 15.375 22.5 14.8672V1.35156C22.5 0.960938 22.1875 0.6875 21.875 0.6875ZM1.17188 4.08594L6.875 2.09375V14.5938L1.21094 16.7031L1.17188 4.08594ZM8.125 14.5938V2.09375L14.375 4.32031V16.8203L8.125 14.5938ZM15.625 16.8203V4.32031L21.25 2.21094L21.2891 14.8281L15.625 16.8203Z'
        fill={fillColor}
      />
      <defs>
        <radialGradient
          id='paint0_diamond_1_262'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(14 3.02887) rotate(90) scale(22.9746 23.7674)'
        >
          <stop stopColor='#E7463F' />
          <stop offset='1' stopColor='#EF8439' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default mapIcon;
