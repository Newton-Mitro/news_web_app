import { Link } from "@inertiajs/react";

export default function SectionHeader({ title, category }: any) {
    return (
        <div className="flex items-center justify-between mb-8 ">
            <div className="flex items-center gap-4 ">
                <div className="w-2 h-10 rounded-full  bg-secondary" />

                <h2 className="text-4xl font-black ">{title}</h2>
            </div>

            <Link
                href={route("public.byCategory", category)}
                className="font-semibold  text-secondary hover:underline"
            >
                সব দেখুন →
            </Link>
        </div>
    );
}
