import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { DateFormat, formatDate } from "@/lib/utils";
import PageHeader from "@/components/partials/pageHeader";
import { barlow, ibm_plex_sans } from "@/app/fontDeclare";

interface CompetitionMeta {
  id: string;
  title: string;
  thumbnail: string;
  launchDate: string;
  isLaunch: boolean;
  draft: boolean;
}

export default async function page() {
  const targetPath = path.join(
    process.cwd(),
    "src",
    "app",
    "[locale]",
    "(mainpage)",
    "(r&d)",
    "competition"
  );

  const entries = fs.readdirSync(targetPath, {
    withFileTypes: false,
  });

  const competition: CompetitionMeta[] = [];

  for (const folder of entries) {
    const isDir = fs
      .statSync(path.join(targetPath, folder.toString()))
      .isDirectory();

    if (isDir) {
      const meta: CompetitionMeta = (await import(`./${folder}/meta`)).meta;

      meta.isLaunch = new Date(meta.launchDate) > new Date();
      meta.id = folder.toString();

      if (!meta.draft) competition.push(meta);
    }
  }

  competition.sort((compe1, compe2) =>
    new Date(compe1.launchDate) > new Date(compe2.launchDate) ? -1 : 1
  );

  return (
    <>
      <PageHeader />
      <section className="section">
        <div className="container">
          <div className="row items-stretch">
            {competition.map(({ id, title, thumbnail, launchDate }) => {
              const year = new Date(launchDate).getFullYear();

              return (
                <div
                  className="col-lg-4 col-sm-6 mb-4 flex-1 h-[350px]"
                  key={id}
                >
                  <Link
                    href={{
                      pathname: `competition/${id}`,
                    }}
                    className="!flex card border-0 rounded-0 !w-full !h-full"
                    title={title}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-img position-relative w-full h-[60%]">
                      <Image
                        className={`card-img-top rounded-0 w-full h-full`}
                        loading="lazy"
                        style={{ objectFit: "cover" }}
                        width={350}
                        height={200}
                        alt=""
                        src={thumbnail}
                      />

                      <div
                        className="card-date text-white text-2xl font-semibold"
                        style={ibm_plex_sans.style}
                      >
                        {year}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="overflow-hidden">
                        <h4
                          className="card-title !mb-0"
                          style={{
                            height: "100%",
                            fontSize: "18px",
                            color: "rgba(41, 0, 2, 0.534)",
                            fontFamily: "Barlow, sans-serif",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            wordBreak: "keep-all",
                            textDecoration: "none",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
