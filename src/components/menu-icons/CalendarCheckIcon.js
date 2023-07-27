const calendarCheckIcon = (colorSwitcher) => {
  const fillColor = colorSwitcher ? "white" : "url(#paint0_diamond_1_264)";
  return (
    <svg
      width='20'
      height='22'
      viewBox='0 0 18 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginLeft: 6 }}
    >
      <path
        d='M15.625 3.35938H13.75V1.32812C13.75 1.09375 13.5156 0.859375 13.2812 0.859375H12.9688C12.6953 0.859375 12.5 1.09375 12.5 1.32812V3.35938H5V1.32812C5 1.09375 4.76562 0.859375 4.53125 0.859375H4.21875C3.94531 0.859375 3.75 1.09375 3.75 1.32812V3.35938H1.875C0.820312 3.35938 0 4.21875 0 5.23438V18.9844C0 20.0391 0.820312 20.8594 1.875 20.8594H15.625C16.6406 20.8594 17.5 20.0391 17.5 18.9844V5.23438C17.5 4.21875 16.6406 3.35938 15.625 3.35938ZM1.875 4.60938H15.625C15.9375 4.60938 16.25 4.92188 16.25 5.23438V7.10938H1.25V5.23438C1.25 4.92188 1.52344 4.60938 1.875 4.60938ZM15.625 19.6094H1.875C1.52344 19.6094 1.25 19.3359 1.25 18.9844V8.35938H16.25V18.9844C16.25 19.3359 15.9375 19.6094 15.625 19.6094ZM13.0078 12.0312C13.2031 11.8359 13.2031 11.5234 13.0078 11.3672L12.6953 11.0156C12.5 10.8203 12.1875 10.8203 12.0312 11.0156L7.42188 15.5859L5.42969 13.5938C5.27344 13.4375 4.96094 13.4375 4.76562 13.5938L4.45312 13.9453C4.25781 14.1016 4.25781 14.4141 4.45312 14.6094L7.07031 17.2266C7.26562 17.4219 7.57812 17.4219 7.73438 17.2266L13.0078 12.0312Z'
        fill={fillColor}
      />
      <defs>
        <radialGradient
          id='paint0_diamond_1_264'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(10 4.45075) rotate(90) scale(22.9746 16.9767)'
        >
          <stop stopColor='#E7463F' />
          <stop offset='1' stopColor='#EF8439' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default calendarCheckIcon;
