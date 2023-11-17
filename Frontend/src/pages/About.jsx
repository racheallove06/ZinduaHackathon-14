import React from "react";
import Navbar from "../components/Navbar"; // Import your Navbar component
import backgroundImage from "../assets/rectangle54.png"; // Replace with the path to your image
import AboutNav from "../components/AboutNav";
import photo from "../assets/rectangle55.png";
import Footer from "../components/Footer";
const About = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set minimum height to cover the entire viewport
  };

  return (
    <div>
      <div style={appStyle}>
        <AboutNav />
      </div>
      {/* Your app content goes here */}
      <div className="flex align-center justify-center text-center mt-11 mb-4">
        <h3 className=" text-[45px] font-bold  mr-4">
          ABOUT
          <br /> THE SHAMBA <br />{" "}
          <span className=" text-[#A77A04]">EDUCATION </span>
        </h3>
        <img src={photo} className="w-[500px]" />
      </div>
      <div className=" ml-9">
        <p>
          Welcome to our innovative e-learning and e-commerce platform, where
          knowledge meets convenience. At The Shamba Education, we're committed
          to revolutionizing the way you learn and shop online. Whether you're
          eager to expand your skills, explore new interests, or find quality
          products, we have you covered.
        </p>

        <h3 className="font-semibold text-[#01352c] mt-3">
          Learning Redefined:
        </h3>
        <p>
          Embark on a journey of continuous learning with our diverse range of
          courses. From professional development to hobbyist pursuits, our
          curated selection caters to all interests. Our expert instructors
          bring real-world experience to your screen, ensuring that every lesson
          is not just educational but also practical.
        </p>
        <h3 className="font-semibold text-[#01352c] mt-3">
          Anytime, Anywhere Access:
        </h3>
        <p>
          {" "}
          Say goodbye to rigid schedules. Our platform is designed to fit
          seamlessly into your lifestyle. Access your courses from the comfort
          of your home or on the go, allowing you to learn at your own pace.
          Whether you're an early bird or a night owl, your educational journey
          is always within reach.
        </p>
        <h3 className="font-semibold text-[#01352c] mt-3">
          Interactive and Engaging:
        </h3>
        <p>
          Learning should be exciting, not tedious. That's why our courses are
          designed to be interactive and engaging. Dive into multimedia-rich
          lessons, participate in discussions with fellow learners, and test
          your understanding with quizzes. The road to knowledge has never been
          this enjoyable.
        </p>

        <h3 className="font-semibold text-[#01352c] mt-3 ">
          Elevate Your Shopping Experience:
        </h3>
        <p>
          Discover a curated marketplace featuring handpicked products that
          align with your interests and needs. Our e-commerce platform goes
          beyond the ordinary, offering a diverse selection of quality items.
          From educational resources to unique finds, we bring the marketplace
          to your fingertips.
        </p>
        <h3 className="font-semibold text-[#01352c] mt-3 ">
          Secure Transactions, Seamless Experience:
        </h3>
        <p>
          Your security is our priority. Enjoy peace of mind as you explore our
          platform, knowing that your transactions are secure and your data is
          protected. We strive to make your online experience as smooth as
          possible, ensuring that you can focus on what matters – learning and
          discovering.
        </p>
        <h3 className="font-semibold text-[#01352c] mt-3 ">
          Join Our Community:{" "}
        </h3>
        <p>
          Connect with a community of like-minded learners and shoppers. Share
          your experiences, seek advice, and celebrate your achievements
          together. Our platform isn't just a place to learn; it's a vibrant
          community where knowledge enthusiasts come together.
        </p>
        <p className="mt-3">
          {" "}
          Welcome to The Shamba Education – where learning and shopping converge
          in a digital space tailored for you. Start your journey today and
          unlock a world of possibilities!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
