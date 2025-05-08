
import Image from "next/image";
import appImage from "../../public/appImage.webp";
import { features } from "../utils/data/features";
import Feature from "../components/Feature";
import Link from "next/link";

export default function HomeContent() {
    return (
        <main className="w-full">

            {/* Intro */}
            <section className="w-[90%] py-[100px] mx-auto p-2 flex flex-col gap-[20px] justify-center items-center">
                <Image
                    src={appImage}
                    alt="task image"
                    className="max-w-[300px]"
                    loading="lazy"
                />
                <h1 className="font-bold text-3xl text-center">Welcome To Taskify</h1>
                <p className="text-lg italic font-semibold text-green-800">
                    Manage your task at ease
                </p>
                <Link
                    href={"/register"}
                    className="px-[10px] py-[5px] rounded-sm border-2 border-pink-300 bg-white font-semibold hover:border-amber-300 cursor-pointer shadow-lg  shadow-orange-300"
                >
                    Get Started 👉
                </Link>
            </section>

            {/* Features */}

            <h2 className="text-2xl font-bold text-center my-[20px]">Features</h2>
            <section className="w-[90%] mx-auto flex justify-center items-center gap-[25px] pb-[20px] flex-wrap">
                {features.map((feature) => (
                    <Feature
                        key={feature.title}
                        icon={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </section>
        </main>
    );
}
