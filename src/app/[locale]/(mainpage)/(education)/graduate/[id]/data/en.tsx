import { useDOMParser as DOMParser } from "@/hooks/domHook";
import { Image } from "antd";

const infoEn = {
  standard: {
    about: (
      <div>
        <p>
          The Master of Smart City and Innovation Management (MSCIM) program
          equips learners with advanced professional expertise and the ability
          to master fields related to urban governance and science and
          technology, focusing on integrated solutions for managing smart cities
          through innovative approaches.The program emphasizes the application
          of smart technologies in urban areas and innovative, environmentally
          friendly governance, with a focus on sustainable development.
        </p>
        <p className="font-bold">Program Information:</p>

        <ul className="!pl-4">
          {[
            "Education level: <b>Master - Standard - Application-oriented</b>",
            "Major and minor: Public Management, Smart City and Innovation Management",
            "Code: 8340403",
            "Estimated tuition fee: 1,650,000VND/credit",
          ].map((item) => (
            <li
              className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black"
              key={item}
            >
              {DOMParser(item)}
            </li>
          ))}
        </ul>
      </div>
    ),
    accordion: [
      {
        label: "Admission Criteria",
        content: (
          <div>
            <p className="font-bold">1. Admission Criteria</p>
            <p className="mb-3">
              According to the current regulations of the Ministry of Education
              and Training and the training regulations of the University of
              Economics Ho Chi Minh City.
            </p>

            <p className="font-bold">2. Application Information</p>
            <p className="mb-3">
              According to current regulations of the Ministry of Education and
              Training and the training regulations of the University of
              Economics Ho Chi Minh City (UEH)
            </p>
            <p>Requirements for Applicants:</p>
            <ul className="mb-3">
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Must have graduated or be eligible for recognition of graduation
                from a university (or equivalent or higher level) in a relevant
                field; for application-oriented programs, applicants must have
                graduated with at least a “Good” classification or have a
                published article (with ISSN), a published conference paper
                (with ISBN), or have participated in a research project at
                institutional level or higher that has been accepted and is
                related to the intended field of study. All the above-mentioned
                works must have been published within 5 years prior to the
                application submission date;
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Must have foreign language proficiency at Level 3 or higher
                according to the Vietnamese 6-level Foreign Language Proficiency
                Framework;
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Must meet other requirements of the training program standards
                issued by the Ministry of Education and Training and the
                specific regulations of the training program.
              </li>
            </ul>
            <p className="mb-3">
              List of relevant fields: Applied according to Appendix 2,
              Regulation No. 3840/QĐ-ĐHKT-ĐBCLPTCT dated December 9, 2021.{" "}
            </p>
            <p className="mb-2">
              Applicants who graduated from undergraduate programs not in
              relevant fields must complete 06 supplementary foundational
              courses (12 credits) specific to the master’s program, as follows
              (according to the current announcement from the Department of
              Training):
            </p>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li className="block">
                (1) Principles of Finance – Banking (2 credits)
              </li>
              <li className="block">(2) Management Studies (2 credits)</li>
              <li className="block">(3) Microeconomics (2 credits)</li>
              <li className="block">(4) Macroeconomics (2 credits)</li>
              <li className="block">
                (5) Probability and Statistics (2 credits)
              </li>
              <li className="block">(6) Advanced Mathematics (2 credits)</li>
            </ul>

            <p>
              Applicants may be exempted from one (or more) of the above courses
              if they have already completed them at the undergraduate level.
            </p>
            <p className="my-3">
              <b>Applicants who are foreign nationals:</b> <br />
              If applying for master’s programs taught in Vietnamese, they must
              have Vietnamese proficiency at Level 4 or higher according to the
              Vietnamese Language Proficiency Framework for Foreigners, or have
              graduated from a university (or equivalent or higher level) where
              the program was taught in Vietnamese; and meet the second foreign
              language requirement as regulated by UEH (if applicable).
            </p>
            <p>
              <b>For programs taught in a foreign language</b>, applicants must
              meet the language requirements by satisfying one of the following
              conditions:
            </p>
            <ul>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                The applicant is a citizen of a country where the language of
                instruction is the official language;
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Holds a university degree or higher in the language of
                instruction; or a university degree or higher where the program
                was primarily taught in the language of instruction;
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Possesses a diploma or certificate in the language of
                instruction equivalent to Level 4 or higher according to the
                Vietnamese 6-level Foreign Language Proficiency Framework as
                specified in Appendix 1 of this regulation, or other equivalent
                certificates announced by the Ministry of Education and
                Training, valid at the time of application.
              </li>
            </ul>
            <p className="font-bold text-black">
              (According to Decision No. 3794/QĐ-ĐHKT-ĐTSĐH dated December 8,
              2021 on the issuance of the Regulation on Admission and Training
              at Master’s Level – Article 5)
            </p>
          </div>
        ),
      },
      {
        label: "Program Structure",
        content: (
          <Image
            className="w-full"
            alt={"program structure"}
            src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/standard.png"
          />
        ),
      },
    ],
  },
  executive: {
    about: (
      <div>
        <p>
          The Executive Master’s Program in Smart City and Innovation Management
          (MESCIM) at the Institute of Smart City and Management is a
          specialized postgraduate program designed to train and develop
          experienced managers. The programme equips learners with the essential
          competencies to effectively manage areas related to science and
          technology, propose integrated solutions for planning and designing
          sustainable smart cities that are human-centered and
          community-oriented.
        </p>
        <p className="font-bold">Program Information:</p>

        <ul className="!pl-4">
          {[
            "Education level: <b>Master - Executive - Application-oriented</b>",
            "Major and minor: Public Management, Smart City and Innovation Management",
            "Code: 8340403",
            "Estimated tuition fee: 3,000,000VND/credit",
          ].map((item) => (
            <li
              className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black"
              key={item}
            >
              {DOMParser(item)}
            </li>
          ))}
        </ul>
      </div>
    ),
    accordion: [
      {
        label: "Target Learners",
        content: (
          <div>
            <p>
              Learners who aim to develop professional expertise and management
              skills in government agencies, non-governmental organizations,
              research institutes, private enterprises, or fields related to
              urban development, governance, planning (smart and sustainable),
              infrastructure, transportation, real estate, architecture,
              technology applications, and the environment.
            </p>

            <p className="mt-3 font-bold">
              Applicants must have at least 2 years of work experience and 1
              year of management experience at the department level (or
              equivalent) or higher.
            </p>
          </div>
        ),
      },
      {
        label: "Admission Criteria",
        content: (
          <div>
            <p className="mb-3">
              Applicants for the Executive Master&apos;s Program must have a
              clear personal background, not be under criminal investigation,
              and meet the following conditions:
            </p>

            <p className="font-bold">
              1. Work Experience and Management Requirements
            </p>
            <p className="mb-3">
              Applicants must have{" "}
              <i>
                at least 2 years of work experience and 1 year of management
                experience
              </i>{" "}
              at the department level (or equivalent) or higher in corporations,
              enterprises, or agencies/organizations. Work and management
              experience is calculated from the date of recruitment or
              appointment to the date of application submission.
            </p>
            <p className="font-bold">2. Academic Qualifications</p>
            <ul className="mb-3">
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Must hold a bachelor&apos;s degree in economics, business, or
                management.
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                If the degree is not in economics, business, or management,
                applicants must obtain a supplementary knowledge certificate
                issued by the UEH Department of Training for the following
                subjects:
                <ul
                  className="mt-2"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="block">
                    (1) Principles of Finance – Banking (2 credits)
                  </li>
                  <li className="block">(2) Management Studies (2 credits)</li>
                  <li className="block">(3) Microeconomics (2 credits)</li>
                  <li className="block">(4) Macroeconomics (2 credits)</li>
                  <li className="block">
                    (5) Probability and Statistics (2 credits)
                  </li>
                  <li className="block">
                    (6) Advanced Mathematics (2 credits)
                  </li>
                </ul>
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Degrees and transcripts issued by foreign institutions must be
                notarized in Vietnamese and accompanied by a recognition
                document from the Quality Management Department (information on
                registering for recognition of foreign degrees can be found at
                https://naric.edu.vn, under the section “Guidelines for
                Recognition Process of Foreign Degrees”).
              </li>
            </ul>

            <p className="font-bold">3. Foreign Language Requirements:</p>
            <ul className="mb-3">
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Applicants must achieve a minimum score of 50 out of 100 on
                UEH’s entrance foreign language exam.
              </li>
              <li className="list-item relative before:content-['-'] before:absolute before:left-0 before:text-black">
                Applicants are exempt from the foreign language requirement if
                they possess one of the following degrees or certificates:
                <ul
                  className="mt-2"
                  style={{ listStyle: "none", paddingLeft: 0 }}
                >
                  <li className="list-item relative before:content-['+'] before:absolute before:left-0 before:text-black">
                    A university degree or higher in a foreign language major,
                    or a university degree or higher where the program was
                    primarily taught in a foreign language (with confirmation
                    from the issuing institution);
                  </li>
                  <li className="list-item relative before:content-['+'] before:absolute before:left-0 before:text-black">
                    {" "}
                    A university, master’s, or doctoral degree issued by UEH
                    within 2 years prior to the application date, where the
                    program’s learning outcomes meet the foreign language
                    requirement at Level 3 or higher according to the Vietnamese
                    6-level Foreign Language Proficiency Framework;
                  </li>
                  <li className="list-item relative before:content-['+'] before:absolute before:left-0 before:text-black">
                    A diploma or certificate in a foreign language equivalent to
                    Level 3 or higher according to the Vietnamese 6-level
                    Foreign Language Proficiency Framework (see Appendix I,
                    Reference Table for Foreign Language Certificates), or other
                    equivalent certificates issued by institutions recognized by
                    the Ministry of Education and Training, valid within 2 years
                    prior to the application date.
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              Note: The entrance and graduation foreign language must be in the
              same language.
            </p>
          </div>
        ),
      },
      {
        label: "Program Structure",
        content: (
          <Image
            className="w-full"
            alt={"program structure"}
            src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/executive.png"
          />
        ),
      },
    ],
  },
  "dual-degree": {
    about: (
      <p>
        Offers an exclusive dual degree in collaboration with top-tier global
        universities, empowering learners with specialized expertise in smart
        urban management:
      </p>
    ),
    accordion: [
      {
        label: "Handong Global University (Korea)",
        content: (
          <div>
            <p className="mb-3">
              Master of Smart City and Innovation Management - Master of Human
              Ecology and Technology
            </p>
            <p className="mb-3">
              Focuses on integrating technology and data-driven solutions into
              urban planning. Learners gain expertise in smart infrastructure,
              sustainable urban design, tech-driven policy-making, and
              human-centered ecology.
            </p>
            <Image
              alt="Master OD"
              src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/hgu.png"
              className="mb-3 w-full"
            />
            <i>
              Handong Global University is located in Pohang, which was
              established in 1994. It fosters world-changing leaders by pursuing
              academic excellence and holistic education. As an institution of
              higher learning, It will be an example of a &apos;glocal&apos;
              university that serves our neighbors and the world with love,
              wisdom, and creativity.
            </i>
          </div>
        ),
      },
      {
        label: "Hasselt University (Belgium)",
        content: (
          <div>
            <p className="mb-3">
              Master of Smart City and Innovation Management - Master of
              Transportation Sciences
            </p>
            <p className="mb-3">
              Offers specialized knowledge in smart mobility, sustainable
              transport planning, and urban logistics, equipping learners with
              the skills to design future-ready transportation systems.
            </p>
            <Image
              alt="Master OD"
              src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/uhasselt.png"
              className="mb-3 w-full"
            />
            <i>
              Hasselt University is a public university located in the cities of
              Hasselt and Diepenbeek, in the Flanders region of Belgium. It is
              an innovative institution with a strong international orientation.
              The university is committed to delivering high-1 education,
              conducting leading research in key focus areas, and promoting
              innovation and entrepreneurship. Students are exposed to advanced
              research methods, learn from experienced experts, and participate
              in practical projects aimed at addressing real-world challenges.
            </i>
          </div>
        ),
      },
      {
        label: "KU Leuven University (Belgium)",
        content: (
          <div>
            <p className="mb-3">
              Master of Smart City and Innovation Management - Master of Human
              Settlement
            </p>
            <p className="mb-3">
              Provides a global perspective on housing, spatial planning, and
              social inclusion, helping learners develop innovative solutions
              for livable, equitable cities.
            </p>
            <Image
              alt="Master OD"
              src="https://iscm-api.ueh.edu.vn/public/static/images/courses/master_structure/2025/ku_leuven.png"
              className="mb-3 w-full"
            />
            <i>
              For 600 years, KU Leuven has been established in 1425, one of the
              oldest universities in Europe. It has been driven by unending
              curiosity and a search for knowledge. The result is cutting-edge
              research that attracts the foremost minds in academia, engages our
              diverse student body, and ignites partnerships with industry to
              benefit society as a whole. KU Leuven is an international
              community where innovative research forms the basis of all our
              academic programs. Across the university, driven researchers and
              curious students continually gain new insights and use their
              knowledge to tackle the foremost challenges of our time.
            </i>
          </div>
        ),
      },
    ],
  },
};

export default infoEn;
