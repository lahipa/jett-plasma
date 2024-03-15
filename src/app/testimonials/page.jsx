import React from 'react'
import Container from '@/app/_components/container';
import { CardTestimony } from '@/app/_components/cards';
import { CtaLayoutContact } from "@/app/_clients";

// data
import { Question } from "@/app/_data";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    testimonial: "I love Jett Plasma! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.",
    time: "2 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=male" 
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial: "I would recommend Jett Plasma for anyone trying to get the word out about their business. It has saved me so much time!",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=female" 
  },
  {
    id: 3,
    name: "Jane Smith",
    testimonial: "I have been using Jett Plasma for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=male" 
  },
  {
    id: 4,
    name: "Jane Smith",
    testimonial: "I love anything that I purchase from Jett Plasma!",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=male" 
  },
  {
    id: 5,
    name: "Jane Smith",
    testimonial: "I have tried a lot of similar products and Jett Plasma is the best!",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=female" 
  },
  {
    id: 6,
    name: "Jane Smith",
    testimonial: "I can't say enough about Jett Plasma. Jett Plasma has really helped our business.",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=male" 
  },
  {
    id: 7,
    name: "Jane Smith",
    testimonial: "If you are a business owner, and you don't have Jett Plasma in your toolkit just yet, I highly recommend that you check it out.",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=female" 
  },
  {
    id: 8,
    name: "Jane Smith",
    testimonial: "Would definitely recommend Jett Plasma and will definitely be ordering again.",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=male" 
  },
  {
    id: 9,
    name: "Jane Smith",
    testimonial: "Jett Plasma is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=female" 
  },
  {
    id: 10,
    name: "Jane Smith",
    testimonial: "Jett Plasma is the ultimate time saver for small business owners like me.",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=male" 
  },
  {
    id: 11,
    name: "Jane Smith",
    testimonial: "We can't understand how we've been living without Jett Plasma.",
    time: "4 days ago",
    image: "https://xsgames.co/randomusers/avatar.php?g=male" 
  },
];


const Testimonials = () => {
  const chunkArray = (array, chunkSize) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }

    return chunks;
  };

  const groupSize = Math.ceil(testimonials.length / 3);
  const chunkedArray = chunkArray(testimonials, groupSize);

  return (
    <>
      <section className="relative py-[100px]">
        <Container className="flex flex-col lg:flex-row lg:items-stretch gap-[26px] lg:gap-[60px]">
          <div className="w-[360px] flex items-start mt-[200px] gap-[26px]">
            <div className='relative flex flex-col gap-[26px]'>
              <h4 className="text-[20px] lg:text-[40px] font-medium leading-[30px] lg:leading-[54px]">
                What <b>People</b> Say, <b>About</b> Us
              </h4>
              <p className="">Jett Plasma Lift Medical is the ultimate solution for all your eye care needs. Its versatility and effectiveness make it the go-to choice for eye care professionals who demand nothing but the best for their patients.</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] items-baseline">
            {chunkedArray.map((chunk, x) => {
              return (
                <div key={x} className="grid gap-[26px]">
                  {chunk.map((item, i) => {
                    return (
                      <div key={i} className="">
                        <CardTestimony
                          name={item.name}
                          testimonial={item.testimonial}
                          time={item.time}
                          image={item.image}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Container>

        <div id="pattern-1" className="absolute top-0 lg:top-[80px] left-0 z-[1]">
          <img src="/layouts/pattern-05.svg" alt="pattern-05" className="w-[198px] lg:w-[437px] h-[146px] lg:h-[320px]" />
        </div>
      </section>

      {/* <section className="relative py-[80px] bg-black rounded-[40px] lg:rounded-[80px]">
          <Container className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
              <h4 className="text-[30px] lg:text-[50px] text-center lg:text-left font-medium text-white leading-[40px] lg:leading-[64px] max-w-[846px]">
                  Optimize Your Performance with Jett Plasma - The Latest Solution for Innovative Medical Procedures
              </h4>

              <CtaLayoutContact params={{ route: "/goto" }} />
          </Container>

          <div id="pattern-1" className="hidden lg:block absolute -top-[280px] left-0 z-[1]">
              <img src="/layouts/pattern-07.svg" alt="pattern-07" />
          </div>
      </section> */}
    </>
  )
}

export default Testimonials