
import { Card } from "@/components/ui/card";
import { features } from "process";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const feats = [
        {id: 1, title: "Talent Hunt", description: " Register, audition, and compete to be the next Afromerica star. Online and street selections now open. Don't miss our live screening events and top-10 reveal ceremonies!"},
        {id: 2, title: "Afromerica Academy", description: "Learn music, performance, branding, and production from Africa's best coaches and mentors. Enroll for masterclasses, weekend workshops, and campus tours"},
        {id: 3, title: "Marketplace", description: "Shop exclusive Afromerica merch, artist products, and digital downloads. Look out for flash sales during live events and after-show drops!"},
        {id: 4, title: "Meet Our Artists", description: "Explore our rising stars, listen to their sounds, and follow their journey under Afromerica Music. Watch behind the scenes footage, live rehearsals, and red carpet moments."}
    ]

interface featsProps {
    id: number;
    title: string;
    description: string;
}
const Featured = () => {

    
    return (
        <section>
            {feats.map((feat: featsProps) => (
                <Card key={feat.id} className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
                    <p className="text-gray-600">{feat.description}</p>
                </Card>
            ))}
        </section>
    );
}

export { Featured };