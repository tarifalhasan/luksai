import SocaialVideo from "./Video";

const SocialSession2 = () => {
  return (
    <section>
      <div className=" lg:h-[594.597px] py-10 lg:py-14 space-y-4 bg-[#F6FCFC]">
        <div className=" container">
          <div className=" block mx-auto max-w-[981px] space-y-4">
            <h4 className=" text-xl sm:text-2xl xl:text-3xl font-bold text-skin-dark-900">
              We believe that scarcity in the world is not only related to poor
              distribution of income, but the poor distribution of knowledge.
            </h4>
            <p className="text-center">
              Luksai offers a comprehensive solution for the expansion of your
              digital business, simultaneously supporting community welfare. We
              assist churches and NGOs, facilitating their mission to change
              lives through education, and links digital creators with these
              social initiatives, fostering community giveback.
            </p>
          </div>
        </div>
      </div>
      <SocaialVideo />
    </section>
  );
};

export default SocialSession2;
