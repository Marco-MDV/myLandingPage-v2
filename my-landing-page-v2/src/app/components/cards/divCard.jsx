import Box from "./box";
import Dots from "./dots";
import Text from "./colorText/text";
import Bubble from "./bubble";

const arrColors = ["#ff6258", "#ffc04b", "#2fd17d"];

export default function DivCard() {
  return (
    <div className="relative md:rotate-card-3d bg-[#ffffff0a] hover:bg-[#ffffff1a] border border-[#ffffff29] rounded-2xl w-full bg-[linear-gradient(145deg,#211c2eed,#0e0e12f0)] lg:h-[350px] lg:w-[350px] xl:w-[600px]">
      <div className="flex flex-row lg:flex-row items-center justify-between w-full gap-2 mb-4 border-b border-[#ffffff29] pt-2 px-1">
        <Dots arrColors={arrColors} />
        <p className="text-[#ffffff99] text-sm">marco.dev</p>
      </div>
      <Text />
      <Box
        myClassP="!text-[#c4b5fd]"
        text="Digital Craft"
        svg={
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#c4b5fd"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19c1.2-3.678 2.526-5.005 6-6c-3.474-.995-4.8-2.322-6-6c-1.2 3.678-2.526 5.005-6 6c3.474.995 4.8 2.322 6 6Zm-8-9c.6-1.84 1.263-2.503 3-3c-1.737-.497-2.4-1.16-3-3c-.6 1.84-1.263 2.503-3 3c1.737.497 2.4 1.16 3 3Zm1.5 10c.3-.92.631-1.251 1.5-1.5c-.869-.249-1.2-.58-1.5-1.5c-.3.92-.631 1.251-1.5 1.5c.869.249 1.2.58 1.5 1.5Z"
            />
          </svg>
        }
        myClassDiv="absolute top-1 left-0 md:-left-20 md:-top-5"
      />
      <Box text="Napoli · Italia" myClassDiv="absolute w-28 right-1 bottom-2 md:-right-10 md:-bottom-2" />
      <Bubble
        myClassDiv="  right-0 top-0 md:-right-15"
        svg={
          <svg
            width="w-full"
            height="h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#c4b5fd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18 21c1.232 0 2.231-1.151 2.231-2.571c0-2.248-.1-3.742 1.442-5.52c.436-.502.436-1.316 0-1.818c-1.542-1.777-1.442-3.272-1.442-5.52C20.231 4.151 19.232 3 18 3M6 21c-1.232 0-2.231-1.151-2.231-2.571c0-2.248.1-3.742-1.442-5.52c-.436-.502-.436-1.316 0-1.818C3.835 9.353 3.769 7.84 3.769 5.57C3.769 4.151 4.768 3 6 3"
            />
          </svg>
        }
      />
      <Bubble
        myClassDiv=" bottom-0 left-0 md:-left-15"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="w-full"
            height="h-full"
            viewBox="0 0 24 24"
          >
            <path
              fill="#c4b5fd"
              d="M15.507 9.776a.75.75 0 0 0-1.06-1.06l-3.482 3.48l-1.411-1.41a.75.75 0 0 0-1.061 1.06l1.941 1.942a.75.75 0 0 0 1.061 0z"
            />
            <path
              fill="#c4b5fd"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.86 2.296a2.25 2.25 0 0 0-1.721 0L4.59 5.01a2.18 2.18 0 0 0-1.362 1.944c-.134 4.54 1.204 10.818 7.707 14.57c.66.382 1.475.378 2.132-.01c6.363-3.75 7.82-10.012 7.703-14.557c-.023-.883-.585-1.625-1.361-1.947zm-1.147 1.386a.75.75 0 0 1 .574 0l6.548 2.713a.68.68 0 0 1 .436.6c.108 4.228-1.24 9.852-6.966 13.227a.62.62 0 0 1-.62.002c-5.843-3.371-7.083-8.988-6.958-13.227a.69.69 0 0 1 .437-.602z"
            />
          </svg>
        }
      />
    </div>
  );
}
