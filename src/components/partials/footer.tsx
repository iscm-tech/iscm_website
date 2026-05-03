"use client";

import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import {
  elearningURL,
  email,
  futureURL,
  givingTreeURL,
  globalURL,
  greenCampusURL,
  informationURL,
  jobURL,
  logo,
  recruitURL,
  ueh_ctd_logo,
  ueh_giving_tree,
  ueh_green_campus,
  ueh_link_elearning,
  ueh_link_future,
  ueh_link_global,
  ueh_link_information,
  ueh_link_job,
  ueh_link_recruit,
  ueh_link_virtual,
  virtualURL,
} from "@/constants";
import { address as addressEn, copyright as copyrightEn } from "@/constants/en";
import { address as addressVi, copyright as copyrightVI } from "@/constants/vi";
import Image from "next/image";
import { useLocale } from "next-intl";
import styled from "styled-components";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import PhoneNumber from "../phoneNumber";
import Link from "next/link";

const FooterStyled = styled.footer`
  * {
    color: white;
  }
`;

export default function Footer() {
  const locale = useLocale();
  return (
    <FooterStyled>
      <div className="footer bg-footer !pb-20 section border-bottom">
        <div className="container">
          <div
            className="slogan"
            style={{
              marginTop: "-15%",
              textAlign: "center",
              marginBottom: "10%",
            }}
          >
            <h2
              className="text-[whitesmoke] text-4xl"
              style={ibm_plex_sans.style}
            >
              SHAPING THE UNKNOWN FUTURE
            </h2>
          </div>
          <div className="row justify-between">
            <div className="col-12 col-lg-5 mb-5 mb-lg-0">
              <figure className="row max-w-[550px] flex items-center">
                <Image
                  src={ueh_ctd_logo}
                  width="220"
                  height="70"
                  className="col-6 p-0 object-contain"
                  alt="ueh_ctd"
                  quality={100}
                />
                <Image
                  className="col-6 p-0 object-contain"
                  src={logo}
                  alt="logo"
                  width="220"
                  height="70"
                  quality={100}
                />
              </figure>
              <ul className="list-unstyled row footer__info">
                <li className="mb-3 col-12">
                  {locale === "en" ? addressEn : addressVi}
                </li>
                <li className="mb-3 col-12">{email}</li>
                <li className="col-12">
                  <PhoneNumber />
                </li>
              </ul>
              <ul className="list-unstyled mt-3 flex flex-wrap gap-5">
                <li className="flex items-center">
                  <Link
                    href="https://www.facebook.com/ISCM.UEH"
                    target="_blank"
                    className="d-inline-block mr-2 text-color"
                    aria-label="facebook"
                  >
                    <Facebook size="24px" />
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="https://www.linkedin.com/company/iscm-ueh"
                    target="_blank"
                    className="d-inline-block mr-2 text-color"
                    aria-label="linkedin"
                  >
                    <Linkedin size="24px" />
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="https://www.youtube.com/@instituteofsmartcityandman8501"
                    target="_blank"
                    className="d-inline-block mr-2 text-color"
                    aria-label="youtube"
                  >
                    <Youtube size="24px" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0 items-center">
              <h3 className="text-center text-lg">
                {locale === "en"
                  ? "Explore UEH Information"
                  : "Khám phá các thông tin UEH"}
              </h3>
              <ul
                className="list-unstyled mt-4 flex flex-wrap gap-y-5 gap-x-4 justify-center"
                style={{ textAlign: "center" }}
              >
                <li>
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={informationURL}
                  >
                    <Image
                      width={80}
                      height={36}
                      className="h-9 w-auto object-contain"
                      src={ueh_link_information}
                      alt="ueh_link_information"
                    />
                    <span style={barlow.style}>UEH All in One</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={futureURL}
                  >
                    <Image
                      width={80}
                      height={36}
                      className="h-9 w-auto object-contain"
                      src={ueh_link_future}
                      alt="ueh_sustainable"
                    />
                    <span style={barlow.style}>UEH Sustainable</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={greenCampusURL}
                  >
                    <Image
                      width={80}
                      height={36}
                      className="h-9 w-auto object-contain"
                      src={ueh_green_campus}
                      alt="ueh_green_campus"
                    />
                    <span style={barlow.style}>UEH Green Campus</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={givingTreeURL}
                  >
                    <Image
                      width={80}
                      height={36}
                      className="h-9 w-auto object-contain"
                      src={ueh_giving_tree}
                      alt="ueh_giving_tree"
                    />
                    <span style={barlow.style}>UEH Giving Tree</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={recruitURL}
                  >
                    <Image
                      width={80}
                      height={36}
                      className="h-9 w-auto object-contain"
                      src={ueh_link_recruit}
                      alt="ueh_link_recruit"
                    />
                    <span style={barlow.style}>
                      {locale === "en" ? "Recruitment" : "Tuyển sinh"}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={jobURL}
                  >
                    <Image
                      width={80}
                      height={36}
                      className="h-9 w-auto object-contain"
                      src={ueh_link_job}
                      alt="ueh_link_job"
                    />
                    <span style={barlow.style}>
                      {locale === "en"
                        ? "UEH Career for Student"
                        : "Cổng việc làm sinh viên"}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex flex-col items-center"
                    target="_blank"
                    href={virtualURL}
                  >
                    <Image
                      width={80}
                      height={36}
                      className="h-9 w-auto object-contain"
                      src={ueh_link_virtual}
                      alt="ueh_link_virtual"
                    />
                    <span style={barlow.style}>UEH Virtual Tour</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer">
        <div className="copyright py-2 bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p className="mb-0">
                  {locale === "en" ? copyrightEn : copyrightVI}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}
