import { Socials } from "@/app/_sections/socials";


const ComingSoon = ({page}: { page: string}) => {

    return (
        <section className="py-32">
                <div className="container">
                    <div className="flex flex-col items-center gap-5">
                    <img src="/logo.jpeg" alt="logo" className="size-10" />
                    <h2 className="text-center text-3xl font-semibold">
                        {page}
                        <br />
                        <span className="text-muted-foreground/80">
                        in development
                        </span>
                    </h2>
                    <div className="flex items-center gap-4">
                        <Socials />
                    </div>
                </div>
            </div>
        </section>
    );
}
export { ComingSoon };