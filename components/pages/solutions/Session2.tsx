import Image from "next/image";

const SolutionSession2 = () => {
  return (
    <section className=" lg:-mt-28 relative overflow-hidden bg-[#F6FCFC] lg:min-h-[828.328px]  flex flex-col items-center z-30 justify-center ">
      <div className="flex relative z-30 w-full container lg:flex-row gap-8 py-10 lg:items-center justify-between flex-col">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" w-full relative lg:w-1/2 "
        >
          <Image
            src={
              "https://assets.luksai.com/images/website/solutions/session-2/platform.webp"
            }
            alt="platform"
            width={603}
            height={576}
            quality={80}
          />
          <Image
            width={76}
            height={78}
            alt=""
            className=" hidden lg:block absolute top-0 right-2"
            src={
              "https://assets.luksai.com/images/website/solutions/session-2/vector.svg"
            }
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" w-full lg:w-1/2  space-y-4 lg:space-y-8"
        >
          <p className=" text-base lg:text-xl  font-normal text-skin-dark-900">
            Our Platform
          </p>
          <div>
            <h2>
              Luksai is much <br className=" hidden lg:block" /> more than a{" "}
              <br className=" hidden lg:block" />{" "}
              <span className=" text-primary">platform!</span>
            </h2>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={150}
        height={373}
        viewBox="0 0 150 373"
        fill="none"
        className=" hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
      >
        <path
          d="M166.12 139.356C150.643 122.892 144.066 99.7695 140.197 74.6121C138.004 60.5535 136.972 46.31 138.262 31.8815C138.778 25.7771 139.552 19.8577 141.357 14.3082C142.518 10.9786 143.808 7.8339 145.613 5.05918C148.967 -0.120289 153.61 -1.04519 158.123 1.9145C160.961 3.76432 163.282 6.909 165.217 10.2387C168.57 16.1581 171.02 22.8174 172.955 29.8467C178.114 48.3448 179.79 67.7678 179.532 87.7458C179.275 101.064 178.243 114.383 176.308 127.332C176.179 128.257 176.179 128.997 176.05 130.106C179.661 132.696 183.531 133.251 187.529 133.436C204.166 134.546 220.416 131.031 236.15 123.262C241.309 120.672 246.339 117.713 251.24 114.198C260.783 107.724 268.909 98.2897 275.357 86.4509C276.518 84.4161 277.679 82.3813 278.968 80.3465C279.097 80.1615 279.355 80.1615 280 80.1615C279.742 81.4564 279.613 82.3813 279.355 83.3062C274.325 98.6597 266.974 111.053 257.172 120.672C244.92 132.511 231.378 139.91 217.063 143.98C205.326 147.31 193.59 148.79 181.725 146.755C179.146 146.385 176.437 145.46 173.6 144.72C173.342 145.645 173.084 146.755 172.826 147.865C169.344 164.698 165.217 180.976 159.284 196.33C154.512 208.723 148.967 220.192 141.873 230.181C138.004 235.546 133.748 240.355 128.976 243.87C116.724 252.749 105.504 249.974 96.2179 235.546C95.702 234.806 95.1862 234.066 94.4123 232.956C93.8965 234.991 93.5096 236.471 92.9937 238.135C89.6405 251.454 85.9003 264.588 81.1284 277.167C77.0014 287.895 72.2295 298.069 66.039 306.763C63.0727 311.018 59.8484 314.533 56.1083 317.307C47.0804 323.782 38.4394 322.857 30.1853 314.348C28.6377 312.868 27.348 311.018 25.6714 309.168C25.1555 311.203 24.7686 312.683 24.3817 314.348C20.8995 329.146 16.6435 343.76 11.3557 357.448C10.066 360.963 8.5184 364.293 6.84179 367.437C6.06797 369.102 4.77827 370.212 3.61754 371.507C2.58578 372.432 1.42505 372.432 0.522264 370.952C-0.380525 369.472 0.00638453 367.992 0.780204 366.512C2.32784 363.368 3.74651 360.038 5.03621 356.708C11.4847 339.875 16.3856 322.117 20.3836 303.989C20.7705 302.324 21.0285 300.659 20.1257 298.994C11.7426 281.976 7.35767 262.738 4.6493 242.39C0.780204 214.088 0.00638453 185.416 2.32784 156.744C3.10166 146.94 4.39136 137.506 7.2287 128.442C8.26046 125.112 9.55016 121.782 11.0978 119.008C14.9669 112.163 20.2547 111.793 24.8976 117.713C27.7349 121.412 29.6695 125.852 31.2171 130.846C34.4413 140.465 36.2469 150.824 37.4076 161.368C39.7291 181.531 39.7291 201.694 38.3104 222.042C36.6338 246.83 33.2806 271.247 28.6377 295.11C28.1218 297.884 28.1218 299.919 29.7984 301.769C31.8619 304.174 33.7965 306.948 35.989 308.983C40.8898 313.423 46.0486 313.793 51.3364 310.463C54.9476 308.243 57.9139 304.914 60.6222 301.029C65.3941 294.555 69.1342 286.971 72.6164 279.016C79.8387 261.998 85.1265 243.685 89.5115 224.817C89.8984 223.152 90.0274 221.857 89.3825 220.192C83.5789 203.359 80.9995 185.231 79.7098 166.733C78.2911 146.755 78.4201 126.777 80.7415 106.984C81.6443 99.3996 82.8051 91.8154 84.9975 84.7861C85.9003 81.8264 87.0611 78.8667 88.4797 76.4619C91.9619 70.5425 96.8628 70.7275 100.087 76.8319C101.635 79.7916 102.795 83.1212 103.698 86.6359C106.149 96.4399 106.922 106.799 107.438 117.158C108.728 150.269 104.859 182.641 98.4104 214.273C98.1525 215.383 98.0235 216.493 97.6366 217.603C97.1207 219.452 97.3786 221.117 98.1525 222.597C99.958 225.927 101.635 229.626 103.827 232.401C108.857 239.245 114.919 240.91 121.367 237.211C124.72 235.361 127.945 232.401 130.911 229.256C136.07 223.707 140.197 216.678 143.937 209.278C151.804 193.74 157.35 176.352 161.735 158.224C163.282 152.489 164.572 146.015 166.12 139.356ZM23.221 289.375C23.6079 288.265 23.7368 287.895 23.8658 287.34C24.1238 286.416 24.2527 285.306 24.5107 284.381C29.2825 260.148 32.5068 235.361 33.5386 210.203C34.3124 191.89 34.0544 173.577 31.2171 155.449C29.9274 147.31 28.5087 139.356 25.6714 131.956C24.3817 128.812 22.8341 125.852 21.0285 123.262C19.3519 120.857 17.4173 121.042 15.9986 124.002C14.709 126.592 13.5482 129.552 12.7744 132.511C9.93707 142.685 8.90531 153.414 8.26046 164.328C6.97076 188.191 7.87355 211.868 10.7109 235.546C12.7744 252.379 15.7407 268.842 21.1574 284.196C21.8023 285.491 22.3182 287.155 23.221 289.375ZM168.441 123.632C168.828 121.412 169.086 119.932 169.215 118.638C169.731 113.458 170.376 108.464 170.762 103.284C172.181 84.6011 171.794 66.103 168.57 47.7898C166.893 38.3558 164.572 29.4767 160.832 21.3375C159.413 18.3778 157.737 15.7881 155.931 13.3833C153.481 10.4236 151.804 11.1636 150.127 15.0482C149.482 16.528 148.967 18.1928 148.709 19.8577C148.064 24.1122 147.29 28.5518 147.032 32.9913C146.129 49.0847 147.677 64.8081 150.772 80.3465C153.481 93.6652 157.479 106.059 163.798 116.788C165.088 119.008 166.635 121.042 168.441 123.632ZM94.7992 82.5663C94.5413 82.5663 94.1544 82.5663 93.8965 82.7513C93.2516 84.4161 92.3488 85.896 91.8329 87.5608C90.9302 91.0754 89.8984 94.775 89.2535 98.4747C86.1583 116.233 85.6424 134.361 86.2872 152.674C86.8031 169.322 88.3508 185.971 91.704 202.064C91.9619 203.359 92.3488 204.654 92.7357 205.949C93.5096 204.469 94.0254 202.989 94.1544 201.509C95.702 190.595 97.6366 179.866 98.7973 168.952C101.119 149.16 101.893 129.182 100.216 109.389C99.7001 102.729 98.4104 96.0699 97.1207 89.5956C96.8628 87.0058 95.702 84.7861 94.7992 82.5663Z"
          fill="#4FC4D0"
        />
      </svg>
    </section>
  );
};

export default SolutionSession2;
