import React from "react";
import Icons from "../ui/icons";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
function VisionMission() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Vision</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          The Computer Science and Engineering (CSE) Department envisions
          becoming a global leader in technological innovation and education.
          Through cutting-edge research, interdisciplinary collaborations, and a
          commitment to social responsibility, we aim to empower our students to
          excel in a rapidly evolving digital landscape. Our vision encompasses
          fostering a diverse and inclusive community, driving positive societal
          impact, and cultivating ethical leadership. By engaging with industry
          partners, promoting lifelong learning, and continuously improving our
          programs, we strive to equip our graduates with the knowledge, skills,
          and mindset to tackle complex challenges and shape the future of
          computing for the betterment of society.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-disc p-4">
            <li>
              {/* <Icons.listItem className="size-4" /> */}
              <p>
                Provide quality education to meet the need of profession and
                society.
              </p>
            </li>
            <li>
              {/* <Icons.listItem className="size-full" /> */}
              <p>
                Provide ambient learning to enhance problem solving skills,
                leadership qualities, team-spirit, innovations and ethical
                responsibilities.
              </p>
            </li>
            <li>
              {/* <Icons.listItem className="size-4" /> */}
              <p>
                Promote research based activities in the emerging areas of
                technology convergenceProvide quality education to meet the need
                of profession and society.
              </p>
            </li>
            <li>
              {/* <Icons.listItem className="size-4" /> */}
              <p>
                Provide ambient learning to enhance problem solving skills,
                leadership qualities, team-spirit, innovations and ethical
                responsibilities.
              </p>
            </li>
            <li>
              {/* <Icons.listItem className="size-4" /> */}
              <p>
                Promote research based activities in the emerging areas of
                technology convergence.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

export default VisionMission;
