import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";

export const links: { name: string; url: string }[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Members",
    url: "/members",
  },
  {
    name: "Alumni",
    url: "/alumni",
  },
  {
    name: "Achievements",
    url: "/achievements",
  },
];

const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowNavbar(!showNavbar);
  };

  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex p-5 lg:items-center">
          <Link href="/">
            <a className="text-2xl font-medium text-dark">
              {" "}
              <svg
                className="w-16 h-16"
                viewBox="0 0 128 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M89.0816 0.190412C88.8355 0.288829 87.891 1.42309 86.9826 2.71095C83.7716 7.26417 82.5121 8.0965 80.9148 6.72252C80.5212 6.38439 79.2295 4.97209 78.0442 3.58441C76.8589 2.19707 75.537 0.950687 75.1066 0.815363C73.8688 0.425911 72.8944 1.90358 71.986 5.54749C71.1868 8.75308 70.2387 10.501 69.2983 10.501C69.0232 10.501 67.1245 9.63111 65.0793 8.56785C59.308 5.56752 58.9963 5.74994 59.3484 11.9221C59.4973 14.539 59.4537 16.3825 59.2328 16.7917C58.6953 17.7871 57.4936 17.9207 54.2153 17.3488C50.0303 16.6184 48.6907 16.6623 48.2145 17.5442C47.7557 18.3941 47.889 18.8753 49.6863 22.8496C51.1497 26.0862 51.3652 27.3853 50.5504 28.0556C50.2714 28.2854 48.4762 28.7839 46.5615 29.1635C41.7003 30.1276 41.1302 30.3895 41.1302 31.659C41.1302 32.4752 41.7245 33.3114 43.9185 35.5827C45.4524 37.1704 46.8235 38.833 46.9661 39.2776C47.3079 40.3454 46.2761 41.4259 43.3846 43.0287C39.2602 45.3152 38.2394 46.6231 39.6233 47.848C39.9647 48.15 41.6 49.0459 43.2576 49.8392C46.5424 51.4107 47.911 52.6128 47.6298 53.6793C47.5316 54.0515 46.492 55.5207 45.3198 56.945C40.9933 62.2005 41.2419 62.8799 47.6897 63.4212C49.2499 63.5519 51.0451 63.8697 51.6787 64.127C53.1771 64.7351 53.1877 65.6946 51.7425 69.8644C51.1234 71.6513 50.7029 73.5111 50.7674 74.1782C50.8639 75.174 51.0334 75.3684 51.8914 75.4657C52.447 75.5286 54.5581 75.1613 56.5827 74.6492C58.607 74.1367 60.5724 73.8151 60.9496 73.9336C61.9839 74.2591 62.4044 75.9606 62.4044 79.8203C62.4044 81.7374 62.5697 83.6119 62.7714 83.9859C63.3852 85.1222 64.6861 84.7679 68.0251 82.5539C69.7767 81.3922 71.6931 80.3462 72.2838 80.2288C73.2242 80.0425 73.4475 80.1627 74.0854 81.1985C74.4861 81.8488 74.991 82.9346 75.2076 83.6112C76.2054 86.7257 77.407 88.8976 78.2484 89.1071C79.3377 89.3781 80.0131 88.7682 82.4611 85.305C83.5195 83.8077 84.6945 82.4186 85.0725 82.2182C86.4993 81.4611 86.5042 81.465 91.2998 86.6867C94.0938 89.7289 94.9023 89.273 96.4432 83.7869C96.8776 82.2404 97.4584 80.5398 97.7335 80.0084C98.4965 78.5353 99.885 78.729 103.575 80.8221C107.386 82.9838 108.859 83.0959 109.236 81.2523C109.363 80.6316 109.325 78.5929 109.152 76.722C108.66 71.4148 109.151 71.0637 115.516 72.1744C118.625 72.7167 120.027 72.5139 120.435 71.4626C120.636 70.9406 120.002 69.1522 118.059 64.7656C116.644 61.5713 117.242 60.9122 122.327 60.0613C128.684 58.9977 128.96 57.9228 124.088 53.2072C121.668 50.8638 121.077 49.8143 121.617 48.8143C121.812 48.4536 123.328 47.3461 124.986 46.3535L128 44.5486V42.6639V40.7792L124.543 39.0846C121.376 37.5325 121.077 37.2987 120.979 36.3029C120.891 35.4116 121.299 34.6829 123.242 32.2608C126.331 28.4078 126.562 27.8999 125.639 26.9846C125.071 26.4218 124.161 26.2036 121.253 25.9322C115.07 25.3554 114.82 24.9712 116.832 19.1337C118.761 13.5362 118.303 13.0595 112.413 14.5397C110.401 15.0455 108.338 15.4114 107.828 15.3527C106.54 15.2043 106.061 13.5987 106.036 9.3355C106.025 7.43815 105.843 5.5626 105.629 5.16823C105.04 4.0765 103.611 4.54363 100.087 6.98087C95.5965 10.087 94.6026 9.81564 93.0269 5.05294C92.3103 2.886 91.1622 0.570373 90.6339 0.225209C90.1907 -0.0637164 89.7436 -0.0739093 89.0816 0.190412ZM76.6872 15.5523C78.932 16.5006 80.3599 19.0036 80.0333 21.4173C79.7426 23.5667 78.9533 24.4338 75.9047 25.9533C72.6813 27.56 69.42 30.3961 67.5021 33.2608C65.7463 35.8829 64.2326 40.3272 63.9443 43.706C63.6915 46.6698 62.9533 47.9809 60.9617 49.002C58.6148 50.2048 55.1194 49.2937 53.6359 47.092C52.6566 45.6389 52.5867 43.4902 53.3831 39.3272C55.2698 29.4693 61.3662 21.2331 70.1429 16.6869C73.4096 14.9949 74.7977 14.7541 76.6872 15.5523ZM102.679 18.5969C104.177 19.1618 107.595 22.2704 109.558 24.8542C112.834 29.1649 115.227 34.6123 116.104 39.75C116.483 41.9718 116.389 47.5246 115.924 50.3823C115.274 54.3777 113.328 56.3165 110.035 56.2511C108.119 56.2128 106.659 55.4729 105.601 54.0033C104.716 52.7735 104.731 53.0308 105.148 45.7489C105.525 39.1785 103.589 34.3901 98.5586 29.4506C96.1762 27.1115 95.4242 26.1371 95.237 25.1477C94.4409 20.9417 98.7763 17.1259 102.679 18.5969ZM89.7872 29.1571C95.6681 31.1209 99.7194 35.8864 100.704 41.9992C101.606 47.5918 99.1184 53.8367 94.7133 57.0423C91.6232 59.2908 89.1937 60.1815 85.6884 60.3506C77.456 60.7474 71.0279 56.0856 68.9612 48.2185C66.8628 40.2326 71.6846 31.6478 79.694 29.1097C82.5706 28.1979 86.9772 28.2187 89.7872 29.1571ZM85.3129 30.1424C84.9161 30.5768 84.0698 30.8559 82.8433 30.9564C80.3521 31.1613 76.7784 32.8734 74.8481 34.7873C73.989 35.639 72.7923 37.3637 72.1888 38.6203C71.1889 40.7022 71.0914 41.2171 71.0914 44.4199C71.0914 47.4832 71.2116 48.1886 72.0257 49.9102C75.3863 57.0149 83.5514 59.8441 90.6623 56.3682C97.5225 53.0146 100.17 44.5978 96.5038 37.7982C95.2916 35.5494 92.3376 32.9191 89.8993 31.9174C88.8182 31.4731 87.9335 30.9072 87.9335 30.6594C87.9335 30.2176 87.1059 29.5522 86.7556 29.5522C86.0444 29.5522 85.6444 29.7789 85.3129 30.1424ZM25.5372 50.6399C25.1167 51.0853 24.4611 51.9482 24.08 52.5573C22.9354 54.3872 22.4273 54.3264 20.3655 52.1127C19.1241 50.7798 18.3253 50.1872 17.9586 50.3264C17.6569 50.4413 17.1183 51.5176 16.7616 52.7179C15.8649 55.7355 15.4103 55.9365 12.7539 54.4891C9.80813 52.8835 9.41669 53.0972 9.67623 56.1678C9.96379 59.5657 9.67233 59.8859 6.76982 59.3643C5.53804 59.1428 4.30874 59.0458 4.0382 59.1488C3.39218 59.3945 3.41239 60.5439 4.08536 61.8338C5.63874 64.8113 5.41323 65.4331 2.63162 65.8465C0.257773 66.1994 0 66.3526 0 67.4088C0 68.0489 0.45846 68.7979 1.41828 69.7273C2.19834 70.4823 2.83657 71.3796 2.83657 71.7213C2.83657 72.0777 2.23309 72.684 1.42112 73.1438C0.123745 73.878 0.00531835 74.0685 0.00283636 75.4225C-2.05305e-07 76.8365 0.0687866 76.93 1.59557 77.5996C3.60811 78.4822 3.6386 79.1311 1.77285 81.3697C-0.330105 83.8924 -0.0882884 84.4414 3.27056 84.7676C4.3871 84.8758 5.46393 85.0646 5.66391 85.1873C6.1869 85.5078 6.11173 86.9493 5.49584 88.4104C5.20332 89.1046 4.96399 90.0691 4.96399 90.5538C4.96399 91.4072 5.01788 91.4273 6.6482 91.1788C7.57434 91.0375 8.97064 90.8983 9.75069 90.8695L11.169 90.8167L11.3463 93.2772C11.5204 95.6947 11.809 96.6163 12.3912 96.6163C12.5529 96.6163 13.5109 96.0533 14.5204 95.3647C16.9854 93.6839 17.7005 93.8294 18.6543 96.2051C19.0681 97.2357 19.6773 98.3429 20.0081 98.6655C20.6693 99.3109 20.6956 99.2898 23.151 96.1323C23.6956 95.4318 24.3076 94.8589 24.5111 94.8589C24.7146 94.8589 25.7245 95.7288 26.7548 96.7921C27.7856 97.8554 28.7957 98.7253 28.9996 98.7253C29.3443 98.7253 30.0041 97.2132 30.764 94.6831C31.1973 93.2403 32.1408 93.1921 34.5901 94.4877C37.3104 95.9267 37.7327 95.6132 37.4072 92.3985C37.092 89.2881 37.4239 88.9929 40.5714 89.5816C43.971 90.2174 44.2341 89.8182 42.679 86.383C41.5585 83.9075 41.7936 83.4126 44.2618 83.0534C46.4629 82.7328 47.5132 82.3194 47.5093 81.7746C47.5075 81.5282 46.709 80.4031 45.7346 79.2748C44.7603 78.1465 44.0614 77.0657 44.1813 76.8731C44.3015 76.6805 45.2489 75.9845 46.2871 75.3262C47.3253 74.6678 48.2787 73.9621 48.406 73.7582C48.7719 73.1712 47.8688 72.3554 45.897 71.4911C44.8957 71.0521 43.9802 70.4443 43.8625 70.141C43.7299 69.7979 44.2462 68.8264 45.2262 67.5758C46.0935 66.4683 46.8033 65.451 46.8033 65.3154C46.8033 64.7547 45.7971 64.3618 43.7895 64.1382C40.7781 63.8029 40.56 63.4852 41.4826 60.7709C42.4776 57.843 42.2989 57.4395 40.1487 57.7636C36.6938 58.2845 36.0506 58.2089 35.7776 57.2494C35.6404 56.7661 35.512 55.5351 35.4925 54.5144C35.4688 53.268 35.2929 52.5956 34.9578 52.468C34.6834 52.3636 33.5793 52.8571 32.5042 53.5647C30.3427 54.9875 29.4301 55.0364 28.8975 53.758C28.0628 51.7545 27.0956 50.0701 26.713 49.9545C26.4864 49.8863 25.9574 50.1946 25.5372 50.6399ZM20.2017 58.998C21.9681 60.7491 21.4068 62.8127 18.7922 64.18C15.3008 66.0057 13.0021 69.2749 12.439 73.2151C12.0533 75.9153 11.7522 76.394 10.0985 76.935C8.70897 77.3898 7.03716 76.7395 6.35745 75.4805C5.86992 74.5779 6.18726 71.6524 7.05596 69.0426C9.32556 62.2226 17.3045 56.126 20.2017 58.998ZM71.5279 60.5242C78.1229 64.9758 85.5558 65.6693 93.3815 62.5632C94.8998 61.9604 96.5343 61.4672 97.0134 61.4672C100.536 61.4672 103.472 65.4813 102.49 68.9568C101.865 71.1712 100.764 72.1515 97.5066 73.3969C89.5131 76.4527 81.1343 76.7863 73.8716 74.3374C68.9338 72.6724 63.1777 69.2911 61.8424 67.2704C60.4656 65.1874 60.8876 62.0679 62.8101 60.1189C65.1821 57.7137 67.5259 57.8226 71.5279 60.5242ZM36.1325 62.0824C40.0257 65.9452 42.1209 72.1002 41.205 76.9831C40.699 79.6797 39.7421 80.8038 37.966 80.788C35.6141 80.7673 34.5487 79.2499 35.0326 76.6105C35.7297 72.8084 34.5125 69.2475 31.4497 66.1301C29.9761 64.6303 29.6421 64.0641 29.6421 63.0641C29.6421 61.3045 30.9125 60.0613 32.7106 60.0613C33.9239 60.0613 34.3476 60.3115 36.1325 62.0824ZM28.0458 66.6166C31.0657 68.2457 32.623 70.8883 32.617 74.3733C32.6053 81.3669 25.2281 85.383 19.0933 81.736C16.3978 80.1335 15.1157 77.9483 14.9544 74.6823C14.8462 72.4844 14.9526 71.9578 15.8497 70.2545C16.9141 68.2345 19.1777 66.3765 21.4037 65.696C23.2169 65.1417 26.0365 65.5326 28.0458 66.6166ZM24.2785 66.4036C24.1633 66.5885 23.6396 66.7431 23.1148 66.7473C20.7885 66.7663 16.9385 69.7213 16.4964 71.8274C16.3939 72.3157 16.2276 73.109 16.1269 73.5905C15.4887 76.6397 18.5341 80.7286 22.0195 81.5015C24.1668 81.9781 25.9379 81.6664 27.9083 80.4657C30.837 78.6812 32.0528 74.3272 30.5065 71.161C29.6584 69.4243 28.0472 67.8925 26.5088 67.361C25.9702 67.1748 25.5291 66.8967 25.5291 66.7428C25.5291 66.3048 24.5122 66.0289 24.2785 66.4036ZM16.6287 83.2372C17.876 83.9982 19.6925 84.8098 20.6651 85.041C22.9326 85.5802 26.4761 85.2569 28.6248 84.3145C29.6925 83.8463 30.6356 83.6635 31.2706 83.8017C33.5105 84.2895 34.5288 87.6473 32.8864 89.1296C30.5466 91.2413 23.9041 92.2568 19.3606 91.1974C15.2412 90.2368 11.2566 87.7672 10.7782 85.8786C10.4496 84.5799 11.3002 82.8959 12.5592 82.3525C14.0871 81.6931 14.1009 81.6959 16.6287 83.2372Z"
                  fill="#242424"
                />
              </svg>
            </a>
          </Link>
          <button
            onClick={handleToggle}
            className="ml-auto flex items-center space-x-8 text-2xl text-dark lg:hidden"
          >
            {showNavbar ? <ImCross /> : <GiHamburgerMenu />}
          </button>
          <div className="hidden space-x-12 lg:ml-auto lg:flex lg:items-center">
            {links.map((link) => (
              <Link key={link.name} href={link.url}>
                <a
                  className={`text-md font-normal text-dark ${
                    router.pathname === `${link.url}`
                      ? "underline underline-offset-4 decoration-2"
                      : ""
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        {showNavbar && (
          <div className="flex flex-col space-y-1 bg-primary-dark py-5 px-4 transition duration-200 ease-in-out lg:hidden">
            {links.map((link) => (
              <Link href={link.url} key={link.name}>
                <a className="rounded-md p-4 text-xl font-medium text-dark hover:bg-secondary-dark">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
