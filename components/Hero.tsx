import Image from "next/image";
export const Hero = () => {
  return (
    <section className="flex-between flex-col">
      <h1 className="head_text max-sm:hidden text-center capitalize">
        Map out your brain thoughts
        <br className="max-md:hidden" />
      </h1>
      <p className="desc font-caveat max-sm:hidden text-center">
        Mapout is a productivity tool for everyone and anyone, that lets you
        bring your thoughts on paper (or your may say screen! 😊)
      </p>
      <div className="flex gap-1 mt-9 max-sm:hidden justify-center items-center">
        <Image
          src="/assets/peeps/peep-11.svg"
          width={120}
          height={120}
          className="object-contain"
          alt="logo"
        />
        <Image
          src="/assets/peeps/peep-17.svg"
          width={120}
          height={120}
          className="object-contain"
          alt="logo"
        />
        <Image
          src="/assets/peeps/peep-22.svg"
          width={120}
          height={120}
          className="object-contain"
          alt="logo"
        />
        <Image
          src="/assets/peeps/peep-25.svg"
          width={120}
          height={120}
          className="object-contain"
          alt="logo"
        />
        <Image
          src="/assets/peeps/peep-32.svg"
          width={120}
          height={120}
          className="object-contain"
          alt="logo"
        />
      </div>
      <button className="black_btn mt-10 max-sm:hidden">Start Writing</button>

      {/* Mobile Navigation */}
      <section className="lg:hidden md:hidden flex-between flex-col">
        <div className="flex gap-1 justify-center items-center">
          <Image
            src="/assets/peeps/peep-11.svg"
            width={100}
            height={100}
            className="object-contain"
            alt="logo"
          />
          <Image
            src="/assets/peeps/peep-17.svg"
            width={100}
            height={100}
            className="object-contain"
            alt="logo"
          />
          <Image
            src="/assets/peeps/peep-22.svg"
            width={100}
            height={100}
            className="object-contain"
            alt="logo"
          />
        </div>
        <h1 className="head_text text-center capitalize">
          Map out your brain thoughts
          <br className="max-md:hidden" />
        </h1>
        <p className="max-sm:hidden desc font-caveat text-center">
          Mapout is a productivity tool for everyone and anyone, that lets you
          bring your thoughts on paper (or your may say screen! 😊)
        </p>
        <button className="black_btn mt-10">Start Writing</button>
      </section>
    </section>
  );
};
