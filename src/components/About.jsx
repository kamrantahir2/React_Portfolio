import ReactIcon from "../assets/react_pic.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Kamran
          </h1>
          <br className="hidden lg:inline-block" />
          <p className="mb-8 leading-relaxed">
            I am a self-taught developer with experience in building API's with
            Java and Spring Boot as well as full-stack applications built using
            React.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg shadow-2xl"
              href="#contact"
            >
              Work with me
            </a>
            <a
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white shadow-2xl rounded text-lg ml-4"
              href="#projects"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src="./LinkdInPic.jpg"
            alt=""
            className="object-cover object-center m-auto rounded w-6/12"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
