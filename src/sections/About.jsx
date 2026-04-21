import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Expertise in building end-to-end web applications using modern technologies like React, Node.js, and Django.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Proven track record of optimizing web applications for speed and scalability, ensuring seamless user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Strong ability to work effectively within cross-functional teams, fostering a collaborative environment that drives project success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Passion for staying up-to-date with the latest industry trends and technologies, consistently seeking innovative solutions to complex problems.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white"> one component at a time.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software developer with expertise in creating modern websites, web applications, and mobile applications. I enjoy solving complex problems and turning ideas into reality through code.
              </p>
              <p>
                With a strong foundation in both front-end and back-end technologies, I specialize in building seamless digital experiences that are not only visually appealing but also highly functional.
              </p>
              <p>
                When I'm coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I'm always eager to take on new challenges and collaborate on innovative projects that push the boundaries of what's possible in software development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to craft elegant and efficient software solutions that empower users and drive innovation. I believe in the power of technology to transform lives and am committed to creating impactful digital experiences that make a difference."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};