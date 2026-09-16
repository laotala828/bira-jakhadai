import Image from "next/image";
import type { ReactNode } from "react";
import { metadata, type Course, type Education, type Publication } from "./content";

function BracketLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className=" group text-black/60 w-fit " href={href}>
      <span className="group-hover:-translate-x-0.5 duration-200 inline-block">[</span>
      <span className="px-0.5 group-hover:underline text-blue-500">{children}</span>
      <span className="group-hover:translate-x-0.5 duration-200 inline-block">]</span>
    </a>
  );
}

function PublicationItem({ year, title, authors, href }: Publication) {
  return (
    <div className="text-xs flex items-baseline gap-4">
      <div className=" font-mono w-8 shrink-0 grow-0 text-black/50">{year}</div>
      <div className="flex flex-col gap-1">
        <div className="font-bold font-serif text-base">{title}</div>

        <p className=" text-black/60">
          {authors.map((author, index) => (
            <span key={`${author}-${index}`}>
              {author === "Bira Jakhadai" ? <strong className=" text-black">{author}</strong> : author}
              {index < authors.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
        <BracketLink href={href}>View paper</BracketLink>
      </div>
    </div>
  );
}

function CourseItem({ year, title, description, href }: Course) {
  return (
    <div className="text-xs flex items-baseline gap-4">
      <div className=" font-mono w-8 shrink-0 grow-0 text-black/50">{year}</div>
      <div className="flex flex-col gap-1">
        <div className="font-bold font-serif text-base">{title}</div>
        <p className=" text-black/60">{description}</p>
        <BracketLink href={href}>View slide</BracketLink>
      </div>
    </div>
  );
}

function EducationItem({ startYear, endYear, degree, school, description }: Education) {
  return (
    <div className="text-xs flex items-baseline gap-4">
      <div className=" font-mono w-8 shrink-0 grow-0 text-black/50">
        {startYear} <br /> {endYear}
      </div>
      <div>
        <div className="font-bold font-serif text-base">{degree}</div>
        <div className=" font-bold">{school}</div>

        <p className=" text-black/60">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center  font-sans relative">
      <main className=" w-full max-w-2xl p-8 relative flex flex-col gap-10">
        <section className=" text-xs pl-12 flex flex-col gap-2 relative ">
          <div className=" w-40 h-40 absolute -translate-x-full left-7.5 overflow-hidden">
            <Image src="/profile.JPG" alt="Bira Jakhadai" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold font-serif">Bira Jakhadai</h1>
            <div className=" font-bold text-sm">Professor, Department of Economics, University of Washington</div>
          </div>

          <div className="text-xs text-black/60">
            Bira Jakhadai is a Professor of Economics at the University of Washington, where their research focuses on labor
            markets, automation, and public policy. Their work combines applied econometrics with large administrative and
            firm-level datasets to study how minimum wage laws, algorithmic hiring, and technological change shape employment
            and wages. Bira&apos;s research has appeared in leading economics journals and has informed policy discussions on
            labor market regulation. They received their PhD in Economics from MIT and previously held a postdoctoral fellowship
            before joining the UW faculty.
          </div>

          <div className=" flex gap-4  ">
            <BracketLink href="#">CV(curriculum vitae)</BracketLink>
            <BracketLink href="mailto:email@example.com">email@example.com</BracketLink>
            <BracketLink href="tel:+15551234567">+1 (555) 123-4567</BracketLink>
          </div>
        </section>

        <section className="flex flex-col gap-4 ">
          <h2 className="text-sm font-bold absolute -translate-x-full left-0 translate-y-0.5 lowercase">Publications</h2>

          {metadata.publications.map((publication) => (
            <PublicationItem key={`${publication.year}-${publication.title}`} {...publication} />
          ))}
        </section>

        <section className="flex flex-col gap-4 ">
          <h2 className="text-sm font-bold absolute -translate-x-full left-0 translate-y-0.5 lowercase">Courses</h2>
          {metadata.courses.map((course, index) => (
            <CourseItem key={`${course.title}-${index}`} {...course} />
          ))}
        </section>

        <section className="flex flex-col gap-4 ">
          <h2 className="text-sm font-bold absolute -translate-x-full left-0 translate-y-0.5 lowercase">educations</h2>
          {metadata.educations.map((education, index) => (
            <EducationItem key={`${education.degree}-${index}`} {...education} />
          ))}
        </section>
      </main>
    </div>
  );
}
