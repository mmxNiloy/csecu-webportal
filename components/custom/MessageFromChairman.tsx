import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

function MessageFromChairman() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Message of the Chairman</CardTitle>
        <CardDescription className="sr-only">
          Message from the chairman
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full grid grid-cols-12 gap-2">
        <div className="col-span-3 text-center flex flex-col gap-4">
          <Image
            unoptimized
            src="https://i.ibb.co/WGRzys5/chairman.png"
            className="w-full aspect-square object-contain object-center bg-muted rounded-full"
            height={0}
            width={0}
            alt="Chairman"
          />
          <div className="card-body">
            <p className="text-xl font-bold">Dr. Sanaullah Chowdhury</p>
            <p className="font-bold">Chairman</p>
            <p className="text-xs">
              Department of Computer Science and Engineering
            </p>
          </div>
        </div>
        <p className="col-span-9 p-4 text-justify">
          <span className="font-bold">
            Dear Faculty, Staff, and Students of the Computer Science Department
            at CU,
          </span>
          <br></br>
          <span className="text-sm">
            It is with great pleasure and honor that I address you as the
            Chairman of our esteemed department. As we embark on this journey
            together, I am filled with enthusiasm and optimism for the future of
            our department. Our department is not just a collection of
            individuals; it is a vibrant community of passionate educators,
            dedicated researchers, and ambitious students. Together, we have the
            opportunity to shape the future of computing and make a lasting
            impact on society. I am committed to fostering an environment of
            excellence, collaboration, and innovation within our department.
            Through our collective efforts, we will strive to provide the
            highest quality education, conduct cutting-edge research, and engage
            meaningfully with the broader community. As Chairman, I am here to
            support and empower each and every member of our department. Whether
            you are a faculty member, a staff member, or a student, your
            contributions are valued and essential to our success. Together, we
            will work tirelessly to achieve our shared goals and aspirations. I
            encourage you to seize the opportunities that lie ahead, to embrace
            challenges as opportunities for growth, and to always strive for
            excellence in everything you do. Together, we will continue to
            elevate the Computer Science Department at CU to new heights of
            achievement and distinction. Thank you for your dedication, passion,
            and commitment to our department. I am excited to embark on this
            journey with you, and I look forward to all that we will accomplish
            together.
          </span>
        </p>
      </CardContent>
    </Card>
  );
}

export default MessageFromChairman;
