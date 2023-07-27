const settingsIcon = (colorSwitcher) => {
  const fillColor = colorSwitcher ? "white" : "url(#paint0_diamond_1_264)";
  return (
    <svg
      width='22'
      height='26'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginLeft: 6 }}
    >
      <path
        d='M18.8281 12.2188L17.5781 11.4766C17.6172 11.1641 17.6172 10.8516 17.6172 10.5C17.6172 10.1875 17.6172 9.875 17.5781 9.5625L18.8281 8.82031C19.2188 8.625 19.375 8.15625 19.2578 7.76562C18.8281 6.28125 18.0469 4.95312 17.0312 3.85938C16.7188 3.54688 16.25 3.46875 15.8594 3.70312L14.6094 4.44531C14.1016 4.05469 13.5547 3.74219 12.9297 3.46875V2.02344C12.9297 1.55469 12.6562 1.20312 12.2266 1.08594C10.7422 0.734375 9.21875 0.734375 7.73438 1.08594C7.30469 1.20312 7.03125 1.55469 7.03125 2.02344V3.46875C6.40625 3.74219 5.85938 4.05469 5.35156 4.44531L4.10156 3.70312C3.71094 3.46875 3.24219 3.54688 2.92969 3.85938C1.91406 4.95312 1.13281 6.28125 0.703125 7.76562C0.585938 8.15625 0.742188 8.625 1.13281 8.82031L2.38281 9.5625C2.34375 9.875 2.34375 10.1875 2.34375 10.5391C2.34375 10.8516 2.34375 11.1641 2.38281 11.4766L1.13281 12.2188C0.742188 12.4141 0.585938 12.8828 0.703125 13.2734C1.13281 14.7578 1.91406 16.0859 2.92969 17.1797C3.24219 17.4922 3.71094 17.5703 4.10156 17.3359L5.35156 16.5938C5.85938 16.9844 6.40625 17.2969 7.03125 17.5703V19.0156C7.03125 19.4844 7.30469 19.8359 7.73438 19.9531C9.21875 20.3047 10.7422 20.3047 12.2266 19.9531C12.6562 19.8359 12.9297 19.4844 12.9297 19.0156V17.5703C13.5547 17.2969 14.1016 16.9844 14.6094 16.5938L15.8594 17.3359C16.25 17.5703 16.7188 17.4922 17.0312 17.1797C18.0469 16.0859 18.8281 14.7578 19.2578 13.2734C19.375 12.8828 19.2188 12.4141 18.8281 12.2188ZM16.2891 16.125L14.4531 15.0703C13.3984 16.0078 13.0469 16.2031 11.6797 16.7109V18.7812C11.1328 18.8984 10.5469 18.9766 9.96094 18.9766C9.375 18.9766 8.82812 18.8984 8.28125 18.7812V16.7109C6.95312 16.2422 6.5625 16.0078 5.50781 15.0703L3.67188 16.125C2.92969 15.2656 2.34375 14.25 1.95312 13.1562L3.78906 12.1406C3.51562 10.7344 3.51562 10.3047 3.78906 8.89844L1.95312 7.88281C2.34375 6.78906 2.92969 5.77344 3.67188 4.91406L5.50781 5.96875C6.5625 5.03125 6.95312 4.79688 8.28125 4.32812V2.25781C8.82812 2.14062 9.41406 2.0625 10 2.0625C10.5859 2.0625 11.1328 2.14062 11.6797 2.25781V4.32812C13.0078 4.79688 13.3984 5.03125 14.4531 5.96875L16.2891 4.91406C17.0312 5.77344 17.6172 6.78906 18.0078 7.88281L16.1719 8.89844C16.4453 10.3047 16.4453 10.7344 16.1719 12.1406L18.0078 13.1562C17.6172 14.25 17.0312 15.2656 16.2891 16.125ZM10 6.75C7.92969 6.75 6.25 8.46875 6.25 10.5C6.25 12.5703 7.92969 14.25 10 14.25C12.0312 14.25 13.75 12.5703 13.75 10.5C13.75 8.46875 12.0312 6.75 10 6.75ZM10 13C8.59375 13 7.5 11.9062 7.5 10.5C7.5 9.13281 8.59375 8 10 8C11.3672 8 12.5 9.13281 12.5 10.5C12.5 11.9062 11.3672 13 10 13Z'
        fill={fillColor}
      />
      <defs>
        <radialGradient
          id='paint0_diamond_1_274'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(10 4.09137) rotate(90) scale(22.9746 16.9767)'
        >
          <stop stopColor='#E7463F' />
          <stop offset='1' stopColor='#EF8439' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default settingsIcon;
