const moonIcon = (colorSwitcher) => {
  const fillColor = colorSwitcher ? "white" : "url(#paint0_diamond_1_264)";
  return (
    <svg
      width='21'
      height='29'
      viewBox='0 0 20 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginLeft: 6 }}
    >
      <path
        d='M17.5 15.1562C13.5938 15.8984 9.96094 12.8906 9.96094 8.90625C9.96094 6.60156 11.1719 4.49219 13.1641 3.35938C14.1797 2.77344 13.9453 1.25 12.7734 1.05469C12.1875 0.9375 11.5625 0.898438 10.9375 0.859375C5.42969 0.859375 0.9375 5.35156 0.9375 10.8594C0.9375 16.4062 5.42969 20.8594 10.9375 20.8594C14.0234 20.8594 16.875 19.4922 18.7109 17.1875C19.4531 16.25 18.6719 14.9609 17.5 15.1562ZM10.9375 19.6094C6.13281 19.6094 2.1875 15.7031 2.1875 10.8594C2.1875 6.05469 6.13281 2.10938 10.9375 2.10938C11.4844 2.10938 12.0312 2.1875 12.5391 2.26562C10.2344 3.59375 8.71094 6.05469 8.71094 8.90625C8.71094 13.7109 13.0469 17.2656 17.7344 16.4062C16.1328 18.3594 13.7109 19.6094 10.9375 19.6094Z'
        fill={fillColor}
      />
      <defs>
        <radialGradient
          id='paint0_diamond_1_271'
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

export default moonIcon;
