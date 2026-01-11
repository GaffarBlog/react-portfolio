import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
export default function Testimonials({ darkMode }) {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            position: "CEO at TechStart",
            quote: "One of the most talented developers I've worked with. Delivered our project on time with exceptional quality and attention to detail.",
            avatar: "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CEO%2C%20confident%2C%20smiling%2C%20modern%20office%20background%2C%20business%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=5&orientation=squarish",
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Product Manager at InnovateCorp",
            quote: "Outstanding technical skills combined with a great eye for design. Transformed our product vision into a beautiful, functional reality.",
            avatar: "https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%2C%20product%20manager%2C%20asian%2C%20confident%2C%20smiling%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=6&orientation=squarish",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "CTO at FutureTech",
            quote: "Exceptional problem-solving abilities and technical expertise. Consistently delivered high-quality code and innovative solutions to complex challenges.",
            avatar: "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CTO%2C%20latina%2C%20tech%20leader%2C%20confident%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=7&orientation=squarish",
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            position: "CTO at FutureTech",
            quote: "Exceptional problem-solving abilities and technical expertise. Consistently delivered high-quality code and innovative solutions to complex challenges.",
            avatar: "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CTO%2C%20latina%2C%20tech%20leader%2C%20confident%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=7&orientation=squarish",
        },
    ];
    return (
        <section id="testimonials" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">Client Testimonials</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">What people say about working with me and my development services.</p>
                </div>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className={` glass-sm backdrop-blur-md rounded-xl p-8 h-full flex flex-col border border-white/20`}>
                                <div className="mb-6">
                                    <i className="fas fa-quote-left text-4xl text-indigo-200"></i>
                                </div>
                                <p className="text-gray-700 dark:text-gray-400 mb-6 flex-grow">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-gray-300">{testimonial.name}</h4>
                                        <p className="text-indigo-600 dark:text-indigo-400">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
