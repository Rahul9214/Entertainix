import React from 'react';
import Image from 'next/image'; 


const DesignTeams = () => {
  return (
    <div className="relative top-0 left-0 bg-gray-200 shadow-[inset_0px_-80px_90px_#080810] w-full h-screen overflow-hidden text-center text-white font-heading-2">
      <div className="absolute top-[120px] left-[120px] w-full max-w-screen-xl h-full mx-auto overflow-hidden">
        <TeamSection />
        <CircleBackground />
        <MainImageSection />
      </div>
    </div>
  );
};

// Component for the Design Team section
const TeamSection = () => (
  <div className="absolute top-[562px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-12">
    <div className="flex flex-col items-center gap-6">
      <div className="rounded-40xl bg-gradient-to-b from-[#205f5f] to-transparent flex items-center py-2 px-6">
        <div>5 Members</div>
      </div>
      <div className="text-center max-w-lg">
        <h2 className="text-4xl mb-4">Design Dynamos</h2>
        <p className="text-lg text-opacity-50">
          The artists behind the visuals. These design superheroes bring ideas
          to life, painting our projects with creativity and imagination.
        </p>
      </div>
    </div>
    <CallToAction />
  </div>
);

// Call to Action section
const CallToAction = () => (
  <div className="flex items-center gap-2 text-mediumturquoise">
    <div>Our design team is growing. Apply Now</div>
    <Image
      className="w-7 h-7 object-contain"
      alt="Apply now"
      src="/group-1321314281@2x.png"
      width={28}
      height={28}
    />
  </div>
);

// Circular background and images
const CircleBackground = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1605px] h-full rounded-full bg-gainsboro shadow-[inset_0px_68px_61px_rgba(34,_33,_100,_0.12)] border border-midnightblue"></div>
    <BackgroundImages />
  </div>
);

// Images positioned within the circle background
const BackgroundImages = () => (
  <>
    <div className="absolute top-[318px] left-0 w-[230px] h-[704px]">
      <Image
        className="rounded-[111px]"
        alt="Team member"
        src="/frame-1321315113@2x.png"
        width={230}
        height={230}
        objectFit="contain"
      />
    </div>
    <div className="absolute top-[318px] right-0 w-[230px] h-[704px]">
      <Image
        className="rounded-[111px]"
        alt="Team member"
        src="/frame-1321315111@2x.png"
        width={230}
        height={230}
        objectFit="contain"
      />
    </div>
    <div className="absolute top-[0px] left-[144px] w-[230px] h-[313px]">
      <Image
        className="rounded-[111px]"
        alt="Team member"
        src="/frame-1321315110@2x.png"
        width={230}
        height={230}
        objectFit="contain"
      />
    </div>
  </>
);

// Main Image Section with arrows
const MainImageSection = () => (
  <div className="absolute top-[298px] left-1/2 transform -translate-x-1/2 w-[545px] h-[300px]">
    <Image
      className="rounded-13xl"
      alt="Main team member"
      src="/frame-1321315109@2x.png"
      width={300}
      height={300}
      objectFit="cover"
    />
    <div className="flex justify-between items-center mt-6">
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />
    </div>
  </div>
);

// Arrow Button component
const ArrowButton = ({ direction }) => (
  <div className="w-[55px] h-[55px] rounded-65xl bg-whitesmoke backdrop-blur-md flex items-center justify-center p-2">
    <span className="text-lg">{direction === 'left' ? '<-' : '->'}</span>
  </div>
);

export default DesignTeams;
