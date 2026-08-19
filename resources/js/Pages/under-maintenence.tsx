import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, Clock3, Mail, RefreshCw, Wrench } from "lucide-react";
import NormalLayout from "../Layouts/NormalLayout";

export default function Maintenance() {
    return (
        <NormalLayout>
            <Head title="Under Maintenance" />
            <main className="relative flex items-center justify-center min-h-screen px-6 py-16 overflow-hidden bg-background text-foreground">
                {/* Background decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute rounded-full -left-40 -top-40 h-96 w-96 bg-primary/10 blur-3xl" />

                    <div className="absolute rounded-full -bottom-40 -right-40 h-96 w-96 bg-secondary/10 blur-3xl" />

                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage:
                                "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-2xl text-center">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary/10">
                        <Wrench className="h-9 w-9 text-primary" />
                    </div>

                    {/* Status */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 text-xs font-bold tracking-widest uppercase border rounded-full border-primary/20 bg-primary/5 text-primary">
                        <span className="w-2 h-2 rounded-full animate-pulse bg-primary" />
                        Under Maintenance
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                        We'll be back soon.
                    </h1>

                    {/* Description */}
                    <p className="max-w-xl mx-auto mt-6 text-base leading-7 text-foreground/60 sm:text-lg">
                        We're currently performing some maintenance and
                        improvements to make your experience even better.
                    </p>

                    <p className="mt-3 text-sm text-foreground/50">
                        Thank you for your patience.
                    </p>

                    {/* Info cards */}
                    <div className="grid gap-3 mt-10 sm:grid-cols-2">
                        <div className="flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5 text-left">
                            <div className="flex items-center justify-center rounded-lg h-11 w-11 shrink-0 bg-primary/10">
                                <Clock3 className="w-5 h-5 text-primary" />
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-wider uppercase text-foreground/40">
                                    Status
                                </p>

                                <p className="mt-1 text-sm font-semibold">
                                    Improvements in progress
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5 text-left">
                            <div className="flex items-center justify-center rounded-lg h-11 w-11 shrink-0 bg-primary/10">
                                <RefreshCw className="w-5 h-5 text-primary" />
                            </div>

                            <div>
                                <p className="text-xs font-bold tracking-wider uppercase text-foreground/40">
                                    Try again
                                </p>

                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-1 text-sm font-semibold transition-colors hover:text-primary"
                                >
                                    Refresh the page
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Refresh Page
                        </button>

                        <Link
                            href="/"
                            className="inline-flex items-center h-12 gap-2 px-6 text-sm font-bold transition-colors border rounded-lg border-foreground/10 hover:border-primary/30 hover:text-primary"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Go Home
                        </Link>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center justify-center gap-2 mt-12 text-sm text-foreground/50">
                        <Mail className="w-4 h-4" />

                        <span>Need help?</span>

                        <a
                            href="mailto:support@example.com"
                            className="font-semibold transition-colors text-foreground hover:text-primary"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>
        </NormalLayout>
    );
}
