import { testimonials } from "@/lib/data";

export default function TestimonialSection() {
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="fans" className="py-20 md:py-32 bg-secondary-light dark:bg-secondary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-text-light dark:text-text-dark mb-12">
          From the Tifosi
        </h2>
      </div>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <div className="flex w-max animate-infinite-scroll">
          {extendedTestimonials.map((testimonial, index) => (
            <div key={index} className="w-[350px] md:w-[450px] mx-4 flex-shrink-0">
              <div className="bg-primary-light dark:bg-primary-dark p-8 rounded-lg shadow-md h-full">
                <p className="text-lg text-text-light dark:text-text-dark italic">
                  “{testimonial.text}”
                </p>
                <p className="mt-4 text-right font-semibold text-accent-red">
                  - {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}