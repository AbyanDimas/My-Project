import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col mx-auto">
        <div className="draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M31.9904 13.965L22.4166 4.40166C21.6057 3.60976 20.5294 3.16817 19.4104 3.16817C18.2914 3.16817 17.2151 3.60976 16.4041 4.40166L6.8304 13.9017C6.40502 14.283 6.0629 14.7524 5.82645 15.279C5.58999 15.8056 5.46454 16.3776 5.45831 16.9575V30.5425C5.47456 31.6946 5.93476 32.793 6.73808 33.5973C7.5414 34.4016 8.62236 34.846 9.74415 34.8333H28.9225C30.0443 34.846 31.1252 34.4016 31.9285 33.5973C32.7319 32.793 33.1921 31.6946 33.2083 30.5425V16.9575C33.2071 16.4009 33.0989 15.85 32.8899 15.3365C32.6809 14.823 32.3752 14.3569 31.9904 13.965ZM18.47 6.68166C18.7058 6.46025 19.0138 6.33747 19.3333 6.33747C19.6528 6.33747 19.9608 6.46025 20.1966 6.68166L28.5833 15.0417L20.1504 23.4017C19.9146 23.6231 19.6066 23.7459 19.2871 23.7459C18.9675 23.7459 18.6596 23.6231 18.4237 23.4017L10.0833 15.0417L18.47 6.68166ZM30.125 30.5425C30.1052 30.8533 29.9688 31.144 29.7445 31.3537C29.5203 31.5633 29.2256 31.6755 28.9225 31.6667H9.74415C9.44102 31.6755 9.14636 31.5633 8.9221 31.3537C8.69785 31.144 8.56147 30.8533 8.54165 30.5425V17.9708L14.7854 24.1458L12.2262 26.6792C11.9391 26.9758 11.7779 27.3771 11.7779 27.7954C11.7779 28.2137 11.9391 28.615 12.2262 28.9117C12.3695 29.066 12.5417 29.1891 12.7324 29.2734C12.9232 29.3578 13.1286 29.4017 13.3362 29.4025C13.7332 29.4009 14.1142 29.2421 14.4 28.9592L17.1287 26.2675C17.8065 26.6928 18.5853 26.9179 19.3796 26.9179C20.1738 26.9179 20.9527 26.6928 21.6304 26.2675L24.3591 28.9592C24.6449 29.2421 25.026 29.4009 25.4229 29.4025C25.6306 29.4017 25.8359 29.3578 26.0267 29.2734C26.2174 29.1891 26.3896 29.066 26.5329 28.9117C26.82 28.615 26.9812 28.2137 26.9812 27.7954C26.9812 27.3771 26.82 26.9758 26.5329 26.6792L23.9583 24.1458L30.125 17.9708V30.5425Z"
                      fill="#581ff8"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Email
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Contact us at
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="mailto: hello@loopple.com"
                >
                  hello@loopple.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M30.4237 20.5833C30.0846 20.5833 29.73 20.4725 29.3908 20.3933C28.7045 20.2357 28.0297 20.0294 27.3712 19.7758C26.656 19.5086 25.8699 19.5225 25.164 19.8148C24.4582 20.1071 23.8826 20.6572 23.5479 21.3592L23.2087 22.0875C21.7115 21.2154 20.3283 20.1513 19.0925 18.9208C17.8944 17.6516 16.8583 16.231 16.0092 14.6933L16.7183 14.3608C17.4018 14.0171 17.9374 13.4259 18.222 12.701C18.5067 11.9761 18.5202 11.1687 18.26 10.4342C18.0151 9.7518 17.8143 9.05363 17.6587 8.34417C17.5817 7.99584 17.52 7.63167 17.4737 7.28334C17.2865 6.16807 16.7177 5.1581 15.8698 4.4353C15.0219 3.7125 13.9506 3.32439 12.8487 3.34084H8.20832C7.55657 3.33996 6.91201 3.48056 6.31687 3.75343C5.72174 4.02629 5.18948 4.42526 4.75498 4.92417C4.31148 5.43662 3.98125 6.04161 3.78698 6.69756C3.59271 7.35351 3.53901 8.04489 3.62957 8.72417C4.4676 15.3142 7.39927 21.4362 11.97 26.1408C16.5508 30.8351 22.5117 33.846 28.9283 34.7067C29.1284 34.7224 29.3294 34.7224 29.5296 34.7067C30.9352 34.5947 32.2733 34.0651 33.3129 33.1867C34.3525 32.3082 35.0258 31.129 35.2071 29.8492C35.3884 28.5695 35.0592 27.2553 34.2842 26.1861C34.2842 26.1861 30.8308 21.6601 30.4237 20.5833Z"
                      fill="#581ff8"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Phone
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Call us at
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="tel: (+1) 555-1234"
                >
                  (+1) 555-1234
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M30.3542 7.50833L20.9458 16.8167L18.4208 15.3583L17.8083 15.6167C17.1833 15.9083 16.4625 16.0833 15.7292 16.0833C14.9958 16.0833 14.275 15.9083 13.6542 15.6167L13.0458 15.3583L10.5208 16.8167L1.1125 7.50833C0.633333 6.94167 0.375 6.25833 0.375 5.54167C0.375 4.825 0.633333 4.14167 1.1125 3.575L2.55833 2.13333C3.125 1.56667 3.80833 1.30833 4.525 1.30833C5.24167 1.30833 5.925 1.56667 6.49167 2.13333L15.0625 10.8083L23.6333 2.13333C24.2 1.56667 24.8833 1.30833 25.6 1.30833C26.3167 1.30833 27 1.56667 27.5667 2.13333L29.0125 3.575C29.4917 4.14167 29.75 4.825 29.75 5.54167C29.75 6.25833 29.4917 6.94167 29.0125 7.50833H30.3542ZM25.6917 9.95C25.5042 10.2583 25.2958 10.5417 25.0625 10.8042L18.4208 17.8583L12.6208 11.3833C12.3958 11.1 12.175 10.825 11.9708 10.5375L5.86667 3.575C5.63333 3.3 5.41667 3.01667 5.21667 2.725L3.77083 1.28333C3.5875 1.01667 3.3875 0.775 3.17917 0.516667C3.35417 0.416667 3.53333 0.325 3.71667 0.241667C4.44167 -0.0458333 5.2125 -0.0625 5.9375 0.241667L6.50417 0.516667L18.4208 12.45L30.3375 0.516667C31.0625 -0.0625 31.8333 -0.0458333 32.5583 0.241667C32.7417 0.325 32.9208 0.416667 33.0958 0.516667C32.8875 0.775 32.6875 1.01667 32.5042 1.28333L31.0583 2.725C30.8583 3.01667 30.6417 3.3 30.4083 3.575L24.3042 10.5375C24.1 10.825 23.8792 11.1 23.6542 11.3833L17.8458 17.8583L11.2042 10.8042C10.9708 10.5417 10.7625 10.2583 10.575 9.95L2.4625 1.925C2.09583 1.44167 1.65 1.07083 1.15833 0.829167C0.666667 0.5875 0.1375 0.483333 0 0.491667C0.05 0.516667 0.1 0.545833 0.15 0.579167L1.57083 1.775C1.92917 2.05417 2.35 2.225 2.77917 2.28333L10.4917 9.30417C10.7042 9.49167 10.9292 9.69167 11.1792 9.87917C11.4208 9.6625 11.6792 9.45417 11.9292 9.24583L18.4208 15.6833L24.9125 9.24583C25.1625 9.45417 25.4208 9.6625 25.6625 9.87917C25.9125 9.69167 26.1375 9.49167 26.35 9.30417L34.0583 2.28333C34.4875 2.225 34.9083 2.05417 35.2667 1.775L36.6833 0.579167C36.7333 0.545833 36.7833 0.516667 36.8333 0.491667C36.6958 0.483333 36.1667 0.5875 35.675 0.829167C35.1833 1.07083 34.7375 1.44167 34.3708 1.925L26.2583 9.95H25.6917Z"
                      fill="#581ff8"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Address
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Visit us at
                </p>
                <p className="text-lg font-bold text-purple-blue-500">
                  123 Loopple St, Loop City, LP 12345
                </p>
              </div>
            </div>
            <p className="text-center text-base leading-7 text-dark-grey-600">
              © 2024 Loopple. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
