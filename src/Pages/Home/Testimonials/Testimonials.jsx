
const Testimonials = () => {
    return (
        <>
            <h3 className="text-center font-serif font-bold text-2xl text-gray-800">Review</h3>
            <p className="text-center mt-5">Our Beloved Customer hotel Review</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto max-w-screen-xl">

                <div className="card w-[360px] bg-base-100  ">
                    <div className="card-body">
                        <h2 className=" text-center font-extrabold my-5 ">TripAdvisor</h2>
                        {/* rating */}
                        <div className="rating w-24 gap-2 ml-32">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-wrap text-center w-80 mx-8 font-serif ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque est adipisci iusto corrupti aperiam id nemo enim natus odio, magni reprehenderit et rem nihil, Lorem ipsum dolor sit amet.</p>
                        <div className="bg-gray-900 w-96 h-16 pt-2">
                            <h3 className="text-gray-300 text-center">Neil Brown</h3>
                            <p className="text-gray-300 text-center">01/02/2021</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 ">
                    <div className="card-body">
                        <h2 className="text-center font-extrabold my-5 ">TripAdvisor</h2>
                        {/* rating */}
                        <div className="rating w-24 gap-2 ml-32">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-wrap text-center w-80 font-serif ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque est adipisci iusto corrupti aperiam id nemo enim natus odio, magni reprehenderit et rem nihil, Lorem ipsum dolor sit amet.</p>
                        <div className="bg-gray-900 w-96 h-16 pt-2">
                            <h3 className="text-gray-300 text-center">Neil Brown</h3>
                            <p className="text-gray-300 text-center">01/02/2021</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 ">
                    <div className="card-body">
                        <h2 className="ml-10 text-center font-extrabold my-5 ">TripAdvisor</h2>
                        {/* rating */}
                        <div className="rating w-24 gap-2 ml-32">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-wrap text-center w-80 mx-8 font-serif ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem cumque est adipisci iusto corrupti aperiam id nemo enim natus odio, magni reprehenderit et rem nihil, Lorem ipsum dolor sit amet.</p>
                        <div className="bg-gray-900 w-96 h-16 pt-2">
                            <h3 className="text-gray-300 text-center">Neil Brown</h3>
                            <p className="text-gray-300 text-center">01/02/2021</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Testimonials;