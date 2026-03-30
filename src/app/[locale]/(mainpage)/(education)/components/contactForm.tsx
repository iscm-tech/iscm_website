"use client";

import { useLocale } from "next-intl";
import { CSSProperties, FormEvent, useEffect, useState } from "react";
import { Mirage } from "ldrs/react";

// Services
import SendmailTransport from "@/lib/mail";

// Utils
import { ibm_plex_sans } from "@/app/fontDeclare";
import "./contact-form.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MailIcon, PhoneCallIcon, SendHorizontalIcon } from "lucide-react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

// Components
import { message } from "antd";
import Link from "next/link";
import PhoneNumber from "@/components/phoneNumber";

export default function ContactForm({
  category,
  primaryColor = "#ce2027",
}: {
  category: string;
  primaryColor?: string;
}) {
  const locale = useLocale();

  const [messageApi, contextHolder] = message.useMessage();

  const [sendMailLoading, setSendMailLoading] = useState<boolean>(false);

  async function sendMail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSendMailLoading(true);

    const formEle = e.currentTarget;
    const form = new FormData(e.currentTarget);

    const message = `Thân gửi các thầy/cô ISCM, <br/>
        Bạn ${form.get(
          "name",
        )} có một số thắc mắc về ${category} như sau: <br/><br/>
        <p style="padding-left: 16px">${form.get("message")}</p> <br />
        Thông tin liên hệ bạn ${form.get("name")}: <br />
        <ul>
          <li>Số điện thoại: ${form.get("phone")}</li>
          <li>Email: ${form.get("email")}</li>
        </ul>
      `;

    await SendmailTransport(message, `THẮC MẮC VỀ ${category.toUpperCase()}`);

    messageApi.open({
      type: "success",
      content: "Your question is sent Successfully!",
    });

    setSendMailLoading(false);
    formEle.getElementsByTagName("textarea")[0].value = "";
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc(this: Element) {
      const parent = this.parentNode as HTMLElement;
      parent.classList.add("focus");
    }

    function blurFunc(this: HTMLInputElement) {
      const parent = this.parentNode as HTMLElement;
      if (!this.value) {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, []);

  return (
    <div
      id="contact"
      className="container pb-20 mt-11"
      style={{ "--primaryColor": primaryColor } as CSSProperties}
    >
      <div className="row justify-center">
        <div className="form">
          <div className="contact-info">
            <h3
              className="title uppercase !text-3xl"
              style={ibm_plex_sans.style}
            >
              {locale === "en" ? "Get in Touch" : "Thông tin liên hệ"}
            </h3>
            <p className="text-justify mt-4 leading-relaxed text-base">
              {locale === "en"
                ? "If you have any questions regarding the curriculum or the admission methods, please do not hesitate to contact ISCM through the email address or phone number provided below. You may also submit your questions via the inquiry form, and we will get in touch with you as soon as possible to provide assistance."
                : "Nếu bạn có bất kỳ thắc mắc gì hãy liên hệ với ISCM thông qua địa chỉ email và số điện thoại bên dưới hoặc cũng có thể gửi câu hỏi thông qua bảng hỏi bên cạnh. ISCM sẽ liên hệ giải đáp với bạn sớm nhất!"}
            </p>

            <div className="info flex flex-col gap-1">
              <div className="information">
                <MailIcon size={20} className="mr-2" />
                <p className="mb-0 text-base">iscm@ueh.edu.vn</p>
              </div>
              <div className="information mt-1">
                <PhoneCallIcon size={20} className="mr-2" />
                <PhoneNumber />
              </div>
              <div className="information mt-1">
                <FontAwesomeIcon icon={faFacebook} className="text-xl mr-2" />
                <Link
                  href="https://www.facebook.com/ISCM.UEH"
                  className="mb-0 text-base hover:underline text-black"
                  target="_blank"
                >
                  Fanpage ISCM
                </Link>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form autoComplete="off" method="post" onSubmit={sendMail}>
              <h3 className="title" style={ibm_plex_sans.style}>
                {locale === "en"
                  ? "Send Your Question!"
                  : "Gửi câu hỏi của bạn tại đây!"}
              </h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">
                  {locale === "en" ? "Name" : "Tên của bạn"}
                </label>
                <span>{locale === "en" ? "Name" : "Tên của bạn"}</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" required />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">
                  {locale === "en" ? "Phone" : "Số điện thoại"}
                </label>
                <span>{locale === "en" ? "Phone" : "Số điện thoại"}</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="">
                  {locale === "en" ? "Message" : "Câu hỏi"}
                </label>
                <span>{locale === "en" ? "Message" : "Câu hỏi"}</span>
              </div>
              <button
                type="submit"
                className="btn !flex gap-2 justify-center items-center"
                disabled={sendMailLoading}
              >
                {sendMailLoading && (
                  <div>
                    <Mirage size="40" speed="2.5" color={primaryColor} />
                  </div>
                )}
                {!sendMailLoading && (
                  <>
                    {locale === "en" ? "Send" : "Gửi"}
                    <SendHorizontalIcon size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {contextHolder}
    </div>
  );
}
