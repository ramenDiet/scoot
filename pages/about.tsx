import bgMobile from "../public/assets/images/about-hero-mobile.jpg";
import bgTablet from "../public/assets/images/about-hero-tablet.jpg";
import bgDesktop from "../public/assets/images/about-hero-desktop.jpg";

// components
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { PageTitleHero } from "@/components/PageTitleHero";
import { ImageBlock } from "@/components/ImageBlock";
import { NumberedImage } from "@/components/NumberedImage";
import { FAQCard } from "@/components/FAQCard";
import { Footer } from "@/components/Footer";

// for <ImageBlock>
import digitalEra from "../public/assets/images/digital-era.jpg";
import urbanLiving from "../public/assets/images/better-living.jpg";

//  for <NumberedImage>
import ourTech from "../public/assets/images/our-tech.jpg";
import ourIntegrity from "../public/assets/images/our-integrity.jpg";
import ourCommunity from "../public/assets/images/our-community.jpg";

// arrows
import rightArrow from "../public/assets/patterns/right-arrow.svg";
import leftDownward from "../public/assets/patterns/left-downward-arrow.svg";

export default function About() {
  return (
    <>
      <Container>
        <Nav />

        <PageTitleHero
          pageName="About"
          mobileSrc={bgMobile}
          tabletSrc={bgTablet}
          desktopSrc={bgDesktop}
        />

        <section className="flex flex-col items-center">
          <ImageBlock
            imgSrc={digitalEra}
            title="Mobility for the digital era"
            description="Getting around should be simple (and even fun!) for everyone. We embrace technology to 
          provide low cost, smart access to scooters at your fingertips."
            arrowSrc={leftDownward}
            arrowDirection=""
          />

          <ImageBlock
            imgSrc={urbanLiving}
            title="Better urban living"
            description="We’re helping connect cities and bring people closer together. Our scooters are also 
          fully-electric and we offset the minimal carbon footprint for each ride."
            arrowSrc={rightArrow}
            arrowDirection=""
          />
        </section>

        <section className="flex flex-col items-center gap-20">
          <h2 className="mt-20 text-3xl text-dark-navy">Our Values</h2>

          <div className="flex flex-col items-center gap-20 xl:flex-row">
            <NumberedImage
              imgSrc={ourTech}
              imgNumber="01"
              title="Our tech"
              description="We’re using cutting edge technology to drive accessible urban transportation forward. 
            Our fully electric scooters are a joy to ride!"
            ></NumberedImage>

            <NumberedImage
              imgSrc={ourIntegrity}
              imgNumber="02"
              title="Our integrity"
              description="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience 
            in every city we serve."
            ></NumberedImage>

            <NumberedImage
              imgSrc={ourCommunity}
              imgNumber="03"
              title="Our community"
              description="We support every community we serve. All workers are paid a living wage based on their 
            location and are Scoot employees."
            ></NumberedImage>
          </div>
        </section>

        <section className="flex flex-col items-center gap-4 p-2  text-dark-navy">
          <h2 className="mx-auto mt-20 text-3xl md:text-5xl  ">FAQs</h2>

          <div className="  flex flex-col gap-4 xl:mt-20 xl:flex-row xl:gap-40">
            <h2 className="mx-auto mt-5 text-2xl xl:mt-0 xl:text-4xl">
              How it works
            </h2>
            <div className="flex max-w-[600px] flex-col gap-4">
              <FAQCard
                question="How do I download the app?"
                answer="To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. 
            An even simpler way to do it would be to click the relevant link at the bottom of this 
            page and you’ll be re-directed to the correct page."
              ></FAQCard>

              <FAQCard
                question="Can I find a nearby Scoots?"
                answer="Definitely! Simply open up the app and allow us to find your location while using it. We'll 
  show you all of the closest Scoots and some extra useful information."
              ></FAQCard>

              <FAQCard
                question="Do I need a license to ride?"
                answer="Yup! We provide information inside the app regarding local laws and the license you need to be 
  able to ride our Scoots."
              ></FAQCard>
            </div>
          </div>
        </section>

        <section className="mt-10 flex flex-col items-center gap-4 p-2 text-dark-navy xl:mx-auto xl:max-w-fit xl:flex-row xl:items-start xl:gap-40 xl:p-0">
          <h2 className="mx-auto mt-20 text-2xl xl:mt-0 xl:text-4xl">
            Safe Driving
          </h2>
          <div className="flex max-w-[600px] flex-col gap-4">
            <FAQCard
              question="Should I wear a helmet?"
              answer="Yes, please do! All cities have different laws. But we strongly strongly strongly recommend 
  always wearing a helmet regardless of the local laws. We like you and we want you to be as 
  safe as possible while Scooting."
            ></FAQCard>
            <FAQCard
              question="How about the rules & regulations?"
              answer="Now is not the time to be a rule breaker. Be sure you're complying with all local laws and 
  regulations. Also, just be a good human being. Be sure not to park your Scoot where it can 
  block access to buildings or get in people's way."
            ></FAQCard>
            <FAQCard
              question="What if I damage my Scoot?"
              answer="Be sure to read our terms and conditions carefully. Not the most fun job we know but we make 
  it as clear as possible. There's an option to add insurance for each trip, or you can sign 
  up for annual insurance if you're a regular Scooter."
            ></FAQCard>
          </div>
        </section>

        <Footer />
      </Container>
    </>
  );
}
