import React from "react";
import { Card, Row } from "react-bootstrap";

function AboutPage() {
  return (
    <>
      <section
        className="bg-img11 txt-center p-lr-15 p-tb-200"
        style={{
          backgroundImage: `url("https://cu.ac.bd/assets/page/image/Page_1551930057_4VXHIB6S85.png")`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center text-xl font-bold text-primary">
          About
        </h2>
      </section>
      {/* Content page */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16 text-lg font-bold text-primary">
                  Our History
                </h3>
                <p className="stext-113 cl6 p-b-26 text-primary">
                  The Chittagong University is situated on 2312.32 acres of
                  beautiful hilly land in mauja Fatehpur under hathazari
                  upazila, 22 km north of chittagong city. It was opened on 18
                  November 1966. Back in 1962, Mr. Mohammad Ferdaus Khan, Deputy
                  Director of Public Instruction of East Pakistan, prepared a
                  preliminary draft plan of Chittagong University. Prior to that
                  the Chittagong University Movement Council was formed in 1961
                  with Badshah Mia Chowdhury, a distinguished social welfare
                  worker of Chittagong, as president and professor Ahmad Hossain
                  of Chittagong City College as convenor. Dr. muhammad
                  shahidullah (1885-1969), Dr. muhammad enamul haq (1906-82) and
                  some other intellectuals, educationists, political
                  personalities, and social workers played leading roles in the
                  site selection movement of 1962.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  Any questions? Let us know in store at 8th floor, 379 Hudson
                  St, New York, NY 10018 or call us on (+1) 96 716 6879
                </p>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1">
                <div className="hov-img0">
                  <img
                    src="https://cu.ac.bd/assets/deptpage/image/Page_2_1706609569_24XW90TLRZ.jpg"
                    alt="IMG"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30 text-primary">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16 text-lg font-bold text-primary">
                  Our Mission
                </h3>
                <p className="stext-113 cl6 p-b-10 text-primary">
                  Impart superior knowledge, ereativity, and problem-solving
                  abilities to students enabling them to become competent nation
                  builders, community leaders, and global citizens. Instill in
                  students the basic as well as advanced ingredients of
                  cutting-edge research.
                </p>
                <p className="stext-113 cl6 p-b-10">
                  Expand the frontiers of knowledge in partnerships with
                  illustrious global universities and research organizations,
                  and the industry.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  Promote professionalism, inclusivity, equal rights, ethical
                  standards and diversity in modalities of education and to
                  practice the sustainable development by way of co- and
                  extra-curricular activities.
                </p>
                <div className="bor16 p-l-29 p-b-9 m-t-22">
                  <p className="stext-114 cl6 p-r-40 p-b-11">
                    Creativity is just connecting things. When you ask creative
                    people how they did something, they feel a little guilty
                    because they didn&apos;t really do it, they just saw
                    something. It seemed obvious to them after a while.
                  </p>
                  <span className="stext-111 cl8"> - Steve Job’s </span>
                </div>
              </div>
            </div>
            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <img
                    src="https://cu.ac.bd/assets/page/image/Page_1551930057_4VXHIB6S85.png"
                    alt="IMG"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
