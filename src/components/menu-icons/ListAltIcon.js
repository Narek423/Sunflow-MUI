const listAltIcon = (colorSwitcher) => {
  const fillColor = colorSwitcher ? "white" : "url(#paint0_diamond_1_264)";
  return (
    <svg
      width='22'
      height='20'
      viewBox='0 0 20 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginLeft: 6 }}
    >
      <path
        d='M18.125 1.35938C18.4375 1.35938 18.75 1.67188 18.75 1.98438V15.7344C18.75 16.0859 18.4375 16.3594 18.125 16.3594H1.875C1.52344 16.3594 1.25 16.0859 1.25 15.7344V1.98438C1.25 1.67188 1.52344 1.35938 1.875 1.35938H18.125ZM18.125 0.109375H1.875C0.820312 0.109375 0 0.96875 0 1.98438V15.7344C0 16.7891 0.820312 17.6094 1.875 17.6094H18.125C19.1406 17.6094 20 16.7891 20 15.7344V1.98438C20 0.96875 19.1406 0.109375 18.125 0.109375ZM5 3.85938C4.29688 3.85938 3.75 4.44531 3.75 5.10938C3.75 5.8125 4.29688 6.35938 5 6.35938C5.66406 6.35938 6.25 5.8125 6.25 5.10938C6.25 4.44531 5.66406 3.85938 5 3.85938ZM5 7.60938C4.29688 7.60938 3.75 8.19531 3.75 8.85938C3.75 9.5625 4.29688 10.1094 5 10.1094C5.66406 10.1094 6.25 9.5625 6.25 8.85938C6.25 8.19531 5.66406 7.60938 5 7.60938ZM5 11.3594C4.29688 11.3594 3.75 11.9453 3.75 12.6094C3.75 13.3125 4.29688 13.8594 5 13.8594C5.66406 13.8594 6.25 13.3125 6.25 12.6094C6.25 11.9453 5.66406 11.3594 5 11.3594ZM16.25 5.57812V4.64062C16.25 4.52344 16.1328 4.40625 16.0156 4.40625H7.73438C7.57812 4.40625 7.5 4.52344 7.5 4.64062V5.57812C7.5 5.73438 7.57812 5.8125 7.73438 5.8125H16.0156C16.1328 5.8125 16.25 5.73438 16.25 5.57812ZM16.25 9.32812V8.39062C16.25 8.27344 16.1328 8.15625 16.0156 8.15625H7.73438C7.57812 8.15625 7.5 8.27344 7.5 8.39062V9.32812C7.5 9.48438 7.57812 9.5625 7.73438 9.5625H16.0156C16.1328 9.5625 16.25 9.48438 16.25 9.32812ZM16.25 13.0781V12.1406C16.25 12.0234 16.1328 11.9062 16.0156 11.9062H7.73438C7.57812 11.9062 7.5 12.0234 7.5 12.1406V13.0781C7.5 13.2344 7.57812 13.3125 7.73438 13.3125H16.0156C16.1328 13.3125 16.25 13.2344 16.25 13.0781Z'
        fill={fillColor}
      />
      <defs>
        <radialGradient
          id='paint0_diamond_1_268'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(10 2.45075) rotate(90) scale(22.9746 16.9767)'
        >
          <stop stopColor='#E7463F' />
          <stop offset='1' stopColor='#EF8439' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default listAltIcon;