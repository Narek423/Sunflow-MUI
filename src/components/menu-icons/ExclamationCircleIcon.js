const exclamationCircleIcon = (colorSwitcher) => {
  const fillColor = colorSwitcher ? "white" : "url(#paint0_diamond_1_264)";

  return (
    <svg
      width='22'
      height='23'
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ marginLeft: 6 }}
    >
      <path
        d='M10 2C14.6094 2 18.4375 5.78906 18.4375 10.4375C18.4375 15.125 14.6484 18.875 10 18.875C5.3125 18.875 1.5625 15.125 1.5625 10.4375C1.5625 5.78906 5.3125 2 10 2ZM10 0.75C4.64844 0.75 0.3125 5.125 0.3125 10.4375C0.3125 15.7891 4.64844 20.125 10 20.125C15.3125 20.125 19.6875 15.7891 19.6875 10.4375C19.6875 5.125 15.3125 0.75 10 0.75ZM9.53125 5.4375C9.25781 5.4375 9.0625 5.67188 9.0625 5.94531L9.33594 12.5078C9.33594 12.7422 9.57031 12.9375 9.80469 12.9375H10.1562C10.3906 12.9375 10.625 12.7422 10.625 12.5078L10.8984 5.94531C10.8984 5.67188 10.7031 5.4375 10.4297 5.4375H9.53125ZM10 13.7188C9.375 13.7188 8.90625 14.2266 8.90625 14.8125C8.90625 15.4375 9.375 15.9062 10 15.9062C10.5859 15.9062 11.0938 15.4375 11.0938 14.8125C11.0938 14.2266 10.5859 13.7188 10 13.7188Z'
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

export default exclamationCircleIcon;
