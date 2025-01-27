import { auth, signIn, signOut } from "@/auth";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ShineBorder from "@/components/magicui/shine-border";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import "./gradient.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NumberTicker from "@/components/magicui/number-ticker";
import { MagicCard } from "@/components/magicui/magic-card";

import { db } from "@/db";
import { admins } from "@/db/schema";

import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Google Inc.",
    username: "@Google",
    body: "i heard star, john and stack have 3 somes on the weekends lol",
    img: "/reviewpfps/google.png",
  },
  {
    name: "Kamala Harris",
    username: "@KamalaHarris",
    body: "boykizr makes me so fucking horny",
    img: "/reviewpfps/Kamala.jpg",
  },
  {
    name: "Stack Overflow",
    username: "@die3six",
    body: "minecraft vans incident (antioch reference)",
    img: "/reviewpfps/stack.png",
  },
  {
    name: "tyler1",
    username: "@loltyler1",
    body: "its open source!!! i just cracked boykizr!!",
    img: "/reviewpfps/tyler.jpg",
  },
  {
    name: "ThePope",
    username: "@popefrancis",
    body: "👍🔥",
    img: "/reviewpfps/popefrancis.jpg",
  }
];
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] opacity-90", // Adjusted opacity here
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] dark:opacity-90" // Adjusted opacity here
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width={32} height={32} alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white opacity-80">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40 opacity-80">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm opacity-80">{body}</blockquote> {/* Added opacity */}
    </figure>
  );
};

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string | JSX.Element;
}) => {
  return (
    <div className="faq-item">
      <input type="checkbox" className="faq-toggle" id={`faq-${question}`} />
      <label className="faq-question" htmlFor={`faq-${question}`}>
        {question}
      </label>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const hyperlinkText = (text: string, url: string): JSX.Element => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="glow hover:underline">
    {text}
  </a>
);


export default async function Home() {
  const session = await auth();

  let does_exist = false;

  if (session?.user && session?.user?.id) {
    const does_exist_db_query = await db
      .select()
      .from(admins)
      .where(eq(admins.discord_id, session.user.id));

    does_exist = does_exist_db_query.length > 0;
  }

  return (
    <main className="flex flex-col items-center justify-center w-screen py-10">
      <BlurFade inView className="z-30">
        <Link href={"https://discord.gg/RX9D4Q3kUr"} target="_blank">
          <div className="z-10 flex items-center justify-center mt-10 mb-2">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <GitHubLogoIcon className="mr-1 size-3" />
                <span>Join today</span>
              </AnimatedShinyText>
            </div>
          </div>
        </Link>
      </BlurFade>

      <BlurFade inView className="z-30">
        <h1 className="text-6xl leading-relaxed font-bold magic-text z-30">
          BoyKizr
        </h1>
      </BlurFade>
      <BlurFade delay={0.25} inView className="z-10">
        <p className="text-lg z-10">
          a team of retards...
        </p>
      </BlurFade>

      <div className="mt-5 mb-5" />

      <BlurFade delay={0.5} inView>
        <ShineBorder
          className="relative flex h-fit max-h-[500px] max-w-[800px] w-[90vw] flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl bg-[#09090B]"
          color={["#FFFFFF", "#E0E0E0", "#B0B0B0"]}
        >
          <Image
            src="/boykizr2.png"
            alt="dashboard"
            width={1920}
            height={1080}
            className="z-10 object-contain w-full max-h-[497px] h-full"
          />
        </ShineBorder>
      </BlurFade>

      <div className="mt-10 mb-5" />


        <BlurFade delay={0.75} inView>
          <div className="max-w-[90vw] flex flex-wrap gap-5 justify-center">
            <BlurFade delay={0.75} inView>
              <MagicCard className="cursor-pointer max-w-[300px] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl min-h-[2.25rem]">
                <CardHeader className="flex justify-center items-center flex-col">
                  <CardDescription>Date of Launch</CardDescription>
                  <div className="text-3xl">1/22/25</div>
                  <span className="text-sm ml-1">newgen..</span> {/* Small text for "counting.." */}
                </CardHeader>
              </MagicCard>
            </BlurFade>

            <BlurFade delay={1} inView>
              <MagicCard className="cursor-pointer max-w-[300px] flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl">
                <CardHeader className="flex justify-center items-center flex-col">
                  <CardDescription>Beta Testers</CardDescription>
                  <NumberTicker
                    delay={1}
                    value={1} // Or any value you want to display
                    className="text-3xl"
                    suffix=" users"
                    prefix="<"
                  />
                  <span className="text-sm ml-1">looking for testers!</span> {/* Small text for "counting.." */}
                </CardHeader>
              </MagicCard>
            </BlurFade>
          </div>
        </BlurFade>


<BlurFade delay={1.4} inView>
  <section id="faq" className="w-screen flex flex-col items-center mt-20 px-5"> {/* Increased margin */}
    <h2 className="text-3xl font-bold mb-6 magic-text">FAQ</h2>
    <div className="w-full max-w-6xl flex flex-wrap justify-center gap-10"> {/* Flex-wrap to allow items to go next to one another */}
            {[
            {
              question: "Where can I get my hands on a key for BoyKizr?",
              answer: (
                <>You can purchase a key for BoyKizr directly from our {hyperlinkText("official website", "https://boykizr.xyz/")}. Just navigate to the shop section, where youll find all the available options for purchase.</>
              ),
            },
            {
              question: "Is BoyKizr open source?",
              answer: "Wait.. you're being serious?",
            },
            {
              question: "Is there a free version of BoyKizr?",
              answer: (
                <>Yes! We believe in making boykizr accessible to everyone, regardless of your budget, boykizr actually fucking cares about user experience! (not a sneak diss) for more information click {hyperlinkText("here", "https://discord.gg/2kpphQ8Qx3")}.</>
                ),  
              },
            {
              question: "Do you guys have a Discord?",
              answer: (
                <>Yes, we have a Discord server where you can get support and stay updated on the latest news. You can join us by clicking {hyperlinkText("here", "https://discord.gg/2kpphQ8Qx3")}</>
              ),
            },
            {
              question: "Why choose the name BoyKizr.. that's a bit gay..",
              answer: (
                <>Well... BoyKizr was a project made as a JOKE, tailored only for a small group of people. as time went on, we found that the name was kinda catchy, unique, and a little weird which was perfect for what we wanted to create lol.</>
              ),
            }
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </BlurFade>

      <BlurFade delay={1} inView className="w-screen fle flex-col justify-center items-center mt-[20vw] px-10">
        <BlurFade delay={1.25} inView className="w-screen flex justify-center items-center">
          <h1 className="text-2xl leading-relaxed font-bold mb-5">
            <span className="magic-text">BoyKizr</span>
          </h1>
        </BlurFade>

        <BlurFade delay={1.5} inView>

        <section id="reviews" className="w-full flex justify-center items-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
            <Marquee className="[--duration:20s]">
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </section>
        </BlurFade>

      </BlurFade>
      {!session && !does_exist && (
        <form
          action={async () => {
            "use server";
            cookies().set("upioguard-signintype", "dashboard");
            await signIn("discord", {
              redirectTo: "/dashboard",
            });
          }}
        >
          <Button className="fixed top-0 right-0 mt-2 mr-2">Login</Button>
        </form>
      )}

      {session && does_exist && (
        <div className="flex flex-row items-center justify-center fixed top-0 right-0 mt-2 mr-2">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button>Logout</Button>
          </form>

          <Link href="/dashboard">
            <Button variant={"outline"}>Go to dashboard</Button>
          </Link>
        </div>
      )}
    </main>
  );
}
