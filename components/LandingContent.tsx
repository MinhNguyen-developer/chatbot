import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {};

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used",
  },
  {
    name: "Minh Nguyen",
    avatar: "B",
    title: "Video Editor",
    description: "This is the best application I've used",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used",
  },
];
const LandingContent: FC<Props> = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map(({ name, avatar, title, description }, index) => (
          <Card key={index} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{name}</p>
                  <p className="text-zinc-400 text-sm">{title}</p>
                </div>
              </CardTitle>

              <CardContent className="pt-4 px-0">{description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default LandingContent;
