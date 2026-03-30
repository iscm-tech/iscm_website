"use client";

import { barlow, ibm_plex_sans } from "@/app/fontDeclare";
import {
  elearningURL,
  email,
  futureURL,
  globalURL,
  informationURL,
  jobURL,
  logo,
  recruitURL,
  ueh_ctd_logo,
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
import { Popover } from "antd";
import { useLocale } from "next-intl";
import styled from "styled-components";
import { Facebook, Linkedin, Slash, Youtube } from "lucide-react";
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
          <div className="row">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
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
            </div>

            <div className="col-12 col-lg-6 mt-4 mt-lg-0 items-center">
              <h3 className="text-center text-lg">Explore UEH Facilities</h3>
              <ul
                className="list-unstyled mt-4 flex flex-wrap gap-5 justify-center"
                style={{ textAlign: "center" }}
              >
                <li>
                  <a className="" target="_blank" href={recruitURL}>
                    <Popover
                      placement="bottom"
                      mouseEnterDelay={0}
                      mouseLeaveDelay={0}
                      content={<span style={barlow.style}>Admission</span>}
                    >
                      <Image
                        width={36}
                        height={36}
                        src={ueh_link_recruit}
                        alt="ueh_link_recruit"
                      />
                    </Popover>
                  </a>
                </li>
                <li>
                  <a className="" target="_blank" href={futureURL}>
                    <Popover
                      placement="bottom"
                      mouseEnterDelay={0}
                      mouseLeaveDelay={0}
                      content={
                        <span style={barlow.style}>UEH Sustainable</span>
                      }
                    >
                      <Image
                        width={36}
                        height={36}
                        src={ueh_link_future}
                        alt="ueh_sustainable"
                      />
                    </Popover>
                  </a>
                </li>
                <li>
                  <a className="" target="_blank" href={globalURL}>
                    <Popover
                      placement="bottom"
                      mouseEnterDelay={0}
                      mouseLeaveDelay={0}
                      content={
                        <span style={barlow.style}>UEH Global Learning</span>
                      }
                    >
                      <Image
                        width={36}
                        height={36}
                        src={ueh_link_global}
                        alt="ueh_link_global"
                      />
                    </Popover>
                  </a>
                </li>
                <li>
                  <a className="" target="_blank" href={elearningURL}>
                    <Popover
                      placement="bottom"
                      mouseEnterDelay={0}
                      mouseLeaveDelay={0}
                      content={<span style={barlow.style}>E-Learning</span>}
                    >
                      <Image
                        width={36}
                        height={36}
                        src={ueh_link_elearning}
                        alt="ueh_link_elearning"
                      />
                    </Popover>
                  </a>
                </li>
                <li>
                  <a className="" target="_blank" href={jobURL}>
                    <Popover
                      placement="bottom"
                      mouseEnterDelay={0}
                      mouseLeaveDelay={0}
                      content={
                        <span style={barlow.style}>UEH Career for Student</span>
                      }
                    >
                      <Image
                        width={36}
                        height={36}
                        src={ueh_link_job}
                        alt="ueh_link_job"
                      />
                    </Popover>
                  </a>
                </li>
                <li>
                  <a className="" target="_blank" href={informationURL}>
                    <Popover
                      placement="bottom"
                      mouseEnterDelay={0}
                      mouseLeaveDelay={0}
                      content={<span style={barlow.style}>UEH All in One</span>}
                    >
                      <Image
                        width={36}
                        height={36}
                        src={ueh_link_information}
                        alt="ueh_link_information"
                      />
                    </Popover>
                  </a>
                </li>
                <li>
                  <a className="" target="_blank" href={virtualURL}>
                    <Popover
                      placement="bottom"
                      mouseEnterDelay={0}
                      mouseLeaveDelay={0}
                      content={
                        <span style={barlow.style}>UEH Virtual Tour</span>
                      }
                    >
                      <Image
                        width={36}
                        height={36}
                        src={ueh_link_virtual}
                        alt="ueh_link_virtual"
                      />
                    </Popover>
                  </a>
                </li>
              </ul>

              <h3 className="text-center text-lg mt-5">ISCM Social Platforms</h3>
              <ul className="list-unstyled mt-3 flex flex-wrap gap-5 justify-center">
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
