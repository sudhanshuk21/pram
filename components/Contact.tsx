/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function Contact() {
  return (
    <div id="contact" className="grid max-w-screen-xl grid-cols px-auto py-16 mx-auto rounded-lg md:grid-cols md:px-auto lg:px-auto xl:px-auto  dark:text-gray-100">
      <div className="flex flex-col justify-between mx-auto">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
        </div>
        <img
          src="https://lh3.googleusercontent.com/8uVtC1mUPaFp3q0L7u9DDMeTJyvHV5pLXeFXFP4pP1Q_ITzMxnqA2jgc6ZiMsC3cCgw=w2400 "
          alt=""
          className="h-52 md:h-64" width="250"
        ></img>
      </div>
       
    </div>
  );
}
