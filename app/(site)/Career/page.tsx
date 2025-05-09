import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Career at TRIVIUM - Open Positions at Our Company",
  description: "Apply For Jobs At The Lead Software development and Digital Marketing Services Provider",
  // other metadata
};

const ErroPage = () => {
  return (
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        {/* <Image
          src="/images/shape/404.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        /> */}

        <h2 className="mb-5 text-2xl font-semibold text-black dark:text-white md:text-4xl">
          We aren't Hiring Currently.
        </h2>
        <p className="mb-7.5">
          We will notify you when we have open positions in the future. Leave us a message with your email address.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blue-500 dark:bg-btndark dark:hover:bg-blackho"
        >
          Return to Home
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ErroPage;
