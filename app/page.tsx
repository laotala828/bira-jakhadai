import Image from "next/image";
import type { ReactNode } from "react";
import { metadata, type Course, type Education, type Publication } from "./content";

function BracketLink({
  href,
  children,
  target,
}: {
  href: string;
  children: ReactNode;
  target?: string;
}) {
  return (
    <a
      className=" group text-black/60 w-fit "
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
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
              {author === "Bira Zhahadai" ? <strong className=" text-black">{author}</strong> : author}
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
      <main className=" w-full max-w-2xl p-4 sm:p-8 relative flex flex-col gap-10">
        <section className=" text-xs pl-12 flex flex-col gap-2 relative ">
          <div>
            <h1 className="text-2xl font-bold font-serif">Bira Zhahadai</h1>
            <div className="  w-40 h-40 sm:absolute relative sm:-translate-x-full sm:left-7.5  ">
              <Image src="/profile.JPG" alt="Bira Zhahadai" fill className=" object-contain" />
            </div>
            <div className=" font-bold text-sm">Assistant Professor, Department of Economics, Illinois Wesleyan University</div>
          </div>

          <div className="text-xs text-black/60">
            Bira Zhahadai is an Assistant Professor of Economics at Illinois Wesleyan University, where their research focuses
            on business cycles, financial frictions, and macroeconomic policy in emerging market economies. Their work uses
            applied time series methods and dynamic equilibrium models to study productivity shocks, private equity, and
            sovereign debt markets, and has been presented at conferences including the Midwest Economics Association and the
            Association of Private Enterprise Education. Bira received their Ph.D. in Economics from North Carolina State
            University, previously served as a Visiting Assistant Professor at James Madison University, and consulted for the
            World Bank Group&apos;s Disaster Risk Financing and Insurance Program.
          </div>

          <div className=" flex flex-col sm:flex-row gap-1 sm:gap-4  ">
            <BracketLink href="/Bira_CV_and_Personal_Statement.pdf" target="_blank">
              CV(curriculum vitae)
            </BracketLink>
            <BracketLink href="mailto:bzhahada@iwu.edu">bzhahada@iwu.edu</BracketLink>
            <BracketLink href="tel:+13095563130">+1 (309) 556-3130</BracketLink>
          </div>
        </section>

        <section className="flex flex-col gap-4 ">
          <h2 className=" invisible sm:visible text-sm font-bold absolute -translate-x-full left-0 translate-y-0.5 lowercase">
            Publications
          </h2>

          {metadata.publications.map((publication) => (
            <PublicationItem key={`${publication.year}-${publication.title}`} {...publication} />
          ))}
        </section>

        <section className="flex flex-col gap-4 ">
          <h2 className=" invisible sm:visible text-sm font-bold absolute -translate-x-full left-0 translate-y-0.5 lowercase">
            Courses
          </h2>
          {metadata.courses.map((course, index) => (
            <CourseItem key={`${course.title}-${index}`} {...course} />
          ))}
        </section>

        <section className="flex flex-col gap-4 ">
          <h2 className=" invisible sm:visible text-sm font-bold absolute -translate-x-full left-0 translate-y-0.5 lowercase">
            educations
          </h2>
          {metadata.educations.map((education, index) => (
            <EducationItem key={`${education.degree}-${index}`} {...education} />
          ))}
        </section>
      </main>
    </div>
  );
}
