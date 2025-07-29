import Link from "next/link";
import { Button } from "@/components/ui/button";

const softwareTools = [
  {
    name: "E-Commerce Platforms",
    href: "https://www.linkedin.com/products/categories/e-commerce-platforms",
  },
  {
    name: "CRM Software",
    href: "https://www.linkedin.com/products/categories/customer-relationship-management-software",
  },
  {
    name: "Human Resources Management Systems",
    href: "https://www.linkedin.com/products/categories/human-resources-management-systems",
  },
  {
    name: "Recruiting Software",
    href: "https://www.linkedin.com/products/categories/recruiting-software",
  },
  {
    name: "Sales Intelligence Software",
    href: "https://www.linkedin.com/products/categories/sales-intelligence-software",
  },
  {
    name: "Project Management Software",
    href: "https://www.linkedin.com/products/categories/project-management-software",
  },
  {
    name: "Help Desk Software",
    href: "https://www.linkedin.com/products/categories/help-desk-software",
  },
  {
    name: "Social Networking Software",
    href: "https://www.linkedin.com/products/categories/social-networking-software",
  },
  {
    name: "Desktop Publishing Software",
    href: "https://www.linkedin.com/products/categories/desktop-publishing-software",
  },
  { name: "Show all", href: "https://www.linkedin.com/products/home" },
];

const SoftwareToolsSection = () => {
  return (
    <section className="bg-light-gray py-12">
      <div className="max-w-[1128px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="lg:w-2/5 xl:w-[30%] mb-6 lg:mb-0">
            <h2 className="text-dark-gray/90 font-normal text-[32px] leading-[1.25]">
              Discover the best software tools
            </h2>
            <p className="mt-2 text-xl text-dark-gray/90 font-normal leading-normal">
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </p>
          </div>
          <div className="lg:w-3/5 xl:w-[70%] flex flex-wrap content-start items-start gap-2">
            {softwareTools.map((tool) => (
              <Button
                key={tool.name}
                variant="outline"
                className={`
                  rounded-full h-auto px-4 py-2 font-semibold text-lg
                  transition-colors duration-200
                  bg-white
                  ${
                    tool.name === "Show all"
                      ? "text-primary-blue border-primary-blue hover:bg-secondary-blue/20"
                      : "text-medium-gray border-black/40 hover:bg-gray-200 hover:border-black/90"
                  }
                `}
                asChild
              >
                <Link href={tool.href}>{tool.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareToolsSection;
