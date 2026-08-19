export default function AdBanner({ size }: { size: string }) {
    return (
        <div className="overflow-hidden border border-dashed bg-surface rounded-3xl border-borderColor">
            <div className="px-4 py-2 text-xs border-b border-dashed border-borderColor text-onSurface">
                বিজ্ঞাপন
            </div>

            <img
                src="/970x250.jpg"
                alt="Advertisement"
                className="w-full h-auto rounded-lg"
            />

            {/* <div className="flex items-center justify-center h-32 bg-accent text-accent">
                {size} Advertisement
            </div> */}
        </div>
    );
}
