import indusrtyHub from "../../Assets/servicesPics/industryHub.png";
import customize from "../../Assets/servicesPics/customize.png";
import shiping from "../../Assets/servicesPics/shiping.png";
import monitoring from "../../Assets/servicesPics/monitoring.png";

export const serviceCardsData = [
  {
    img: indusrtyHub,
    text: "Source from Industry Hubs",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.755 11.255H11.965L11.685 10.985C12.665 9.845 13.255 8.365 13.255 6.755C13.255 3.165 10.345 0.255005 6.755 0.255005C3.165 0.255005 0.255005 3.165 0.255005 6.755C0.255005 10.345 3.165 13.255 6.755 13.255C8.365 13.255 9.845 12.665 10.985 11.685L11.255 11.965V12.755L16.255 17.745L17.745 16.255L12.755 11.255ZM6.755 11.255C4.26501 11.255 2.255 9.245 2.255 6.755C2.255 4.26501 4.26501 2.255 6.755 2.255C9.245 2.255 11.255 4.26501 11.255 6.755C11.255 9.245 9.245 11.255 6.755 11.255Z"
          fill="#1C1C1C"
        />
      </svg>
    ),
  },
  {
    img: customize,
    text: "Customize Your Products",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 0H2C1 0 0 0.9 0 2V5.01C0 5.73 0.43 6.35 1 6.7V18C1 19.1 2.1 20 3 20H17C17.9 20 19 19.1 19 18V6.7C19.57 6.35 20 5.73 20 5.01V2C20 0.9 19 0 18 0ZM17 18H3V7H17V18ZM18 5H2V2H18V5Z"
          fill="#1C1C1C"
        />
        <path d="M13 10H7V12H13V10Z" fill="#1C1C1C" />
      </svg>
    ),
  },
  {
    img: shiping,
    text: "Fast, reliable shipping by ocean or air",
    icon: (
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.51 3.03L10.02 6.25L2.5 5.25L2.51 3.03ZM10.01 11.75L2.5 14.97V12.75L10.01 11.75ZM0.51 0L0.5 7L15.5 9L0.5 11L0.51 18L21.5 9L0.51 0Z"
          fill="#1C1C1C"
        />
      </svg>
    ),
  },
  {
    img: monitoring,
    text: "Product monitoring and inspection",
    icon: (
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM9 10.99H16C15.47 15.11 12.72 18.78 9 19.93V11H2V5.3L9 2.19V10.99Z"
          fill="#1C1C1C"
        />
      </svg>
    ),
  },
];
