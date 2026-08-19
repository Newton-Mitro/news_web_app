export default function NewsletterWidget() {
    return (
        <section className="container py-20">
            <div
                className="
                relative
                border border-dashed border-borderColor
                overflow-hidden
                rounded-[32px]
                bg-gradient-to-r
                from-secondary
                to-secondary/80
                p-10
                text-white
                "
            >
                <div className="max-w-2xl">
                    <h2 className="mb-4 text-4xl font-black ">
                        নিউজলেটার সাবস্ক্রাইব করুন
                    </h2>

                    <p className="mb-8 text-white/80">
                        প্রতিদিনের গুরুত্বপূর্ণ সংবাদ আপনার ইমেইলে পৌঁছে যাবে।
                    </p>

                    <div className="flex flex-col gap-4 md:flex-row">
                        <input
                            type="email"
                            placeholder="আপনার ইমেইল"
                            className="flex-1 px-5 py-4 text-black border outline-none border-borderColor bg-background rounded-xl"
                        />

                        <button className="px-8 py-4 font-semibold bg-surface hover:bg-red-950/50 rounded-xl text-onSurface">
                            সাবস্ক্রাইব করুন
                        </button>
                    </div>
                </div>

                <div className="absolute w-64 h-64 rounded-full -right-20 -top-20 bg-white/10" />

                <div className="absolute w-40 h-40 rounded-full -bottom-20 right-20 bg-white/10" />
            </div>
        </section>
    );
}
