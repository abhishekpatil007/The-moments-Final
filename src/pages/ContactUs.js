import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-center justify-start gap-20 leading-[normal] tracking-[normal] mq450:gap-5 mq750:gap-10">
      <FrameComponent5 />
      <FrameComponent6 />
      <form className="w-full max-w-lg bg-[#1b1b1b] p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-springgreen font-lexend">CONTACT US</h2>
        <div className="mb-6">
          <label className="block text-white font-lexend text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" type="text" placeholder="Your Name" />
        </div>
        <div className="mb-6">
          <label className="block text-white font-lexend text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" type="email" placeholder="Your Email" />
        </div>
        <div className="mb-6">
          <label className="block text-white font-lexend text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow-md appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" placeholder="Your Message" rows="4"></textarea>
        </div>
        <button className="bg-white hover:bg-springgreen text-black font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">
          Send message
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactUs;