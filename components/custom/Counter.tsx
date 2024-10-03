"use client";
import { Col, Container, Row } from "react-bootstrap";

import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });
const VisibilitySensor = dynamic(() => import("react-visibility-sensor"), {
  ssr: false,
});

export default function Counter({
  teacherCount,
  studentCount,
  courseCount,
}: {
  teacherCount: number;
  studentCount: number;
  courseCount: number;
}) {
  return (
    <div>
      <Container
        fluid
        className="rounded-md from-sky-200 to-purple-300 bg-gradient-to-br text-primary mt-5 text-center mb-2"
      >
        <div className="text-2xl font-bold p-16 flex items-center justify-between">
          <Col
            lg={4}
            md={6}
            sm={12}
            className="d-flex flex-column justify-content-center align-items-center p-0"
          >
            <h1>
              <CountUp start={0} end={teacherCount} duration={1}>
                {({ countUpRef, start }) => (
                  //@ts-ignore
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h3>Faculty Member</h3>
          </Col>

          <Col
            lg={4}
            md={6}
            sm={12}
            className="d-flex justify-content-center flex-column align-items-center p-0"
          >
            <h1>
              <CountUp start={0} end={studentCount} duration={1}>
                {({ countUpRef, start }) => (
                  //@ts-ignore
                  <VisibilitySensor onChange={start}>
                    <span className="counter" ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h3>Student</h3>
          </Col>

          <Col
            lg={4}
            md={6}
            sm={12}
            className="d-flex justify-content-center flex-column align-items-center p-0 m-0"
          >
            <h1>
              <CountUp start={0} end={courseCount} duration={1}>
                {({ countUpRef, start }) => (
                  //@ts-ignore
                  <VisibilitySensor onChange={start}>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h3>Staff</h3>
          </Col>
        </div>
      </Container>
    </div>
  );
}
