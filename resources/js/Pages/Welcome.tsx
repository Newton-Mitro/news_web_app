import {Head} from "@inertiajs/react";

import {PropsWithChildren, useState} from "react";
import {User} from "@/types";
import PublicTemplateLayout from "@/Layouts/PublicLayout";

export default function Welcome({auth, children}: PropsWithChildren<{ auth: User }>) {
    const [donateSectionVisibility, setDonateSectionVisibility] = useState(false);
    return (
        <>

            <Head title="Home"/>
            <PublicTemplateLayout auth={auth}>
                <div className="flex flex-col gap-10">
                    <div className="container mx-auto">
                        <div className="border border-dashed border-secondary bg-surface text-onSurface">
                            <div className="px-4 py-10 md:px-6 lg:py-20 lg:px-10">
                                <div className="container mx-auto space-y-6">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        dolore
                                        doloremque ea eos, inventore iste itaque iusto quaerat rem sed vitae voluptas
                                        voluptatum. Doloribus iste quae repudiandae sequi soluta!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        dolore
                                        doloremque ea eos, inventore iste itaque iusto quaerat rem sed vitae voluptas
                                        voluptatum. Doloribus iste quae repudiandae sequi soluta!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        dolore
                                        doloremque ea eos, inventore iste itaque iusto quaerat rem sed vitae voluptas
                                        voluptatum. Doloribus iste quae repudiandae sequi soluta!</p>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        dolore
                                        doloremque ea eos, inventore iste itaque iusto quaerat rem sed vitae voluptas
                                        voluptatum. Doloribus iste quae repudiandae sequi soluta!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        dolore
                                        doloremque ea eos, inventore iste itaque iusto quaerat rem sed vitae voluptas
                                        voluptatum. Doloribus iste quae repudiandae sequi soluta!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequatur
                                        dolore
                                        doloremque ea eos, inventore iste itaque iusto quaerat rem sed vitae voluptas
                                        voluptatum. Doloribus iste quae repudiandae sequi soluta!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PublicTemplateLayout>
        </>
    );
}
