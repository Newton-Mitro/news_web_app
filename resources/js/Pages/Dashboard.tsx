import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export default function Dashboard({
    auth,
    stats,
    dailyVisitors,
    monthlyVisitors,
}: PageProps & any) {
    const cards = [
        {
            title: "Draft Articles",
            value: stats.draft_articles,
            icon: "fa-file-pen",
            color: "bg-gradient-to-r from-amber-400 to-orange-500",
        },
        {
            title: "Published Articles",
            value: stats.published_articles,
            icon: "fa-newspaper",
            color: "bg-gradient-to-r from-emerald-500 to-green-600",
        },
        {
            title: "Archived Articles",
            value: stats.archived_articles,
            icon: "fa-box-archive",
            color: "bg-gradient-to-r from-slate-500 to-slate-700",
        },
        {
            title: "Visitors",
            value: stats.visitors,
            icon: "fa-users",
            color: "bg-gradient-to-r from-sky-500 to-blue-600",
        },
        {
            title: "Categories",
            value: stats.categories,
            icon: "fa-folder-tree",
            color: "bg-gradient-to-r from-violet-500 to-purple-600",
        },
        {
            title: "Pages",
            value: stats.pages,
            icon: "fa-file-lines",
            color: "bg-gradient-to-r from-indigo-500 to-blue-700",
        },
        {
            title: "Users",
            value: stats.users,
            icon: "fa-user-group",
            color: "bg-gradient-to-r from-pink-500 to-rose-600",
        },
    ];

    const dailyChart = {
        labels: dailyVisitors.map((x: any) => x.date),
        datasets: [
            {
                label: "Visitors",
                data: dailyVisitors.map((x: any) => x.count),
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,.15)",
                fill: true,
                tension: 0.35,
            },
        ],
    };

    const monthlyChart = {
        labels: monthlyVisitors.map((x: any) => x.month),
        datasets: [
            {
                label: "Visitors",
                data: monthlyVisitors.map((x: any) => x.count),
                backgroundColor: "#16a34a",
            },
        ],
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="p-4 space-y-6">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="relative overflow-hidden transition-all duration-300 border shadow-sm group rounded-2xl border-borderColor bg-surface hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Background decoration */}
                            <div
                                className={`absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-10 ${card.color}`}
                            />

                            <div className="relative flex items-center justify-between p-6">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium tracking-wide text-onSurface/70">
                                        {card.title}
                                    </p>

                                    <h2 className="text-4xl font-bold tracking-tight text-onSurface">
                                        {card.value.toLocaleString()}
                                    </h2>
                                </div>

                                <div
                                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${card.color}`}
                                >
                                    <i
                                        className={`fa-solid ${card.icon} text-2xl`}
                                    />
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className={`h-1 w-full ${card.color}`} />
                        </div>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="p-6 shadow rounded-xl bg-surface">
                        <h3 className="mb-4 text-lg font-semibold">
                            Daily Visitors (Last 30 Days)
                        </h3>

                        <Line data={dailyChart} />
                    </div>

                    <div className="p-6 shadow rounded-xl bg-surface">
                        <h3 className="mb-4 text-lg font-semibold">
                            Monthly Visitors (Last 12 Months)
                        </h3>

                        <Bar data={monthlyChart} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
