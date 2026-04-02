import fs from "fs";
import path from "path";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Metadata } from "next";

import { recap_video } from "@/constants";
import { ibm_plex_sans } from "../fontDeclare";

import { Divider } from "antd";
import DomParser from "@/components/domParser";
import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";
import DateCard from "@/components/dateCard";
import HighlightPost from "@/components/highlightPost";
import HomePage from "./homepage_views/homepage";
import NewsList from "./homepage_views/newsList";
import FeatureEvent from "./homepage_views/featureEvent";
import InternalLinks from "./homepage_views/internalLink";

import { getPostServices } from "@/services/post.service";

export const metadata: Metadata = {
  title: "Institute of Smart City & Management",
};

export default async function Home() {
  const i18n = await getTranslations();
  const locale = await getLocale();

  const { iscmname } = await import(`@/constants/${locale}`);

  const partnerPath = path.normalize(process.cwd() + "/public/images/partners");

  const partnerLists = fs.readdirSync(partnerPath);
  const partnerSeperateIndex = Math.floor(partnerLists.length / 2);

  try {
    const {
      payload: { data: posts },
    } = await getPostServices.getLatestPost(locale);

    const {
      payload: { data: events },
    } = await getPostServices.getFeatureEvent(locale);

    const {
      payload: { data: portal },
    } = await getPostServices.getLatestPortal(locale);

    return (
      <>
        <Header />
        <HomePage>
          {/* Video */}
          <div className="header-section bg-cover shadow-md">
            <div
              style={{ backgroundColor: "gray", width: "100%", height: "100%" }}
            >
              <div
                className="d-flex align-items-center justify-content-center video-banner__overlay"
                style={{
                  zIndex: 999,
                  width: "100%",
                  textAlign: "center",
                  height: "100%",
                  position: "absolute",
                }}
              >
                <div className="inline-block">
                  <h2
                    className="text-layout text-xl lg:text-5xl"
                    style={{
                      ...ibm_plex_sans.style,
                      zIndex: 999,
                    }}
                  >
                    <DomParser content={iscmname} />
                  </h2>
                </div>
                <div id="mouse-scroll" className="">
                  <div className="mouse">
                    <div className="mouse-in"></div>
                  </div>
                  <div>
                    <span className="down-arrow-1"></span>
                    <span className="down-arrow-2"></span>
                    <span className="down-arrow-3"></span>
                  </div>
                </div>
              </div>
              <video
                autoPlay
                loop
                muted
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "black",
                }}
              >
                <source src={recap_video} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Feature events */}
          {events.length > 0 && (
            <section className="section">
              <div className="container">
                <div className="row">
                  <span className="flex w-full px-3 justify-between">
                    <h2
                      className="section-title mb-3 text-nowrap uppercase text-[#ce2027]"
                      style={ibm_plex_sans.style}
                    >
                      {i18n("events")}
                    </h2>
                    <Link
                      href="/events"
                      className="flex items-center gap-3 text-base whitespace-nowrap hover:text-[#981919]"
                    >
                      {i18n("read_more")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="500"
                        height="500"
                        style={{
                          width: "25px",
                          height: "fit-content",
                          transform: "translate3d(0,0,0)",
                          contentVisibility: "visible",
                        }}
                        viewBox="0 0 500 500"
                      >
                        <g clipPath="url(#a)">
                          <g className="primary design" clipPath="url(#b)">
                            <path className="primary" />
                          </g>
                          <g clipPath="url(#c)">
                            <g className="primary design">
                              <path className="primary" />
                            </g>
                            <g className="primary design">
                              <path className="primary" />
                            </g>
                          </g>
                          <g clipPath="url(#d)">
                            <g fill="none" className="primary design">
                              <path className="primary" />
                              <path className="primary" />
                            </g>
                            <g className="primary design">
                              <path fill="none" className="primary" />
                            </g>
                            <g className="primary design">
                              <path fill="none" className="primary" />
                            </g>
                            <g className="primary design">
                              <path
                                fill="currentColor"
                                d="m453.856 239.015-82.167-83.334c-6.065-6.153-15.976-6.224-22.132-.156-6.154 6.068-6.224 15.978-.155 22.132l55.901 56.696H57.294c-8.644 0-15.651 7.007-15.651 15.65s7.007 15.649 15.651 15.649h348.01l-55.902 56.697c-6.069 6.154-5.999 16.064.155 22.132a15.6 15.6 0 0 0 10.988 4.505c4.042 0 8.082-1.557 11.144-4.662l82.167-83.334c6.009-6.093 6.009-15.882 0-21.975"
                                className="primary"
                              />
                            </g>
                            <g className="primary design">
                              <path
                                fill="currentColor"
                                d="m453.856 239.015-82.167-83.334c-6.065-6.153-15.976-6.224-22.132-.156-6.154 6.068-6.224 15.978-.155 22.132l55.901 56.696H57.294c-8.644 0-15.651 7.007-15.651 15.65s7.007 15.649 15.651 15.649h348.01l-55.902 56.697c-6.069 6.154-5.999 16.064.155 22.132a15.6 15.6 0 0 0 10.988 4.505c4.042 0 8.082-1.557 11.144-4.662l82.167-83.334c6.009-6.093 6.009-15.882 0-21.975"
                                className="primary"
                              />
                            </g>
                          </g>
                          <g clipPath="url(#e)">
                            <g className="primary design">
                              <path fill="none" className="primary" />
                            </g>
                            <g className="primary design">
                              <path fill="none" className="primary" />
                            </g>
                            <g className="primary design">
                              <path className="primary" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </Link>
                  </span>
                  <Divider className="bg-[#DCD9D1] mt-0 mb-3" />
                </div>
                <FeatureEvent events={events} />
              </div>
            </section>
          )}

          {/* Highlight Posts */}
          <section className="section">
            <div className="container">
              <div className="row mb-2">
                <span className="flex w-full px-3 justify-between">
                  <h2
                    className="section-title mb-2 text-nowrap uppercase text-[#ce2027]"
                    style={ibm_plex_sans.style}
                  >
                    {i18n("highlights")}
                  </h2>
                </span>
                <Divider className="bg-[#DCD9D1] mt-0 mb-0" />
              </div>
              <div className="row mt-3 flex items-stretch">
                <div className="col-lg-9 col-12 flex flex-col justify-between gap-3">
                  <div className="row flex-1">
                    <div className="col-12 !pl-1 !pr-1">
                      <HighlightPost
                        key={posts[0].id}
                        basePath={posts[0].category}
                        id={posts[0].slug}
                        publishDate={posts[0].publishDate}
                        sdgs={posts[0].sdgs}
                        thumb={posts[0].thumbnail}
                        title={posts[0].title}
                        category={posts[0].category}
                        desc={posts[0].description || ""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-4 !pl-1 !pr-1 mt-2 mt-lg-0">
                      <DateCard
                        key={posts[1].id}
                        basePath={posts[1].category}
                        id={posts[1].slug}
                        publishDate={posts[1].publishDate}
                        sdgs={posts[1].sdgs}
                        thumb={posts[1].thumbnail}
                        thumbStyle={{ height: "fit-content" }}
                        title={posts[1].title}
                        cardStyle={{
                          backgroundColor: "#f9f9f9",
                        }}
                        bodyStyle={{ flex: 1 }}
                        isBorder={false}
                        imgQuality={100}
                        category={posts[1].category}
                      />
                    </div>
                    <div className="col-12 col-lg-4 !pl-1 !pr-1 mt-2 mt-lg-0">
                      <DateCard
                        key={posts[2].id}
                        basePath={posts[2].category}
                        id={posts[2].slug}
                        publishDate={posts[2].publishDate}
                        sdgs={posts[2].sdgs}
                        thumb={posts[2].thumbnail}
                        title={posts[2].title}
                        cardStyle={{
                          backgroundColor: "#f9f9f9",
                        }}
                        bodyStyle={{ flex: 1 }}
                        isBorder={false}
                        imgQuality={100}
                        category={posts[2].category}
                      />
                    </div>
                    <div className="col-12 col-lg-4 !pl-1 !pr-1 mt-2 mt-lg-0">
                      <DateCard
                        key={posts[3].id}
                        basePath={posts[3].category}
                        id={posts[3].slug}
                        publishDate={posts[3].publishDate}
                        sdgs={posts[3].sdgs}
                        thumb={posts[3].thumbnail}
                        title={posts[3].title}
                        cardStyle={{
                          backgroundColor: "#f9f9f9",
                        }}
                        bodyStyle={{ flex: 1 }}
                        isBorder={false}
                        imgQuality={100}
                        category={posts[3].category}
                      />
                    </div>
                  </div>

                  <Divider className="bg-[#DCD9D1] d-none d-lg-block mt-auto mb-0" />

                  {posts.slice(4).map((post) => (
                    <div className="row mt-2 mt-lg-0 d-lg-none" key={post.id}>
                      <div className="col-12">
                        <DateCard
                          basePath={post.category}
                          id={post.slug}
                          publishDate={post.publishDate}
                          sdgs={post.sdgs}
                          thumb={post.thumbnail}
                          title={post.title}
                          cardStyle={{
                            backgroundColor: "#f9f9f9",
                          }}
                          bodyStyle={{ flex: 1 }}
                          isBorder={false}
                          imgQuality={100}
                          category={post.category}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-lg-3 !pl-1 !pr-1 hidden d-lg-flex flex-col">
                  <div className="mb-2" key={posts[4].id}>
                    <DateCard
                      key={posts[4].id}
                      basePath={posts[4].category}
                      id={posts[4].slug}
                      publishDate={posts[4].publishDate}
                      sdgs={posts[4].sdgs}
                      thumb={posts[4].thumbnail}
                      title={posts[4].title}
                      cardStyle={{ backgroundColor: "#f9f9f9" }}
                      isBorder={false}
                      category={posts[4].category}
                    />
                  </div>
                  <Divider className="bg-[#DCD9D1] d-none d-lg-block mt-2 mb-2" />
                  <div className="px-2 h-full flex items-center">
                    <InternalLinks />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portal News */}
          {portal.length > 0 && (
            <section className="section">
              <div className="container">
                <div className="row mb-2">
                  <h2
                    className="section-title mb-2 text-nowrap uppercase text-[#ce2027]"
                    style={ibm_plex_sans.style}
                  >
                    {locale === "en" ? <>News from UEH</> : <>Tin tức từ UEH</>}
                  </h2>
                  <Divider className="bg-[#DCD9D1] mt-0 mb-0" />
                </div>

                <div className="row">
                  <NewsList admissions={portal} />
                </div>
              </div>
            </section>
          )}

          {/* Networks */}
          <section className="section">
            <h2 className="text-center mb-8 uppercase">
              {locale === "en"
                ? "International Network"
                : "Mạng lưới Đối tác Quốc tế"}
            </h2>
            <div className="logo-container">
              <div className="wrapper">
                {partnerLists
                  .slice(0, partnerSeperateIndex)
                  .map((partner, index) => (
                    <Image
                      className="flex-shrink-0 object-contain itemRight w-[95px] h-[50px]"
                      key={partner}
                      src={"/images/partners/" + partner}
                      width={100}
                      height={100}
                      alt={partner}
                      style={{
                        animationDelay: `calc(120s / ${partnerSeperateIndex} * (${partnerSeperateIndex} - ${
                          index + 1
                        }) * -1)`,
                        left: `max(calc(200px * ${
                          partnerSeperateIndex + 1
                        }), 100%)`,
                        animationName: "scrollLeft",
                      }}
                    />
                  ))}
              </div>
              <div className="wrapper">
                {partnerLists
                  .slice(partnerSeperateIndex, partnerLists.length)
                  .map((partner, index) => (
                    <Image
                      className="flex-shrink-0 object-contain itemRight w-[95px] h-[50px]"
                      key={partner}
                      src={"/images/partners/" + partner}
                      width={100}
                      height={50}
                      alt={partner}
                      style={{
                        animationDelay: `calc(120s / ${
                          partnerLists.length - partnerSeperateIndex
                        } * (${partnerLists.length - partnerSeperateIndex} - ${
                          index + 1
                        }) * -1)`,
                        right: `max(calc(200px * ${
                          partnerLists.length - partnerSeperateIndex
                        }), 100%)`,
                        animationName: "scrollRight",
                      }}
                    />
                  ))}
              </div>
            </div>
          </section>
        </HomePage>
        <Footer />

        <Link
          href={"https://ueh50.ueh.edu.vn"}
          target="_blank"
          className="fixed right-3 bottom-5 w-20 h-20 rounded-full block z-[1024] shadow-drop-center"
          style={{
            background:
              "radial-gradient(circle,rgba(255, 255, 255, 1) 10%, rgba(206, 32, 39, 0.2) 95%)",
            backdropFilter: "blur(14px)",
          }}
        >
          <Image
            src={"/images/ueh-50yr-anni.png"}
            alt="UEH 50-years Anniversary"
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </Link>
      </>
    );
  } catch (error) {
    console.log(error);
    return (
      <p>
        Trang hiện tại đang gặp sự cố. Hãy thử truy cập lại sau hoặc liên hệ với
        chúng tôi thông qua email.
      </p>
    );
  }
}
